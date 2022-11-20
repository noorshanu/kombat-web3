/*! For license information please see 45.b606f139027db7bf0680.bundle.js.LICENSE.txt */
(self.webpackChunkmain_website = self.webpackChunkmain_website || []).push([[45], {
  9996: e=>{
      "use strict";
      var t = function(e) {
          return function(e) {
              return !!e && "object" == typeof e
          }(e) && !function(e) {
              var t = Object.prototype.toString.call(e);
              return "[object RegExp]" === t || "[object Date]" === t || function(e) {
                  return e.$$typeof === r
              }(e)
          }(e)
      };
      var r = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;
      function n(e, t) {
          return !1 !== t.clone && t.isMergeableObject(e) ? l((r = e,
          Array.isArray(r) ? [] : {}), e, t) : e;
          var r
      }
      function o(e, t, r) {
          return e.concat(t).map((function(e) {
              return n(e, r)
          }
          ))
      }
      function i(e) {
          return Object.keys(e).concat(function(e) {
              return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter((function(t) {
                  return e.propertyIsEnumerable(t)
              }
              )) : []
          }(e))
      }
      function a(e, t) {
          try {
              return t in e
          } catch (e) {
              return !1
          }
      }
      function s(e, t, r) {
          var o = {};
          return r.isMergeableObject(e) && i(e).forEach((function(t) {
              o[t] = n(e[t], r)
          }
          )),
          i(t).forEach((function(i) {
              (function(e, t) {
                  return a(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t))
              }
              )(e, i) || (a(e, i) && r.isMergeableObject(t[i]) ? o[i] = function(e, t) {
                  if (!t.customMerge)
                      return l;
                  var r = t.customMerge(e);
                  return "function" == typeof r ? r : l
              }(i, r)(e[i], t[i], r) : o[i] = n(t[i], r))
          }
          )),
          o
      }
      function l(e, r, i) {
          (i = i || {}).arrayMerge = i.arrayMerge || o,
          i.isMergeableObject = i.isMergeableObject || t,
          i.cloneUnlessOtherwiseSpecified = n;
          var a = Array.isArray(r);
          return a === Array.isArray(e) ? a ? i.arrayMerge(e, r, i) : s(e, r, i) : n(r, i)
      }
      l.all = function(e, t) {
          if (!Array.isArray(e))
              throw new Error("first argument should be an array");
          return e.reduce((function(e, r) {
              return l(e, r, t)
          }
          ), {})
      }
      ;
      var u = l;
      e.exports = u
  }
  ,
  9090: e=>{
      function t(e, t) {
          e.onload = function() {
              this.onerror = this.onload = null,
              t(null, e)
          }
          ,
          e.onerror = function() {
              this.onerror = this.onload = null,
              t(new Error("Failed to load " + this.src), e)
          }
      }
      function r(e, t) {
          e.onreadystatechange = function() {
              "complete" != this.readyState && "loaded" != this.readyState || (this.onreadystatechange = null,
              t(null, e))
          }
      }
      e.exports = function(e, n, o) {
          var i = document.head || document.getElementsByTagName("head")[0]
            , a = document.createElement("script");
          "function" == typeof n && (o = n,
          n = {}),
          n = n || {},
          o = o || function() {}
          ,
          a.type = n.type || "text/javascript",
          a.charset = n.charset || "utf8",
          a.async = !("async"in n) || !!n.async,
          a.src = e,
          n.attrs && function(e, t) {
              for (var r in t)
                  e.setAttribute(r, t[r])
          }(a, n.attrs),
          n.text && (a.text = "" + n.text),
          ("onload"in a ? t : r)(a, o),
          a.onload || t(a, o),
          i.appendChild(a)
      }
  }
  ,
  845: (e,t,r)=>{
      "use strict";
      r.r(t),
      r.d(t, {
          default: ()=>i
      });
      var n = Number.isNaN || function(e) {
          return "number" == typeof e && e != e
      }
      ;
      function o(e, t) {
          if (e.length !== t.length)
              return !1;
          for (var r = 0; r < e.length; r++)
              if (o = e[r],
              i = t[r],
              !(o === i || n(o) && n(i)))
                  return !1;
          var o, i;
          return !0
      }
      const i = function(e, t) {
          var r;
          void 0 === t && (t = o);
          var n, i = [], a = !1;
          return function() {
              for (var o = [], s = 0; s < arguments.length; s++)
                  o[s] = arguments[s];
              return a && r === this && t(o, i) || (n = e.apply(this, o),
              a = !0,
              r = this,
              i = o),
              n
          }
      }
  }
  ,
  9590: e=>{
      var t = "undefined" != typeof Element
        , r = "function" == typeof Map
        , n = "function" == typeof Set
        , o = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;
      function i(e, a) {
          if (e === a)
              return !0;
          if (e && a && "object" == typeof e && "object" == typeof a) {
              if (e.constructor !== a.constructor)
                  return !1;
              var s, l, u, c;
              if (Array.isArray(e)) {
                  if ((s = e.length) != a.length)
                      return !1;
                  for (l = s; 0 != l--; )
                      if (!i(e[l], a[l]))
                          return !1;
                  return !0
              }
              if (r && e instanceof Map && a instanceof Map) {
                  if (e.size !== a.size)
                      return !1;
                  for (c = e.entries(); !(l = c.next()).done; )
                      if (!a.has(l.value[0]))
                          return !1;
                  for (c = e.entries(); !(l = c.next()).done; )
                      if (!i(l.value[1], a.get(l.value[0])))
                          return !1;
                  return !0
              }
              if (n && e instanceof Set && a instanceof Set) {
                  if (e.size !== a.size)
                      return !1;
                  for (c = e.entries(); !(l = c.next()).done; )
                      if (!a.has(l.value[0]))
                          return !1;
                  return !0
              }
              if (o && ArrayBuffer.isView(e) && ArrayBuffer.isView(a)) {
                  if ((s = e.length) != a.length)
                      return !1;
                  for (l = s; 0 != l--; )
                      if (e[l] !== a[l])
                          return !1;
                  return !0
              }
              if (e.constructor === RegExp)
                  return e.source === a.source && e.flags === a.flags;
              if (e.valueOf !== Object.prototype.valueOf)
                  return e.valueOf() === a.valueOf();
              if (e.toString !== Object.prototype.toString)
                  return e.toString() === a.toString();
              if ((s = (u = Object.keys(e)).length) !== Object.keys(a).length)
                  return !1;
              for (l = s; 0 != l--; )
                  if (!Object.prototype.hasOwnProperty.call(a, u[l]))
                      return !1;
              if (t && e instanceof Element)
                  return !1;
              for (l = s; 0 != l--; )
                  if (("_owner" !== u[l] && "__v" !== u[l] && "__o" !== u[l] || !e.$$typeof) && !i(e[u[l]], a[u[l]]))
                      return !1;
              return !0
          }
          return e != e && a != a
      }
      e.exports = function(e, t) {
          try {
              return i(e, t)
          } catch (e) {
              if ((e.message || "").match(/stack|recursion/i))
                  return console.warn("react-fast-compare cannot handle circular refs"),
                  !1;
              throw e
          }
      }
  }
  ,
  722: (e,t,r)=>{
      "use strict";
      function n(e) {
          return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
              return typeof e
          }
          : function(e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          }
          ,
          n(e)
      }
      Object.defineProperty(t, "__esModule", {
          value: !0
      }),
      t.default = void 0;
      var o, i = function(e) {
          if (e && e.__esModule)
              return e;
          if (null === e || "object" !== n(e) && "function" != typeof e)
              return {
                  default: e
              };
          var t = u();
          if (t && t.has(e))
              return t.get(e);
          var r = {}
            , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var i in e)
              if (Object.prototype.hasOwnProperty.call(e, i)) {
                  var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
                  a && (a.get || a.set) ? Object.defineProperty(r, i, a) : r[i] = e[i]
              }
          r.default = e,
          t && t.set(e, r);
          return r
      }(r(7294)), a = (o = r(9590)) && o.__esModule ? o : {
          default: o
      }, s = r(5741), l = r(8045);
      function u() {
          if ("function" != typeof WeakMap)
              return null;
          var e = new WeakMap;
          return u = function() {
              return e
          }
          ,
          e
      }
      function c() {
          return c = Object.assign || function(e) {
              for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                      Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
              }
              return e
          }
          ,
          c.apply(this, arguments)
      }
      function p(e, t) {
          if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function")
      }
      function d(e, t) {
          for (var r = 0; r < t.length; r++) {
              var n = t[r];
              n.enumerable = n.enumerable || !1,
              n.configurable = !0,
              "value"in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n)
          }
      }
      function f(e, t) {
          return f = Object.setPrototypeOf || function(e, t) {
              return e.__proto__ = t,
              e
          }
          ,
          f(e, t)
      }
      function y(e) {
          var t = function() {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                  return !1;
              if (Reflect.construct.sham)
                  return !1;
              if ("function" == typeof Proxy)
                  return !0;
              try {
                  return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                  ))),
                  !0
              } catch (e) {
                  return !1
              }
          }();
          return function() {
              var r, n = v(e);
              if (t) {
                  var o = v(this).constructor;
                  r = Reflect.construct(n, arguments, o)
              } else
                  r = n.apply(this, arguments);
              return h(this, r)
          }
      }
      function h(e, t) {
          return !t || "object" !== n(t) && "function" != typeof t ? m(e) : t
      }
      function m(e) {
          if (void 0 === e)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e
      }
      function v(e) {
          return v = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e)
          }
          ,
          v(e)
      }
      function g(e, t, r) {
          return t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[t] = r,
          e
      }
      var b = function(e) {
          !function(e, t) {
              if ("function" != typeof t && null !== t)
                  throw new TypeError("Super expression must either be null or a function");
              e.prototype = Object.create(t && t.prototype, {
                  constructor: {
                      value: e,
                      writable: !0,
                      configurable: !0
                  }
              }),
              t && f(e, t)
          }(s, e);
          var t, r, n, o = y(s);
          function s() {
              var e;
              p(this, s);
              for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
                  r[n] = arguments[n];
              return g(m(e = o.call.apply(o, [this].concat(r))), "mounted", !1),
              g(m(e), "isReady", !1),
              g(m(e), "isPlaying", !1),
              g(m(e), "isLoading", !0),
              g(m(e), "loadOnReady", null),
              g(m(e), "startOnPlay", !0),
              g(m(e), "seekOnPlay", null),
              g(m(e), "onDurationCalled", !1),
              g(m(e), "handlePlayerMount", (function(t) {
                  e.player || (e.player = t,
                  e.player.load(e.props.url)),
                  e.progress()
              }
              )),
              g(m(e), "getInternalPlayer", (function(t) {
                  return e.player ? e.player[t] : null
              }
              )),
              g(m(e), "progress", (function() {
                  if (e.props.url && e.player && e.isReady) {
                      var t = e.getCurrentTime() || 0
                        , r = e.getSecondsLoaded()
                        , n = e.getDuration();
                      if (n) {
                          var o = {
                              playedSeconds: t,
                              played: t / n
                          };
                          null !== r && (o.loadedSeconds = r,
                          o.loaded = r / n),
                          o.playedSeconds === e.prevPlayed && o.loadedSeconds === e.prevLoaded || e.props.onProgress(o),
                          e.prevPlayed = o.playedSeconds,
                          e.prevLoaded = o.loadedSeconds
                      }
                  }
                  e.progressTimeout = setTimeout(e.progress, e.props.progressFrequency || e.props.progressInterval)
              }
              )),
              g(m(e), "handleReady", (function() {
                  if (e.mounted) {
                      e.isReady = !0,
                      e.isLoading = !1;
                      var t = e.props
                        , r = t.onReady
                        , n = t.playing
                        , o = t.volume
                        , i = t.muted;
                      r(),
                      i || null === o || e.player.setVolume(o),
                      e.loadOnReady ? (e.player.load(e.loadOnReady, !0),
                      e.loadOnReady = null) : n && e.player.play(),
                      e.handleDurationCheck()
                  }
              }
              )),
              g(m(e), "handlePlay", (function() {
                  e.isPlaying = !0,
                  e.isLoading = !1;
                  var t = e.props
                    , r = t.onStart
                    , n = t.onPlay
                    , o = t.playbackRate;
                  e.startOnPlay && (e.player.setPlaybackRate && 1 !== o && e.player.setPlaybackRate(o),
                  r(),
                  e.startOnPlay = !1),
                  n(),
                  e.seekOnPlay && (e.seekTo(e.seekOnPlay),
                  e.seekOnPlay = null),
                  e.handleDurationCheck()
              }
              )),
              g(m(e), "handlePause", (function(t) {
                  e.isPlaying = !1,
                  e.isLoading || e.props.onPause(t)
              }
              )),
              g(m(e), "handleEnded", (function() {
                  var t = e.props
                    , r = t.activePlayer
                    , n = t.loop
                    , o = t.onEnded;
                  r.loopOnEnded && n && e.seekTo(0),
                  n || (e.isPlaying = !1,
                  o())
              }
              )),
              g(m(e), "handleError", (function() {
                  var t;
                  e.isLoading = !1,
                  (t = e.props).onError.apply(t, arguments)
              }
              )),
              g(m(e), "handleDurationCheck", (function() {
                  clearTimeout(e.durationCheckTimeout);
                  var t = e.getDuration();
                  t ? e.onDurationCalled || (e.props.onDuration(t),
                  e.onDurationCalled = !0) : e.durationCheckTimeout = setTimeout(e.handleDurationCheck, 100)
              }
              )),
              g(m(e), "handleLoaded", (function() {
                  e.isLoading = !1
              }
              )),
              e
          }
          return t = s,
          r = [{
              key: "componentDidMount",
              value: function() {
                  this.mounted = !0
              }
          }, {
              key: "componentWillUnmount",
              value: function() {
                  clearTimeout(this.progressTimeout),
                  clearTimeout(this.durationCheckTimeout),
                  this.isReady && this.props.stopOnUnmount && (this.player.stop(),
                  this.player.disablePIP && this.player.disablePIP()),
                  this.mounted = !1
              }
          }, {
              key: "componentDidUpdate",
              value: function(e) {
                  var t = this;
                  if (this.player) {
                      var r = this.props
                        , n = r.url
                        , o = r.playing
                        , i = r.volume
                        , s = r.muted
                        , u = r.playbackRate
                        , c = r.pip
                        , p = r.loop
                        , d = r.activePlayer
                        , f = r.disableDeferredLoading;
                      if (!(0,
                      a.default)(e.url, n)) {
                          if (this.isLoading && !d.forceLoad && !f && !(0,
                          l.isMediaStream)(n))
                              return console.warn("ReactPlayer: the attempt to load ".concat(n, " is being deferred until the player has loaded")),
                              void (this.loadOnReady = n);
                          this.isLoading = !0,
                          this.startOnPlay = !0,
                          this.onDurationCalled = !1,
                          this.player.load(n, this.isReady)
                      }
                      e.playing || !o || this.isPlaying || this.player.play(),
                      e.playing && !o && this.isPlaying && this.player.pause(),
                      !e.pip && c && this.player.enablePIP && this.player.enablePIP(),
                      e.pip && !c && this.player.disablePIP && this.player.disablePIP(),
                      e.volume !== i && null !== i && this.player.setVolume(i),
                      e.muted !== s && (s ? this.player.mute() : (this.player.unmute(),
                      null !== i && setTimeout((function() {
                          return t.player.setVolume(i)
                      }
                      )))),
                      e.playbackRate !== u && this.player.setPlaybackRate && this.player.setPlaybackRate(u),
                      e.loop !== p && this.player.setLoop && this.player.setLoop(p)
                  }
              }
          }, {
              key: "getDuration",
              value: function() {
                  return this.isReady ? this.player.getDuration() : null
              }
          }, {
              key: "getCurrentTime",
              value: function() {
                  return this.isReady ? this.player.getCurrentTime() : null
              }
          }, {
              key: "getSecondsLoaded",
              value: function() {
                  return this.isReady ? this.player.getSecondsLoaded() : null
              }
          }, {
              key: "seekTo",
              value: function(e, t) {
                  var r = this;
                  if (this.isReady) {
                      if (t ? "fraction" === t : e > 0 && e < 1) {
                          var n = this.player.getDuration();
                          return n ? void this.player.seekTo(n * e) : void console.warn("ReactPlayer: could not seek using fraction – duration not yet available")
                      }
                      this.player.seekTo(e)
                  } else
                      0 !== e && (this.seekOnPlay = e,
                      setTimeout((function() {
                          r.seekOnPlay = null
                      }
                      ), 5e3))
              }
          }, {
              key: "render",
              value: function() {
                  var e = this.props.activePlayer;
                  return e ? i.default.createElement(e, c({}, this.props, {
                      onMount: this.handlePlayerMount,
                      onReady: this.handleReady,
                      onPlay: this.handlePlay,
                      onPause: this.handlePause,
                      onEnded: this.handleEnded,
                      onLoaded: this.handleLoaded,
                      onError: this.handleError
                  })) : null
              }
          }],
          r && d(t.prototype, r),
          n && d(t, n),
          s
      }(i.Component);
      t.default = b,
      g(b, "displayName", "Player"),
      g(b, "propTypes", s.propTypes),
      g(b, "defaultProps", s.defaultProps)
  }
  ,
  3855: (e,t,r)=>{
      "use strict";
      function n(e) {
          return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
              return typeof e
          }
          : function(e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          }
          ,
          n(e)
      }
      Object.defineProperty(t, "__esModule", {
          value: !0
      }),
      t.default = void 0;
      var o = function(e) {
          if (e && e.__esModule)
              return e;
          if (null === e || "object" !== n(e) && "function" != typeof e)
              return {
                  default: e
              };
          var t = i();
          if (t && t.has(e))
              return t.get(e);
          var r = {}
            , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var a in e)
              if (Object.prototype.hasOwnProperty.call(e, a)) {
                  var s = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                  s && (s.get || s.set) ? Object.defineProperty(r, a, s) : r[a] = e[a]
              }
          r.default = e,
          t && t.set(e, r);
          return r
      }(r(7294));
      function i() {
          if ("function" != typeof WeakMap)
              return null;
          var e = new WeakMap;
          return i = function() {
              return e
          }
          ,
          e
      }
      function a(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              t && (n = n.filter((function(t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable
              }
              ))),
              r.push.apply(r, n)
          }
          return r
      }
      function s(e) {
          for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2 ? a(Object(r), !0).forEach((function(t) {
                  h(e, t, r[t])
              }
              )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach((function(t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              }
              ))
          }
          return e
      }
      function l(e, t) {
          if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function")
      }
      function u(e, t) {
          for (var r = 0; r < t.length; r++) {
              var n = t[r];
              n.enumerable = n.enumerable || !1,
              n.configurable = !0,
              "value"in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n)
          }
      }
      function c(e, t) {
          return c = Object.setPrototypeOf || function(e, t) {
              return e.__proto__ = t,
              e
          }
          ,
          c(e, t)
      }
      function p(e) {
          var t = function() {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                  return !1;
              if (Reflect.construct.sham)
                  return !1;
              if ("function" == typeof Proxy)
                  return !0;
              try {
                  return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                  ))),
                  !0
              } catch (e) {
                  return !1
              }
          }();
          return function() {
              var r, n = y(e);
              if (t) {
                  var o = y(this).constructor;
                  r = Reflect.construct(n, arguments, o)
              } else
                  r = n.apply(this, arguments);
              return d(this, r)
          }
      }
      function d(e, t) {
          return !t || "object" !== n(t) && "function" != typeof t ? f(e) : t
      }
      function f(e) {
          if (void 0 === e)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e
      }
      function y(e) {
          return y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e)
          }
          ,
          y(e)
      }
      function h(e, t, r) {
          return t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[t] = r,
          e
      }
      var m = "64px"
        , v = {}
        , g = function(e) {
          !function(e, t) {
              if ("function" != typeof t && null !== t)
                  throw new TypeError("Super expression must either be null or a function");
              e.prototype = Object.create(t && t.prototype, {
                  constructor: {
                      value: e,
                      writable: !0,
                      configurable: !0
                  }
              }),
              t && c(e, t)
          }(a, e);
          var t, r, n, i = p(a);
          function a() {
              var e;
              l(this, a);
              for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
                  r[n] = arguments[n];
              return h(f(e = i.call.apply(i, [this].concat(r))), "mounted", !1),
              h(f(e), "state", {
                  image: null
              }),
              h(f(e), "handleKeyPress", (function(t) {
                  "Enter" !== t.key && " " !== t.key || e.props.onClick()
              }
              )),
              e
          }
          return t = a,
          (r = [{
              key: "componentDidMount",
              value: function() {
                  this.mounted = !0,
                  this.fetchImage(this.props)
              }
          }, {
              key: "componentDidUpdate",
              value: function(e) {
                  var t = this.props
                    , r = t.url
                    , n = t.light;
                  e.url === r && e.light === n || this.fetchImage(this.props)
              }
          }, {
              key: "componentWillUnmount",
              value: function() {
                  this.mounted = !1
              }
          }, {
              key: "fetchImage",
              value: function(e) {
                  var t = this
                    , r = e.url
                    , n = e.light
                    , i = e.oEmbedUrl;
                  if (!o.default.isValidElement(n))
                      if ("string" != typeof n) {
                          if (!v[r])
                              return this.setState({
                                  image: null
                              }),
                              window.fetch(i.replace("{url}", r)).then((function(e) {
                                  return e.json()
                              }
                              )).then((function(e) {
                                  if (e.thumbnail_url && t.mounted) {
                                      var n = e.thumbnail_url.replace("height=100", "height=480");
                                      t.setState({
                                          image: n
                                      }),
                                      v[r] = n
                                  }
                              }
                              ));
                          this.setState({
                              image: v[r]
                          })
                      } else
                          this.setState({
                              image: n
                          })
              }
          }, {
              key: "render",
              value: function() {
                  var e = this.props
                    , t = e.light
                    , r = e.onClick
                    , n = e.playIcon
                    , i = e.previewTabIndex
                    , a = this.state.image
                    , l = o.default.isValidElement(t)
                    , u = {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                  }
                    , c = {
                      preview: s({
                          width: "100%",
                          height: "100%",
                          backgroundImage: a && !l ? "url(".concat(a, ")") : void 0,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          cursor: "pointer"
                      }, u),
                      shadow: s({
                          background: "radial-gradient(rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 60%)",
                          borderRadius: m,
                          width: m,
                          height: m,
                          position: l ? "absolute" : void 0
                      }, u),
                      playIcon: {
                          borderStyle: "solid",
                          borderWidth: "16px 0 16px 26px",
                          borderColor: "transparent transparent transparent white",
                          marginLeft: "7px"
                      }
                  }
                    , p = o.default.createElement("div", {
                      style: c.shadow,
                      className: "react-player__shadow"
                  }, o.default.createElement("div", {
                      style: c.playIcon,
                      className: "react-player__play-icon"
                  }));
                  return o.default.createElement("div", {
                      style: c.preview,
                      className: "react-player__preview",
                      onClick: r,
                      tabIndex: i,
                      onKeyPress: this.handleKeyPress
                  }, l ? t : null, n || p)
              }
          }]) && u(t.prototype, r),
          n && u(t, n),
          a
      }(o.Component);
      t.default = g
  }
  ,
  390: (e,t,r)=>{
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      }),
      t.createReactPlayer = void 0;
      var n = T(r(7294))
        , o = c(r(9996))
        , i = c(r(845))
        , a = c(r(9590))
        , s = r(5741)
        , l = r(8045)
        , u = c(r(722));
      function c(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      function p(e) {
          return p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
              return typeof e
          }
          : function(e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          }
          ,
          p(e)
      }
      function d(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              t && (n = n.filter((function(t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable
              }
              ))),
              r.push.apply(r, n)
          }
          return r
      }
      function f(e) {
          for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2 ? d(Object(r), !0).forEach((function(t) {
                  E(e, t, r[t])
              }
              )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : d(Object(r)).forEach((function(t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              }
              ))
          }
          return e
      }
      function y() {
          return y = Object.assign || function(e) {
              for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                      Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
              }
              return e
          }
          ,
          y.apply(this, arguments)
      }
      function h(e) {
          return function(e) {
              if (Array.isArray(e))
                  return m(e)
          }(e) || function(e) {
              if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
                  return Array.from(e)
          }(e) || function(e, t) {
              if (!e)
                  return;
              if ("string" == typeof e)
                  return m(e, t);
              var r = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === r && e.constructor && (r = e.constructor.name);
              if ("Map" === r || "Set" === r)
                  return Array.from(e);
              if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                  return m(e, t)
          }(e) || function() {
              throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }()
      }
      function m(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = new Array(t); r < t; r++)
              n[r] = e[r];
          return n
      }
      function v(e, t) {
          if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function")
      }
      function g(e, t) {
          for (var r = 0; r < t.length; r++) {
              var n = t[r];
              n.enumerable = n.enumerable || !1,
              n.configurable = !0,
              "value"in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n)
          }
      }
      function b(e, t) {
          return b = Object.setPrototypeOf || function(e, t) {
              return e.__proto__ = t,
              e
          }
          ,
          b(e, t)
      }
      function w(e) {
          var t = function() {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                  return !1;
              if (Reflect.construct.sham)
                  return !1;
              if ("function" == typeof Proxy)
                  return !0;
              try {
                  return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                  ))),
                  !0
              } catch (e) {
                  return !1
              }
          }();
          return function() {
              var r, n = S(e);
              if (t) {
                  var o = S(this).constructor;
                  r = Reflect.construct(n, arguments, o)
              } else
                  r = n.apply(this, arguments);
              return P(this, r)
          }
      }
      function P(e, t) {
          return !t || "object" !== p(t) && "function" != typeof t ? O(e) : t
      }
      function O(e) {
          if (void 0 === e)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e
      }
      function S(e) {
          return S = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e)
          }
          ,
          S(e)
      }
      function E(e, t, r) {
          return t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[t] = r,
          e
      }
      function k() {
          if ("function" != typeof WeakMap)
              return null;
          var e = new WeakMap;
          return k = function() {
              return e
          }
          ,
          e
      }
      function T(e) {
          if (e && e.__esModule)
              return e;
          if (null === e || "object" !== p(e) && "function" != typeof e)
              return {
                  default: e
              };
          var t = k();
          if (t && t.has(e))
              return t.get(e);
          var r = {}
            , n = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
              if (Object.prototype.hasOwnProperty.call(e, o)) {
                  var i = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                  i && (i.get || i.set) ? Object.defineProperty(r, o, i) : r[o] = e[o]
              }
          return r.default = e,
          t && t.set(e, r),
          r
      }
      var C = (0,
      n.lazy)((function() {
          return Promise.resolve().then((function() {
              return T(r(3855))
          }
          ))
      }
      ))
        , j = "undefined" != typeof window && window.document
        , _ = void 0 !== r.g && r.g.window && r.g.window.document
        , x = Object.keys(s.propTypes)
        , M = j || _ ? n.Suspense : function() {
          return null
      }
        , L = [];
      t.createReactPlayer = function(e, t) {
          var r, c;
          return c = r = function(r) {
              !function(e, t) {
                  if ("function" != typeof t && null !== t)
                      throw new TypeError("Super expression must either be null or a function");
                  e.prototype = Object.create(t && t.prototype, {
                      constructor: {
                          value: e,
                          writable: !0,
                          configurable: !0
                      }
                  }),
                  t && b(e, t)
              }(P, r);
              var c, p, d, m = w(P);
              function P() {
                  var r;
                  v(this, P);
                  for (var a = arguments.length, c = new Array(a), p = 0; p < a; p++)
                      c[p] = arguments[p];
                  return E(O(r = m.call.apply(m, [this].concat(c))), "state", {
                      showPreview: !!r.props.light
                  }),
                  E(O(r), "references", {
                      wrapper: function(e) {
                          r.wrapper = e
                      },
                      player: function(e) {
                          r.player = e
                      }
                  }),
                  E(O(r), "handleClickPreview", (function(e) {
                      r.setState({
                          showPreview: !1
                      }),
                      r.props.onClickPreview(e)
                  }
                  )),
                  E(O(r), "showPreview", (function() {
                      r.setState({
                          showPreview: !0
                      })
                  }
                  )),
                  E(O(r), "getDuration", (function() {
                      return r.player ? r.player.getDuration() : null
                  }
                  )),
                  E(O(r), "getCurrentTime", (function() {
                      return r.player ? r.player.getCurrentTime() : null
                  }
                  )),
                  E(O(r), "getSecondsLoaded", (function() {
                      return r.player ? r.player.getSecondsLoaded() : null
                  }
                  )),
                  E(O(r), "getInternalPlayer", (function() {
                      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "player";
                      return r.player ? r.player.getInternalPlayer(e) : null
                  }
                  )),
                  E(O(r), "seekTo", (function(e, t) {
                      if (!r.player)
                          return null;
                      r.player.seekTo(e, t)
                  }
                  )),
                  E(O(r), "handleReady", (function() {
                      r.props.onReady(O(r))
                  }
                  )),
                  E(O(r), "getActivePlayer", (0,
                  i.default)((function(r) {
                      for (var n = 0, o = [].concat(L, h(e)); n < o.length; n++) {
                          var i = o[n];
                          if (i.canPlay(r))
                              return i
                      }
                      return t || null
                  }
                  ))),
                  E(O(r), "getConfig", (0,
                  i.default)((function(e, t) {
                      var n = r.props.config;
                      return o.default.all([s.defaultProps.config, s.defaultProps.config[t] || {}, n, n[t] || {}])
                  }
                  ))),
                  E(O(r), "getAttributes", (0,
                  i.default)((function(e) {
                      return (0,
                      l.omit)(r.props, x)
                  }
                  ))),
                  E(O(r), "renderActivePlayer", (function(e) {
                      if (!e)
                          return null;
                      var t = r.getActivePlayer(e);
                      if (!t)
                          return null;
                      var o = r.getConfig(e, t.key);
                      return n.default.createElement(u.default, y({}, r.props, {
                          key: t.key,
                          ref: r.references.player,
                          config: o,
                          activePlayer: t.lazyPlayer || t,
                          onReady: r.handleReady
                      }))
                  }
                  )),
                  r
              }
              return c = P,
              p = [{
                  key: "shouldComponentUpdate",
                  value: function(e, t) {
                      return !(0,
                      a.default)(this.props, e) || !(0,
                      a.default)(this.state, t)
                  }
              }, {
                  key: "componentDidUpdate",
                  value: function(e) {
                      var t = this.props.light;
                      !e.light && t && this.setState({
                          showPreview: !0
                      }),
                      e.light && !t && this.setState({
                          showPreview: !1
                      })
                  }
              }, {
                  key: "renderPreview",
                  value: function(e) {
                      if (!e)
                          return null;
                      var t = this.props
                        , r = t.light
                        , o = t.playIcon
                        , i = t.previewTabIndex
                        , a = t.oEmbedUrl;
                      return n.default.createElement(C, {
                          url: e,
                          light: r,
                          playIcon: o,
                          previewTabIndex: i,
                          oEmbedUrl: a,
                          onClick: this.handleClickPreview
                      })
                  }
              }, {
                  key: "render",
                  value: function() {
                      var e = this.props
                        , t = e.url
                        , r = e.style
                        , o = e.width
                        , i = e.height
                        , a = e.fallback
                        , s = e.wrapper
                        , l = this.state.showPreview
                        , u = this.getAttributes(t)
                        , c = "string" == typeof s ? this.references.wrapper : void 0;
                      return n.default.createElement(s, y({
                          ref: c,
                          style: f(f({}, r), {}, {
                              width: o,
                              height: i
                          })
                      }, u), n.default.createElement(M, {
                          fallback: a
                      }, l ? this.renderPreview(t) : this.renderActivePlayer(t)))
                  }
              }],
              p && g(c.prototype, p),
              d && g(c, d),
              P
          }(n.Component),
          E(r, "displayName", "ReactPlayer"),
          E(r, "propTypes", s.propTypes),
          E(r, "defaultProps", s.defaultProps),
          E(r, "addCustomPlayer", (function(e) {
              L.push(e)
          }
          )),
          E(r, "removeCustomPlayers", (function() {
              L.length = 0
          }
          )),
          E(r, "canPlay", (function(t) {
              for (var r = 0, n = [].concat(L, h(e)); r < n.length; r++) {
                  if (n[r].canPlay(t))
                      return !0
              }
              return !1
          }
          )),
          E(r, "canEnablePIP", (function(t) {
              for (var r = 0, n = [].concat(L, h(e)); r < n.length; r++) {
                  var o = n[r];
                  if (o.canEnablePIP && o.canEnablePIP(t))
                      return !0
              }
              return !1
          }
          )),
          c
      }
  }
  ,
  2004: (e,t,r)=>{
      "use strict";
      t.Z = void 0;
      var n, o = (n = r(6497)) && n.__esModule ? n : {
          default: n
      }, i = r(390);
      var a = o.default[o.default.length - 1]
        , s = (0,
      i.createReactPlayer)(o.default, a);
      t.Z = s
  }
  ,
  1776: (e,t,r)=>{
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      }),
      t.canPlay = t.FLV_EXTENSIONS = t.DASH_EXTENSIONS = t.HLS_EXTENSIONS = t.VIDEO_EXTENSIONS = t.AUDIO_EXTENSIONS = t.MATCH_URL_KALTURA = t.MATCH_URL_VIDYARD = t.MATCH_URL_MIXCLOUD = t.MATCH_URL_DAILYMOTION = t.MATCH_URL_TWITCH_CHANNEL = t.MATCH_URL_TWITCH_VIDEO = t.MATCH_URL_WISTIA = t.MATCH_URL_STREAMABLE = t.MATCH_URL_FACEBOOK_WATCH = t.MATCH_URL_FACEBOOK = t.MATCH_URL_VIMEO = t.MATCH_URL_SOUNDCLOUD = t.MATCH_URL_YOUTUBE = void 0;
      var n = r(8045);
      function o(e, t) {
          var r;
          if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
              if (Array.isArray(e) || (r = function(e, t) {
                  if (!e)
                      return;
                  if ("string" == typeof e)
                      return i(e, t);
                  var r = Object.prototype.toString.call(e).slice(8, -1);
                  "Object" === r && e.constructor && (r = e.constructor.name);
                  if ("Map" === r || "Set" === r)
                      return Array.from(e);
                  if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                      return i(e, t)
              }(e)) || t && e && "number" == typeof e.length) {
                  r && (e = r);
                  var n = 0
                    , o = function() {};
                  return {
                      s: o,
                      n: function() {
                          return n >= e.length ? {
                              done: !0
                          } : {
                              done: !1,
                              value: e[n++]
                          }
                      },
                      e: function(e) {
                          throw e
                      },
                      f: o
                  }
              }
              throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }
          var a, s = !0, l = !1;
          return {
              s: function() {
                  r = e[Symbol.iterator]()
              },
              n: function() {
                  var e = r.next();
                  return s = e.done,
                  e
              },
              e: function(e) {
                  l = !0,
                  a = e
              },
              f: function() {
                  try {
                      s || null == r.return || r.return()
                  } finally {
                      if (l)
                          throw a
                  }
              }
          }
      }
      function i(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = new Array(t); r < t; r++)
              n[r] = e[r];
          return n
      }
      var a = /(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//;
      t.MATCH_URL_YOUTUBE = a;
      var s = /(?:soundcloud\.com|snd\.sc)\/[^.]+$/;
      t.MATCH_URL_SOUNDCLOUD = s;
      var l = /vimeo\.com\/(?!progressive_redirect).+/;
      t.MATCH_URL_VIMEO = l;
      var u = /^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/;
      t.MATCH_URL_FACEBOOK = u;
      var c = /^https?:\/\/fb\.watch\/.+$/;
      t.MATCH_URL_FACEBOOK_WATCH = c;
      var p = /streamable\.com\/([a-z0-9]+)$/;
      t.MATCH_URL_STREAMABLE = p;
      var d = /(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?(.*)$/;
      t.MATCH_URL_WISTIA = d;
      var f = /(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/;
      t.MATCH_URL_TWITCH_VIDEO = f;
      var y = /(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/;
      t.MATCH_URL_TWITCH_CHANNEL = y;
      var h = /^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?$/;
      t.MATCH_URL_DAILYMOTION = h;
      var m = /mixcloud\.com\/([^/]+\/[^/]+)/;
      t.MATCH_URL_MIXCLOUD = m;
      var v = /vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/;
      t.MATCH_URL_VIDYARD = v;
      var g = /^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/;
      t.MATCH_URL_KALTURA = g;
      var b = /\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i;
      t.AUDIO_EXTENSIONS = b;
      var w = /\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i;
      t.VIDEO_EXTENSIONS = w;
      var P = /\.(m3u8)($|\?)/i;
      t.HLS_EXTENSIONS = P;
      var O = /\.(mpd)($|\?)/i;
      t.DASH_EXTENSIONS = O;
      var S = /\.(flv)($|\?)/i;
      t.FLV_EXTENSIONS = S;
      var E = {
          youtube: function(e) {
              return e instanceof Array ? e.every((function(e) {
                  return a.test(e)
              }
              )) : a.test(e)
          },
          soundcloud: function(e) {
              return s.test(e) && !b.test(e)
          },
          vimeo: function(e) {
              return l.test(e) && !w.test(e) && !P.test(e)
          },
          facebook: function(e) {
              return u.test(e) || c.test(e)
          },
          streamable: function(e) {
              return p.test(e)
          },
          wistia: function(e) {
              return d.test(e)
          },
          twitch: function(e) {
              return f.test(e) || y.test(e)
          },
          dailymotion: function(e) {
              return h.test(e)
          },
          mixcloud: function(e) {
              return m.test(e)
          },
          vidyard: function(e) {
              return v.test(e)
          },
          kaltura: function(e) {
              return g.test(e)
          },
          file: function e(t) {
              if (t instanceof Array) {
                  var r, i = o(t);
                  try {
                      for (i.s(); !(r = i.n()).done; ) {
                          var a = r.value;
                          if ("string" == typeof a && e(a))
                              return !0;
                          if (e(a.src))
                              return !0
                      }
                  } catch (e) {
                      i.e(e)
                  } finally {
                      i.f()
                  }
                  return !1
              }
              return !(!(0,
              n.isMediaStream)(t) && !(0,
              n.isBlobUrl)(t)) || (b.test(t) || w.test(t) || P.test(t) || O.test(t) || S.test(t))
          }
      };
      t.canPlay = E
  }
  ,
  6807: (e,t,r)=>{
      "use strict";
      function n(e) {
          return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
              return typeof e
          }
          : function(e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          }
          ,
          n(e)
      }
      Object.defineProperty(t, "__esModule", {
          value: !0
      }),
      t.default = void 0;
      var o = function(e) {
          if (e && e.__esModule)
              return e;
          if (null === e || "object" !== n(e) && "function" != typeof e)
              return {
                  default: e
              };
          var t = s();
          if (t && t.has(e))
              return t.get(e);
          var r = {}
            , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var i in e)
              if (Object.prototype.hasOwnProperty.call(e, i)) {
                  var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
                  a && (a.get || a.set) ? Object.defineProperty(r, i, a) : r[i] = e[i]
              }
          r.default = e,
          t && t.set(e, r);
          return r
      }(r(7294))
        , i = r(8045)
        , a = r(1776);
      function s() {
          if ("function" != typeof WeakMap)
              return null;
          var e = new WeakMap;
          return s = function() {
              return e
          }
          ,
          e
      }
      function l(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              t && (n = n.filter((function(t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable
              }
              ))),
              r.push.apply(r, n)
          }
          return r
      }
      function u(e) {
          for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2 ? l(Object(r), !0).forEach((function(t) {
                  b(e, t, r[t])
              }
              )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : l(Object(r)).forEach((function(t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              }
              ))
          }
          return e
      }
      function c(e, t) {
          return function(e) {
              if (Array.isArray(e))
                  return e
          }(e) || function(e, t) {
              if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
                  return;
              var r = []
                , n = !0
                , o = !1
                , i = void 0;
              try {
                  for (var a, s = e[Symbol.iterator](); !(n = (a = s.next()).done) && (r.push(a.value),
                  !t || r.length !== t); n = !0)
                      ;
              } catch (e) {
                  o = !0,
                  i = e
              } finally {
                  try {
                      n || null == s.return || s.return()
                  } finally {
                      if (o)
                          throw i
                  }
              }
              return r
          }(e, t) || function(e, t) {
              if (!e)
                  return;
              if ("string" == typeof e)
                  return p(e, t);
              var r = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === r && e.constructor && (r = e.constructor.name);
              if ("Map" === r || "Set" === r)
                  return Array.from(e);
              if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                  return p(e, t)
          }(e, t) || function() {
              throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }()
      }
      function p(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = new Array(t); r < t; r++)
              n[r] = e[r];
          return n
      }
      function d(e, t) {
          if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function")
      }
      function f(e, t) {
          for (var r = 0; r < t.length; r++) {
              var n = t[r];
              n.enumerable = n.enumerable || !1,
              n.configurable = !0,
              "value"in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n)
          }
      }
      function y(e, t) {
          return y = Object.setPrototypeOf || function(e, t) {
              return e.__proto__ = t,
              e
          }
          ,
          y(e, t)
      }
      function h(e) {
          var t = function() {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                  return !1;
              if (Reflect.construct.sham)
                  return !1;
              if ("function" == typeof Proxy)
                  return !0;
              try {
                  return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                  ))),
                  !0
              } catch (e) {
                  return !1
              }
          }();
          return function() {
              var r, n = g(e);
              if (t) {
                  var o = g(this).constructor;
                  r = Reflect.construct(n, arguments, o)
              } else
                  r = n.apply(this, arguments);
              return m(this, r)
          }
      }
      function m(e, t) {
          return !t || "object" !== n(t) && "function" != typeof t ? v(e) : t
      }
      function v(e) {
          if (void 0 === e)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e
      }
      function g(e) {
          return g = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e)
          }
          ,
          g(e)
      }
      function b(e, t, r) {
          return t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[t] = r,
          e
      }
      var w = function(e) {
          !function(e, t) {
              if ("function" != typeof t && null !== t)
                  throw new TypeError("Super expression must either be null or a function");
              e.prototype = Object.create(t && t.prototype, {
                  constructor: {
                      value: e,
                      writable: !0,
                      configurable: !0
                  }
              }),
              t && y(e, t)
          }(l, e);
          var t, r, n, s = h(l);
          function l() {
              var e;
              d(this, l);
              for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
                  r[n] = arguments[n];
              return b(v(e = s.call.apply(s, [this].concat(r))), "callPlayer", i.callPlayer),
              b(v(e), "onDurationChange", (function() {
                  var t = e.getDuration();
                  e.props.onDuration(t)
              }
              )),
              b(v(e), "mute", (function() {
                  e.callPlayer("setMuted", !0)
              }
              )),
              b(v(e), "unmute", (function() {
                  e.callPlayer("setMuted", !1)
              }
              )),
              b(v(e), "ref", (function(t) {
                  e.container = t
              }
              )),
              e
          }
          return t = l,
          (r = [{
              key: "componentDidMount",
              value: function() {
                  this.props.onMount && this.props.onMount(this)
              }
          }, {
              key: "load",
              value: function(e) {
                  var t = this
                    , r = this.props
                    , n = r.controls
                    , o = r.config
                    , s = r.onError
                    , l = r.playing
                    , p = c(e.match(a.MATCH_URL_DAILYMOTION), 2)[1];
                  this.player ? this.player.load(p, {
                      start: (0,
                      i.parseStartTime)(e),
                      autoplay: l
                  }) : (0,
                  i.getSDK)("https://api.dmcdn.net/all.js", "DM", "dmAsyncInit", (function(e) {
                      return e.player
                  }
                  )).then((function(r) {
                      if (t.container) {
                          var a = r.player;
                          t.player = new a(t.container,{
                              width: "100%",
                              height: "100%",
                              video: p,
                              params: u({
                                  controls: n,
                                  autoplay: t.props.playing,
                                  mute: t.props.muted,
                                  start: (0,
                                  i.parseStartTime)(e),
                                  origin: window.location.origin
                              }, o.params),
                              events: {
                                  apiready: t.props.onReady,
                                  seeked: function() {
                                      return t.props.onSeek(t.player.currentTime)
                                  },
                                  video_end: t.props.onEnded,
                                  durationchange: t.onDurationChange,
                                  pause: t.props.onPause,
                                  playing: t.props.onPlay,
                                  waiting: t.props.onBuffer,
                                  error: function(e) {
                                      return s(e)
                                  }
                              }
                          })
                      }
                  }
                  ), s)
              }
          }, {
              key: "play",
              value: function() {
                  this.callPlayer("play")
              }
          }, {
              key: "pause",
              value: function() {
                  this.callPlayer("pause")
              }
          }, {
              key: "stop",
              value: function() {}
          }, {
              key: "seekTo",
              value: function(e) {
                  this.callPlayer("seek", e)
              }
          }, {
              key: "setVolume",
              value: function(e) {
                  this.callPlayer("setVolume", e)
              }
          }, {
              key: "getDuration",
              value: function() {
                  return this.player.duration || null
              }
          }, {
              key: "getCurrentTime",
              value: function() {
                  return this.player.currentTime
              }
          }, {
              key: "getSecondsLoaded",
              value: function() {
                  return this.player.bufferedTime
              }
          }, {
              key: "render",
              value: function() {
                  var e = {
                      width: "100%",
                      height: "100%",
                      display: this.props.display
                  };
                  return o.default.createElement("div", {
                      style: e
                  }, o.default.createElement("div", {
                      ref: this.ref
                  }))
              }
          }]) && f(t.prototype, r),
          n && f(t, n),
          l
      }(o.Component);
      t.default = w,
      b(w, "displayName", "DailyMotion"),
      b(w, "canPlay", a.canPlay.dailymotion),
      b(w, "loopOnEnded", !0)
  }
  ,
  1972: (e,t,r)=>{
      "use strict";
      function n(e) {
          return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
              return typeof e
          }
          : function(e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          }
          ,
          n(e)
      }
      Object.defineProperty(t, "__esModule", {
          value: !0
      }),
      t.default = void 0;
      var o = function(e) {
          if (e && e.__esModule)
              return e;
          if (null === e || "object" !== n(e) && "function" != typeof e)
              return {
                  default: e
              };
          var t = s();
          if (t && t.has(e))
              return t.get(e);
          var r = {}
            , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var i in e)
              if (Object.prototype.hasOwnProperty.call(e, i)) {
                  var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
                  a && (a.get || a.set) ? Object.defineProperty(r, i, a) : r[i] = e[i]
              }
          r.default = e,
          t && t.set(e, r);
          return r
      }(r(7294))
        , i = r(8045)
        , a = r(1776);
      function s() {
          if ("function" != typeof WeakMap)
              return null;
          var e = new WeakMap;
          return s = function() {
              return e
          }
          ,
          e
      }
      function l() {
          return l = Object.assign || function(e) {
              for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                      Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
              }
              return e
          }
          ,
          l.apply(this, arguments)
      }
      function u(e, t) {
          if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function")
      }
      function c(e, t) {
          for (var r = 0; r < t.length; r++) {
              var n = t[r];
              n.enumerable = n.enumerable || !1,
              n.configurable = !0,
              "value"in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n)
          }
      }
      function p(e, t) {
          return p = Object.setPrototypeOf || function(e, t) {
              return e.__proto__ = t,
              e
          }
          ,
          p(e, t)
      }
      function d(e) {
          var t = function() {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                  return !1;
              if (Reflect.construct.sham)
                  return !1;
              if ("function" == typeof Proxy)
                  return !0;
              try {
                  return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                  ))),
                  !0
              } catch (e) {
                  return !1
              }
          }();
          return function() {
              var r, n = h(e);
              if (t) {
                  var o = h(this).constructor;
                  r = Reflect.construct(n, arguments, o)
              } else
                  r = n.apply(this, arguments);
              return f(this, r)
          }
      }
      function f(e, t) {
          return !t || "object" !== n(t) && "function" != typeof t ? y(e) : t
      }
      function y(e) {
          if (void 0 === e)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e
      }
      function h(e) {
          return h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e)
          }
          ,
          h(e)
      }
      function m(e, t, r) {
          return t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[t] = r,
          e
      }
      var v = "https://connect.facebook.net/en_US/sdk.js"
        , g = "fbAsyncInit"
        , b = "facebook-player-"
        , w = function(e) {
          !function(e, t) {
              if ("function" != typeof t && null !== t)
                  throw new TypeError("Super expression must either be null or a function");
              e.prototype = Object.create(t && t.prototype, {
                  constructor: {
                      value: e,
                      writable: !0,
                      configurable: !0
                  }
              }),
              t && p(e, t)
          }(s, e);
          var t, r, n, a = d(s);
          function s() {
              var e;
              u(this, s);
              for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
                  r[n] = arguments[n];
              return m(y(e = a.call.apply(a, [this].concat(r))), "callPlayer", i.callPlayer),
              m(y(e), "playerID", e.props.config.playerId || "".concat(b).concat((0,
              i.randomString)())),
              m(y(e), "mute", (function() {
                  e.callPlayer("mute")
              }
              )),
              m(y(e), "unmute", (function() {
                  e.callPlayer("unmute")
              }
              )),
              e
          }
          return t = s,
          (r = [{
              key: "componentDidMount",
              value: function() {
                  this.props.onMount && this.props.onMount(this)
              }
          }, {
              key: "load",
              value: function(e, t) {
                  var r = this;
                  t ? (0,
                  i.getSDK)(v, "FB", g).then((function(e) {
                      return e.XFBML.parse()
                  }
                  )) : (0,
                  i.getSDK)(v, "FB", g).then((function(e) {
                      e.init({
                          appId: r.props.config.appId,
                          xfbml: !0,
                          version: r.props.config.version
                      }),
                      e.Event.subscribe("xfbml.render", (function(e) {
                          r.props.onLoaded()
                      }
                      )),
                      e.Event.subscribe("xfbml.ready", (function(e) {
                          "video" === e.type && e.id === r.playerID && (r.player = e.instance,
                          r.player.subscribe("startedPlaying", r.props.onPlay),
                          r.player.subscribe("paused", r.props.onPause),
                          r.player.subscribe("finishedPlaying", r.props.onEnded),
                          r.player.subscribe("startedBuffering", r.props.onBuffer),
                          r.player.subscribe("finishedBuffering", r.props.onBufferEnd),
                          r.player.subscribe("error", r.props.onError),
                          r.props.muted ? r.callPlayer("mute") : r.callPlayer("unmute"),
                          r.props.onReady(),
                          document.getElementById(r.playerID).querySelector("iframe").style.visibility = "visible")
                      }
                      ))
                  }
                  ))
              }
          }, {
              key: "play",
              value: function() {
                  this.callPlayer("play")
              }
          }, {
              key: "pause",
              value: function() {
                  this.callPlayer("pause")
              }
          }, {
              key: "stop",
              value: function() {}
          }, {
              key: "seekTo",
              value: function(e) {
                  this.callPlayer("seek", e)
              }
          }, {
              key: "setVolume",
              value: function(e) {
                  this.callPlayer("setVolume", e)
              }
          }, {
              key: "getDuration",
              value: function() {
                  return this.callPlayer("getDuration")
              }
          }, {
              key: "getCurrentTime",
              value: function() {
                  return this.callPlayer("getCurrentPosition")
              }
          }, {
              key: "getSecondsLoaded",
              value: function() {
                  return null
              }
          }, {
              key: "render",
              value: function() {
                  var e = this.props.config.attributes;
                  return o.default.createElement("div", l({
                      style: {
                          width: "100%",
                          height: "100%"
                      },
                      id: this.playerID,
                      className: "fb-video",
                      "data-href": this.props.url,
                      "data-autoplay": this.props.playing ? "true" : "false",
                      "data-allowfullscreen": "true",
                      "data-controls": this.props.controls ? "true" : "false"
                  }, e))
              }
          }]) && c(t.prototype, r),
          n && c(t, n),
          s
      }(o.Component);
      t.default = w,
      m(w, "displayName", "Facebook"),
      m(w, "canPlay", a.canPlay.facebook),
      m(w, "loopOnEnded", !0)
  }
  ,
  4926: (e,t,r)=>{
      "use strict";
      function n(e) {
          return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
              return typeof e
          }
          : function(e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          }
          ,
          n(e)
      }
      Object.defineProperty(t, "__esModule", {
          value: !0
      }),
      t.default = void 0;
      var o = function(e) {
          if (e && e.__esModule)
              return e;
          if (null === e || "object" !== n(e) && "function" != typeof e)
              return {
                  default: e
              };
          var t = s();
          if (t && t.has(e))
              return t.get(e);
          var r = {}
            , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var i in e)
              if (Object.prototype.hasOwnProperty.call(e, i)) {
                  var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
                  a && (a.get || a.set) ? Object.defineProperty(r, i, a) : r[i] = e[i]
              }
          r.default = e,
          t && t.set(e, r);
          return r
      }(r(7294))
        , i = r(8045)
        , a = r(1776);
      function s() {
          if ("function" != typeof WeakMap)
              return null;
          var e = new WeakMap;
          return s = function() {
              return e
          }
          ,
          e
      }
      function l() {
          return l = Object.assign || function(e) {
              for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                      Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
              }
              return e
          }
          ,
          l.apply(this, arguments)
      }
      function u(e, t) {
          if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function")
      }
      function c(e, t) {
          for (var r = 0; r < t.length; r++) {
              var n = t[r];
              n.enumerable = n.enumerable || !1,
              n.configurable = !0,
              "value"in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n)
          }
      }
      function p(e, t) {
          return p = Object.setPrototypeOf || function(e, t) {
              return e.__proto__ = t,
              e
          }
          ,
          p(e, t)
      }
      function d(e) {
          var t = function() {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                  return !1;
              if (Reflect.construct.sham)
                  return !1;
              if ("function" == typeof Proxy)
                  return !0;
              try {
                  return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                  ))),
                  !0
              } catch (e) {
                  return !1
              }
          }();
          return function() {
              var r, n = h(e);
              if (t) {
                  var o = h(this).constructor;
                  r = Reflect.construct(n, arguments, o)
              } else
                  r = n.apply(this, arguments);
              return f(this, r)
          }
      }
      function f(e, t) {
          return !t || "object" !== n(t) && "function" != typeof t ? y(e) : t
      }
      function y(e) {
          if (void 0 === e)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e
      }
      function h(e) {
          return h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e)
          }
          ,
          h(e)
      }
      function m(e, t, r) {
          return t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[t] = r,
          e
      }
      var v = "undefined" != typeof navigator
        , g = v && "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1
        , b = v && (/iPad|iPhone|iPod/.test(navigator.userAgent) || g) && !window.MSStream
        , w = /www\.dropbox\.com\/.+/
        , P = /https:\/\/watch\.cloudflarestream\.com\/([a-z0-9]+)/
        , O = function(e) {
          !function(e, t) {
              if ("function" != typeof t && null !== t)
                  throw new TypeError("Super expression must either be null or a function");
              e.prototype = Object.create(t && t.prototype, {
                  constructor: {
                      value: e,
                      writable: !0,
                      configurable: !0
                  }
              }),
              t && p(e, t)
          }(f, e);
          var t, r, n, s = d(f);
          function f() {
              var e;
              u(this, f);
              for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
                  r[n] = arguments[n];
              return m(y(e = s.call.apply(s, [this].concat(r))), "onReady", (function() {
                  var t;
                  return (t = e.props).onReady.apply(t, arguments)
              }
              )),
              m(y(e), "onPlay", (function() {
                  var t;
                  return (t = e.props).onPlay.apply(t, arguments)
              }
              )),
              m(y(e), "onBuffer", (function() {
                  var t;
                  return (t = e.props).onBuffer.apply(t, arguments)
              }
              )),
              m(y(e), "onBufferEnd", (function() {
                  var t;
                  return (t = e.props).onBufferEnd.apply(t, arguments)
              }
              )),
              m(y(e), "onPause", (function() {
                  var t;
                  return (t = e.props).onPause.apply(t, arguments)
              }
              )),
              m(y(e), "onEnded", (function() {
                  var t;
                  return (t = e.props).onEnded.apply(t, arguments)
              }
              )),
              m(y(e), "onError", (function() {
                  var t;
                  return (t = e.props).onError.apply(t, arguments)
              }
              )),
              m(y(e), "onPlayBackRateChange", (function(t) {
                  return e.props.onPlaybackRateChange(t.target.playbackRate)
              }
              )),
              m(y(e), "onEnablePIP", (function() {
                  var t;
                  return (t = e.props).onEnablePIP.apply(t, arguments)
              }
              )),
              m(y(e), "onDisablePIP", (function(t) {
                  var r = e.props
                    , n = r.onDisablePIP
                    , o = r.playing;
                  n(t),
                  o && e.play()
              }
              )),
              m(y(e), "onPresentationModeChange", (function(t) {
                  if (e.player && (0,
                  i.supportsWebKitPresentationMode)(e.player)) {
                      var r = e.player.webkitPresentationMode;
                      "picture-in-picture" === r ? e.onEnablePIP(t) : "inline" === r && e.onDisablePIP(t)
                  }
              }
              )),
              m(y(e), "onSeek", (function(t) {
                  e.props.onSeek(t.target.currentTime)
              }
              )),
              m(y(e), "mute", (function() {
                  e.player.muted = !0
              }
              )),
              m(y(e), "unmute", (function() {
                  e.player.muted = !1
              }
              )),
              m(y(e), "renderSourceElement", (function(e, t) {
                  return "string" == typeof e ? o.default.createElement("source", {
                      key: t,
                      src: e
                  }) : o.default.createElement("source", l({
                      key: t
                  }, e))
              }
              )),
              m(y(e), "renderTrack", (function(e, t) {
                  return o.default.createElement("track", l({
                      key: t
                  }, e))
              }
              )),
              m(y(e), "ref", (function(t) {
                  e.player && (e.prevPlayer = e.player),
                  e.player = t
              }
              )),
              e
          }
          return t = f,
          (r = [{
              key: "componentDidMount",
              value: function() {
                  this.props.onMount && this.props.onMount(this),
                  this.addListeners(this.player),
                  b && this.player.load()
              }
          }, {
              key: "componentDidUpdate",
              value: function(e) {
                  this.shouldUseAudio(this.props) !== this.shouldUseAudio(e) && (this.removeListeners(this.prevPlayer, e.url),
                  this.addListeners(this.player)),
                  this.props.url === e.url || (0,
                  i.isMediaStream)(this.props.url) || (this.player.srcObject = null)
              }
          }, {
              key: "componentWillUnmount",
              value: function() {
                  this.player.src = "",
                  this.removeListeners(this.player),
                  this.hls && this.hls.destroy()
              }
          }, {
              key: "addListeners",
              value: function(e) {
                  var t = this.props
                    , r = t.url
                    , n = t.playsinline;
                  e.addEventListener("play", this.onPlay),
                  e.addEventListener("waiting", this.onBuffer),
                  e.addEventListener("playing", this.onBufferEnd),
                  e.addEventListener("pause", this.onPause),
                  e.addEventListener("seeked", this.onSeek),
                  e.addEventListener("ended", this.onEnded),
                  e.addEventListener("error", this.onError),
                  e.addEventListener("ratechange", this.onPlayBackRateChange),
                  e.addEventListener("enterpictureinpicture", this.onEnablePIP),
                  e.addEventListener("leavepictureinpicture", this.onDisablePIP),
                  e.addEventListener("webkitpresentationmodechanged", this.onPresentationModeChange),
                  this.shouldUseHLS(r) || e.addEventListener("canplay", this.onReady),
                  n && (e.setAttribute("playsinline", ""),
                  e.setAttribute("webkit-playsinline", ""),
                  e.setAttribute("x5-playsinline", ""))
              }
          }, {
              key: "removeListeners",
              value: function(e, t) {
                  e.removeEventListener("canplay", this.onReady),
                  e.removeEventListener("play", this.onPlay),
                  e.removeEventListener("waiting", this.onBuffer),
                  e.removeEventListener("playing", this.onBufferEnd),
                  e.removeEventListener("pause", this.onPause),
                  e.removeEventListener("seeked", this.onSeek),
                  e.removeEventListener("ended", this.onEnded),
                  e.removeEventListener("error", this.onError),
                  e.removeEventListener("ratechange", this.onPlayBackRateChange),
                  e.removeEventListener("enterpictureinpicture", this.onEnablePIP),
                  e.removeEventListener("leavepictureinpicture", this.onDisablePIP),
                  e.removeEventListener("webkitpresentationmodechanged", this.onPresentationModeChange),
                  this.shouldUseHLS(t) || e.removeEventListener("canplay", this.onReady)
              }
          }, {
              key: "shouldUseAudio",
              value: function(e) {
                  return !e.config.forceVideo && !e.config.attributes.poster && (a.AUDIO_EXTENSIONS.test(e.url) || e.config.forceAudio)
              }
          }, {
              key: "shouldUseHLS",
              value: function(e) {
                  return !!this.props.config.forceHLS || !b && (a.HLS_EXTENSIONS.test(e) || P.test(e))
              }
          }, {
              key: "shouldUseDASH",
              value: function(e) {
                  return a.DASH_EXTENSIONS.test(e) || this.props.config.forceDASH
              }
          }, {
              key: "shouldUseFLV",
              value: function(e) {
                  return a.FLV_EXTENSIONS.test(e) || this.props.config.forceFLV
              }
          }, {
              key: "load",
              value: function(e) {
                  var t = this
                    , r = this.props.config
                    , n = r.hlsVersion
                    , o = r.hlsOptions
                    , a = r.dashVersion
                    , s = r.flvVersion;
                  if (this.hls && this.hls.destroy(),
                  this.dash && this.dash.reset(),
                  this.shouldUseHLS(e) && (0,
                  i.getSDK)("https://cdn.jsdelivr.net/npm/hls.js@VERSION/dist/hls.min.js".replace("VERSION", n), "Hls").then((function(r) {
                      if (t.hls = new r(o),
                      t.hls.on(r.Events.MANIFEST_PARSED, (function() {
                          t.props.onReady()
                      }
                      )),
                      t.hls.on(r.Events.ERROR, (function(e, n) {
                          t.props.onError(e, n, t.hls, r)
                      }
                      )),
                      P.test(e)) {
                          var n = e.match(P)[1];
                          t.hls.loadSource("https://videodelivery.net/{id}/manifest/video.m3u8".replace("{id}", n))
                      } else
                          t.hls.loadSource(e);
                      t.hls.attachMedia(t.player),
                      t.props.onLoaded()
                  }
                  )),
                  this.shouldUseDASH(e) && (0,
                  i.getSDK)("https://cdnjs.cloudflare.com/ajax/libs/dashjs/VERSION/dash.all.min.js".replace("VERSION", a), "dashjs").then((function(r) {
                      t.dash = r.MediaPlayer().create(),
                      t.dash.initialize(t.player, e, t.props.playing),
                      t.dash.on("error", t.props.onError),
                      parseInt(a) < 3 ? t.dash.getDebug().setLogToBrowserConsole(!1) : t.dash.updateSettings({
                          debug: {
                              logLevel: r.Debug.LOG_LEVEL_NONE
                          }
                      }),
                      t.props.onLoaded()
                  }
                  )),
                  this.shouldUseFLV(e) && (0,
                  i.getSDK)("https://cdn.jsdelivr.net/npm/flv.js@VERSION/dist/flv.min.js".replace("VERSION", s), "flvjs").then((function(r) {
                      t.flv = r.createPlayer({
                          type: "flv",
                          url: e
                      }),
                      t.flv.attachMediaElement(t.player),
                      t.flv.on(r.Events.ERROR, (function(e, n) {
                          t.props.onError(e, n, t.flv, r)
                      }
                      )),
                      t.flv.load(),
                      t.props.onLoaded()
                  }
                  )),
                  e instanceof Array)
                      this.player.load();
                  else if ((0,
                  i.isMediaStream)(e))
                      try {
                          this.player.srcObject = e
                      } catch (t) {
                          this.player.src = window.URL.createObjectURL(e)
                      }
              }
          }, {
              key: "play",
              value: function() {
                  var e = this.player.play();
                  e && e.catch(this.props.onError)
              }
          }, {
              key: "pause",
              value: function() {
                  this.player.pause()
              }
          }, {
              key: "stop",
              value: function() {
                  this.player.removeAttribute("src"),
                  this.dash && this.dash.reset()
              }
          }, {
              key: "seekTo",
              value: function(e) {
                  this.player.currentTime = e
              }
          }, {
              key: "setVolume",
              value: function(e) {
                  this.player.volume = e
              }
          }, {
              key: "enablePIP",
              value: function() {
                  this.player.requestPictureInPicture && document.pictureInPictureElement !== this.player ? this.player.requestPictureInPicture() : (0,
                  i.supportsWebKitPresentationMode)(this.player) && "picture-in-picture" !== this.player.webkitPresentationMode && this.player.webkitSetPresentationMode("picture-in-picture")
              }
          }, {
              key: "disablePIP",
              value: function() {
                  document.exitPictureInPicture && document.pictureInPictureElement === this.player ? document.exitPictureInPicture() : (0,
                  i.supportsWebKitPresentationMode)(this.player) && "inline" !== this.player.webkitPresentationMode && this.player.webkitSetPresentationMode("inline")
              }
          }, {
              key: "setPlaybackRate",
              value: function(e) {
                  try {
                      this.player.playbackRate = e
                  } catch (e) {
                      this.props.onError(e)
                  }
              }
          }, {
              key: "getDuration",
              value: function() {
                  if (!this.player)
                      return null;
                  var e = this.player
                    , t = e.duration
                    , r = e.seekable;
                  return t === 1 / 0 && r.length > 0 ? r.end(r.length - 1) : t
              }
          }, {
              key: "getCurrentTime",
              value: function() {
                  return this.player ? this.player.currentTime : null
              }
          }, {
              key: "getSecondsLoaded",
              value: function() {
                  if (!this.player)
                      return null;
                  var e = this.player.buffered;
                  if (0 === e.length)
                      return 0;
                  var t = e.end(e.length - 1)
                    , r = this.getDuration();
                  return t > r ? r : t
              }
          }, {
              key: "getSource",
              value: function(e) {
                  var t = this.shouldUseHLS(e)
                    , r = this.shouldUseDASH(e)
                    , n = this.shouldUseFLV(e);
                  if (!(e instanceof Array || (0,
                  i.isMediaStream)(e) || t || r || n))
                      return w.test(e) ? e.replace("www.dropbox.com", "dl.dropboxusercontent.com") : e
              }
          }, {
              key: "render",
              value: function() {
                  var e = this.props
                    , t = e.url
                    , r = e.playing
                    , n = e.loop
                    , i = e.controls
                    , a = e.muted
                    , s = e.config
                    , u = e.width
                    , c = e.height
                    , p = this.shouldUseAudio(this.props) ? "audio" : "video"
                    , d = {
                      width: "auto" === u ? u : "100%",
                      height: "auto" === c ? c : "100%"
                  };
                  return o.default.createElement(p, l({
                      ref: this.ref,
                      src: this.getSource(t),
                      style: d,
                      preload: "auto",
                      autoPlay: r || void 0,
                      controls: i,
                      muted: a,
                      loop: n
                  }, s.attributes), t instanceof Array && t.map(this.renderSourceElement), s.tracks.map(this.renderTrack))
              }
          }]) && c(t.prototype, r),
          n && c(t, n),
          f
      }(o.Component);
      t.default = O,
      m(O, "displayName", "FilePlayer"),
      m(O, "canPlay", a.canPlay.file)
  }
  ,
  3911: (e,t,r)=>{
      "use strict";
      function n(e) {
          return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
              return typeof e
          }
          : function(e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          }
          ,
          n(e)
      }
      Object.defineProperty(t, "__esModule", {
          value: !0
      }),
      t.default = void 0;
      var o = function(e) {
          if (e && e.__esModule)
              return e;
          if (null === e || "object" !== n(e) && "function" != typeof e)
              return {
                  default: e
              };
          var t = s();
          if (t && t.has(e))
              return t.get(e);
          var r = {}
            , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var i in e)
              if (Object.prototype.hasOwnProperty.call(e, i)) {
                  var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
                  a && (a.get || a.set) ? Object.defineProperty(r, i, a) : r[i] = e[i]
              }
          r.default = e,
          t && t.set(e, r);
          return r
      }(r(7294))
        , i = r(8045)
        , a = r(1776);
      function s() {
          if ("function" != typeof WeakMap)
              return null;
          var e = new WeakMap;
          return s = function() {
              return e
          }
          ,
          e
      }
      function l(e, t) {
          if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function")
      }
      function u(e, t) {
          for (var r = 0; r < t.length; r++) {
              var n = t[r];
              n.enumerable = n.enumerable || !1,
              n.configurable = !0,
              "value"in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n)
          }
      }
      function c(e, t) {
          return c = Object.setPrototypeOf || function(e, t) {
              return e.__proto__ = t,
              e
          }
          ,
          c(e, t)
      }
      function p(e) {
          var t = function() {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                  return !1;
              if (Reflect.construct.sham)
                  return !1;
              if ("function" == typeof Proxy)
                  return !0;
              try {
                  return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                  ))),
                  !0
              } catch (e) {
                  return !1
              }
          }();
          return function() {
              var r, n = y(e);
              if (t) {
                  var o = y(this).constructor;
                  r = Reflect.construct(n, arguments, o)
              } else
                  r = n.apply(this, arguments);
              return d(this, r)
          }
      }
      function d(e, t) {
          return !t || "object" !== n(t) && "function" != typeof t ? f(e) : t
      }
      function f(e) {
          if (void 0 === e)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e
      }
      function y(e) {
          return y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e)
          }
          ,
          y(e)
      }
      function h(e, t, r) {
          return t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[t] = r,
          e
      }
      var m = function(e) {
          !function(e, t) {
              if ("function" != typeof t && null !== t)
                  throw new TypeError("Super expression must either be null or a function");
              e.prototype = Object.create(t && t.prototype, {
                  constructor: {
                      value: e,
                      writable: !0,
                      configurable: !0
                  }
              }),
              t && c(e, t)
          }(s, e);
          var t, r, n, a = p(s);
          function s() {
              var e;
              l(this, s);
              for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
                  r[n] = arguments[n];
              return h(f(e = a.call.apply(a, [this].concat(r))), "callPlayer", i.callPlayer),
              h(f(e), "duration", null),
              h(f(e), "currentTime", null),
              h(f(e), "secondsLoaded", null),
              h(f(e), "mute", (function() {
                  e.callPlayer("mute")
              }
              )),
              h(f(e), "unmute", (function() {
                  e.callPlayer("unmute")
              }
              )),
              h(f(e), "ref", (function(t) {
                  e.iframe = t
              }
              )),
              e
          }
          return t = s,
          (r = [{
              key: "componentDidMount",
              value: function() {
                  this.props.onMount && this.props.onMount(this)
              }
          }, {
              key: "load",
              value: function(e) {
                  var t = this;
                  (0,
                  i.getSDK)("https://cdn.embed.ly/player-0.1.0.min.js", "playerjs").then((function(e) {
                      t.iframe && (t.player = new e.Player(t.iframe),
                      t.player.on("ready", (function() {
                          setTimeout((function() {
                              t.player.isReady = !0,
                              t.player.setLoop(t.props.loop),
                              t.props.muted && t.player.mute(),
                              t.addListeners(t.player, t.props),
                              t.props.onReady()
                          }
                          ), 500)
                      }
                      )))
                  }
                  ), this.props.onError)
              }
          }, {
              key: "addListeners",
              value: function(e, t) {
                  var r = this;
                  e.on("play", t.onPlay),
                  e.on("pause", t.onPause),
                  e.on("ended", t.onEnded),
                  e.on("error", t.onError),
                  e.on("timeupdate", (function(e) {
                      var t = e.duration
                        , n = e.seconds;
                      r.duration = t,
                      r.currentTime = n
                  }
                  ))
              }
          }, {
              key: "play",
              value: function() {
                  this.callPlayer("play")
              }
          }, {
              key: "pause",
              value: function() {
                  this.callPlayer("pause")
              }
          }, {
              key: "stop",
              value: function() {}
          }, {
              key: "seekTo",
              value: function(e) {
                  this.callPlayer("setCurrentTime", e)
              }
          }, {
              key: "setVolume",
              value: function(e) {
                  this.callPlayer("setVolume", e)
              }
          }, {
              key: "setLoop",
              value: function(e) {
                  this.callPlayer("setLoop", e)
              }
          }, {
              key: "getDuration",
              value: function() {
                  return this.duration
              }
          }, {
              key: "getCurrentTime",
              value: function() {
                  return this.currentTime
              }
          }, {
              key: "getSecondsLoaded",
              value: function() {
                  return this.secondsLoaded
              }
          }, {
              key: "render",
              value: function() {
                  return o.default.createElement("iframe", {
                      ref: this.ref,
                      src: this.props.url,
                      frameBorder: "0",
                      scrolling: "no",
                      style: {
                          width: "100%",
                          height: "100%"
                      },
                      allow: "encrypted-media; autoplay; fullscreen;",
                      referrerPolicy: "no-referrer-when-downgrade"
                  })
              }
          }]) && u(t.prototype, r),
          n && u(t, n),
          s
      }(o.Component);
      t.default = m,
      h(m, "displayName", "Kaltura"),
      h(m, "canPlay", a.canPlay.kaltura)
  }
  ,
  143: (e,t,r)=>{
      "use strict";
      function n(e) {
          return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
              return typeof e
          }
          : function(e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          }
          ,
          n(e)
      }
      Object.defineProperty(t, "__esModule", {
          value: !0
      }),
      t.default = void 0;
      var o = function(e) {
          if (e && e.__esModule)
              return e;
          if (null === e || "object" !== n(e) && "function" != typeof e)
              return {
                  default: e
              };
          var t = s();
          if (t && t.has(e))
              return t.get(e);
          var r = {}
            , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var i in e)
              if (Object.prototype.hasOwnProperty.call(e, i)) {
                  var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
                  a && (a.get || a.set) ? Object.defineProperty(r, i, a) : r[i] = e[i]
              }
          r.default = e,
          t && t.set(e, r);
          return r
      }(r(7294))
        , i = r(8045)
        , a = r(1776);
      function s() {
          if ("function" != typeof WeakMap)
              return null;
          var e = new WeakMap;
          return s = function() {
              return e
          }
          ,
          e
      }
      function l(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              t && (n = n.filter((function(t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable
              }
              ))),
              r.push.apply(r, n)
          }
          return r
      }
      function u(e) {
          for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2 ? l(Object(r), !0).forEach((function(t) {
                  v(e, t, r[t])
              }
              )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : l(Object(r)).forEach((function(t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              }
              ))
          }
          return e
      }
      function c(e, t) {
          if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function")
      }
      function p(e, t) {
          for (var r = 0; r < t.length; r++) {
              var n = t[r];
              n.enumerable = n.enumerable || !1,
              n.configurable = !0,
              "value"in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n)
          }
      }
      function d(e, t) {
          return d = Object.setPrototypeOf || function(e, t) {
              return e.__proto__ = t,
              e
          }
          ,
          d(e, t)
      }
      function f(e) {
          var t = function() {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                  return !1;
              if (Reflect.construct.sham)
                  return !1;
              if ("function" == typeof Proxy)
                  return !0;
              try {
                  return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                  ))),
                  !0
              } catch (e) {
                  return !1
              }
          }();
          return function() {
              var r, n = m(e);
              if (t) {
                  var o = m(this).constructor;
                  r = Reflect.construct(n, arguments, o)
              } else
                  r = n.apply(this, arguments);
              return y(this, r)
          }
      }
      function y(e, t) {
          return !t || "object" !== n(t) && "function" != typeof t ? h(e) : t
      }
      function h(e) {
          if (void 0 === e)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e
      }
      function m(e) {
          return m = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e)
          }
          ,
          m(e)
      }
      function v(e, t, r) {
          return t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[t] = r,
          e
      }
      var g = function(e) {
          !function(e, t) {
              if ("function" != typeof t && null !== t)
                  throw new TypeError("Super expression must either be null or a function");
              e.prototype = Object.create(t && t.prototype, {
                  constructor: {
                      value: e,
                      writable: !0,
                      configurable: !0
                  }
              }),
              t && d(e, t)
          }(l, e);
          var t, r, n, s = f(l);
          function l() {
              var e;
              c(this, l);
              for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
                  r[n] = arguments[n];
              return v(h(e = s.call.apply(s, [this].concat(r))), "callPlayer", i.callPlayer),
              v(h(e), "duration", null),
              v(h(e), "currentTime", null),
              v(h(e), "secondsLoaded", null),
              v(h(e), "mute", (function() {}
              )),
              v(h(e), "unmute", (function() {}
              )),
              v(h(e), "ref", (function(t) {
                  e.iframe = t
              }
              )),
              e
          }
          return t = l,
          r = [{
              key: "componentDidMount",
              value: function() {
                  this.props.onMount && this.props.onMount(this)
              }
          }, {
              key: "load",
              value: function(e) {
                  var t = this;
                  (0,
                  i.getSDK)("https://widget.mixcloud.com/media/js/widgetApi.js", "Mixcloud").then((function(e) {
                      t.player = e.PlayerWidget(t.iframe),
                      t.player.ready.then((function() {
                          t.player.events.play.on(t.props.onPlay),
                          t.player.events.pause.on(t.props.onPause),
                          t.player.events.ended.on(t.props.onEnded),
                          t.player.events.error.on(t.props.error),
                          t.player.events.progress.on((function(e, r) {
                              t.currentTime = e,
                              t.duration = r
                          }
                          )),
                          t.props.onReady()
                      }
                      ))
                  }
                  ), this.props.onError)
              }
          }, {
              key: "play",
              value: function() {
                  this.callPlayer("play")
              }
          }, {
              key: "pause",
              value: function() {
                  this.callPlayer("pause")
              }
          }, {
              key: "stop",
              value: function() {}
          }, {
              key: "seekTo",
              value: function(e) {
                  this.callPlayer("seek", e)
              }
          }, {
              key: "setVolume",
              value: function(e) {}
          }, {
              key: "getDuration",
              value: function() {
                  return this.duration
              }
          }, {
              key: "getCurrentTime",
              value: function() {
                  return this.currentTime
              }
          }, {
              key: "getSecondsLoaded",
              value: function() {
                  return null
              }
          }, {
              key: "render",
              value: function() {
                  var e = this.props
                    , t = e.url
                    , r = e.config
                    , n = t.match(a.MATCH_URL_MIXCLOUD)[1]
                    , s = (0,
                  i.queryString)(u(u({}, r.options), {}, {
                      feed: "/".concat(n, "/")
                  }));
                  return o.default.createElement("iframe", {
                      key: n,
                      ref: this.ref,
                      style: {
                          width: "100%",
                          height: "100%"
                      },
                      src: "https://www.mixcloud.com/widget/iframe/?".concat(s),
                      frameBorder: "0",
                      allow: "autoplay"
                  })
              }
          }],
          r && p(t.prototype, r),
          n && p(t, n),
          l
      }(o.Component);
      t.default = g,
      v(g, "displayName", "Mixcloud"),
      v(g, "canPlay", a.canPlay.mixcloud),
      v(g, "loopOnEnded", !0)
  }
  ,
  2648: (e,t,r)=>{
      "use strict";
      function n(e) {
          return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
              return typeof e
          }
          : function(e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          }
          ,
          n(e)
      }
      Object.defineProperty(t, "__esModule", {
          value: !0
      }),
      t.default = void 0;
      var o = function(e) {
          if (e && e.__esModule)
              return e;
          if (null === e || "object" !== n(e) && "function" != typeof e)
              return {
                  default: e
              };
          var t = s();
          if (t && t.has(e))
              return t.get(e);
          var r = {}
            , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var i in e)
              if (Object.prototype.hasOwnProperty.call(e, i)) {
                  var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
                  a && (a.get || a.set) ? Object.defineProperty(r, i, a) : r[i] = e[i]
              }
          r.default = e,
          t && t.set(e, r);
          return r
      }(r(7294))
        , i = r(8045)
        , a = r(1776);
      function s() {
          if ("function" != typeof WeakMap)
              return null;
          var e = new WeakMap;
          return s = function() {
              return e
          }
          ,
          e
      }
      function l(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              t && (n = n.filter((function(t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable
              }
              ))),
              r.push.apply(r, n)
          }
          return r
      }
      function u(e) {
          for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2 ? l(Object(r), !0).forEach((function(t) {
                  v(e, t, r[t])
              }
              )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : l(Object(r)).forEach((function(t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              }
              ))
          }
          return e
      }
      function c(e, t) {
          if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function")
      }
      function p(e, t) {
          for (var r = 0; r < t.length; r++) {
              var n = t[r];
              n.enumerable = n.enumerable || !1,
              n.configurable = !0,
              "value"in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n)
          }
      }
      function d(e, t) {
          return d = Object.setPrototypeOf || function(e, t) {
              return e.__proto__ = t,
              e
          }
          ,
          d(e, t)
      }
      function f(e) {
          var t = function() {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                  return !1;
              if (Reflect.construct.sham)
                  return !1;
              if ("function" == typeof Proxy)
                  return !0;
              try {
                  return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                  ))),
                  !0
              } catch (e) {
                  return !1
              }
          }();
          return function() {
              var r, n = m(e);
              if (t) {
                  var o = m(this).constructor;
                  r = Reflect.construct(n, arguments, o)
              } else
                  r = n.apply(this, arguments);
              return y(this, r)
          }
      }
      function y(e, t) {
          return !t || "object" !== n(t) && "function" != typeof t ? h(e) : t
      }
      function h(e) {
          if (void 0 === e)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e
      }
      function m(e) {
          return m = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e)
          }
          ,
          m(e)
      }
      function v(e, t, r) {
          return t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[t] = r,
          e
      }
      var g = function(e) {
          !function(e, t) {
              if ("function" != typeof t && null !== t)
                  throw new TypeError("Super expression must either be null or a function");
              e.prototype = Object.create(t && t.prototype, {
                  constructor: {
                      value: e,
                      writable: !0,
                      configurable: !0
                  }
              }),
              t && d(e, t)
          }(s, e);
          var t, r, n, a = f(s);
          function s() {
              var e;
              c(this, s);
              for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
                  r[n] = arguments[n];
              return v(h(e = a.call.apply(a, [this].concat(r))), "callPlayer", i.callPlayer),
              v(h(e), "duration", null),
              v(h(e), "currentTime", null),
              v(h(e), "fractionLoaded", null),
              v(h(e), "mute", (function() {
                  e.setVolume(0)
              }
              )),
              v(h(e), "unmute", (function() {
                  null !== e.props.volume && e.setVolume(e.props.volume)
              }
              )),
              v(h(e), "ref", (function(t) {
                  e.iframe = t
              }
              )),
              e
          }
          return t = s,
          (r = [{
              key: "componentDidMount",
              value: function() {
                  this.props.onMount && this.props.onMount(this)
              }
          }, {
              key: "load",
              value: function(e, t) {
                  var r = this;
                  (0,
                  i.getSDK)("https://w.soundcloud.com/player/api.js", "SC").then((function(n) {
                      if (r.iframe) {
                          var o = n.Widget.Events
                            , i = o.PLAY
                            , a = o.PLAY_PROGRESS
                            , s = o.PAUSE
                            , l = o.FINISH
                            , c = o.ERROR;
                          t || (r.player = n.Widget(r.iframe),
                          r.player.bind(i, r.props.onPlay),
                          r.player.bind(s, (function() {
                              r.duration - r.currentTime < .05 || r.props.onPause()
                          }
                          )),
                          r.player.bind(a, (function(e) {
                              r.currentTime = e.currentPosition / 1e3,
                              r.fractionLoaded = e.loadedProgress
                          }
                          )),
                          r.player.bind(l, (function() {
                              return r.props.onEnded()
                          }
                          )),
                          r.player.bind(c, (function(e) {
                              return r.props.onError(e)
                          }
                          ))),
                          r.player.load(e, u(u({}, r.props.config.options), {}, {
                              callback: function() {
                                  r.player.getDuration((function(e) {
                                      r.duration = e / 1e3,
                                      r.props.onReady()
                                  }
                                  ))
                              }
                          }))
                      }
                  }
                  ))
              }
          }, {
              key: "play",
              value: function() {
                  this.callPlayer("play")
              }
          }, {
              key: "pause",
              value: function() {
                  this.callPlayer("pause")
              }
          }, {
              key: "stop",
              value: function() {}
          }, {
              key: "seekTo",
              value: function(e) {
                  this.callPlayer("seekTo", 1e3 * e)
              }
          }, {
              key: "setVolume",
              value: function(e) {
                  this.callPlayer("setVolume", 100 * e)
              }
          }, {
              key: "getDuration",
              value: function() {
                  return this.duration
              }
          }, {
              key: "getCurrentTime",
              value: function() {
                  return this.currentTime
              }
          }, {
              key: "getSecondsLoaded",
              value: function() {
                  return this.fractionLoaded * this.duration
              }
          }, {
              key: "render",
              value: function() {
                  var e = {
                      width: "100%",
                      height: "100%",
                      display: this.props.display
                  };
                  return o.default.createElement("iframe", {
                      ref: this.ref,
                      src: "https://w.soundcloud.com/player/?url=".concat(encodeURIComponent(this.props.url)),
                      style: e,
                      frameBorder: 0,
                      allow: "autoplay"
                  })
              }
          }]) && p(t.prototype, r),
          n && p(t, n),
          s
      }(o.Component);
      t.default = g,
      v(g, "displayName", "SoundCloud"),
      v(g, "canPlay", a.canPlay.soundcloud),
      v(g, "loopOnEnded", !0)
  }
  ,
  993: (e,t,r)=>{
      "use strict";
      function n(e) {
          return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
              return typeof e
          }
          : function(e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          }
          ,
          n(e)
      }
      Object.defineProperty(t, "__esModule", {
          value: !0
      }),
      t.default = void 0;
      var o = function(e) {
          if (e && e.__esModule)
              return e;
          if (null === e || "object" !== n(e) && "function" != typeof e)
              return {
                  default: e
              };
          var t = s();
          if (t && t.has(e))
              return t.get(e);
          var r = {}
            , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var i in e)
              if (Object.prototype.hasOwnProperty.call(e, i)) {
                  var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
                  a && (a.get || a.set) ? Object.defineProperty(r, i, a) : r[i] = e[i]
              }
          r.default = e,
          t && t.set(e, r);
          return r
      }(r(7294))
        , i = r(8045)
        , a = r(1776);
      function s() {
          if ("function" != typeof WeakMap)
              return null;
          var e = new WeakMap;
          return s = function() {
              return e
          }
          ,
          e
      }
      function l(e, t) {
          if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function")
      }
      function u(e, t) {
          for (var r = 0; r < t.length; r++) {
              var n = t[r];
              n.enumerable = n.enumerable || !1,
              n.configurable = !0,
              "value"in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n)
          }
      }
      function c(e, t) {
          return c = Object.setPrototypeOf || function(e, t) {
              return e.__proto__ = t,
              e
          }
          ,
          c(e, t)
      }
      function p(e) {
          var t = function() {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                  return !1;
              if (Reflect.construct.sham)
                  return !1;
              if ("function" == typeof Proxy)
                  return !0;
              try {
                  return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                  ))),
                  !0
              } catch (e) {
                  return !1
              }
          }();
          return function() {
              var r, n = y(e);
              if (t) {
                  var o = y(this).constructor;
                  r = Reflect.construct(n, arguments, o)
              } else
                  r = n.apply(this, arguments);
              return d(this, r)
          }
      }
      function d(e, t) {
          return !t || "object" !== n(t) && "function" != typeof t ? f(e) : t
      }
      function f(e) {
          if (void 0 === e)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e
      }
      function y(e) {
          return y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e)
          }
          ,
          y(e)
      }
      function h(e, t, r) {
          return t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[t] = r,
          e
      }
      var m = function(e) {
          !function(e, t) {
              if ("function" != typeof t && null !== t)
                  throw new TypeError("Super expression must either be null or a function");
              e.prototype = Object.create(t && t.prototype, {
                  constructor: {
                      value: e,
                      writable: !0,
                      configurable: !0
                  }
              }),
              t && c(e, t)
          }(d, e);
          var t, r, n, s = p(d);
          function d() {
              var e;
              l(this, d);
              for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
                  r[n] = arguments[n];
              return h(f(e = s.call.apply(s, [this].concat(r))), "callPlayer", i.callPlayer),
              h(f(e), "duration", null),
              h(f(e), "currentTime", null),
              h(f(e), "secondsLoaded", null),
              h(f(e), "mute", (function() {
                  e.callPlayer("mute")
              }
              )),
              h(f(e), "unmute", (function() {
                  e.callPlayer("unmute")
              }
              )),
              h(f(e), "ref", (function(t) {
                  e.iframe = t
              }
              )),
              e
          }
          return t = d,
          (r = [{
              key: "componentDidMount",
              value: function() {
                  this.props.onMount && this.props.onMount(this)
              }
          }, {
              key: "load",
              value: function(e) {
                  var t = this;
                  (0,
                  i.getSDK)("https://cdn.embed.ly/player-0.1.0.min.js", "playerjs").then((function(e) {
                      t.iframe && (t.player = new e.Player(t.iframe),
                      t.player.setLoop(t.props.loop),
                      t.player.on("ready", t.props.onReady),
                      t.player.on("play", t.props.onPlay),
                      t.player.on("pause", t.props.onPause),
                      t.player.on("seeked", t.props.onSeek),
                      t.player.on("ended", t.props.onEnded),
                      t.player.on("error", t.props.onError),
                      t.player.on("timeupdate", (function(e) {
                          var r = e.duration
                            , n = e.seconds;
                          t.duration = r,
                          t.currentTime = n
                      }
                      )),
                      t.player.on("buffered", (function(e) {
                          var r = e.percent;
                          t.duration && (t.secondsLoaded = t.duration * r)
                      }
                      )),
                      t.props.muted && t.player.mute())
                  }
                  ), this.props.onError)
              }
          }, {
              key: "play",
              value: function() {
                  this.callPlayer("play")
              }
          }, {
              key: "pause",
              value: function() {
                  this.callPlayer("pause")
              }
          }, {
              key: "stop",
              value: function() {}
          }, {
              key: "seekTo",
              value: function(e) {
                  this.callPlayer("setCurrentTime", e)
              }
          }, {
              key: "setVolume",
              value: function(e) {
                  this.callPlayer("setVolume", 100 * e)
              }
          }, {
              key: "setLoop",
              value: function(e) {
                  this.callPlayer("setLoop", e)
              }
          }, {
              key: "getDuration",
              value: function() {
                  return this.duration
              }
          }, {
              key: "getCurrentTime",
              value: function() {
                  return this.currentTime
              }
          }, {
              key: "getSecondsLoaded",
              value: function() {
                  return this.secondsLoaded
              }
          }, {
              key: "render",
              value: function() {
                  var e = this.props.url.match(a.MATCH_URL_STREAMABLE)[1];
                  return o.default.createElement("iframe", {
                      ref: this.ref,
                      src: "https://streamable.com/o/".concat(e),
                      frameBorder: "0",
                      scrolling: "no",
                      style: {
                          width: "100%",
                          height: "100%"
                      },
                      allow: "encrypted-media; autoplay; fullscreen;"
                  })
              }
          }]) && u(t.prototype, r),
          n && u(t, n),
          d
      }(o.Component);
      t.default = m,
      h(m, "displayName", "Streamable"),
      h(m, "canPlay", a.canPlay.streamable)
  }
  ,
  9482: (e,t,r)=>{
      "use strict";
      function n(e) {
          return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
              return typeof e
          }
          : function(e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          }
          ,
          n(e)
      }
      Object.defineProperty(t, "__esModule", {
          value: !0
      }),
      t.default = void 0;
      var o = function(e) {
          if (e && e.__esModule)
              return e;
          if (null === e || "object" !== n(e) && "function" != typeof e)
              return {
                  default: e
              };
          var t = s();
          if (t && t.has(e))
              return t.get(e);
          var r = {}
            , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var i in e)
              if (Object.prototype.hasOwnProperty.call(e, i)) {
                  var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
                  a && (a.get || a.set) ? Object.defineProperty(r, i, a) : r[i] = e[i]
              }
          r.default = e,
          t && t.set(e, r);
          return r
      }(r(7294))
        , i = r(8045)
        , a = r(1776);
      function s() {
          if ("function" != typeof WeakMap)
              return null;
          var e = new WeakMap;
          return s = function() {
              return e
          }
          ,
          e
      }
      function l(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              t && (n = n.filter((function(t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable
              }
              ))),
              r.push.apply(r, n)
          }
          return r
      }
      function u(e, t) {
          if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function")
      }
      function c(e, t) {
          for (var r = 0; r < t.length; r++) {
              var n = t[r];
              n.enumerable = n.enumerable || !1,
              n.configurable = !0,
              "value"in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n)
          }
      }
      function p(e, t) {
          return p = Object.setPrototypeOf || function(e, t) {
              return e.__proto__ = t,
              e
          }
          ,
          p(e, t)
      }
      function d(e) {
          var t = function() {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                  return !1;
              if (Reflect.construct.sham)
                  return !1;
              if ("function" == typeof Proxy)
                  return !0;
              try {
                  return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                  ))),
                  !0
              } catch (e) {
                  return !1
              }
          }();
          return function() {
              var r, n = h(e);
              if (t) {
                  var o = h(this).constructor;
                  r = Reflect.construct(n, arguments, o)
              } else
                  r = n.apply(this, arguments);
              return f(this, r)
          }
      }
      function f(e, t) {
          return !t || "object" !== n(t) && "function" != typeof t ? y(e) : t
      }
      function y(e) {
          if (void 0 === e)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e
      }
      function h(e) {
          return h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e)
          }
          ,
          h(e)
      }
      function m(e, t, r) {
          return t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[t] = r,
          e
      }
      var v = "twitch-player-"
        , g = function(e) {
          !function(e, t) {
              if ("function" != typeof t && null !== t)
                  throw new TypeError("Super expression must either be null or a function");
              e.prototype = Object.create(t && t.prototype, {
                  constructor: {
                      value: e,
                      writable: !0,
                      configurable: !0
                  }
              }),
              t && p(e, t)
          }(f, e);
          var t, r, n, s = d(f);
          function f() {
              var e;
              u(this, f);
              for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
                  r[n] = arguments[n];
              return m(y(e = s.call.apply(s, [this].concat(r))), "callPlayer", i.callPlayer),
              m(y(e), "playerID", e.props.config.playerId || "".concat(v).concat((0,
              i.randomString)())),
              m(y(e), "mute", (function() {
                  e.callPlayer("setMuted", !0)
              }
              )),
              m(y(e), "unmute", (function() {
                  e.callPlayer("setMuted", !1)
              }
              )),
              e
          }
          return t = f,
          r = [{
              key: "componentDidMount",
              value: function() {
                  this.props.onMount && this.props.onMount(this)
              }
          }, {
              key: "load",
              value: function(e, t) {
                  var r = this
                    , n = this.props
                    , o = n.playsinline
                    , s = n.onError
                    , u = n.config
                    , c = n.controls
                    , p = a.MATCH_URL_TWITCH_CHANNEL.test(e)
                    , d = p ? e.match(a.MATCH_URL_TWITCH_CHANNEL)[1] : e.match(a.MATCH_URL_TWITCH_VIDEO)[1];
                  t ? p ? this.player.setChannel(d) : this.player.setVideo("v" + d) : (0,
                  i.getSDK)("https://player.twitch.tv/js/embed/v1.js", "Twitch").then((function(t) {
                      r.player = new t.Player(r.playerID,function(e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var r = null != arguments[t] ? arguments[t] : {};
                              t % 2 ? l(Object(r), !0).forEach((function(t) {
                                  m(e, t, r[t])
                              }
                              )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : l(Object(r)).forEach((function(t) {
                                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                              }
                              ))
                          }
                          return e
                      }({
                          video: p ? "" : d,
                          channel: p ? d : "",
                          height: "100%",
                          width: "100%",
                          playsinline: o,
                          autoplay: r.props.playing,
                          muted: r.props.muted,
                          controls: !!p || c,
                          time: (0,
                          i.parseStartTime)(e)
                      }, u.options));
                      var n = t.Player
                        , a = n.READY
                        , s = n.PLAYING
                        , f = n.PAUSE
                        , y = n.ENDED
                        , h = n.ONLINE
                        , v = n.OFFLINE
                        , g = n.SEEK;
                      r.player.addEventListener(a, r.props.onReady),
                      r.player.addEventListener(s, r.props.onPlay),
                      r.player.addEventListener(f, r.props.onPause),
                      r.player.addEventListener(y, r.props.onEnded),
                      r.player.addEventListener(g, r.props.onSeek),
                      r.player.addEventListener(h, r.props.onLoaded),
                      r.player.addEventListener(v, r.props.onLoaded)
                  }
                  ), s)
              }
          }, {
              key: "play",
              value: function() {
                  this.callPlayer("play")
              }
          }, {
              key: "pause",
              value: function() {
                  this.callPlayer("pause")
              }
          }, {
              key: "stop",
              value: function() {
                  this.callPlayer("pause")
              }
          }, {
              key: "seekTo",
              value: function(e) {
                  this.callPlayer("seek", e)
              }
          }, {
              key: "setVolume",
              value: function(e) {
                  this.callPlayer("setVolume", e)
              }
          }, {
              key: "getDuration",
              value: function() {
                  return this.callPlayer("getDuration")
              }
          }, {
              key: "getCurrentTime",
              value: function() {
                  return this.callPlayer("getCurrentTime")
              }
          }, {
              key: "getSecondsLoaded",
              value: function() {
                  return null
              }
          }, {
              key: "render",
              value: function() {
                  return o.default.createElement("div", {
                      style: {
                          width: "100%",
                          height: "100%"
                      },
                      id: this.playerID
                  })
              }
          }],
          r && c(t.prototype, r),
          n && c(t, n),
          f
      }(o.Component);
      t.default = g,
      m(g, "displayName", "Twitch"),
      m(g, "canPlay", a.canPlay.twitch),
      m(g, "loopOnEnded", !0)
  }
  ,
  6596: (e,t,r)=>{
      "use strict";
      function n(e) {
          return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
              return typeof e
          }
          : function(e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          }
          ,
          n(e)
      }
      Object.defineProperty(t, "__esModule", {
          value: !0
      }),
      t.default = void 0;
      var o = function(e) {
          if (e && e.__esModule)
              return e;
          if (null === e || "object" !== n(e) && "function" != typeof e)
              return {
                  default: e
              };
          var t = s();
          if (t && t.has(e))
              return t.get(e);
          var r = {}
            , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var i in e)
              if (Object.prototype.hasOwnProperty.call(e, i)) {
                  var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
                  a && (a.get || a.set) ? Object.defineProperty(r, i, a) : r[i] = e[i]
              }
          r.default = e,
          t && t.set(e, r);
          return r
      }(r(7294))
        , i = r(8045)
        , a = r(1776);
      function s() {
          if ("function" != typeof WeakMap)
              return null;
          var e = new WeakMap;
          return s = function() {
              return e
          }
          ,
          e
      }
      function l(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              t && (n = n.filter((function(t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable
              }
              ))),
              r.push.apply(r, n)
          }
          return r
      }
      function u(e, t) {
          if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function")
      }
      function c(e, t) {
          for (var r = 0; r < t.length; r++) {
              var n = t[r];
              n.enumerable = n.enumerable || !1,
              n.configurable = !0,
              "value"in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n)
          }
      }
      function p(e, t) {
          return p = Object.setPrototypeOf || function(e, t) {
              return e.__proto__ = t,
              e
          }
          ,
          p(e, t)
      }
      function d(e) {
          var t = function() {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                  return !1;
              if (Reflect.construct.sham)
                  return !1;
              if ("function" == typeof Proxy)
                  return !0;
              try {
                  return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                  ))),
                  !0
              } catch (e) {
                  return !1
              }
          }();
          return function() {
              var r, n = h(e);
              if (t) {
                  var o = h(this).constructor;
                  r = Reflect.construct(n, arguments, o)
              } else
                  r = n.apply(this, arguments);
              return f(this, r)
          }
      }
      function f(e, t) {
          return !t || "object" !== n(t) && "function" != typeof t ? y(e) : t
      }
      function y(e) {
          if (void 0 === e)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e
      }
      function h(e) {
          return h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e)
          }
          ,
          h(e)
      }
      function m(e, t, r) {
          return t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[t] = r,
          e
      }
      var v = function(e) {
          !function(e, t) {
              if ("function" != typeof t && null !== t)
                  throw new TypeError("Super expression must either be null or a function");
              e.prototype = Object.create(t && t.prototype, {
                  constructor: {
                      value: e,
                      writable: !0,
                      configurable: !0
                  }
              }),
              t && p(e, t)
          }(f, e);
          var t, r, n, s = d(f);
          function f() {
              var e;
              u(this, f);
              for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
                  r[n] = arguments[n];
              return m(y(e = s.call.apply(s, [this].concat(r))), "callPlayer", i.callPlayer),
              m(y(e), "mute", (function() {
                  e.setVolume(0)
              }
              )),
              m(y(e), "unmute", (function() {
                  null !== e.props.volume && e.setVolume(e.props.volume)
              }
              )),
              m(y(e), "ref", (function(t) {
                  e.container = t
              }
              )),
              e
          }
          return t = f,
          r = [{
              key: "componentDidMount",
              value: function() {
                  this.props.onMount && this.props.onMount(this)
              }
          }, {
              key: "load",
              value: function(e) {
                  var t = this
                    , r = this.props
                    , n = r.playing
                    , o = r.config
                    , s = r.onError
                    , u = r.onDuration
                    , c = e && e.match(a.MATCH_URL_VIDYARD)[1];
                  this.player && this.stop(),
                  (0,
                  i.getSDK)("https://play.vidyard.com/embed/v4.js", "VidyardV4", "onVidyardAPI").then((function(e) {
                      t.container && (e.api.addReadyListener((function(e, r) {
                          t.player || (t.player = r,
                          t.player.on("ready", t.props.onReady),
                          t.player.on("play", t.props.onPlay),
                          t.player.on("pause", t.props.onPause),
                          t.player.on("seek", t.props.onSeek),
                          t.player.on("playerComplete", t.props.onEnded))
                      }
                      ), c),
                      e.api.renderPlayer(function(e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var r = null != arguments[t] ? arguments[t] : {};
                              t % 2 ? l(Object(r), !0).forEach((function(t) {
                                  m(e, t, r[t])
                              }
                              )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : l(Object(r)).forEach((function(t) {
                                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                              }
                              ))
                          }
                          return e
                      }({
                          uuid: c,
                          container: t.container,
                          autoplay: n ? 1 : 0
                      }, o.options)),
                      e.api.getPlayerMetadata(c).then((function(e) {
                          t.duration = e.length_in_seconds,
                          u(e.length_in_seconds)
                      }
                      )))
                  }
                  ), s)
              }
          }, {
              key: "play",
              value: function() {
                  this.callPlayer("play")
              }
          }, {
              key: "pause",
              value: function() {
                  this.callPlayer("pause")
              }
          }, {
              key: "stop",
              value: function() {
                  window.VidyardV4.api.destroyPlayer(this.player)
              }
          }, {
              key: "seekTo",
              value: function(e) {
                  this.callPlayer("seek", e)
              }
          }, {
              key: "setVolume",
              value: function(e) {
                  this.callPlayer("setVolume", e)
              }
          }, {
              key: "setPlaybackRate",
              value: function(e) {
                  this.callPlayer("setPlaybackSpeed", e)
              }
          }, {
              key: "getDuration",
              value: function() {
                  return this.duration
              }
          }, {
              key: "getCurrentTime",
              value: function() {
                  return this.callPlayer("currentTime")
              }
          }, {
              key: "getSecondsLoaded",
              value: function() {
                  return null
              }
          }, {
              key: "render",
              value: function() {
                  var e = {
                      width: "100%",
                      height: "100%",
                      display: this.props.display
                  };
                  return o.default.createElement("div", {
                      style: e
                  }, o.default.createElement("div", {
                      ref: this.ref
                  }))
              }
          }],
          r && c(t.prototype, r),
          n && c(t, n),
          f
      }(o.Component);
      t.default = v,
      m(v, "displayName", "Vidyard"),
      m(v, "canPlay", a.canPlay.vidyard)
  }
  ,
  868: (e,t,r)=>{
      "use strict";
      function n(e) {
          return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
              return typeof e
          }
          : function(e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          }
          ,
          n(e)
      }
      Object.defineProperty(t, "__esModule", {
          value: !0
      }),
      t.default = void 0;
      var o = function(e) {
          if (e && e.__esModule)
              return e;
          if (null === e || "object" !== n(e) && "function" != typeof e)
              return {
                  default: e
              };
          var t = s();
          if (t && t.has(e))
              return t.get(e);
          var r = {}
            , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var i in e)
              if (Object.prototype.hasOwnProperty.call(e, i)) {
                  var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
                  a && (a.get || a.set) ? Object.defineProperty(r, i, a) : r[i] = e[i]
              }
          r.default = e,
          t && t.set(e, r);
          return r
      }(r(7294))
        , i = r(8045)
        , a = r(1776);
      function s() {
          if ("function" != typeof WeakMap)
              return null;
          var e = new WeakMap;
          return s = function() {
              return e
          }
          ,
          e
      }
      function l(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              t && (n = n.filter((function(t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable
              }
              ))),
              r.push.apply(r, n)
          }
          return r
      }
      function u(e, t) {
          if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function")
      }
      function c(e, t) {
          for (var r = 0; r < t.length; r++) {
              var n = t[r];
              n.enumerable = n.enumerable || !1,
              n.configurable = !0,
              "value"in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n)
          }
      }
      function p(e, t) {
          return p = Object.setPrototypeOf || function(e, t) {
              return e.__proto__ = t,
              e
          }
          ,
          p(e, t)
      }
      function d(e) {
          var t = function() {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                  return !1;
              if (Reflect.construct.sham)
                  return !1;
              if ("function" == typeof Proxy)
                  return !0;
              try {
                  return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                  ))),
                  !0
              } catch (e) {
                  return !1
              }
          }();
          return function() {
              var r, n = h(e);
              if (t) {
                  var o = h(this).constructor;
                  r = Reflect.construct(n, arguments, o)
              } else
                  r = n.apply(this, arguments);
              return f(this, r)
          }
      }
      function f(e, t) {
          return !t || "object" !== n(t) && "function" != typeof t ? y(e) : t
      }
      function y(e) {
          if (void 0 === e)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e
      }
      function h(e) {
          return h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e)
          }
          ,
          h(e)
      }
      function m(e, t, r) {
          return t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[t] = r,
          e
      }
      var v = function(e) {
          !function(e, t) {
              if ("function" != typeof t && null !== t)
                  throw new TypeError("Super expression must either be null or a function");
              e.prototype = Object.create(t && t.prototype, {
                  constructor: {
                      value: e,
                      writable: !0,
                      configurable: !0
                  }
              }),
              t && p(e, t)
          }(s, e);
          var t, r, n, a = d(s);
          function s() {
              var e;
              u(this, s);
              for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
                  r[n] = arguments[n];
              return m(y(e = a.call.apply(a, [this].concat(r))), "callPlayer", i.callPlayer),
              m(y(e), "duration", null),
              m(y(e), "currentTime", null),
              m(y(e), "secondsLoaded", null),
              m(y(e), "mute", (function() {
                  e.setVolume(0)
              }
              )),
              m(y(e), "unmute", (function() {
                  null !== e.props.volume && e.setVolume(e.props.volume)
              }
              )),
              m(y(e), "ref", (function(t) {
                  e.container = t
              }
              )),
              e
          }
          return t = s,
          r = [{
              key: "componentDidMount",
              value: function() {
                  this.props.onMount && this.props.onMount(this)
              }
          }, {
              key: "load",
              value: function(e) {
                  var t = this;
                  this.duration = null,
                  (0,
                  i.getSDK)("https://player.vimeo.com/api/player.js", "Vimeo").then((function(r) {
                      if (t.container) {
                          var n = t.props.config
                            , o = n.playerOptions
                            , i = n.title;
                          t.player = new r.Player(t.container,function(e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var r = null != arguments[t] ? arguments[t] : {};
                                  t % 2 ? l(Object(r), !0).forEach((function(t) {
                                      m(e, t, r[t])
                                  }
                                  )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : l(Object(r)).forEach((function(t) {
                                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                  }
                                  ))
                              }
                              return e
                          }({
                              url: e,
                              autoplay: t.props.playing,
                              muted: t.props.muted,
                              loop: t.props.loop,
                              playsinline: t.props.playsinline,
                              controls: t.props.controls
                          }, o)),
                          t.player.ready().then((function() {
                              var e = t.container.querySelector("iframe");
                              e.style.width = "100%",
                              e.style.height = "100%",
                              i && (e.title = i)
                          }
                          )).catch(t.props.onError),
                          t.player.on("loaded", (function() {
                              t.props.onReady(),
                              t.refreshDuration()
                          }
                          )),
                          t.player.on("play", (function() {
                              t.props.onPlay(),
                              t.refreshDuration()
                          }
                          )),
                          t.player.on("pause", t.props.onPause),
                          t.player.on("seeked", (function(e) {
                              return t.props.onSeek(e.seconds)
                          }
                          )),
                          t.player.on("ended", t.props.onEnded),
                          t.player.on("error", t.props.onError),
                          t.player.on("timeupdate", (function(e) {
                              var r = e.seconds;
                              t.currentTime = r
                          }
                          )),
                          t.player.on("progress", (function(e) {
                              var r = e.seconds;
                              t.secondsLoaded = r
                          }
                          )),
                          t.player.on("bufferstart", t.props.onBuffer),
                          t.player.on("bufferend", t.props.onBufferEnd),
                          t.player.on("playbackratechange", (function(e) {
                              return t.props.onPlaybackRateChange(e.playbackRate)
                          }
                          ))
                      }
                  }
                  ), this.props.onError)
              }
          }, {
              key: "refreshDuration",
              value: function() {
                  var e = this;
                  this.player.getDuration().then((function(t) {
                      e.duration = t
                  }
                  ))
              }
          }, {
              key: "play",
              value: function() {
                  var e = this.callPlayer("play");
                  e && e.catch(this.props.onError)
              }
          }, {
              key: "pause",
              value: function() {
                  this.callPlayer("pause")
              }
          }, {
              key: "stop",
              value: function() {
                  this.callPlayer("unload")
              }
          }, {
              key: "seekTo",
              value: function(e) {
                  this.callPlayer("setCurrentTime", e)
              }
          }, {
              key: "setVolume",
              value: function(e) {
                  this.callPlayer("setVolume", e)
              }
          }, {
              key: "setLoop",
              value: function(e) {
                  this.callPlayer("setLoop", e)
              }
          }, {
              key: "setPlaybackRate",
              value: function(e) {
                  this.callPlayer("setPlaybackRate", e)
              }
          }, {
              key: "getDuration",
              value: function() {
                  return this.duration
              }
          }, {
              key: "getCurrentTime",
              value: function() {
                  return this.currentTime
              }
          }, {
              key: "getSecondsLoaded",
              value: function() {
                  return this.secondsLoaded
              }
          }, {
              key: "render",
              value: function() {
                  var e = {
                      width: "100%",
                      height: "100%",
                      overflow: "hidden",
                      display: this.props.display
                  };
                  return o.default.createElement("div", {
                      key: this.props.url,
                      ref: this.ref,
                      style: e
                  })
              }
          }],
          r && c(t.prototype, r),
          n && c(t, n),
          s
      }(o.Component);
      t.default = v,
      m(v, "displayName", "Vimeo"),
      m(v, "canPlay", a.canPlay.vimeo),
      m(v, "forceLoad", !0)
  }
  ,
  8018: (e,t,r)=>{
      "use strict";
      function n(e) {
          return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
              return typeof e
          }
          : function(e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          }
          ,
          n(e)
      }
      Object.defineProperty(t, "__esModule", {
          value: !0
      }),
      t.default = void 0;
      var o = function(e) {
          if (e && e.__esModule)
              return e;
          if (null === e || "object" !== n(e) && "function" != typeof e)
              return {
                  default: e
              };
          var t = s();
          if (t && t.has(e))
              return t.get(e);
          var r = {}
            , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var i in e)
              if (Object.prototype.hasOwnProperty.call(e, i)) {
                  var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
                  a && (a.get || a.set) ? Object.defineProperty(r, i, a) : r[i] = e[i]
              }
          r.default = e,
          t && t.set(e, r);
          return r
      }(r(7294))
        , i = r(8045)
        , a = r(1776);
      function s() {
          if ("function" != typeof WeakMap)
              return null;
          var e = new WeakMap;
          return s = function() {
              return e
          }
          ,
          e
      }
      function l(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              t && (n = n.filter((function(t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable
              }
              ))),
              r.push.apply(r, n)
          }
          return r
      }
      function u(e) {
          for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2 ? l(Object(r), !0).forEach((function(t) {
                  v(e, t, r[t])
              }
              )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : l(Object(r)).forEach((function(t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              }
              ))
          }
          return e
      }
      function c(e, t) {
          if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function")
      }
      function p(e, t) {
          for (var r = 0; r < t.length; r++) {
              var n = t[r];
              n.enumerable = n.enumerable || !1,
              n.configurable = !0,
              "value"in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n)
          }
      }
      function d(e, t) {
          return d = Object.setPrototypeOf || function(e, t) {
              return e.__proto__ = t,
              e
          }
          ,
          d(e, t)
      }
      function f(e) {
          var t = function() {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                  return !1;
              if (Reflect.construct.sham)
                  return !1;
              if ("function" == typeof Proxy)
                  return !0;
              try {
                  return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                  ))),
                  !0
              } catch (e) {
                  return !1
              }
          }();
          return function() {
              var r, n = m(e);
              if (t) {
                  var o = m(this).constructor;
                  r = Reflect.construct(n, arguments, o)
              } else
                  r = n.apply(this, arguments);
              return y(this, r)
          }
      }
      function y(e, t) {
          return !t || "object" !== n(t) && "function" != typeof t ? h(e) : t
      }
      function h(e) {
          if (void 0 === e)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e
      }
      function m(e) {
          return m = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e)
          }
          ,
          m(e)
      }
      function v(e, t, r) {
          return t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[t] = r,
          e
      }
      var g = "wistia-player-"
        , b = function(e) {
          !function(e, t) {
              if ("function" != typeof t && null !== t)
                  throw new TypeError("Super expression must either be null or a function");
              e.prototype = Object.create(t && t.prototype, {
                  constructor: {
                      value: e,
                      writable: !0,
                      configurable: !0
                  }
              }),
              t && d(e, t)
          }(l, e);
          var t, r, n, s = f(l);
          function l() {
              var e;
              c(this, l);
              for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
                  r[n] = arguments[n];
              return v(h(e = s.call.apply(s, [this].concat(r))), "callPlayer", i.callPlayer),
              v(h(e), "playerID", e.props.config.playerId || "".concat(g).concat((0,
              i.randomString)())),
              v(h(e), "onPlay", (function() {
                  var t;
                  return (t = e.props).onPlay.apply(t, arguments)
              }
              )),
              v(h(e), "onPause", (function() {
                  var t;
                  return (t = e.props).onPause.apply(t, arguments)
              }
              )),
              v(h(e), "onSeek", (function() {
                  var t;
                  return (t = e.props).onSeek.apply(t, arguments)
              }
              )),
              v(h(e), "onEnded", (function() {
                  var t;
                  return (t = e.props).onEnded.apply(t, arguments)
              }
              )),
              v(h(e), "onPlaybackRateChange", (function() {
                  var t;
                  return (t = e.props).onPlaybackRateChange.apply(t, arguments)
              }
              )),
              v(h(e), "mute", (function() {
                  e.callPlayer("mute")
              }
              )),
              v(h(e), "unmute", (function() {
                  e.callPlayer("unmute")
              }
              )),
              e
          }
          return t = l,
          r = [{
              key: "componentDidMount",
              value: function() {
                  this.props.onMount && this.props.onMount(this)
              }
          }, {
              key: "load",
              value: function(e) {
                  var t = this
                    , r = this.props
                    , n = r.playing
                    , o = r.muted
                    , a = r.controls
                    , s = r.onReady
                    , l = r.config
                    , c = r.onError;
                  (0,
                  i.getSDK)("https://fast.wistia.com/assets/external/E-v1.js", "Wistia").then((function(e) {
                      l.customControls && l.customControls.forEach((function(t) {
                          return e.defineControl(t)
                      }
                      )),
                      window._wq = window._wq || [],
                      window._wq.push({
                          id: t.playerID,
                          options: u({
                              autoPlay: n,
                              silentAutoPlay: "allow",
                              muted: o,
                              controlsVisibleOnLoad: a,
                              fullscreenButton: a,
                              playbar: a,
                              playbackRateControl: a,
                              qualityControl: a,
                              volumeControl: a,
                              settingsControl: a,
                              smallPlayButton: a
                          }, l.options),
                          onReady: function(e) {
                              t.player = e,
                              t.unbind(),
                              t.player.bind("play", t.onPlay),
                              t.player.bind("pause", t.onPause),
                              t.player.bind("seek", t.onSeek),
                              t.player.bind("end", t.onEnded),
                              t.player.bind("playbackratechange", t.onPlaybackRateChange),
                              s()
                          }
                      })
                  }
                  ), c)
              }
          }, {
              key: "unbind",
              value: function() {
                  this.player.unbind("play", this.onPlay),
                  this.player.unbind("pause", this.onPause),
                  this.player.unbind("seek", this.onSeek),
                  this.player.unbind("end", this.onEnded),
                  this.player.unbind("playbackratechange", this.onPlaybackRateChange)
              }
          }, {
              key: "play",
              value: function() {
                  this.callPlayer("play")
              }
          }, {
              key: "pause",
              value: function() {
                  this.callPlayer("pause")
              }
          }, {
              key: "stop",
              value: function() {
                  this.unbind(),
                  this.callPlayer("remove")
              }
          }, {
              key: "seekTo",
              value: function(e) {
                  this.callPlayer("time", e)
              }
          }, {
              key: "setVolume",
              value: function(e) {
                  this.callPlayer("volume", e)
              }
          }, {
              key: "setPlaybackRate",
              value: function(e) {
                  this.callPlayer("playbackRate", e)
              }
          }, {
              key: "getDuration",
              value: function() {
                  return this.callPlayer("duration")
              }
          }, {
              key: "getCurrentTime",
              value: function() {
                  return this.callPlayer("time")
              }
          }, {
              key: "getSecondsLoaded",
              value: function() {
                  return null
              }
          }, {
              key: "render",
              value: function() {
                  var e = this.props.url
                    , t = e && e.match(a.MATCH_URL_WISTIA)[1]
                    , r = "wistia_embed wistia_async_".concat(t);
                  return o.default.createElement("div", {
                      id: this.playerID,
                      key: t,
                      className: r,
                      style: {
                          width: "100%",
                          height: "100%"
                      }
                  })
              }
          }],
          r && p(t.prototype, r),
          n && p(t, n),
          l
      }(o.Component);
      t.default = b,
      v(b, "displayName", "Wistia"),
      v(b, "canPlay", a.canPlay.wistia),
      v(b, "loopOnEnded", !0)
  }
  ,
  356: (e,t,r)=>{
      "use strict";
      function n(e) {
          return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
              return typeof e
          }
          : function(e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          }
          ,
          n(e)
      }
      Object.defineProperty(t, "__esModule", {
          value: !0
      }),
      t.default = void 0;
      var o = function(e) {
          if (e && e.__esModule)
              return e;
          if (null === e || "object" !== n(e) && "function" != typeof e)
              return {
                  default: e
              };
          var t = s();
          if (t && t.has(e))
              return t.get(e);
          var r = {}
            , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var i in e)
              if (Object.prototype.hasOwnProperty.call(e, i)) {
                  var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
                  a && (a.get || a.set) ? Object.defineProperty(r, i, a) : r[i] = e[i]
              }
          r.default = e,
          t && t.set(e, r);
          return r
      }(r(7294))
        , i = r(8045)
        , a = r(1776);
      function s() {
          if ("function" != typeof WeakMap)
              return null;
          var e = new WeakMap;
          return s = function() {
              return e
          }
          ,
          e
      }
      function l(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              t && (n = n.filter((function(t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable
              }
              ))),
              r.push.apply(r, n)
          }
          return r
      }
      function u(e) {
          for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2 ? l(Object(r), !0).forEach((function(t) {
                  b(e, t, r[t])
              }
              )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : l(Object(r)).forEach((function(t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              }
              ))
          }
          return e
      }
      function c(e, t) {
          return function(e) {
              if (Array.isArray(e))
                  return e
          }(e) || function(e, t) {
              if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
                  return;
              var r = []
                , n = !0
                , o = !1
                , i = void 0;
              try {
                  for (var a, s = e[Symbol.iterator](); !(n = (a = s.next()).done) && (r.push(a.value),
                  !t || r.length !== t); n = !0)
                      ;
              } catch (e) {
                  o = !0,
                  i = e
              } finally {
                  try {
                      n || null == s.return || s.return()
                  } finally {
                      if (o)
                          throw i
                  }
              }
              return r
          }(e, t) || function(e, t) {
              if (!e)
                  return;
              if ("string" == typeof e)
                  return p(e, t);
              var r = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === r && e.constructor && (r = e.constructor.name);
              if ("Map" === r || "Set" === r)
                  return Array.from(e);
              if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                  return p(e, t)
          }(e, t) || function() {
              throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }()
      }
      function p(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = new Array(t); r < t; r++)
              n[r] = e[r];
          return n
      }
      function d(e, t) {
          if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function")
      }
      function f(e, t) {
          for (var r = 0; r < t.length; r++) {
              var n = t[r];
              n.enumerable = n.enumerable || !1,
              n.configurable = !0,
              "value"in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n)
          }
      }
      function y(e, t) {
          return y = Object.setPrototypeOf || function(e, t) {
              return e.__proto__ = t,
              e
          }
          ,
          y(e, t)
      }
      function h(e) {
          var t = function() {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                  return !1;
              if (Reflect.construct.sham)
                  return !1;
              if ("function" == typeof Proxy)
                  return !0;
              try {
                  return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                  ))),
                  !0
              } catch (e) {
                  return !1
              }
          }();
          return function() {
              var r, n = g(e);
              if (t) {
                  var o = g(this).constructor;
                  r = Reflect.construct(n, arguments, o)
              } else
                  r = n.apply(this, arguments);
              return m(this, r)
          }
      }
      function m(e, t) {
          return !t || "object" !== n(t) && "function" != typeof t ? v(e) : t
      }
      function v(e) {
          if (void 0 === e)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e
      }
      function g(e) {
          return g = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e)
          }
          ,
          g(e)
      }
      function b(e, t, r) {
          return t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[t] = r,
          e
      }
      var w = "YT"
        , P = /[?&](?:list|channel)=([a-zA-Z0-9_-]+)/
        , O = /user\/([a-zA-Z0-9_-]+)\/?/
        , S = /youtube-nocookie\.com/
        , E = function(e) {
          !function(e, t) {
              if ("function" != typeof t && null !== t)
                  throw new TypeError("Super expression must either be null or a function");
              e.prototype = Object.create(t && t.prototype, {
                  constructor: {
                      value: e,
                      writable: !0,
                      configurable: !0
                  }
              }),
              t && y(e, t)
          }(l, e);
          var t, r, n, s = h(l);
          function l() {
              var e;
              d(this, l);
              for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
                  r[n] = arguments[n];
              return b(v(e = s.call.apply(s, [this].concat(r))), "callPlayer", i.callPlayer),
              b(v(e), "parsePlaylist", (function(t) {
                  return t instanceof Array ? {
                      listType: "playlist",
                      playlist: t.map(e.getID).join(",")
                  } : P.test(t) ? {
                      listType: "playlist",
                      list: c(t.match(P), 2)[1].replace(/^UC/, "UU")
                  } : O.test(t) ? {
                      listType: "user_uploads",
                      list: c(t.match(O), 2)[1]
                  } : {}
              }
              )),
              b(v(e), "onStateChange", (function(t) {
                  var r = t.data
                    , n = e.props
                    , o = n.onPlay
                    , i = n.onPause
                    , a = n.onBuffer
                    , s = n.onBufferEnd
                    , l = n.onEnded
                    , u = n.onReady
                    , c = n.loop
                    , p = n.config
                    , d = p.playerVars
                    , f = p.onUnstarted
                    , y = window.YT.PlayerState
                    , h = y.UNSTARTED
                    , m = y.PLAYING
                    , v = y.PAUSED
                    , g = y.BUFFERING
                    , b = y.ENDED
                    , w = y.CUED;
                  if (r === h && f(),
                  r === m && (o(),
                  s()),
                  r === v && i(),
                  r === g && a(),
                  r === b) {
                      var P = !!e.callPlayer("getPlaylist");
                      c && !P && (d.start ? e.seekTo(d.start) : e.play()),
                      l()
                  }
                  r === w && u()
              }
              )),
              b(v(e), "mute", (function() {
                  e.callPlayer("mute")
              }
              )),
              b(v(e), "unmute", (function() {
                  e.callPlayer("unMute")
              }
              )),
              b(v(e), "ref", (function(t) {
                  e.container = t
              }
              )),
              e
          }
          return t = l,
          (r = [{
              key: "componentDidMount",
              value: function() {
                  this.props.onMount && this.props.onMount(this)
              }
          }, {
              key: "getID",
              value: function(e) {
                  return !e || e instanceof Array || P.test(e) ? null : e.match(a.MATCH_URL_YOUTUBE)[1]
              }
          }, {
              key: "load",
              value: function(e, t) {
                  var r = this
                    , n = this.props
                    , o = n.playing
                    , a = n.muted
                    , s = n.playsinline
                    , l = n.controls
                    , c = n.loop
                    , p = n.config
                    , d = n.onError
                    , f = p.playerVars
                    , y = p.embedOptions
                    , h = this.getID(e);
                  if (t)
                      return P.test(e) || O.test(e) || e instanceof Array ? void this.player.loadPlaylist(this.parsePlaylist(e)) : void this.player.cueVideoById({
                          videoId: h,
                          startSeconds: (0,
                          i.parseStartTime)(e) || f.start,
                          endSeconds: (0,
                          i.parseEndTime)(e) || f.end
                      });
                  (0,
                  i.getSDK)("https://www.youtube.com/iframe_api", w, "onYouTubeIframeAPIReady", (function(e) {
                      return e.loaded
                  }
                  )).then((function(t) {
                      r.container && (r.player = new t.Player(r.container,u({
                          width: "100%",
                          height: "100%",
                          videoId: h,
                          playerVars: u(u({
                              autoplay: o ? 1 : 0,
                              mute: a ? 1 : 0,
                              controls: l ? 1 : 0,
                              start: (0,
                              i.parseStartTime)(e),
                              end: (0,
                              i.parseEndTime)(e),
                              origin: window.location.origin,
                              playsinline: s ? 1 : 0
                          }, r.parsePlaylist(e)), f),
                          events: {
                              onReady: function() {
                                  c && r.player.setLoop(!0),
                                  r.props.onReady()
                              },
                              onPlaybackRateChange: function(e) {
                                  return r.props.onPlaybackRateChange(e.data)
                              },
                              onStateChange: r.onStateChange,
                              onError: function(e) {
                                  return d(e.data)
                              }
                          },
                          host: S.test(e) ? "https://www.youtube-nocookie.com" : void 0
                      }, y)))
                  }
                  ), d),
                  y.events && console.warn("Using `embedOptions.events` will likely break things. Use ReactPlayer’s callback props instead, eg onReady, onPlay, onPause")
              }
          }, {
              key: "play",
              value: function() {
                  this.callPlayer("playVideo")
              }
          }, {
              key: "pause",
              value: function() {
                  this.callPlayer("pauseVideo")
              }
          }, {
              key: "stop",
              value: function() {
                  document.body.contains(this.callPlayer("getIframe")) && this.callPlayer("stopVideo")
              }
          }, {
              key: "seekTo",
              value: function(e) {
                  this.callPlayer("seekTo", e),
                  this.props.playing || this.pause()
              }
          }, {
              key: "setVolume",
              value: function(e) {
                  this.callPlayer("setVolume", 100 * e)
              }
          }, {
              key: "setPlaybackRate",
              value: function(e) {
                  this.callPlayer("setPlaybackRate", e)
              }
          }, {
              key: "setLoop",
              value: function(e) {
                  this.callPlayer("setLoop", e)
              }
          }, {
              key: "getDuration",
              value: function() {
                  return this.callPlayer("getDuration")
              }
          }, {
              key: "getCurrentTime",
              value: function() {
                  return this.callPlayer("getCurrentTime")
              }
          }, {
              key: "getSecondsLoaded",
              value: function() {
                  return this.callPlayer("getVideoLoadedFraction") * this.getDuration()
              }
          }, {
              key: "render",
              value: function() {
                  var e = {
                      width: "100%",
                      height: "100%",
                      display: this.props.display
                  };
                  return o.default.createElement("div", {
                      style: e
                  }, o.default.createElement("div", {
                      ref: this.ref
                  }))
              }
          }]) && f(t.prototype, r),
          n && f(t, n),
          l
      }(o.Component);
      t.default = E,
      b(E, "displayName", "YouTube"),
      b(E, "canPlay", a.canPlay.youtube)
  }
  ,
  6497: (e,t,r)=>{
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      }),
      t.default = void 0;
      var n = r(7294)
        , o = r(8045)
        , i = r(1776);
      function a(e) {
          return a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
              return typeof e
          }
          : function(e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          }
          ,
          a(e)
      }
      function s() {
          if ("function" != typeof WeakMap)
              return null;
          var e = new WeakMap;
          return s = function() {
              return e
          }
          ,
          e
      }
      function l(e) {
          if (e && e.__esModule)
              return e;
          if (null === e || "object" !== a(e) && "function" != typeof e)
              return {
                  default: e
              };
          var t = s();
          if (t && t.has(e))
              return t.get(e);
          var r = {}
            , n = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
              if (Object.prototype.hasOwnProperty.call(e, o)) {
                  var i = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                  i && (i.get || i.set) ? Object.defineProperty(r, o, i) : r[o] = e[o]
              }
          return r.default = e,
          t && t.set(e, r),
          r
      }
      var u = [{
          key: "youtube",
          name: "YouTube",
          canPlay: i.canPlay.youtube,
          lazyPlayer: (0,
          n.lazy)((function() {
              return Promise.resolve().then((function() {
                  return l(r(356))
              }
              ))
          }
          ))
      }, {
          key: "soundcloud",
          name: "SoundCloud",
          canPlay: i.canPlay.soundcloud,
          lazyPlayer: (0,
          n.lazy)((function() {
              return Promise.resolve().then((function() {
                  return l(r(2648))
              }
              ))
          }
          ))
      }, {
          key: "vimeo",
          name: "Vimeo",
          canPlay: i.canPlay.vimeo,
          lazyPlayer: (0,
          n.lazy)((function() {
              return Promise.resolve().then((function() {
                  return l(r(868))
              }
              ))
          }
          ))
      }, {
          key: "facebook",
          name: "Facebook",
          canPlay: i.canPlay.facebook,
          lazyPlayer: (0,
          n.lazy)((function() {
              return Promise.resolve().then((function() {
                  return l(r(1972))
              }
              ))
          }
          ))
      }, {
          key: "streamable",
          name: "Streamable",
          canPlay: i.canPlay.streamable,
          lazyPlayer: (0,
          n.lazy)((function() {
              return Promise.resolve().then((function() {
                  return l(r(993))
              }
              ))
          }
          ))
      }, {
          key: "wistia",
          name: "Wistia",
          canPlay: i.canPlay.wistia,
          lazyPlayer: (0,
          n.lazy)((function() {
              return Promise.resolve().then((function() {
                  return l(r(8018))
              }
              ))
          }
          ))
      }, {
          key: "twitch",
          name: "Twitch",
          canPlay: i.canPlay.twitch,
          lazyPlayer: (0,
          n.lazy)((function() {
              return Promise.resolve().then((function() {
                  return l(r(9482))
              }
              ))
          }
          ))
      }, {
          key: "dailymotion",
          name: "DailyMotion",
          canPlay: i.canPlay.dailymotion,
          lazyPlayer: (0,
          n.lazy)((function() {
              return Promise.resolve().then((function() {
                  return l(r(6807))
              }
              ))
          }
          ))
      }, {
          key: "mixcloud",
          name: "Mixcloud",
          canPlay: i.canPlay.mixcloud,
          lazyPlayer: (0,
          n.lazy)((function() {
              return Promise.resolve().then((function() {
                  return l(r(143))
              }
              ))
          }
          ))
      }, {
          key: "vidyard",
          name: "Vidyard",
          canPlay: i.canPlay.vidyard,
          lazyPlayer: (0,
          n.lazy)((function() {
              return Promise.resolve().then((function() {
                  return l(r(6596))
              }
              ))
          }
          ))
      }, {
          key: "kaltura",
          name: "Kaltura",
          canPlay: i.canPlay.kaltura,
          lazyPlayer: (0,
          n.lazy)((function() {
              return Promise.resolve().then((function() {
                  return l(r(3911))
              }
              ))
          }
          ))
      }, {
          key: "file",
          name: "FilePlayer",
          canPlay: i.canPlay.file,
          canEnablePIP: function(e) {
              return i.canPlay.file(e) && (document.pictureInPictureEnabled || (0,
              o.supportsWebKitPresentationMode)()) && !i.AUDIO_EXTENSIONS.test(e)
          },
          lazyPlayer: (0,
          n.lazy)((function() {
              return Promise.resolve().then((function() {
                  return l(r(4926))
              }
              ))
          }
          ))
      }];
      t.default = u
  }
  ,
  5741: (e,t,r)=>{
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      }),
      t.defaultProps = t.propTypes = void 0;
      var n, o = (n = r(5697)) && n.__esModule ? n : {
          default: n
      };
      var i = o.default.string
        , a = o.default.bool
        , s = o.default.number
        , l = o.default.array
        , u = o.default.oneOfType
        , c = o.default.shape
        , p = o.default.object
        , d = o.default.func
        , f = o.default.node
        , y = {
          url: u([i, l, p]),
          playing: a,
          loop: a,
          controls: a,
          volume: s,
          muted: a,
          playbackRate: s,
          width: u([i, s]),
          height: u([i, s]),
          style: p,
          progressInterval: s,
          playsinline: a,
          pip: a,
          stopOnUnmount: a,
          light: u([a, i, p]),
          playIcon: f,
          previewTabIndex: s,
          fallback: f,
          oEmbedUrl: i,
          wrapper: u([i, d, c({
              render: d.isRequired
          })]),
          config: c({
              soundcloud: c({
                  options: p
              }),
              youtube: c({
                  playerVars: p,
                  embedOptions: p,
                  onUnstarted: d
              }),
              facebook: c({
                  appId: i,
                  version: i,
                  playerId: i,
                  attributes: p
              }),
              dailymotion: c({
                  params: p
              }),
              vimeo: c({
                  playerOptions: p,
                  title: i
              }),
              file: c({
                  attributes: p,
                  tracks: l,
                  forceVideo: a,
                  forceAudio: a,
                  forceHLS: a,
                  forceDASH: a,
                  forceFLV: a,
                  hlsOptions: p,
                  hlsVersion: i,
                  dashVersion: i,
                  flvVersion: i
              }),
              wistia: c({
                  options: p,
                  playerId: i,
                  customControls: l
              }),
              mixcloud: c({
                  options: p
              }),
              twitch: c({
                  options: p,
                  playerId: i
              }),
              vidyard: c({
                  options: p
              })
          }),
          onReady: d,
          onStart: d,
          onPlay: d,
          onPause: d,
          onBuffer: d,
          onBufferEnd: d,
          onEnded: d,
          onError: d,
          onDuration: d,
          onSeek: d,
          onPlaybackRateChange: d,
          onProgress: d,
          onClickPreview: d,
          onEnablePIP: d,
          onDisablePIP: d
      };
      t.propTypes = y;
      var h = function() {}
        , m = {
          playing: !1,
          loop: !1,
          controls: !1,
          volume: null,
          muted: !1,
          playbackRate: 1,
          width: "640px",
          height: "360px",
          style: {},
          progressInterval: 1e3,
          playsinline: !1,
          pip: !1,
          stopOnUnmount: !0,
          light: !1,
          fallback: null,
          wrapper: "div",
          previewTabIndex: 0,
          oEmbedUrl: "https://noembed.com/embed?url={url}",
          config: {
              soundcloud: {
                  options: {
                      visual: !0,
                      buying: !1,
                      liking: !1,
                      download: !1,
                      sharing: !1,
                      show_comments: !1,
                      show_playcount: !1
                  }
              },
              youtube: {
                  playerVars: {
                      playsinline: 1,
                      showinfo: 0,
                      rel: 0,
                      iv_load_policy: 3,
                      modestbranding: 1
                  },
                  embedOptions: {},
                  onUnstarted: h
              },
              facebook: {
                  appId: "1309697205772819",
                  version: "v3.3",
                  playerId: null,
                  attributes: {}
              },
              dailymotion: {
                  params: {
                      api: 1,
                      "endscreen-enable": !1
                  }
              },
              vimeo: {
                  playerOptions: {
                      autopause: !1,
                      byline: !1,
                      portrait: !1,
                      title: !1
                  },
                  title: null
              },
              file: {
                  attributes: {},
                  tracks: [],
                  forceVideo: !1,
                  forceAudio: !1,
                  forceHLS: !1,
                  forceDASH: !1,
                  forceFLV: !1,
                  hlsOptions: {},
                  hlsVersion: "1.1.4",
                  dashVersion: "3.1.3",
                  flvVersion: "1.5.0"
              },
              wistia: {
                  options: {},
                  playerId: null,
                  customControls: null
              },
              mixcloud: {
                  options: {
                      hide_cover: 1
                  }
              },
              twitch: {
                  options: {},
                  playerId: null
              },
              vidyard: {
                  options: {}
              }
          },
          onReady: h,
          onStart: h,
          onPlay: h,
          onPause: h,
          onBuffer: h,
          onBufferEnd: h,
          onEnded: h,
          onError: h,
          onDuration: h,
          onSeek: h,
          onPlaybackRateChange: h,
          onProgress: h,
          onClickPreview: h,
          onEnablePIP: h,
          onDisablePIP: h
      };
      t.defaultProps = m
  }
  ,
  8045: (e,t,r)=>{
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      }),
      t.parseStartTime = function(e) {
          return d(e, l)
      }
      ,
      t.parseEndTime = function(e) {
          return d(e, u)
      }
      ,
      t.randomString = function() {
          return Math.random().toString(36).substr(2, 5)
      }
      ,
      t.queryString = function(e) {
          return Object.keys(e).map((function(t) {
              return "".concat(t, "=").concat(e[t])
          }
          )).join("&")
      }
      ,
      t.getSDK = function(e, t) {
          var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
            , o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function() {
              return !0
          }
            , i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : n.default
            , a = f(t);
          if (a && o(a))
              return Promise.resolve(a);
          return new Promise((function(n, o) {
              if (y[e])
                  y[e].push({
                      resolve: n,
                      reject: o
                  });
              else {
                  y[e] = [{
                      resolve: n,
                      reject: o
                  }];
                  var a = function(t) {
                      y[e].forEach((function(e) {
                          return e.resolve(t)
                      }
                      ))
                  };
                  if (r) {
                      var s = window[r];
                      window[r] = function() {
                          s && s(),
                          a(f(t))
                      }
                  }
                  i(e, (function(n) {
                      n ? (y[e].forEach((function(e) {
                          return e.reject(n)
                      }
                      )),
                      y[e] = null) : r || a(f(t))
                  }
                  ))
              }
          }
          ))
      }
      ,
      t.getConfig = function(e, t) {
          return (0,
          o.default)(t.config, e.config)
      }
      ,
      t.omit = function(e) {
          for (var t, r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
              n[o - 1] = arguments[o];
          for (var i = (t = []).concat.apply(t, n), a = {}, s = Object.keys(e), l = 0, u = s; l < u.length; l++) {
              var c = u[l];
              -1 === i.indexOf(c) && (a[c] = e[c])
          }
          return a
      }
      ,
      t.callPlayer = function(e) {
          var t;
          if (!this.player || !this.player[e]) {
              var r = "ReactPlayer: ".concat(this.constructor.displayName, " player could not call %c").concat(e, "%c – ");
              return this.player ? this.player[e] || (r += "The method was not available") : r += "The player was not available",
              console.warn(r, "font-weight: bold", ""),
              null
          }
          for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
              o[i - 1] = arguments[i];
          return (t = this.player)[e].apply(t, o)
      }
      ,
      t.isMediaStream = function(e) {
          return "undefined" != typeof window && void 0 !== window.MediaStream && e instanceof window.MediaStream
      }
      ,
      t.isBlobUrl = function(e) {
          return /^blob:/.test(e)
      }
      ,
      t.supportsWebKitPresentationMode = function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document.createElement("video")
            , t = !1 === /iPhone|iPod/.test(navigator.userAgent);
          return e.webkitSupportsPresentationMode && "function" == typeof e.webkitSetPresentationMode && t
      }
      ;
      var n = i(r(9090))
        , o = i(r(9996));
      function i(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      function a(e, t) {
          return function(e) {
              if (Array.isArray(e))
                  return e
          }(e) || function(e, t) {
              if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
                  return;
              var r = []
                , n = !0
                , o = !1
                , i = void 0;
              try {
                  for (var a, s = e[Symbol.iterator](); !(n = (a = s.next()).done) && (r.push(a.value),
                  !t || r.length !== t); n = !0)
                      ;
              } catch (e) {
                  o = !0,
                  i = e
              } finally {
                  try {
                      n || null == s.return || s.return()
                  } finally {
                      if (o)
                          throw i
                  }
              }
              return r
          }(e, t) || function(e, t) {
              if (!e)
                  return;
              if ("string" == typeof e)
                  return s(e, t);
              var r = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === r && e.constructor && (r = e.constructor.name);
              if ("Map" === r || "Set" === r)
                  return Array.from(e);
              if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                  return s(e, t)
          }(e, t) || function() {
              throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }()
      }
      function s(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = new Array(t); r < t; r++)
              n[r] = e[r];
          return n
      }
      var l = /[?&#](?:start|t)=([0-9hms]+)/
        , u = /[?&#]end=([0-9hms]+)/
        , c = /(\d+)(h|m|s)/g
        , p = /^\d+$/;
      function d(e, t) {
          if (!(e instanceof Array)) {
              var r = e.match(t);
              if (r) {
                  var n = r[1];
                  if (n.match(c))
                      return function(e) {
                          var t = 0
                            , r = c.exec(e);
                          for (; null !== r; ) {
                              var n = a(r, 3)
                                , o = n[1]
                                , i = n[2];
                              "h" === i && (t += 60 * parseInt(o, 10) * 60),
                              "m" === i && (t += 60 * parseInt(o, 10)),
                              "s" === i && (t += parseInt(o, 10)),
                              r = c.exec(e)
                          }
                          return t
                      }(n);
                  if (p.test(n))
                      return parseInt(n)
              }
          }
      }
      function f(e) {
          return window[e] ? window[e] : window.exports && window.exports[e] ? window.exports[e] : window.module && window.module.exports && window.module.exports[e] ? window.module.exports[e] : null
      }
      var y = {}
  }
  ,
  7061: (e,t,r)=>{
      var n = r(8698).default;
      function o() {
          "use strict";
          e.exports = o = function() {
              return t
          }
          ,
          e.exports.__esModule = !0,
          e.exports.default = e.exports;
          var t = {}
            , r = Object.prototype
            , i = r.hasOwnProperty
            , a = "function" == typeof Symbol ? Symbol : {}
            , s = a.iterator || "@@iterator"
            , l = a.asyncIterator || "@@asyncIterator"
            , u = a.toStringTag || "@@toStringTag";
          function c(e, t, r) {
              return Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              }),
              e[t]
          }
          try {
              c({}, "")
          } catch (e) {
              c = function(e, t, r) {
                  return e[t] = r
              }
          }
          function p(e, t, r, n) {
              var o = t && t.prototype instanceof y ? t : y
                , i = Object.create(o.prototype)
                , a = new T(n || []);
              return i._invoke = function(e, t, r) {
                  var n = "suspendedStart";
                  return function(o, i) {
                      if ("executing" === n)
                          throw new Error("Generator is already running");
                      if ("completed" === n) {
                          if ("throw" === o)
                              throw i;
                          return j()
                      }
                      for (r.method = o,
                      r.arg = i; ; ) {
                          var a = r.delegate;
                          if (a) {
                              var s = S(a, r);
                              if (s) {
                                  if (s === f)
                                      continue;
                                  return s
                              }
                          }
                          if ("next" === r.method)
                              r.sent = r._sent = r.arg;
                          else if ("throw" === r.method) {
                              if ("suspendedStart" === n)
                                  throw n = "completed",
                                  r.arg;
                              r.dispatchException(r.arg)
                          } else
                              "return" === r.method && r.abrupt("return", r.arg);
                          n = "executing";
                          var l = d(e, t, r);
                          if ("normal" === l.type) {
                              if (n = r.done ? "completed" : "suspendedYield",
                              l.arg === f)
                                  continue;
                              return {
                                  value: l.arg,
                                  done: r.done
                              }
                          }
                          "throw" === l.type && (n = "completed",
                          r.method = "throw",
                          r.arg = l.arg)
                      }
                  }
              }(e, r, a),
              i
          }
          function d(e, t, r) {
              try {
                  return {
                      type: "normal",
                      arg: e.call(t, r)
                  }
              } catch (e) {
                  return {
                      type: "throw",
                      arg: e
                  }
              }
          }
          t.wrap = p;
          var f = {};
          function y() {}
          function h() {}
          function m() {}
          var v = {};
          c(v, s, (function() {
              return this
          }
          ));
          var g = Object.getPrototypeOf
            , b = g && g(g(C([])));
          b && b !== r && i.call(b, s) && (v = b);
          var w = m.prototype = y.prototype = Object.create(v);
          function P(e) {
              ["next", "throw", "return"].forEach((function(t) {
                  c(e, t, (function(e) {
                      return this._invoke(t, e)
                  }
                  ))
              }
              ))
          }
          function O(e, t) {
              function r(o, a, s, l) {
                  var u = d(e[o], e, a);
                  if ("throw" !== u.type) {
                      var c = u.arg
                        , p = c.value;
                      return p && "object" == n(p) && i.call(p, "__await") ? t.resolve(p.__await).then((function(e) {
                          r("next", e, s, l)
                      }
                      ), (function(e) {
                          r("throw", e, s, l)
                      }
                      )) : t.resolve(p).then((function(e) {
                          c.value = e,
                          s(c)
                      }
                      ), (function(e) {
                          return r("throw", e, s, l)
                      }
                      ))
                  }
                  l(u.arg)
              }
              var o;
              this._invoke = function(e, n) {
                  function i() {
                      return new t((function(t, o) {
                          r(e, n, t, o)
                      }
                      ))
                  }
                  return o = o ? o.then(i, i) : i()
              }
          }
          function S(e, t) {
              var r = e.iterator[t.method];
              if (void 0 === r) {
                  if (t.delegate = null,
                  "throw" === t.method) {
                      if (e.iterator.return && (t.method = "return",
                      t.arg = void 0,
                      S(e, t),
                      "throw" === t.method))
                          return f;
                      t.method = "throw",
                      t.arg = new TypeError("The iterator does not provide a 'throw' method")
                  }
                  return f
              }
              var n = d(r, e.iterator, t.arg);
              if ("throw" === n.type)
                  return t.method = "throw",
                  t.arg = n.arg,
                  t.delegate = null,
                  f;
              var o = n.arg;
              return o ? o.done ? (t[e.resultName] = o.value,
              t.next = e.nextLoc,
              "return" !== t.method && (t.method = "next",
              t.arg = void 0),
              t.delegate = null,
              f) : o : (t.method = "throw",
              t.arg = new TypeError("iterator result is not an object"),
              t.delegate = null,
              f)
          }
          function E(e) {
              var t = {
                  tryLoc: e[0]
              };
              1 in e && (t.catchLoc = e[1]),
              2 in e && (t.finallyLoc = e[2],
              t.afterLoc = e[3]),
              this.tryEntries.push(t)
          }
          function k(e) {
              var t = e.completion || {};
              t.type = "normal",
              delete t.arg,
              e.completion = t
          }
          function T(e) {
              this.tryEntries = [{
                  tryLoc: "root"
              }],
              e.forEach(E, this),
              this.reset(!0)
          }
          function C(e) {
              if (e) {
                  var t = e[s];
                  if (t)
                      return t.call(e);
                  if ("function" == typeof e.next)
                      return e;
                  if (!isNaN(e.length)) {
                      var r = -1
                        , n = function t() {
                          for (; ++r < e.length; )
                              if (i.call(e, r))
                                  return t.value = e[r],
                                  t.done = !1,
                                  t;
                          return t.value = void 0,
                          t.done = !0,
                          t
                      };
                      return n.next = n
                  }
              }
              return {
                  next: j
              }
          }
          function j() {
              return {
                  value: void 0,
                  done: !0
              }
          }
          return h.prototype = m,
          c(w, "constructor", m),
          c(m, "constructor", h),
          h.displayName = c(m, u, "GeneratorFunction"),
          t.isGeneratorFunction = function(e) {
              var t = "function" == typeof e && e.constructor;
              return !!t && (t === h || "GeneratorFunction" === (t.displayName || t.name))
          }
          ,
          t.mark = function(e) {
              return Object.setPrototypeOf ? Object.setPrototypeOf(e, m) : (e.__proto__ = m,
              c(e, u, "GeneratorFunction")),
              e.prototype = Object.create(w),
              e
          }
          ,
          t.awrap = function(e) {
              return {
                  __await: e
              }
          }
          ,
          P(O.prototype),
          c(O.prototype, l, (function() {
              return this
          }
          )),
          t.AsyncIterator = O,
          t.async = function(e, r, n, o, i) {
              void 0 === i && (i = Promise);
              var a = new O(p(e, r, n, o),i);
              return t.isGeneratorFunction(r) ? a : a.next().then((function(e) {
                  return e.done ? e.value : a.next()
              }
              ))
          }
          ,
          P(w),
          c(w, u, "Generator"),
          c(w, s, (function() {
              return this
          }
          )),
          c(w, "toString", (function() {
              return "[object Generator]"
          }
          )),
          t.keys = function(e) {
              var t = [];
              for (var r in e)
                  t.push(r);
              return t.reverse(),
              function r() {
                  for (; t.length; ) {
                      var n = t.pop();
                      if (n in e)
                          return r.value = n,
                          r.done = !1,
                          r
                  }
                  return r.done = !0,
                  r
              }
          }
          ,
          t.values = C,
          T.prototype = {
              constructor: T,
              reset: function(e) {
                  if (this.prev = 0,
                  this.next = 0,
                  this.sent = this._sent = void 0,
                  this.done = !1,
                  this.delegate = null,
                  this.method = "next",
                  this.arg = void 0,
                  this.tryEntries.forEach(k),
                  !e)
                      for (var t in this)
                          "t" === t.charAt(0) && i.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
              },
              stop: function() {
                  this.done = !0;
                  var e = this.tryEntries[0].completion;
                  if ("throw" === e.type)
                      throw e.arg;
                  return this.rval
              },
              dispatchException: function(e) {
                  if (this.done)
                      throw e;
                  var t = this;
                  function r(r, n) {
                      return a.type = "throw",
                      a.arg = e,
                      t.next = r,
                      n && (t.method = "next",
                      t.arg = void 0),
                      !!n
                  }
                  for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                      var o = this.tryEntries[n]
                        , a = o.completion;
                      if ("root" === o.tryLoc)
                          return r("end");
                      if (o.tryLoc <= this.prev) {
                          var s = i.call(o, "catchLoc")
                            , l = i.call(o, "finallyLoc");
                          if (s && l) {
                              if (this.prev < o.catchLoc)
                                  return r(o.catchLoc, !0);
                              if (this.prev < o.finallyLoc)
                                  return r(o.finallyLoc)
                          } else if (s) {
                              if (this.prev < o.catchLoc)
                                  return r(o.catchLoc, !0)
                          } else {
                              if (!l)
                                  throw new Error("try statement without catch or finally");
                              if (this.prev < o.finallyLoc)
                                  return r(o.finallyLoc)
                          }
                      }
                  }
              },
              abrupt: function(e, t) {
                  for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                      var n = this.tryEntries[r];
                      if (n.tryLoc <= this.prev && i.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                          var o = n;
                          break
                      }
                  }
                  o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                  var a = o ? o.completion : {};
                  return a.type = e,
                  a.arg = t,
                  o ? (this.method = "next",
                  this.next = o.finallyLoc,
                  f) : this.complete(a)
              },
              complete: function(e, t) {
                  if ("throw" === e.type)
                      throw e.arg;
                  return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg,
                  this.method = "return",
                  this.next = "end") : "normal" === e.type && t && (this.next = t),
                  f
              },
              finish: function(e) {
                  for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                      var r = this.tryEntries[t];
                      if (r.finallyLoc === e)
                          return this.complete(r.completion, r.afterLoc),
                          k(r),
                          f
                  }
              },
              catch: function(e) {
                  for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                      var r = this.tryEntries[t];
                      if (r.tryLoc === e) {
                          var n = r.completion;
                          if ("throw" === n.type) {
                              var o = n.arg;
                              k(r)
                          }
                          return o
                      }
                  }
                  throw new Error("illegal catch attempt")
              },
              delegateYield: function(e, t, r) {
                  return this.delegate = {
                      iterator: C(e),
                      resultName: t,
                      nextLoc: r
                  },
                  "next" === this.method && (this.arg = void 0),
                  f
              }
          },
          t
      }
      e.exports = o,
      e.exports.__esModule = !0,
      e.exports.default = e.exports
  }
  ,
  8698: e=>{
      function t(r) {
          return e.exports = t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
              return typeof e
          }
          : function(e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          }
          ,
          e.exports.__esModule = !0,
          e.exports.default = e.exports,
          t(r)
      }
      e.exports = t,
      e.exports.__esModule = !0,
      e.exports.default = e.exports
  }
  ,
  4687: (e,t,r)=>{
      var n = r(7061)();
      e.exports = n;
      try {
          regeneratorRuntime = n
      } catch (e) {
          "object" == typeof globalThis ? globalThis.regeneratorRuntime = n : Function("r", "regeneratorRuntime = r")(n)
      }
  }
  ,
  5861: (e,t,r)=>{
      "use strict";
      function n(e, t, r, n, o, i, a) {
          try {
              var s = e[i](a)
                , l = s.value
          } catch (e) {
              return void r(e)
          }
          s.done ? t(l) : Promise.resolve(l).then(n, o)
      }
      function o(e) {
          return function() {
              var t = this
                , r = arguments;
              return new Promise((function(o, i) {
                  var a = e.apply(t, r);
                  function s(e) {
                      n(a, o, i, s, l, "next", e)
                  }
                  function l(e) {
                      n(a, o, i, s, l, "throw", e)
                  }
                  s(void 0)
              }
              ))
          }
      }
      r.d(t, {
          Z: ()=>o
      })
  }
  ,
  1801: (e,t,r)=>{
      "use strict";
      r.d(t, {
          t: ()=>g,
          o: ()=>w
      });
      var n = r(7294)
        , o = r(4665);
      function i(e) {
          return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
      }
      function a(e, t) {
          const r = ["__proto__", "constructor", "prototype"];
          Object.keys(t).filter((e=>r.indexOf(e) < 0)).forEach((r=>{
              void 0 === e[r] ? e[r] = t[r] : i(t[r]) && i(e[r]) && Object.keys(t[r]).length > 0 ? t[r].__swiper__ ? e[r] = t[r] : a(e[r], t[r]) : e[r] = t[r]
          }
          ))
      }
      function s(e={}) {
          return e.navigation && void 0 === e.navigation.nextEl && void 0 === e.navigation.prevEl
      }
      function l(e={}) {
          return e.pagination && void 0 === e.pagination.el
      }
      function u(e={}) {
          return e.scrollbar && void 0 === e.scrollbar.el
      }
      function c(e="") {
          const t = e.split(" ").map((e=>e.trim())).filter((e=>!!e))
            , r = [];
          return t.forEach((e=>{
              r.indexOf(e) < 0 && r.push(e)
          }
          )),
          r.join(" ")
      }
      const p = ["modules", "init", "_direction", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "_spaceBetween", "_slidesPerView", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_preloadImages", "updateOnImagesReady", "_loop", "_loopAdditionalSlides", "_loopedSlides", "_loopFillGroupWithBlank", "loopPreventsSlide", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideBlankClass", "slideActiveClass", "slideDuplicateActiveClass", "slideVisibleClass", "slideDuplicateClass", "slideNextClass", "slideDuplicateNextClass", "slidePrevClass", "slideDuplicatePrevClass", "wrapperClass", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "lazy", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom"];
      function d(e, t) {
          let r = t.slidesPerView;
          if (t.breakpoints) {
              const e = o.ZP.prototype.getBreakpoint(t.breakpoints)
                , n = e in t.breakpoints ? t.breakpoints[e] : void 0;
              n && n.slidesPerView && (r = n.slidesPerView)
          }
          let n = Math.ceil(parseFloat(t.loopedSlides || r, 10));
          return n += t.loopAdditionalSlides,
          n > e.length && (n = e.length),
          n
      }
      function f(e) {
          const t = [];
          return n.Children.toArray(e).forEach((e=>{
              e.type && "SwiperSlide" === e.type.displayName ? t.push(e) : e.props && e.props.children && f(e.props.children).forEach((e=>t.push(e)))
          }
          )),
          t
      }
      function y(e) {
          const t = []
            , r = {
              "container-start": [],
              "container-end": [],
              "wrapper-start": [],
              "wrapper-end": []
          };
          return n.Children.toArray(e).forEach((e=>{
              if (e.type && "SwiperSlide" === e.type.displayName)
                  t.push(e);
              else if (e.props && e.props.slot && r[e.props.slot])
                  r[e.props.slot].push(e);
              else if (e.props && e.props.children) {
                  const n = f(e.props.children);
                  n.length > 0 ? n.forEach((e=>t.push(e))) : r["container-end"].push(e)
              } else
                  r["container-end"].push(e)
          }
          )),
          {
              slides: t,
              slots: r
          }
      }
      function h({swiper: e, slides: t, passedParams: r, changedParams: n, nextEl: o, prevEl: s, scrollbarEl: l, paginationEl: u}) {
          const c = n.filter((e=>"children" !== e && "direction" !== e))
            , {params: p, pagination: d, navigation: f, scrollbar: y, virtual: h, thumbs: m} = e;
          let v, g, b, w, P;
          n.includes("thumbs") && r.thumbs && r.thumbs.swiper && p.thumbs && !p.thumbs.swiper && (v = !0),
          n.includes("controller") && r.controller && r.controller.control && p.controller && !p.controller.control && (g = !0),
          n.includes("pagination") && r.pagination && (r.pagination.el || u) && (p.pagination || !1 === p.pagination) && d && !d.el && (b = !0),
          n.includes("scrollbar") && r.scrollbar && (r.scrollbar.el || l) && (p.scrollbar || !1 === p.scrollbar) && y && !y.el && (w = !0),
          n.includes("navigation") && r.navigation && (r.navigation.prevEl || s) && (r.navigation.nextEl || o) && (p.navigation || !1 === p.navigation) && f && !f.prevEl && !f.nextEl && (P = !0);
          if (c.forEach((t=>{
              if (i(p[t]) && i(r[t]))
                  a(p[t], r[t]);
              else {
                  const o = r[t];
                  !0 !== o && !1 !== o || "navigation" !== t && "pagination" !== t && "scrollbar" !== t ? p[t] = r[t] : !1 === o && e[n = t] && (e[n].destroy(),
                  "navigation" === n ? (p[n].prevEl = void 0,
                  p[n].nextEl = void 0,
                  e[n].prevEl = void 0,
                  e[n].nextEl = void 0) : (p[n].el = void 0,
                  e[n].el = void 0))
              }
              var n
          }
          )),
          n.includes("children") && h && p.virtual.enabled ? (h.slides = t,
          h.update(!0)) : n.includes("children") && e.lazy && e.params.lazy.enabled && e.lazy.load(),
          v) {
              m.init() && m.update(!0)
          }
          g && (e.controller.control = p.controller.control),
          b && (u && (p.pagination.el = u),
          d.init(),
          d.render(),
          d.update()),
          w && (l && (p.scrollbar.el = l),
          y.init(),
          y.updateSize(),
          y.setTranslate()),
          P && (o && (p.navigation.nextEl = o),
          s && (p.navigation.prevEl = s),
          f.init(),
          f.update()),
          n.includes("allowSlideNext") && (e.allowSlideNext = r.allowSlideNext),
          n.includes("allowSlidePrev") && (e.allowSlidePrev = r.allowSlidePrev),
          n.includes("direction") && e.changeDirection(r.direction, !1),
          e.update()
      }
      function m(e, t) {
          return "undefined" == typeof window ? (0,
          n.useEffect)(e, t) : (0,
          n.useLayoutEffect)(e, t)
      }
      function v() {
          return v = Object.assign || function(e) {
              for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                      Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
              }
              return e
          }
          ,
          v.apply(this, arguments)
      }
      const g = (0,
      n.forwardRef)((({className: e, tag: t="div", wrapperTag: r="div", children: f, onSwiper: g, ...b}={},w)=>{
          let P = !1;
          const [O,S] = (0,
          n.useState)("swiper")
            , [E,k] = (0,
          n.useState)(null)
            , [T,C] = (0,
          n.useState)(!1)
            , j = (0,
          n.useRef)(!1)
            , _ = (0,
          n.useRef)(null)
            , x = (0,
          n.useRef)(null)
            , M = (0,
          n.useRef)(null)
            , L = (0,
          n.useRef)(null)
            , D = (0,
          n.useRef)(null)
            , A = (0,
          n.useRef)(null)
            , R = (0,
          n.useRef)(null)
            , I = (0,
          n.useRef)(null)
            , {params: $, passedParams: N, rest: z, events: V} = function(e={}) {
              const t = {
                  on: {}
              }
                , r = {}
                , n = {};
              a(t, o.ZP.defaults),
              a(t, o.ZP.extendedDefaults),
              t._emitClasses = !0,
              t.init = !1;
              const s = {}
                , l = p.map((e=>e.replace(/_/, "")));
              return Object.keys(e).forEach((o=>{
                  l.indexOf(o) >= 0 ? i(e[o]) ? (t[o] = {},
                  n[o] = {},
                  a(t[o], e[o]),
                  a(n[o], e[o])) : (t[o] = e[o],
                  n[o] = e[o]) : 0 === o.search(/on[A-Z]/) && "function" == typeof e[o] ? r[`${o[2].toLowerCase()}${o.substr(3)}`] = e[o] : s[o] = e[o]
              }
              )),
              ["navigation", "pagination", "scrollbar"].forEach((e=>{
                  !0 === t[e] && (t[e] = {}),
                  !1 === t[e] && delete t[e]
              }
              )),
              {
                  params: t,
                  passedParams: n,
                  rest: s,
                  events: r
              }
          }(b)
            , {slides: B, slots: H} = y(f)
            , U = ()=>{
              C(!T)
          }
          ;
          if (Object.assign($.on, {
              _containerClasses(e, t) {
                  S(t)
              }
          }),
          !_.current && (Object.assign($.on, V),
          P = !0,
          x.current = function(e) {
              return new o.ZP(e)
          }($),
          x.current.loopCreate = ()=>{}
          ,
          x.current.loopDestroy = ()=>{}
          ,
          $.loop && (x.current.loopedSlides = d(B, $)),
          x.current.virtual && x.current.params.virtual.enabled)) {
              x.current.virtual.slides = B;
              const e = {
                  cache: !1,
                  slides: B,
                  renderExternal: k,
                  renderExternalUpdate: !1
              };
              a(x.current.params.virtual, e),
              a(x.current.originalParams.virtual, e)
          }
          x.current && x.current.on("_beforeBreakpoint", U);
          return (0,
          n.useEffect)((()=>()=>{
              x.current && x.current.off("_beforeBreakpoint", U)
          }
          )),
          (0,
          n.useEffect)((()=>{
              !j.current && x.current && (x.current.emitSlidesClasses(),
              j.current = !0)
          }
          )),
          m((()=>{
              if (w && (w.current = _.current),
              _.current)
                  return function({el: e, nextEl: t, prevEl: r, paginationEl: n, scrollbarEl: o, swiper: i}, a) {
                      s(a) && t && r && (i.params.navigation.nextEl = t,
                      i.originalParams.navigation.nextEl = t,
                      i.params.navigation.prevEl = r,
                      i.originalParams.navigation.prevEl = r),
                      l(a) && n && (i.params.pagination.el = n,
                      i.originalParams.pagination.el = n),
                      u(a) && o && (i.params.scrollbar.el = o,
                      i.originalParams.scrollbar.el = o),
                      i.init(e)
                  }({
                      el: _.current,
                      nextEl: D.current,
                      prevEl: A.current,
                      paginationEl: R.current,
                      scrollbarEl: I.current,
                      swiper: x.current
                  }, $),
                  g && g(x.current),
                  ()=>{
                      x.current && !x.current.destroyed && x.current.destroy(!0, !1)
                  }
          }
          ), []),
          m((()=>{
              !P && V && x.current && Object.keys(V).forEach((e=>{
                  x.current.on(e, V[e])
              }
              ));
              const e = function(e, t, r, n) {
                  const o = [];
                  if (!t)
                      return o;
                  const a = e=>{
                      o.indexOf(e) < 0 && o.push(e)
                  }
                    , s = n.map((e=>e.key))
                    , l = r.map((e=>e.key));
                  return s.join("") !== l.join("") && a("children"),
                  n.length !== r.length && a("children"),
                  p.filter((e=>"_" === e[0])).map((e=>e.replace(/_/, ""))).forEach((r=>{
                      if (r in e && r in t)
                          if (i(e[r]) && i(t[r])) {
                              const n = Object.keys(e[r])
                                , o = Object.keys(t[r]);
                              n.length !== o.length ? a(r) : (n.forEach((n=>{
                                  e[r][n] !== t[r][n] && a(r)
                              }
                              )),
                              o.forEach((n=>{
                                  e[r][n] !== t[r][n] && a(r)
                              }
                              )))
                          } else
                              e[r] !== t[r] && a(r)
                  }
                  )),
                  o
              }(N, M.current, B, L.current);
              return M.current = N,
              L.current = B,
              e.length && x.current && !x.current.destroyed && h({
                  swiper: x.current,
                  slides: B,
                  passedParams: N,
                  changedParams: e,
                  nextEl: D.current,
                  prevEl: A.current,
                  scrollbarEl: I.current,
                  paginationEl: R.current
              }),
              ()=>{
                  V && x.current && Object.keys(V).forEach((e=>{
                      x.current.off(e, V[e])
                  }
                  ))
              }
          }
          )),
          m((()=>{
              var e;
              !(e = x.current) || e.destroyed || !e.params.virtual || e.params.virtual && !e.params.virtual.enabled || (e.updateSlides(),
              e.updateProgress(),
              e.updateSlidesClasses(),
              e.lazy && e.params.lazy.enabled && e.lazy.load(),
              e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
          }
          ), [E]),
          n.createElement(t, v({
              ref: _,
              className: c(`${O}${e ? ` ${e}` : ""}`)
          }, z), H["container-start"], s($) && n.createElement(n.Fragment, null, n.createElement("div", {
              ref: A,
              className: "swiper-button-prev"
          }), n.createElement("div", {
              ref: D,
              className: "swiper-button-next"
          })), u($) && n.createElement("div", {
              ref: I,
              className: "swiper-scrollbar"
          }), l($) && n.createElement("div", {
              ref: R,
              className: "swiper-pagination"
          }), n.createElement(r, {
              className: "swiper-wrapper"
          }, H["wrapper-start"], $.virtual ? function(e, t, r) {
              if (!r)
                  return null;
              const o = e.isHorizontal() ? {
                  [e.rtlTranslate ? "right" : "left"]: `${r.offset}px`
              } : {
                  top: `${r.offset}px`
              };
              return t.filter(((e,t)=>t >= r.from && t <= r.to)).map((t=>n.cloneElement(t, {
                  swiper: e,
                  style: o
              })))
          }(x.current, B, E) : !$.loop || x.current && x.current.destroyed ? B.map((e=>n.cloneElement(e, {
              swiper: x.current
          }))) : function(e, t, r) {
              const o = t.map(((t,r)=>n.cloneElement(t, {
                  swiper: e,
                  "data-swiper-slide-index": r
              })));
              function i(e, t, o) {
                  return n.cloneElement(e, {
                      key: `${e.key}-duplicate-${t}-${o}`,
                      className: `${e.props.className || ""} ${r.slideDuplicateClass}`
                  })
              }
              if (r.loopFillGroupWithBlank) {
                  const e = r.slidesPerGroup - o.length % r.slidesPerGroup;
                  if (e !== r.slidesPerGroup)
                      for (let t = 0; t < e; t += 1) {
                          const e = n.createElement("div", {
                              className: `${r.slideClass} ${r.slideBlankClass}`
                          });
                          o.push(e)
                      }
              }
              "auto" !== r.slidesPerView || r.loopedSlides || (r.loopedSlides = o.length);
              const a = d(o, r)
                , s = []
                , l = [];
              return o.forEach(((e,t)=>{
                  t < a && l.push(i(e, t, "prepend")),
                  t < o.length && t >= o.length - a && s.push(i(e, t, "append"))
              }
              )),
              e && (e.loopedSlides = a),
              [...s, ...o, ...l]
          }(x.current, B, $), H["wrapper-end"]), H["container-end"])
      }
      ));
      function b() {
          return b = Object.assign || function(e) {
              for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                      Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
              }
              return e
          }
          ,
          b.apply(this, arguments)
      }
      g.displayName = "Swiper";
      const w = (0,
      n.forwardRef)((({tag: e="div", children: t, className: r="", swiper: o, zoom: i, virtualIndex: a, ...s}={},l)=>{
          const u = (0,
          n.useRef)(null)
            , [p,d] = (0,
          n.useState)("swiper-slide");
          function f(e, t, r) {
              t === u.current && d(r)
          }
          let y;
          m((()=>{
              if (l && (l.current = u.current),
              u.current && o) {
                  if (!o.destroyed)
                      return o.on("_slideClass", f),
                      ()=>{
                          o && o.off("_slideClass", f)
                      }
                      ;
                  "swiper-slide" !== p && d("swiper-slide")
              }
          }
          )),
          m((()=>{
              o && u.current && d(o.getSlideClasses(u.current))
          }
          ), [o]),
          "function" == typeof t && (y = {
              isActive: p.indexOf("swiper-slide-active") >= 0 || p.indexOf("swiper-slide-duplicate-active") >= 0,
              isVisible: p.indexOf("swiper-slide-visible") >= 0,
              isDuplicate: p.indexOf("swiper-slide-duplicate") >= 0,
              isPrev: p.indexOf("swiper-slide-prev") >= 0 || p.indexOf("swiper-slide-duplicate-prev") >= 0,
              isNext: p.indexOf("swiper-slide-next") >= 0 || p.indexOf("swiper-slide-duplicate-next") >= 0
          });
          const h = ()=>"function" == typeof t ? t(y) : t;
          return n.createElement(e, b({
              ref: u,
              className: c(`${p}${r ? ` ${r}` : ""}`),
              "data-swiper-slide-index": a
          }, s), i ? n.createElement("div", {
              className: "swiper-zoom-container",
              "data-swiper-zoom": "number" == typeof i ? i : void 0
          }, h()) : h())
      }
      ));
      w.displayName = "SwiperSlide"
  }
  ,
  4665: (e,t,r)=>{
      "use strict";
      function n(e) {
          return null !== e && "object" == typeof e && "constructor"in e && e.constructor === Object
      }
      function o(e={}, t={}) {
          Object.keys(t).forEach((r=>{
              void 0 === e[r] ? e[r] = t[r] : n(t[r]) && n(e[r]) && Object.keys(t[r]).length > 0 && o(e[r], t[r])
          }
          ))
      }
      r.d(t, {
          pt: ()=>ne,
          lI: ()=>ae,
          tl: ()=>re,
          ZP: ()=>ee
      });
      const i = {
          body: {},
          addEventListener() {},
          removeEventListener() {},
          activeElement: {
              blur() {},
              nodeName: ""
          },
          querySelector: ()=>null,
          querySelectorAll: ()=>[],
          getElementById: ()=>null,
          createEvent: ()=>({
              initEvent() {}
          }),
          createElement: ()=>({
              children: [],
              childNodes: [],
              style: {},
              setAttribute() {},
              getElementsByTagName: ()=>[]
          }),
          createElementNS: ()=>({}),
          importNode: ()=>null,
          location: {
              hash: "",
              host: "",
              hostname: "",
              href: "",
              origin: "",
              pathname: "",
              protocol: "",
              search: ""
          }
      };
      function a() {
          const e = "undefined" != typeof document ? document : {};
          return o(e, i),
          e
      }
      const s = {
          document: i,
          navigator: {
              userAgent: ""
          },
          location: {
              hash: "",
              host: "",
              hostname: "",
              href: "",
              origin: "",
              pathname: "",
              protocol: "",
              search: ""
          },
          history: {
              replaceState() {},
              pushState() {},
              go() {},
              back() {}
          },
          CustomEvent: function() {
              return this
          },
          addEventListener() {},
          removeEventListener() {},
          getComputedStyle: ()=>({
              getPropertyValue: ()=>""
          }),
          Image() {},
          Date() {},
          screen: {},
          setTimeout() {},
          clearTimeout() {},
          matchMedia: ()=>({}),
          requestAnimationFrame: e=>"undefined" == typeof setTimeout ? (e(),
          null) : setTimeout(e, 0),
          cancelAnimationFrame(e) {
              "undefined" != typeof setTimeout && clearTimeout(e)
          }
      };
      function l() {
          const e = "undefined" != typeof window ? window : {};
          return o(e, s),
          e
      }
      class u extends Array {
          constructor(e) {
              "number" == typeof e ? super(e) : (super(...e || []),
              function(e) {
                  const t = e.__proto__;
                  Object.defineProperty(e, "__proto__", {
                      get: ()=>t,
                      set(e) {
                          t.__proto__ = e
                      }
                  })
              }(this))
          }
      }
      function c(e=[]) {
          const t = [];
          return e.forEach((e=>{
              Array.isArray(e) ? t.push(...c(e)) : t.push(e)
          }
          )),
          t
      }
      function p(e, t) {
          return Array.prototype.filter.call(e, t)
      }
      function d(e, t) {
          const r = l()
            , n = a();
          let o = [];
          if (!t && e instanceof u)
              return e;
          if (!e)
              return new u(o);
          if ("string" == typeof e) {
              const r = e.trim();
              if (r.indexOf("<") >= 0 && r.indexOf(">") >= 0) {
                  let e = "div";
                  0 === r.indexOf("<li") && (e = "ul"),
                  0 === r.indexOf("<tr") && (e = "tbody"),
                  0 !== r.indexOf("<td") && 0 !== r.indexOf("<th") || (e = "tr"),
                  0 === r.indexOf("<tbody") && (e = "table"),
                  0 === r.indexOf("<option") && (e = "select");
                  const t = n.createElement(e);
                  t.innerHTML = r;
                  for (let e = 0; e < t.childNodes.length; e += 1)
                      o.push(t.childNodes[e])
              } else
                  o = function(e, t) {
                      if ("string" != typeof e)
                          return [e];
                      const r = []
                        , n = t.querySelectorAll(e);
                      for (let e = 0; e < n.length; e += 1)
                          r.push(n[e]);
                      return r
                  }(e.trim(), t || n)
          } else if (e.nodeType || e === r || e === n)
              o.push(e);
          else if (Array.isArray(e)) {
              if (e instanceof u)
                  return e;
              o = e
          }
          return new u(function(e) {
              const t = [];
              for (let r = 0; r < e.length; r += 1)
                  -1 === t.indexOf(e[r]) && t.push(e[r]);
              return t
          }(o))
      }
      d.fn = u.prototype;
      const f = "resize scroll".split(" ");
      function y(e) {
          return function(...t) {
              if (void 0 === t[0]) {
                  for (let t = 0; t < this.length; t += 1)
                      f.indexOf(e) < 0 && (e in this[t] ? this[t][e]() : d(this[t]).trigger(e));
                  return this
              }
              return this.on(e, ...t)
          }
      }
      y("click"),
      y("blur"),
      y("focus"),
      y("focusin"),
      y("focusout"),
      y("keyup"),
      y("keydown"),
      y("keypress"),
      y("submit"),
      y("change"),
      y("mousedown"),
      y("mousemove"),
      y("mouseup"),
      y("mouseenter"),
      y("mouseleave"),
      y("mouseout"),
      y("mouseover"),
      y("touchstart"),
      y("touchend"),
      y("touchmove"),
      y("resize"),
      y("scroll");
      const h = {
          addClass: function(...e) {
              const t = c(e.map((e=>e.split(" "))));
              return this.forEach((e=>{
                  e.classList.add(...t)
              }
              )),
              this
          },
          removeClass: function(...e) {
              const t = c(e.map((e=>e.split(" "))));
              return this.forEach((e=>{
                  e.classList.remove(...t)
              }
              )),
              this
          },
          hasClass: function(...e) {
              const t = c(e.map((e=>e.split(" "))));
              return p(this, (e=>t.filter((t=>e.classList.contains(t))).length > 0)).length > 0
          },
          toggleClass: function(...e) {
              const t = c(e.map((e=>e.split(" "))));
              this.forEach((e=>{
                  t.forEach((t=>{
                      e.classList.toggle(t)
                  }
                  ))
              }
              ))
          },
          attr: function(e, t) {
              if (1 === arguments.length && "string" == typeof e)
                  return this[0] ? this[0].getAttribute(e) : void 0;
              for (let r = 0; r < this.length; r += 1)
                  if (2 === arguments.length)
                      this[r].setAttribute(e, t);
                  else
                      for (const t in e)
                          this[r][t] = e[t],
                          this[r].setAttribute(t, e[t]);
              return this
          },
          removeAttr: function(e) {
              for (let t = 0; t < this.length; t += 1)
                  this[t].removeAttribute(e);
              return this
          },
          transform: function(e) {
              for (let t = 0; t < this.length; t += 1)
                  this[t].style.transform = e;
              return this
          },
          transition: function(e) {
              for (let t = 0; t < this.length; t += 1)
                  this[t].style.transitionDuration = "string" != typeof e ? `${e}ms` : e;
              return this
          },
          on: function(...e) {
              let[t,r,n,o] = e;
              function i(e) {
                  const t = e.target;
                  if (!t)
                      return;
                  const o = e.target.dom7EventData || [];
                  if (o.indexOf(e) < 0 && o.unshift(e),
                  d(t).is(r))
                      n.apply(t, o);
                  else {
                      const e = d(t).parents();
                      for (let t = 0; t < e.length; t += 1)
                          d(e[t]).is(r) && n.apply(e[t], o)
                  }
              }
              function a(e) {
                  const t = e && e.target && e.target.dom7EventData || [];
                  t.indexOf(e) < 0 && t.unshift(e),
                  n.apply(this, t)
              }
              "function" == typeof e[1] && ([t,n,o] = e,
              r = void 0),
              o || (o = !1);
              const s = t.split(" ");
              let l;
              for (let e = 0; e < this.length; e += 1) {
                  const t = this[e];
                  if (r)
                      for (l = 0; l < s.length; l += 1) {
                          const e = s[l];
                          t.dom7LiveListeners || (t.dom7LiveListeners = {}),
                          t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
                          t.dom7LiveListeners[e].push({
                              listener: n,
                              proxyListener: i
                          }),
                          t.addEventListener(e, i, o)
                      }
                  else
                      for (l = 0; l < s.length; l += 1) {
                          const e = s[l];
                          t.dom7Listeners || (t.dom7Listeners = {}),
                          t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                          t.dom7Listeners[e].push({
                              listener: n,
                              proxyListener: a
                          }),
                          t.addEventListener(e, a, o)
                      }
              }
              return this
          },
          off: function(...e) {
              let[t,r,n,o] = e;
              "function" == typeof e[1] && ([t,n,o] = e,
              r = void 0),
              o || (o = !1);
              const i = t.split(" ");
              for (let e = 0; e < i.length; e += 1) {
                  const t = i[e];
                  for (let e = 0; e < this.length; e += 1) {
                      const i = this[e];
                      let a;
                      if (!r && i.dom7Listeners ? a = i.dom7Listeners[t] : r && i.dom7LiveListeners && (a = i.dom7LiveListeners[t]),
                      a && a.length)
                          for (let e = a.length - 1; e >= 0; e -= 1) {
                              const r = a[e];
                              n && r.listener === n || n && r.listener && r.listener.dom7proxy && r.listener.dom7proxy === n ? (i.removeEventListener(t, r.proxyListener, o),
                              a.splice(e, 1)) : n || (i.removeEventListener(t, r.proxyListener, o),
                              a.splice(e, 1))
                          }
                  }
              }
              return this
          },
          trigger: function(...e) {
              const t = l()
                , r = e[0].split(" ")
                , n = e[1];
              for (let o = 0; o < r.length; o += 1) {
                  const i = r[o];
                  for (let r = 0; r < this.length; r += 1) {
                      const o = this[r];
                      if (t.CustomEvent) {
                          const r = new t.CustomEvent(i,{
                              detail: n,
                              bubbles: !0,
                              cancelable: !0
                          });
                          o.dom7EventData = e.filter(((e,t)=>t > 0)),
                          o.dispatchEvent(r),
                          o.dom7EventData = [],
                          delete o.dom7EventData
                      }
                  }
              }
              return this
          },
          transitionEnd: function(e) {
              const t = this;
              return e && t.on("transitionend", (function r(n) {
                  n.target === this && (e.call(this, n),
                  t.off("transitionend", r))
              }
              )),
              this
          },
          outerWidth: function(e) {
              if (this.length > 0) {
                  if (e) {
                      const e = this.styles();
                      return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"))
                  }
                  return this[0].offsetWidth
              }
              return null
          },
          outerHeight: function(e) {
              if (this.length > 0) {
                  if (e) {
                      const e = this.styles();
                      return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"))
                  }
                  return this[0].offsetHeight
              }
              return null
          },
          styles: function() {
              const e = l();
              return this[0] ? e.getComputedStyle(this[0], null) : {}
          },
          offset: function() {
              if (this.length > 0) {
                  const e = l()
                    , t = a()
                    , r = this[0]
                    , n = r.getBoundingClientRect()
                    , o = t.body
                    , i = r.clientTop || o.clientTop || 0
                    , s = r.clientLeft || o.clientLeft || 0
                    , u = r === e ? e.scrollY : r.scrollTop
                    , c = r === e ? e.scrollX : r.scrollLeft;
                  return {
                      top: n.top + u - i,
                      left: n.left + c - s
                  }
              }
              return null
          },
          css: function(e, t) {
              const r = l();
              let n;
              if (1 === arguments.length) {
                  if ("string" != typeof e) {
                      for (n = 0; n < this.length; n += 1)
                          for (const t in e)
                              this[n].style[t] = e[t];
                      return this
                  }
                  if (this[0])
                      return r.getComputedStyle(this[0], null).getPropertyValue(e)
              }
              if (2 === arguments.length && "string" == typeof e) {
                  for (n = 0; n < this.length; n += 1)
                      this[n].style[e] = t;
                  return this
              }
              return this
          },
          each: function(e) {
              return e ? (this.forEach(((t,r)=>{
                  e.apply(t, [t, r])
              }
              )),
              this) : this
          },
          html: function(e) {
              if (void 0 === e)
                  return this[0] ? this[0].innerHTML : null;
              for (let t = 0; t < this.length; t += 1)
                  this[t].innerHTML = e;
              return this
          },
          text: function(e) {
              if (void 0 === e)
                  return this[0] ? this[0].textContent.trim() : null;
              for (let t = 0; t < this.length; t += 1)
                  this[t].textContent = e;
              return this
          },
          is: function(e) {
              const t = l()
                , r = a()
                , n = this[0];
              let o, i;
              if (!n || void 0 === e)
                  return !1;
              if ("string" == typeof e) {
                  if (n.matches)
                      return n.matches(e);
                  if (n.webkitMatchesSelector)
                      return n.webkitMatchesSelector(e);
                  if (n.msMatchesSelector)
                      return n.msMatchesSelector(e);
                  for (o = d(e),
                  i = 0; i < o.length; i += 1)
                      if (o[i] === n)
                          return !0;
                  return !1
              }
              if (e === r)
                  return n === r;
              if (e === t)
                  return n === t;
              if (e.nodeType || e instanceof u) {
                  for (o = e.nodeType ? [e] : e,
                  i = 0; i < o.length; i += 1)
                      if (o[i] === n)
                          return !0;
                  return !1
              }
              return !1
          },
          index: function() {
              let e, t = this[0];
              if (t) {
                  for (e = 0; null !== (t = t.previousSibling); )
                      1 === t.nodeType && (e += 1);
                  return e
              }
          },
          eq: function(e) {
              if (void 0 === e)
                  return this;
              const t = this.length;
              if (e > t - 1)
                  return d([]);
              if (e < 0) {
                  const r = t + e;
                  return d(r < 0 ? [] : [this[r]])
              }
              return d([this[e]])
          },
          append: function(...e) {
              let t;
              const r = a();
              for (let n = 0; n < e.length; n += 1) {
                  t = e[n];
                  for (let e = 0; e < this.length; e += 1)
                      if ("string" == typeof t) {
                          const n = r.createElement("div");
                          for (n.innerHTML = t; n.firstChild; )
                              this[e].appendChild(n.firstChild)
                      } else if (t instanceof u)
                          for (let r = 0; r < t.length; r += 1)
                              this[e].appendChild(t[r]);
                      else
                          this[e].appendChild(t)
              }
              return this
          },
          prepend: function(e) {
              const t = a();
              let r, n;
              for (r = 0; r < this.length; r += 1)
                  if ("string" == typeof e) {
                      const o = t.createElement("div");
                      for (o.innerHTML = e,
                      n = o.childNodes.length - 1; n >= 0; n -= 1)
                          this[r].insertBefore(o.childNodes[n], this[r].childNodes[0])
                  } else if (e instanceof u)
                      for (n = 0; n < e.length; n += 1)
                          this[r].insertBefore(e[n], this[r].childNodes[0]);
                  else
                      this[r].insertBefore(e, this[r].childNodes[0]);
              return this
          },
          next: function(e) {
              return this.length > 0 ? e ? this[0].nextElementSibling && d(this[0].nextElementSibling).is(e) ? d([this[0].nextElementSibling]) : d([]) : this[0].nextElementSibling ? d([this[0].nextElementSibling]) : d([]) : d([])
          },
          nextAll: function(e) {
              const t = [];
              let r = this[0];
              if (!r)
                  return d([]);
              for (; r.nextElementSibling; ) {
                  const n = r.nextElementSibling;
                  e ? d(n).is(e) && t.push(n) : t.push(n),
                  r = n
              }
              return d(t)
          },
          prev: function(e) {
              if (this.length > 0) {
                  const t = this[0];
                  return e ? t.previousElementSibling && d(t.previousElementSibling).is(e) ? d([t.previousElementSibling]) : d([]) : t.previousElementSibling ? d([t.previousElementSibling]) : d([])
              }
              return d([])
          },
          prevAll: function(e) {
              const t = [];
              let r = this[0];
              if (!r)
                  return d([]);
              for (; r.previousElementSibling; ) {
                  const n = r.previousElementSibling;
                  e ? d(n).is(e) && t.push(n) : t.push(n),
                  r = n
              }
              return d(t)
          },
          parent: function(e) {
              const t = [];
              for (let r = 0; r < this.length; r += 1)
                  null !== this[r].parentNode && (e ? d(this[r].parentNode).is(e) && t.push(this[r].parentNode) : t.push(this[r].parentNode));
              return d(t)
          },
          parents: function(e) {
              const t = [];
              for (let r = 0; r < this.length; r += 1) {
                  let n = this[r].parentNode;
                  for (; n; )
                      e ? d(n).is(e) && t.push(n) : t.push(n),
                      n = n.parentNode
              }
              return d(t)
          },
          closest: function(e) {
              let t = this;
              return void 0 === e ? d([]) : (t.is(e) || (t = t.parents(e).eq(0)),
              t)
          },
          find: function(e) {
              const t = [];
              for (let r = 0; r < this.length; r += 1) {
                  const n = this[r].querySelectorAll(e);
                  for (let e = 0; e < n.length; e += 1)
                      t.push(n[e])
              }
              return d(t)
          },
          children: function(e) {
              const t = [];
              for (let r = 0; r < this.length; r += 1) {
                  const n = this[r].children;
                  for (let r = 0; r < n.length; r += 1)
                      e && !d(n[r]).is(e) || t.push(n[r])
              }
              return d(t)
          },
          filter: function(e) {
              return d(p(this, e))
          },
          remove: function() {
              for (let e = 0; e < this.length; e += 1)
                  this[e].parentNode && this[e].parentNode.removeChild(this[e]);
              return this
          }
      };
      Object.keys(h).forEach((e=>{
          Object.defineProperty(d.fn, e, {
              value: h[e],
              writable: !0
          })
      }
      ));
      const m = d;
      function v(e, t=0) {
          return setTimeout(e, t)
      }
      function g() {
          return Date.now()
      }
      function b(e, t="x") {
          const r = l();
          let n, o, i;
          const a = function(e) {
              const t = l();
              let r;
              return t.getComputedStyle && (r = t.getComputedStyle(e, null)),
              !r && e.currentStyle && (r = e.currentStyle),
              r || (r = e.style),
              r
          }(e);
          return r.WebKitCSSMatrix ? (o = a.transform || a.webkitTransform,
          o.split(",").length > 6 && (o = o.split(", ").map((e=>e.replace(",", "."))).join(", ")),
          i = new r.WebKitCSSMatrix("none" === o ? "" : o)) : (i = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"),
          n = i.toString().split(",")),
          "x" === t && (o = r.WebKitCSSMatrix ? i.m41 : 16 === n.length ? parseFloat(n[12]) : parseFloat(n[4])),
          "y" === t && (o = r.WebKitCSSMatrix ? i.m42 : 16 === n.length ? parseFloat(n[13]) : parseFloat(n[5])),
          o || 0
      }
      function w(e) {
          return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
      }
      function P(...e) {
          const t = Object(e[0])
            , r = ["__proto__", "constructor", "prototype"];
          for (let o = 1; o < e.length; o += 1) {
              const i = e[o];
              if (null != i && (n = i,
              !("undefined" != typeof window && void 0 !== window.HTMLElement ? n instanceof HTMLElement : n && (1 === n.nodeType || 11 === n.nodeType)))) {
                  const e = Object.keys(Object(i)).filter((e=>r.indexOf(e) < 0));
                  for (let r = 0, n = e.length; r < n; r += 1) {
                      const n = e[r]
                        , o = Object.getOwnPropertyDescriptor(i, n);
                      void 0 !== o && o.enumerable && (w(t[n]) && w(i[n]) ? i[n].__swiper__ ? t[n] = i[n] : P(t[n], i[n]) : !w(t[n]) && w(i[n]) ? (t[n] = {},
                      i[n].__swiper__ ? t[n] = i[n] : P(t[n], i[n])) : t[n] = i[n])
                  }
              }
          }
          var n;
          return t
      }
      function O(e, t, r) {
          e.style.setProperty(t, r)
      }
      function S({swiper: e, targetPosition: t, side: r}) {
          const n = l()
            , o = -e.translate;
          let i, a = null;
          const s = e.params.speed;
          e.wrapperEl.style.scrollSnapType = "none",
          n.cancelAnimationFrame(e.cssModeFrameID);
          const u = t > o ? "next" : "prev"
            , c = (e,t)=>"next" === u && e >= t || "prev" === u && e <= t
            , p = ()=>{
              i = (new Date).getTime(),
              null === a && (a = i);
              const l = Math.max(Math.min((i - a) / s, 1), 0)
                , u = .5 - Math.cos(l * Math.PI) / 2;
              let d = o + u * (t - o);
              if (c(d, t) && (d = t),
              e.wrapperEl.scrollTo({
                  [r]: d
              }),
              c(d, t))
                  return e.wrapperEl.style.overflow = "hidden",
                  e.wrapperEl.style.scrollSnapType = "",
                  setTimeout((()=>{
                      e.wrapperEl.style.overflow = "",
                      e.wrapperEl.scrollTo({
                          [r]: d
                      })
                  }
                  )),
                  void n.cancelAnimationFrame(e.cssModeFrameID);
              e.cssModeFrameID = n.requestAnimationFrame(p)
          }
          ;
          p()
      }
      let E, k, T;
      function C() {
          return E || (E = function() {
              const e = l()
                , t = a();
              return {
                  smoothScroll: t.documentElement && "scrollBehavior"in t.documentElement.style,
                  touch: !!("ontouchstart"in e || e.DocumentTouch && t instanceof e.DocumentTouch),
                  passiveListener: function() {
                      let t = !1;
                      try {
                          const r = Object.defineProperty({}, "passive", {
                              get() {
                                  t = !0
                              }
                          });
                          e.addEventListener("testPassiveListener", null, r)
                      } catch (e) {}
                      return t
                  }(),
                  gestures: "ongesturestart"in e
              }
          }()),
          E
      }
      function j(e={}) {
          return k || (k = function({userAgent: e}={}) {
              const t = C()
                , r = l()
                , n = r.navigator.platform
                , o = e || r.navigator.userAgent
                , i = {
                  ios: !1,
                  android: !1
              }
                , a = r.screen.width
                , s = r.screen.height
                , u = o.match(/(Android);?[\s\/]+([\d.]+)?/);
              let c = o.match(/(iPad).*OS\s([\d_]+)/);
              const p = o.match(/(iPod)(.*OS\s([\d_]+))?/)
                , d = !c && o.match(/(iPhone\sOS|iOS)\s([\d_]+)/)
                , f = "Win32" === n;
              let y = "MacIntel" === n;
              return !c && y && t.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${a}x${s}`) >= 0 && (c = o.match(/(Version)\/([\d.]+)/),
              c || (c = [0, 1, "13_0_0"]),
              y = !1),
              u && !f && (i.os = "android",
              i.android = !0),
              (c || d || p) && (i.os = "ios",
              i.ios = !0),
              i
          }(e)),
          k
      }
      function _() {
          return T || (T = function() {
              const e = l();
              return {
                  isSafari: function() {
                      const t = e.navigator.userAgent.toLowerCase();
                      return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
                  }(),
                  isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
              }
          }()),
          T
      }
      const x = {
          on(e, t, r) {
              const n = this;
              if ("function" != typeof t)
                  return n;
              const o = r ? "unshift" : "push";
              return e.split(" ").forEach((e=>{
                  n.eventsListeners[e] || (n.eventsListeners[e] = []),
                  n.eventsListeners[e][o](t)
              }
              )),
              n
          },
          once(e, t, r) {
              const n = this;
              if ("function" != typeof t)
                  return n;
              function o(...r) {
                  n.off(e, o),
                  o.__emitterProxy && delete o.__emitterProxy,
                  t.apply(n, r)
              }
              return o.__emitterProxy = t,
              n.on(e, o, r)
          },
          onAny(e, t) {
              const r = this;
              if ("function" != typeof e)
                  return r;
              const n = t ? "unshift" : "push";
              return r.eventsAnyListeners.indexOf(e) < 0 && r.eventsAnyListeners[n](e),
              r
          },
          offAny(e) {
              const t = this;
              if (!t.eventsAnyListeners)
                  return t;
              const r = t.eventsAnyListeners.indexOf(e);
              return r >= 0 && t.eventsAnyListeners.splice(r, 1),
              t
          },
          off(e, t) {
              const r = this;
              return r.eventsListeners ? (e.split(" ").forEach((e=>{
                  void 0 === t ? r.eventsListeners[e] = [] : r.eventsListeners[e] && r.eventsListeners[e].forEach(((n,o)=>{
                      (n === t || n.__emitterProxy && n.__emitterProxy === t) && r.eventsListeners[e].splice(o, 1)
                  }
                  ))
              }
              )),
              r) : r
          },
          emit(...e) {
              const t = this;
              if (!t.eventsListeners)
                  return t;
              let r, n, o;
              "string" == typeof e[0] || Array.isArray(e[0]) ? (r = e[0],
              n = e.slice(1, e.length),
              o = t) : (r = e[0].events,
              n = e[0].data,
              o = e[0].context || t),
              n.unshift(o);
              return (Array.isArray(r) ? r : r.split(" ")).forEach((e=>{
                  t.eventsAnyListeners && t.eventsAnyListeners.length && t.eventsAnyListeners.forEach((t=>{
                      t.apply(o, [e, ...n])
                  }
                  )),
                  t.eventsListeners && t.eventsListeners[e] && t.eventsListeners[e].forEach((e=>{
                      e.apply(o, n)
                  }
                  ))
              }
              )),
              t
          }
      };
      const M = {
          updateSize: function() {
              const e = this;
              let t, r;
              const n = e.$el;
              t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : n[0].clientWidth,
              r = void 0 !== e.params.height && null !== e.params.height ? e.params.height : n[0].clientHeight,
              0 === t && e.isHorizontal() || 0 === r && e.isVertical() || (t = t - parseInt(n.css("padding-left") || 0, 10) - parseInt(n.css("padding-right") || 0, 10),
              r = r - parseInt(n.css("padding-top") || 0, 10) - parseInt(n.css("padding-bottom") || 0, 10),
              Number.isNaN(t) && (t = 0),
              Number.isNaN(r) && (r = 0),
              Object.assign(e, {
                  width: t,
                  height: r,
                  size: e.isHorizontal() ? t : r
              }))
          },
          updateSlides: function() {
              const e = this;
              function t(t) {
                  return e.isHorizontal() ? t : {
                      width: "height",
                      "margin-top": "margin-left",
                      "margin-bottom ": "margin-right",
                      "margin-left": "margin-top",
                      "margin-right": "margin-bottom",
                      "padding-left": "padding-top",
                      "padding-right": "padding-bottom",
                      marginRight: "marginBottom"
                  }[t]
              }
              function r(e, r) {
                  return parseFloat(e.getPropertyValue(t(r)) || 0)
              }
              const n = e.params
                , {$wrapperEl: o, size: i, rtlTranslate: a, wrongRTL: s} = e
                , l = e.virtual && n.virtual.enabled
                , u = l ? e.virtual.slides.length : e.slides.length
                , c = o.children(`.${e.params.slideClass}`)
                , p = l ? e.virtual.slides.length : c.length;
              let d = [];
              const f = []
                , y = [];
              let h = n.slidesOffsetBefore;
              "function" == typeof h && (h = n.slidesOffsetBefore.call(e));
              let m = n.slidesOffsetAfter;
              "function" == typeof m && (m = n.slidesOffsetAfter.call(e));
              const v = e.snapGrid.length
                , g = e.slidesGrid.length;
              let b = n.spaceBetween
                , w = -h
                , P = 0
                , S = 0;
              if (void 0 === i)
                  return;
              "string" == typeof b && b.indexOf("%") >= 0 && (b = parseFloat(b.replace("%", "")) / 100 * i),
              e.virtualSize = -b,
              a ? c.css({
                  marginLeft: "",
                  marginBottom: "",
                  marginTop: ""
              }) : c.css({
                  marginRight: "",
                  marginBottom: "",
                  marginTop: ""
              }),
              n.centeredSlides && n.cssMode && (O(e.wrapperEl, "--swiper-centered-offset-before", ""),
              O(e.wrapperEl, "--swiper-centered-offset-after", ""));
              const E = n.grid && n.grid.rows > 1 && e.grid;
              let k;
              E && e.grid.initSlides(p);
              const T = "auto" === n.slidesPerView && n.breakpoints && Object.keys(n.breakpoints).filter((e=>void 0 !== n.breakpoints[e].slidesPerView)).length > 0;
              for (let o = 0; o < p; o += 1) {
                  k = 0;
                  const a = c.eq(o);
                  if (E && e.grid.updateSlide(o, a, p, t),
                  "none" !== a.css("display")) {
                      if ("auto" === n.slidesPerView) {
                          T && (c[o].style[t("width")] = "");
                          const i = getComputedStyle(a[0])
                            , s = a[0].style.transform
                            , l = a[0].style.webkitTransform;
                          if (s && (a[0].style.transform = "none"),
                          l && (a[0].style.webkitTransform = "none"),
                          n.roundLengths)
                              k = e.isHorizontal() ? a.outerWidth(!0) : a.outerHeight(!0);
                          else {
                              const e = r(i, "width")
                                , t = r(i, "padding-left")
                                , n = r(i, "padding-right")
                                , o = r(i, "margin-left")
                                , s = r(i, "margin-right")
                                , l = i.getPropertyValue("box-sizing");
                              if (l && "border-box" === l)
                                  k = e + o + s;
                              else {
                                  const {clientWidth: r, offsetWidth: i} = a[0];
                                  k = e + t + n + o + s + (i - r)
                              }
                          }
                          s && (a[0].style.transform = s),
                          l && (a[0].style.webkitTransform = l),
                          n.roundLengths && (k = Math.floor(k))
                      } else
                          k = (i - (n.slidesPerView - 1) * b) / n.slidesPerView,
                          n.roundLengths && (k = Math.floor(k)),
                          c[o] && (c[o].style[t("width")] = `${k}px`);
                      c[o] && (c[o].swiperSlideSize = k),
                      y.push(k),
                      n.centeredSlides ? (w = w + k / 2 + P / 2 + b,
                      0 === P && 0 !== o && (w = w - i / 2 - b),
                      0 === o && (w = w - i / 2 - b),
                      Math.abs(w) < .001 && (w = 0),
                      n.roundLengths && (w = Math.floor(w)),
                      S % n.slidesPerGroup == 0 && d.push(w),
                      f.push(w)) : (n.roundLengths && (w = Math.floor(w)),
                      (S - Math.min(e.params.slidesPerGroupSkip, S)) % e.params.slidesPerGroup == 0 && d.push(w),
                      f.push(w),
                      w = w + k + b),
                      e.virtualSize += k + b,
                      P = k,
                      S += 1
                  }
              }
              if (e.virtualSize = Math.max(e.virtualSize, i) + m,
              a && s && ("slide" === n.effect || "coverflow" === n.effect) && o.css({
                  width: `${e.virtualSize + n.spaceBetween}px`
              }),
              n.setWrapperSize && o.css({
                  [t("width")]: `${e.virtualSize + n.spaceBetween}px`
              }),
              E && e.grid.updateWrapperSize(k, d, t),
              !n.centeredSlides) {
                  const t = [];
                  for (let r = 0; r < d.length; r += 1) {
                      let o = d[r];
                      n.roundLengths && (o = Math.floor(o)),
                      d[r] <= e.virtualSize - i && t.push(o)
                  }
                  d = t,
                  Math.floor(e.virtualSize - i) - Math.floor(d[d.length - 1]) > 1 && d.push(e.virtualSize - i)
              }
              if (0 === d.length && (d = [0]),
              0 !== n.spaceBetween) {
                  const r = e.isHorizontal() && a ? "marginLeft" : t("marginRight");
                  c.filter(((e,t)=>!n.cssMode || t !== c.length - 1)).css({
                      [r]: `${b}px`
                  })
              }
              if (n.centeredSlides && n.centeredSlidesBounds) {
                  let e = 0;
                  y.forEach((t=>{
                      e += t + (n.spaceBetween ? n.spaceBetween : 0)
                  }
                  )),
                  e -= n.spaceBetween;
                  const t = e - i;
                  d = d.map((e=>e < 0 ? -h : e > t ? t + m : e))
              }
              if (n.centerInsufficientSlides) {
                  let e = 0;
                  if (y.forEach((t=>{
                      e += t + (n.spaceBetween ? n.spaceBetween : 0)
                  }
                  )),
                  e -= n.spaceBetween,
                  e < i) {
                      const t = (i - e) / 2;
                      d.forEach(((e,r)=>{
                          d[r] = e - t
                      }
                      )),
                      f.forEach(((e,r)=>{
                          f[r] = e + t
                      }
                      ))
                  }
              }
              if (Object.assign(e, {
                  slides: c,
                  snapGrid: d,
                  slidesGrid: f,
                  slidesSizesGrid: y
              }),
              n.centeredSlides && n.cssMode && !n.centeredSlidesBounds) {
                  O(e.wrapperEl, "--swiper-centered-offset-before", -d[0] + "px"),
                  O(e.wrapperEl, "--swiper-centered-offset-after", e.size / 2 - y[y.length - 1] / 2 + "px");
                  const t = -e.snapGrid[0]
                    , r = -e.slidesGrid[0];
                  e.snapGrid = e.snapGrid.map((e=>e + t)),
                  e.slidesGrid = e.slidesGrid.map((e=>e + r))
              }
              p !== u && e.emit("slidesLengthChange"),
              d.length !== v && (e.params.watchOverflow && e.checkOverflow(),
              e.emit("snapGridLengthChange")),
              f.length !== g && e.emit("slidesGridLengthChange"),
              n.watchSlidesProgress && e.updateSlidesOffset()
          },
          updateAutoHeight: function(e) {
              const t = this
                , r = []
                , n = t.virtual && t.params.virtual.enabled;
              let o, i = 0;
              "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
              const a = e=>n ? t.slides.filter((t=>parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e))[0] : t.slides.eq(e)[0];
              if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
                  if (t.params.centeredSlides)
                      t.visibleSlides.each((e=>{
                          r.push(e)
                      }
                      ));
                  else
                      for (o = 0; o < Math.ceil(t.params.slidesPerView); o += 1) {
                          const e = t.activeIndex + o;
                          if (e > t.slides.length && !n)
                              break;
                          r.push(a(e))
                      }
              else
                  r.push(a(t.activeIndex));
              for (o = 0; o < r.length; o += 1)
                  if (void 0 !== r[o]) {
                      const e = r[o].offsetHeight;
                      i = e > i ? e : i
                  }
              (i || 0 === i) && t.$wrapperEl.css("height", `${i}px`)
          },
          updateSlidesOffset: function() {
              const e = this
                , t = e.slides;
              for (let r = 0; r < t.length; r += 1)
                  t[r].swiperSlideOffset = e.isHorizontal() ? t[r].offsetLeft : t[r].offsetTop
          },
          updateSlidesProgress: function(e=this && this.translate || 0) {
              const t = this
                , r = t.params
                , {slides: n, rtlTranslate: o, snapGrid: i} = t;
              if (0 === n.length)
                  return;
              void 0 === n[0].swiperSlideOffset && t.updateSlidesOffset();
              let a = -e;
              o && (a = e),
              n.removeClass(r.slideVisibleClass),
              t.visibleSlidesIndexes = [],
              t.visibleSlides = [];
              for (let e = 0; e < n.length; e += 1) {
                  const s = n[e];
                  let l = s.swiperSlideOffset;
                  r.cssMode && r.centeredSlides && (l -= n[0].swiperSlideOffset);
                  const u = (a + (r.centeredSlides ? t.minTranslate() : 0) - l) / (s.swiperSlideSize + r.spaceBetween)
                    , c = (a - i[0] + (r.centeredSlides ? t.minTranslate() : 0) - l) / (s.swiperSlideSize + r.spaceBetween)
                    , p = -(a - l)
                    , d = p + t.slidesSizesGrid[e];
                  (p >= 0 && p < t.size - 1 || d > 1 && d <= t.size || p <= 0 && d >= t.size) && (t.visibleSlides.push(s),
                  t.visibleSlidesIndexes.push(e),
                  n.eq(e).addClass(r.slideVisibleClass)),
                  s.progress = o ? -u : u,
                  s.originalProgress = o ? -c : c
              }
              t.visibleSlides = m(t.visibleSlides)
          },
          updateProgress: function(e) {
              const t = this;
              if (void 0 === e) {
                  const r = t.rtlTranslate ? -1 : 1;
                  e = t && t.translate && t.translate * r || 0
              }
              const r = t.params
                , n = t.maxTranslate() - t.minTranslate();
              let {progress: o, isBeginning: i, isEnd: a} = t;
              const s = i
                , l = a;
              0 === n ? (o = 0,
              i = !0,
              a = !0) : (o = (e - t.minTranslate()) / n,
              i = o <= 0,
              a = o >= 1),
              Object.assign(t, {
                  progress: o,
                  isBeginning: i,
                  isEnd: a
              }),
              (r.watchSlidesProgress || r.centeredSlides && r.autoHeight) && t.updateSlidesProgress(e),
              i && !s && t.emit("reachBeginning toEdge"),
              a && !l && t.emit("reachEnd toEdge"),
              (s && !i || l && !a) && t.emit("fromEdge"),
              t.emit("progress", o)
          },
          updateSlidesClasses: function() {
              const e = this
                , {slides: t, params: r, $wrapperEl: n, activeIndex: o, realIndex: i} = e
                , a = e.virtual && r.virtual.enabled;
              let s;
              t.removeClass(`${r.slideActiveClass} ${r.slideNextClass} ${r.slidePrevClass} ${r.slideDuplicateActiveClass} ${r.slideDuplicateNextClass} ${r.slideDuplicatePrevClass}`),
              s = a ? e.$wrapperEl.find(`.${r.slideClass}[data-swiper-slide-index="${o}"]`) : t.eq(o),
              s.addClass(r.slideActiveClass),
              r.loop && (s.hasClass(r.slideDuplicateClass) ? n.children(`.${r.slideClass}:not(.${r.slideDuplicateClass})[data-swiper-slide-index="${i}"]`).addClass(r.slideDuplicateActiveClass) : n.children(`.${r.slideClass}.${r.slideDuplicateClass}[data-swiper-slide-index="${i}"]`).addClass(r.slideDuplicateActiveClass));
              let l = s.nextAll(`.${r.slideClass}`).eq(0).addClass(r.slideNextClass);
              r.loop && 0 === l.length && (l = t.eq(0),
              l.addClass(r.slideNextClass));
              let u = s.prevAll(`.${r.slideClass}`).eq(0).addClass(r.slidePrevClass);
              r.loop && 0 === u.length && (u = t.eq(-1),
              u.addClass(r.slidePrevClass)),
              r.loop && (l.hasClass(r.slideDuplicateClass) ? n.children(`.${r.slideClass}:not(.${r.slideDuplicateClass})[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(r.slideDuplicateNextClass) : n.children(`.${r.slideClass}.${r.slideDuplicateClass}[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(r.slideDuplicateNextClass),
              u.hasClass(r.slideDuplicateClass) ? n.children(`.${r.slideClass}:not(.${r.slideDuplicateClass})[data-swiper-slide-index="${u.attr("data-swiper-slide-index")}"]`).addClass(r.slideDuplicatePrevClass) : n.children(`.${r.slideClass}.${r.slideDuplicateClass}[data-swiper-slide-index="${u.attr("data-swiper-slide-index")}"]`).addClass(r.slideDuplicatePrevClass)),
              e.emitSlidesClasses()
          },
          updateActiveIndex: function(e) {
              const t = this
                , r = t.rtlTranslate ? t.translate : -t.translate
                , {slidesGrid: n, snapGrid: o, params: i, activeIndex: a, realIndex: s, snapIndex: l} = t;
              let u, c = e;
              if (void 0 === c) {
                  for (let e = 0; e < n.length; e += 1)
                      void 0 !== n[e + 1] ? r >= n[e] && r < n[e + 1] - (n[e + 1] - n[e]) / 2 ? c = e : r >= n[e] && r < n[e + 1] && (c = e + 1) : r >= n[e] && (c = e);
                  i.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0)
              }
              if (o.indexOf(r) >= 0)
                  u = o.indexOf(r);
              else {
                  const e = Math.min(i.slidesPerGroupSkip, c);
                  u = e + Math.floor((c - e) / i.slidesPerGroup)
              }
              if (u >= o.length && (u = o.length - 1),
              c === a)
                  return void (u !== l && (t.snapIndex = u,
                  t.emit("snapIndexChange")));
              const p = parseInt(t.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
              Object.assign(t, {
                  snapIndex: u,
                  realIndex: p,
                  previousIndex: a,
                  activeIndex: c
              }),
              t.emit("activeIndexChange"),
              t.emit("snapIndexChange"),
              s !== p && t.emit("realIndexChange"),
              (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange")
          },
          updateClickedSlide: function(e) {
              const t = this
                , r = t.params
                , n = m(e).closest(`.${r.slideClass}`)[0];
              let o, i = !1;
              if (n)
                  for (let e = 0; e < t.slides.length; e += 1)
                      if (t.slides[e] === n) {
                          i = !0,
                          o = e;
                          break
                      }
              if (!n || !i)
                  return t.clickedSlide = void 0,
                  void (t.clickedIndex = void 0);
              t.clickedSlide = n,
              t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(m(n).attr("data-swiper-slide-index"), 10) : t.clickedIndex = o,
              r.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
          }
      };
      const L = {
          getTranslate: function(e=(this.isHorizontal() ? "x" : "y")) {
              const {params: t, rtlTranslate: r, translate: n, $wrapperEl: o} = this;
              if (t.virtualTranslate)
                  return r ? -n : n;
              if (t.cssMode)
                  return n;
              let i = b(o[0], e);
              return r && (i = -i),
              i || 0
          },
          setTranslate: function(e, t) {
              const r = this
                , {rtlTranslate: n, params: o, $wrapperEl: i, wrapperEl: a, progress: s} = r;
              let l, u = 0, c = 0;
              r.isHorizontal() ? u = n ? -e : e : c = e,
              o.roundLengths && (u = Math.floor(u),
              c = Math.floor(c)),
              o.cssMode ? a[r.isHorizontal() ? "scrollLeft" : "scrollTop"] = r.isHorizontal() ? -u : -c : o.virtualTranslate || i.transform(`translate3d(${u}px, ${c}px, 0px)`),
              r.previousTranslate = r.translate,
              r.translate = r.isHorizontal() ? u : c;
              const p = r.maxTranslate() - r.minTranslate();
              l = 0 === p ? 0 : (e - r.minTranslate()) / p,
              l !== s && r.updateProgress(e),
              r.emit("setTranslate", r.translate, t)
          },
          minTranslate: function() {
              return -this.snapGrid[0]
          },
          maxTranslate: function() {
              return -this.snapGrid[this.snapGrid.length - 1]
          },
          translateTo: function(e=0, t=this.params.speed, r=!0, n=!0, o) {
              const i = this
                , {params: a, wrapperEl: s} = i;
              if (i.animating && a.preventInteractionOnTransition)
                  return !1;
              const l = i.minTranslate()
                , u = i.maxTranslate();
              let c;
              if (c = n && e > l ? l : n && e < u ? u : e,
              i.updateProgress(c),
              a.cssMode) {
                  const e = i.isHorizontal();
                  if (0 === t)
                      s[e ? "scrollLeft" : "scrollTop"] = -c;
                  else {
                      if (!i.support.smoothScroll)
                          return S({
                              swiper: i,
                              targetPosition: -c,
                              side: e ? "left" : "top"
                          }),
                          !0;
                      s.scrollTo({
                          [e ? "left" : "top"]: -c,
                          behavior: "smooth"
                      })
                  }
                  return !0
              }
              return 0 === t ? (i.setTransition(0),
              i.setTranslate(c),
              r && (i.emit("beforeTransitionStart", t, o),
              i.emit("transitionEnd"))) : (i.setTransition(t),
              i.setTranslate(c),
              r && (i.emit("beforeTransitionStart", t, o),
              i.emit("transitionStart")),
              i.animating || (i.animating = !0,
              i.onTranslateToWrapperTransitionEnd || (i.onTranslateToWrapperTransitionEnd = function(e) {
                  i && !i.destroyed && e.target === this && (i.$wrapperEl[0].removeEventListener("transitionend", i.onTranslateToWrapperTransitionEnd),
                  i.$wrapperEl[0].removeEventListener("webkitTransitionEnd", i.onTranslateToWrapperTransitionEnd),
                  i.onTranslateToWrapperTransitionEnd = null,
                  delete i.onTranslateToWrapperTransitionEnd,
                  r && i.emit("transitionEnd"))
              }
              ),
              i.$wrapperEl[0].addEventListener("transitionend", i.onTranslateToWrapperTransitionEnd),
              i.$wrapperEl[0].addEventListener("webkitTransitionEnd", i.onTranslateToWrapperTransitionEnd))),
              !0
          }
      };
      function D({swiper: e, runCallbacks: t, direction: r, step: n}) {
          const {activeIndex: o, previousIndex: i} = e;
          let a = r;
          if (a || (a = o > i ? "next" : o < i ? "prev" : "reset"),
          e.emit(`transition${n}`),
          t && o !== i) {
              if ("reset" === a)
                  return void e.emit(`slideResetTransition${n}`);
              e.emit(`slideChangeTransition${n}`),
              "next" === a ? e.emit(`slideNextTransition${n}`) : e.emit(`slidePrevTransition${n}`)
          }
      }
      const A = {
          slideTo: function(e=0, t=this.params.speed, r=!0, n, o) {
              if ("number" != typeof e && "string" != typeof e)
                  throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);
              if ("string" == typeof e) {
                  const t = parseInt(e, 10);
                  if (!isFinite(t))
                      throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                  e = t
              }
              const i = this;
              let a = e;
              a < 0 && (a = 0);
              const {params: s, snapGrid: l, slidesGrid: u, previousIndex: c, activeIndex: p, rtlTranslate: d, wrapperEl: f, enabled: y} = i;
              if (i.animating && s.preventInteractionOnTransition || !y && !n && !o)
                  return !1;
              const h = Math.min(i.params.slidesPerGroupSkip, a);
              let m = h + Math.floor((a - h) / i.params.slidesPerGroup);
              m >= l.length && (m = l.length - 1),
              (p || s.initialSlide || 0) === (c || 0) && r && i.emit("beforeSlideChangeStart");
              const v = -l[m];
              if (i.updateProgress(v),
              s.normalizeSlideIndex)
                  for (let e = 0; e < u.length; e += 1) {
                      const t = -Math.floor(100 * v)
                        , r = Math.floor(100 * u[e])
                        , n = Math.floor(100 * u[e + 1]);
                      void 0 !== u[e + 1] ? t >= r && t < n - (n - r) / 2 ? a = e : t >= r && t < n && (a = e + 1) : t >= r && (a = e)
                  }
              if (i.initialized && a !== p) {
                  if (!i.allowSlideNext && v < i.translate && v < i.minTranslate())
                      return !1;
                  if (!i.allowSlidePrev && v > i.translate && v > i.maxTranslate() && (p || 0) !== a)
                      return !1
              }
              let g;
              if (g = a > p ? "next" : a < p ? "prev" : "reset",
              d && -v === i.translate || !d && v === i.translate)
                  return i.updateActiveIndex(a),
                  s.autoHeight && i.updateAutoHeight(),
                  i.updateSlidesClasses(),
                  "slide" !== s.effect && i.setTranslate(v),
                  "reset" !== g && (i.transitionStart(r, g),
                  i.transitionEnd(r, g)),
                  !1;
              if (s.cssMode) {
                  const e = i.isHorizontal()
                    , r = d ? v : -v;
                  if (0 === t) {
                      const t = i.virtual && i.params.virtual.enabled;
                      t && (i.wrapperEl.style.scrollSnapType = "none",
                      i._immediateVirtual = !0),
                      f[e ? "scrollLeft" : "scrollTop"] = r,
                      t && requestAnimationFrame((()=>{
                          i.wrapperEl.style.scrollSnapType = "",
                          i._swiperImmediateVirtual = !1
                      }
                      ))
                  } else {
                      if (!i.support.smoothScroll)
                          return S({
                              swiper: i,
                              targetPosition: r,
                              side: e ? "left" : "top"
                          }),
                          !0;
                      f.scrollTo({
                          [e ? "left" : "top"]: r,
                          behavior: "smooth"
                      })
                  }
                  return !0
              }
              return i.setTransition(t),
              i.setTranslate(v),
              i.updateActiveIndex(a),
              i.updateSlidesClasses(),
              i.emit("beforeTransitionStart", t, n),
              i.transitionStart(r, g),
              0 === t ? i.transitionEnd(r, g) : i.animating || (i.animating = !0,
              i.onSlideToWrapperTransitionEnd || (i.onSlideToWrapperTransitionEnd = function(e) {
                  i && !i.destroyed && e.target === this && (i.$wrapperEl[0].removeEventListener("transitionend", i.onSlideToWrapperTransitionEnd),
                  i.$wrapperEl[0].removeEventListener("webkitTransitionEnd", i.onSlideToWrapperTransitionEnd),
                  i.onSlideToWrapperTransitionEnd = null,
                  delete i.onSlideToWrapperTransitionEnd,
                  i.transitionEnd(r, g))
              }
              ),
              i.$wrapperEl[0].addEventListener("transitionend", i.onSlideToWrapperTransitionEnd),
              i.$wrapperEl[0].addEventListener("webkitTransitionEnd", i.onSlideToWrapperTransitionEnd)),
              !0
          },
          slideToLoop: function(e=0, t=this.params.speed, r=!0, n) {
              const o = this;
              let i = e;
              return o.params.loop && (i += o.loopedSlides),
              o.slideTo(i, t, r, n)
          },
          slideNext: function(e=this.params.speed, t=!0, r) {
              const n = this
                , {animating: o, enabled: i, params: a} = n;
              if (!i)
                  return n;
              let s = a.slidesPerGroup;
              "auto" === a.slidesPerView && 1 === a.slidesPerGroup && a.slidesPerGroupAuto && (s = Math.max(n.slidesPerViewDynamic("current", !0), 1));
              const l = n.activeIndex < a.slidesPerGroupSkip ? 1 : s;
              if (a.loop) {
                  if (o && a.loopPreventsSlide)
                      return !1;
                  n.loopFix(),
                  n._clientLeft = n.$wrapperEl[0].clientLeft
              }
              return a.rewind && n.isEnd ? n.slideTo(0, e, t, r) : n.slideTo(n.activeIndex + l, e, t, r)
          },
          slidePrev: function(e=this.params.speed, t=!0, r) {
              const n = this
                , {params: o, animating: i, snapGrid: a, slidesGrid: s, rtlTranslate: l, enabled: u} = n;
              if (!u)
                  return n;
              if (o.loop) {
                  if (i && o.loopPreventsSlide)
                      return !1;
                  n.loopFix(),
                  n._clientLeft = n.$wrapperEl[0].clientLeft
              }
              function c(e) {
                  return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
              }
              const p = c(l ? n.translate : -n.translate)
                , d = a.map((e=>c(e)));
              let f = a[d.indexOf(p) - 1];
              if (void 0 === f && o.cssMode) {
                  let e;
                  a.forEach(((t,r)=>{
                      p >= t && (e = r)
                  }
                  )),
                  void 0 !== e && (f = a[e > 0 ? e - 1 : e])
              }
              let y = 0;
              return void 0 !== f && (y = s.indexOf(f),
              y < 0 && (y = n.activeIndex - 1),
              "auto" === o.slidesPerView && 1 === o.slidesPerGroup && o.slidesPerGroupAuto && (y = y - n.slidesPerViewDynamic("previous", !0) + 1,
              y = Math.max(y, 0))),
              o.rewind && n.isBeginning ? n.slideTo(n.slides.length - 1, e, t, r) : n.slideTo(y, e, t, r)
          },
          slideReset: function(e=this.params.speed, t=!0, r) {
              return this.slideTo(this.activeIndex, e, t, r)
          },
          slideToClosest: function(e=this.params.speed, t=!0, r, n=.5) {
              const o = this;
              let i = o.activeIndex;
              const a = Math.min(o.params.slidesPerGroupSkip, i)
                , s = a + Math.floor((i - a) / o.params.slidesPerGroup)
                , l = o.rtlTranslate ? o.translate : -o.translate;
              if (l >= o.snapGrid[s]) {
                  const e = o.snapGrid[s];
                  l - e > (o.snapGrid[s + 1] - e) * n && (i += o.params.slidesPerGroup)
              } else {
                  const e = o.snapGrid[s - 1];
                  l - e <= (o.snapGrid[s] - e) * n && (i -= o.params.slidesPerGroup)
              }
              return i = Math.max(i, 0),
              i = Math.min(i, o.slidesGrid.length - 1),
              o.slideTo(i, e, t, r)
          },
          slideToClickedSlide: function() {
              const e = this
                , {params: t, $wrapperEl: r} = e
                , n = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
              let o, i = e.clickedIndex;
              if (t.loop) {
                  if (e.animating)
                      return;
                  o = parseInt(m(e.clickedSlide).attr("data-swiper-slide-index"), 10),
                  t.centeredSlides ? i < e.loopedSlides - n / 2 || i > e.slides.length - e.loopedSlides + n / 2 ? (e.loopFix(),
                  i = r.children(`.${t.slideClass}[data-swiper-slide-index="${o}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),
                  v((()=>{
                      e.slideTo(i)
                  }
                  ))) : e.slideTo(i) : i > e.slides.length - n ? (e.loopFix(),
                  i = r.children(`.${t.slideClass}[data-swiper-slide-index="${o}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),
                  v((()=>{
                      e.slideTo(i)
                  }
                  ))) : e.slideTo(i)
              } else
                  e.slideTo(i)
          }
      };
      const R = {
          loopCreate: function() {
              const e = this
                , t = a()
                , {params: r, $wrapperEl: n} = e
                , o = n.children().length > 0 ? m(n.children()[0].parentNode) : n;
              o.children(`.${r.slideClass}.${r.slideDuplicateClass}`).remove();
              let i = o.children(`.${r.slideClass}`);
              if (r.loopFillGroupWithBlank) {
                  const e = r.slidesPerGroup - i.length % r.slidesPerGroup;
                  if (e !== r.slidesPerGroup) {
                      for (let n = 0; n < e; n += 1) {
                          const e = m(t.createElement("div")).addClass(`${r.slideClass} ${r.slideBlankClass}`);
                          o.append(e)
                      }
                      i = o.children(`.${r.slideClass}`)
                  }
              }
              "auto" !== r.slidesPerView || r.loopedSlides || (r.loopedSlides = i.length),
              e.loopedSlides = Math.ceil(parseFloat(r.loopedSlides || r.slidesPerView, 10)),
              e.loopedSlides += r.loopAdditionalSlides,
              e.loopedSlides > i.length && (e.loopedSlides = i.length);
              const s = []
                , l = [];
              i.each(((t,r)=>{
                  const n = m(t);
                  r < e.loopedSlides && l.push(t),
                  r < i.length && r >= i.length - e.loopedSlides && s.push(t),
                  n.attr("data-swiper-slide-index", r)
              }
              ));
              for (let e = 0; e < l.length; e += 1)
                  o.append(m(l[e].cloneNode(!0)).addClass(r.slideDuplicateClass));
              for (let e = s.length - 1; e >= 0; e -= 1)
                  o.prepend(m(s[e].cloneNode(!0)).addClass(r.slideDuplicateClass))
          },
          loopFix: function() {
              const e = this;
              e.emit("beforeLoopFix");
              const {activeIndex: t, slides: r, loopedSlides: n, allowSlidePrev: o, allowSlideNext: i, snapGrid: a, rtlTranslate: s} = e;
              let l;
              e.allowSlidePrev = !0,
              e.allowSlideNext = !0;
              const u = -a[t] - e.getTranslate();
              if (t < n) {
                  l = r.length - 3 * n + t,
                  l += n;
                  e.slideTo(l, 0, !1, !0) && 0 !== u && e.setTranslate((s ? -e.translate : e.translate) - u)
              } else if (t >= r.length - n) {
                  l = -r.length + t + n,
                  l += n;
                  e.slideTo(l, 0, !1, !0) && 0 !== u && e.setTranslate((s ? -e.translate : e.translate) - u)
              }
              e.allowSlidePrev = o,
              e.allowSlideNext = i,
              e.emit("loopFix")
          },
          loopDestroy: function() {
              const {$wrapperEl: e, params: t, slides: r} = this;
              e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(),
              r.removeAttr("data-swiper-slide-index")
          }
      };
      function I(e) {
          const t = this
            , r = a()
            , n = l()
            , o = t.touchEventsData
            , {params: i, touches: s, enabled: u} = t;
          if (!u)
              return;
          if (t.animating && i.preventInteractionOnTransition)
              return;
          !t.animating && i.cssMode && i.loop && t.loopFix();
          let c = e;
          c.originalEvent && (c = c.originalEvent);
          let p = m(c.target);
          if ("wrapper" === i.touchEventsTarget && !p.closest(t.wrapperEl).length)
              return;
          if (o.isTouchEvent = "touchstart" === c.type,
          !o.isTouchEvent && "which"in c && 3 === c.which)
              return;
          if (!o.isTouchEvent && "button"in c && c.button > 0)
              return;
          if (o.isTouched && o.isMoved)
              return;
          !!i.noSwipingClass && "" !== i.noSwipingClass && c.target && c.target.shadowRoot && e.path && e.path[0] && (p = m(e.path[0]));
          const d = i.noSwipingSelector ? i.noSwipingSelector : `.${i.noSwipingClass}`
            , f = !(!c.target || !c.target.shadowRoot);
          if (i.noSwiping && (f ? function(e, t=this) {
              return function t(r) {
                  return r && r !== a() && r !== l() ? (r.assignedSlot && (r = r.assignedSlot),
                  r.closest(e) || t(r.getRootNode().host)) : null
              }(t)
          }(d, c.target) : p.closest(d)[0]))
              return void (t.allowClick = !0);
          if (i.swipeHandler && !p.closest(i.swipeHandler)[0])
              return;
          s.currentX = "touchstart" === c.type ? c.targetTouches[0].pageX : c.pageX,
          s.currentY = "touchstart" === c.type ? c.targetTouches[0].pageY : c.pageY;
          const y = s.currentX
            , h = s.currentY
            , v = i.edgeSwipeDetection || i.iOSEdgeSwipeDetection
            , b = i.edgeSwipeThreshold || i.iOSEdgeSwipeThreshold;
          if (v && (y <= b || y >= n.innerWidth - b)) {
              if ("prevent" !== v)
                  return;
              e.preventDefault()
          }
          if (Object.assign(o, {
              isTouched: !0,
              isMoved: !1,
              allowTouchCallbacks: !0,
              isScrolling: void 0,
              startMoving: void 0
          }),
          s.startX = y,
          s.startY = h,
          o.touchStartTime = g(),
          t.allowClick = !0,
          t.updateSize(),
          t.swipeDirection = void 0,
          i.threshold > 0 && (o.allowThresholdMove = !1),
          "touchstart" !== c.type) {
              let e = !0;
              p.is(o.focusableElements) && (e = !1),
              r.activeElement && m(r.activeElement).is(o.focusableElements) && r.activeElement !== p[0] && r.activeElement.blur();
              const n = e && t.allowTouchMove && i.touchStartPreventDefault;
              !i.touchStartForcePreventDefault && !n || p[0].isContentEditable || c.preventDefault()
          }
          t.emit("touchStart", c)
      }
      function $(e) {
          const t = a()
            , r = this
            , n = r.touchEventsData
            , {params: o, touches: i, rtlTranslate: s, enabled: l} = r;
          if (!l)
              return;
          let u = e;
          if (u.originalEvent && (u = u.originalEvent),
          !n.isTouched)
              return void (n.startMoving && n.isScrolling && r.emit("touchMoveOpposite", u));
          if (n.isTouchEvent && "touchmove" !== u.type)
              return;
          const c = "touchmove" === u.type && u.targetTouches && (u.targetTouches[0] || u.changedTouches[0])
            , p = "touchmove" === u.type ? c.pageX : u.pageX
            , d = "touchmove" === u.type ? c.pageY : u.pageY;
          if (u.preventedByNestedSwiper)
              return i.startX = p,
              void (i.startY = d);
          if (!r.allowTouchMove)
              return r.allowClick = !1,
              void (n.isTouched && (Object.assign(i, {
                  startX: p,
                  startY: d,
                  currentX: p,
                  currentY: d
              }),
              n.touchStartTime = g()));
          if (n.isTouchEvent && o.touchReleaseOnEdges && !o.loop)
              if (r.isVertical()) {
                  if (d < i.startY && r.translate <= r.maxTranslate() || d > i.startY && r.translate >= r.minTranslate())
                      return n.isTouched = !1,
                      void (n.isMoved = !1)
              } else if (p < i.startX && r.translate <= r.maxTranslate() || p > i.startX && r.translate >= r.minTranslate())
                  return;
          if (n.isTouchEvent && t.activeElement && u.target === t.activeElement && m(u.target).is(n.focusableElements))
              return n.isMoved = !0,
              void (r.allowClick = !1);
          if (n.allowTouchCallbacks && r.emit("touchMove", u),
          u.targetTouches && u.targetTouches.length > 1)
              return;
          i.currentX = p,
          i.currentY = d;
          const f = i.currentX - i.startX
            , y = i.currentY - i.startY;
          if (r.params.threshold && Math.sqrt(f ** 2 + y ** 2) < r.params.threshold)
              return;
          if (void 0 === n.isScrolling) {
              let e;
              r.isHorizontal() && i.currentY === i.startY || r.isVertical() && i.currentX === i.startX ? n.isScrolling = !1 : f * f + y * y >= 25 && (e = 180 * Math.atan2(Math.abs(y), Math.abs(f)) / Math.PI,
              n.isScrolling = r.isHorizontal() ? e > o.touchAngle : 90 - e > o.touchAngle)
          }
          if (n.isScrolling && r.emit("touchMoveOpposite", u),
          void 0 === n.startMoving && (i.currentX === i.startX && i.currentY === i.startY || (n.startMoving = !0)),
          n.isScrolling)
              return void (n.isTouched = !1);
          if (!n.startMoving)
              return;
          r.allowClick = !1,
          !o.cssMode && u.cancelable && u.preventDefault(),
          o.touchMoveStopPropagation && !o.nested && u.stopPropagation(),
          n.isMoved || (o.loop && !o.cssMode && r.loopFix(),
          n.startTranslate = r.getTranslate(),
          r.setTransition(0),
          r.animating && r.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
          n.allowMomentumBounce = !1,
          !o.grabCursor || !0 !== r.allowSlideNext && !0 !== r.allowSlidePrev || r.setGrabCursor(!0),
          r.emit("sliderFirstMove", u)),
          r.emit("sliderMove", u),
          n.isMoved = !0;
          let h = r.isHorizontal() ? f : y;
          i.diff = h,
          h *= o.touchRatio,
          s && (h = -h),
          r.swipeDirection = h > 0 ? "prev" : "next",
          n.currentTranslate = h + n.startTranslate;
          let v = !0
            , b = o.resistanceRatio;
          if (o.touchReleaseOnEdges && (b = 0),
          h > 0 && n.currentTranslate > r.minTranslate() ? (v = !1,
          o.resistance && (n.currentTranslate = r.minTranslate() - 1 + (-r.minTranslate() + n.startTranslate + h) ** b)) : h < 0 && n.currentTranslate < r.maxTranslate() && (v = !1,
          o.resistance && (n.currentTranslate = r.maxTranslate() + 1 - (r.maxTranslate() - n.startTranslate - h) ** b)),
          v && (u.preventedByNestedSwiper = !0),
          !r.allowSlideNext && "next" === r.swipeDirection && n.currentTranslate < n.startTranslate && (n.currentTranslate = n.startTranslate),
          !r.allowSlidePrev && "prev" === r.swipeDirection && n.currentTranslate > n.startTranslate && (n.currentTranslate = n.startTranslate),
          r.allowSlidePrev || r.allowSlideNext || (n.currentTranslate = n.startTranslate),
          o.threshold > 0) {
              if (!(Math.abs(h) > o.threshold || n.allowThresholdMove))
                  return void (n.currentTranslate = n.startTranslate);
              if (!n.allowThresholdMove)
                  return n.allowThresholdMove = !0,
                  i.startX = i.currentX,
                  i.startY = i.currentY,
                  n.currentTranslate = n.startTranslate,
                  void (i.diff = r.isHorizontal() ? i.currentX - i.startX : i.currentY - i.startY)
          }
          o.followFinger && !o.cssMode && ((o.freeMode && o.freeMode.enabled && r.freeMode || o.watchSlidesProgress) && (r.updateActiveIndex(),
          r.updateSlidesClasses()),
          r.params.freeMode && o.freeMode.enabled && r.freeMode && r.freeMode.onTouchMove(),
          r.updateProgress(n.currentTranslate),
          r.setTranslate(n.currentTranslate))
      }
      function N(e) {
          const t = this
            , r = t.touchEventsData
            , {params: n, touches: o, rtlTranslate: i, slidesGrid: a, enabled: s} = t;
          if (!s)
              return;
          let l = e;
          if (l.originalEvent && (l = l.originalEvent),
          r.allowTouchCallbacks && t.emit("touchEnd", l),
          r.allowTouchCallbacks = !1,
          !r.isTouched)
              return r.isMoved && n.grabCursor && t.setGrabCursor(!1),
              r.isMoved = !1,
              void (r.startMoving = !1);
          n.grabCursor && r.isMoved && r.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
          const u = g()
            , c = u - r.touchStartTime;
          if (t.allowClick) {
              const e = l.path || l.composedPath && l.composedPath();
              t.updateClickedSlide(e && e[0] || l.target),
              t.emit("tap click", l),
              c < 300 && u - r.lastClickTime < 300 && t.emit("doubleTap doubleClick", l)
          }
          if (r.lastClickTime = g(),
          v((()=>{
              t.destroyed || (t.allowClick = !0)
          }
          )),
          !r.isTouched || !r.isMoved || !t.swipeDirection || 0 === o.diff || r.currentTranslate === r.startTranslate)
              return r.isTouched = !1,
              r.isMoved = !1,
              void (r.startMoving = !1);
          let p;
          if (r.isTouched = !1,
          r.isMoved = !1,
          r.startMoving = !1,
          p = n.followFinger ? i ? t.translate : -t.translate : -r.currentTranslate,
          n.cssMode)
              return;
          if (t.params.freeMode && n.freeMode.enabled)
              return void t.freeMode.onTouchEnd({
                  currentPos: p
              });
          let d = 0
            , f = t.slidesSizesGrid[0];
          for (let e = 0; e < a.length; e += e < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup) {
              const t = e < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
              void 0 !== a[e + t] ? p >= a[e] && p < a[e + t] && (d = e,
              f = a[e + t] - a[e]) : p >= a[e] && (d = e,
              f = a[a.length - 1] - a[a.length - 2])
          }
          const y = (p - a[d]) / f
            , h = d < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
          if (c > n.longSwipesMs) {
              if (!n.longSwipes)
                  return void t.slideTo(t.activeIndex);
              "next" === t.swipeDirection && (y >= n.longSwipesRatio ? t.slideTo(d + h) : t.slideTo(d)),
              "prev" === t.swipeDirection && (y > 1 - n.longSwipesRatio ? t.slideTo(d + h) : t.slideTo(d))
          } else {
              if (!n.shortSwipes)
                  return void t.slideTo(t.activeIndex);
              t.navigation && (l.target === t.navigation.nextEl || l.target === t.navigation.prevEl) ? l.target === t.navigation.nextEl ? t.slideTo(d + h) : t.slideTo(d) : ("next" === t.swipeDirection && t.slideTo(d + h),
              "prev" === t.swipeDirection && t.slideTo(d))
          }
      }
      function z() {
          const e = this
            , {params: t, el: r} = e;
          if (r && 0 === r.offsetWidth)
              return;
          t.breakpoints && e.setBreakpoint();
          const {allowSlideNext: n, allowSlidePrev: o, snapGrid: i} = e;
          e.allowSlideNext = !0,
          e.allowSlidePrev = !0,
          e.updateSize(),
          e.updateSlides(),
          e.updateSlidesClasses(),
          ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0),
          e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(),
          e.allowSlidePrev = o,
          e.allowSlideNext = n,
          e.params.watchOverflow && i !== e.snapGrid && e.checkOverflow()
      }
      function V(e) {
          const t = this;
          t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(),
          t.params.preventClicksPropagation && t.animating && (e.stopPropagation(),
          e.stopImmediatePropagation())))
      }
      function B() {
          const e = this
            , {wrapperEl: t, rtlTranslate: r, enabled: n} = e;
          if (!n)
              return;
          let o;
          e.previousTranslate = e.translate,
          e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop,
          -0 === e.translate && (e.translate = 0),
          e.updateActiveIndex(),
          e.updateSlidesClasses();
          const i = e.maxTranslate() - e.minTranslate();
          o = 0 === i ? 0 : (e.translate - e.minTranslate()) / i,
          o !== e.progress && e.updateProgress(r ? -e.translate : e.translate),
          e.emit("setTranslate", e.translate, !1)
      }
      let H = !1;
      function U() {}
      const G = (e,t)=>{
          const r = a()
            , {params: n, touchEvents: o, el: i, wrapperEl: s, device: l, support: u} = e
            , c = !!n.nested
            , p = "on" === t ? "addEventListener" : "removeEventListener"
            , d = t;
          if (u.touch) {
              const t = !("touchstart" !== o.start || !u.passiveListener || !n.passiveListeners) && {
                  passive: !0,
                  capture: !1
              };
              i[p](o.start, e.onTouchStart, t),
              i[p](o.move, e.onTouchMove, u.passiveListener ? {
                  passive: !1,
                  capture: c
              } : c),
              i[p](o.end, e.onTouchEnd, t),
              o.cancel && i[p](o.cancel, e.onTouchEnd, t)
          } else
              i[p](o.start, e.onTouchStart, !1),
              r[p](o.move, e.onTouchMove, c),
              r[p](o.end, e.onTouchEnd, !1);
          (n.preventClicks || n.preventClicksPropagation) && i[p]("click", e.onClick, !0),
          n.cssMode && s[p]("scroll", e.onScroll),
          n.updateOnWindowResize ? e[d](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", z, !0) : e[d]("observerUpdate", z, !0)
      }
      ;
      const W = {
          attachEvents: function() {
              const e = this
                , t = a()
                , {params: r, support: n} = e;
              e.onTouchStart = I.bind(e),
              e.onTouchMove = $.bind(e),
              e.onTouchEnd = N.bind(e),
              r.cssMode && (e.onScroll = B.bind(e)),
              e.onClick = V.bind(e),
              n.touch && !H && (t.addEventListener("touchstart", U),
              H = !0),
              G(e, "on")
          },
          detachEvents: function() {
              G(this, "off")
          }
      }
        , F = (e,t)=>e.grid && t.grid && t.grid.rows > 1;
      const q = {
          setBreakpoint: function() {
              const e = this
                , {activeIndex: t, initialized: r, loopedSlides: n=0, params: o, $el: i} = e
                , a = o.breakpoints;
              if (!a || a && 0 === Object.keys(a).length)
                  return;
              const s = e.getBreakpoint(a, e.params.breakpointsBase, e.el);
              if (!s || e.currentBreakpoint === s)
                  return;
              const l = (s in a ? a[s] : void 0) || e.originalParams
                , u = F(e, o)
                , c = F(e, l)
                , p = o.enabled;
              u && !c ? (i.removeClass(`${o.containerModifierClass}grid ${o.containerModifierClass}grid-column`),
              e.emitContainerClasses()) : !u && c && (i.addClass(`${o.containerModifierClass}grid`),
              (l.grid.fill && "column" === l.grid.fill || !l.grid.fill && "column" === o.grid.fill) && i.addClass(`${o.containerModifierClass}grid-column`),
              e.emitContainerClasses());
              const d = l.direction && l.direction !== o.direction
                , f = o.loop && (l.slidesPerView !== o.slidesPerView || d);
              d && r && e.changeDirection(),
              P(e.params, l);
              const y = e.params.enabled;
              Object.assign(e, {
                  allowTouchMove: e.params.allowTouchMove,
                  allowSlideNext: e.params.allowSlideNext,
                  allowSlidePrev: e.params.allowSlidePrev
              }),
              p && !y ? e.disable() : !p && y && e.enable(),
              e.currentBreakpoint = s,
              e.emit("_beforeBreakpoint", l),
              f && r && (e.loopDestroy(),
              e.loopCreate(),
              e.updateSlides(),
              e.slideTo(t - n + e.loopedSlides, 0, !1)),
              e.emit("breakpoint", l)
          },
          getBreakpoint: function(e, t="window", r) {
              if (!e || "container" === t && !r)
                  return;
              let n = !1;
              const o = l()
                , i = "window" === t ? o.innerHeight : r.clientHeight
                , a = Object.keys(e).map((e=>{
                  if ("string" == typeof e && 0 === e.indexOf("@")) {
                      const t = parseFloat(e.substr(1));
                      return {
                          value: i * t,
                          point: e
                      }
                  }
                  return {
                      value: e,
                      point: e
                  }
              }
              ));
              a.sort(((e,t)=>parseInt(e.value, 10) - parseInt(t.value, 10)));
              for (let e = 0; e < a.length; e += 1) {
                  const {point: i, value: s} = a[e];
                  "window" === t ? o.matchMedia(`(min-width: ${s}px)`).matches && (n = i) : s <= r.clientWidth && (n = i)
              }
              return n || "max"
          }
      };
      const Y = {
          addClasses: function() {
              const e = this
                , {classNames: t, params: r, rtl: n, $el: o, device: i, support: a} = e
                , s = function(e, t) {
                  const r = [];
                  return e.forEach((e=>{
                      "object" == typeof e ? Object.keys(e).forEach((n=>{
                          e[n] && r.push(t + n)
                      }
                      )) : "string" == typeof e && r.push(t + e)
                  }
                  )),
                  r
              }(["initialized", r.direction, {
                  "pointer-events": !a.touch
              }, {
                  "free-mode": e.params.freeMode && r.freeMode.enabled
              }, {
                  autoheight: r.autoHeight
              }, {
                  rtl: n
              }, {
                  grid: r.grid && r.grid.rows > 1
              }, {
                  "grid-column": r.grid && r.grid.rows > 1 && "column" === r.grid.fill
              }, {
                  android: i.android
              }, {
                  ios: i.ios
              }, {
                  "css-mode": r.cssMode
              }, {
                  centered: r.cssMode && r.centeredSlides
              }], r.containerModifierClass);
              t.push(...s),
              o.addClass([...t].join(" ")),
              e.emitContainerClasses()
          },
          removeClasses: function() {
              const {$el: e, classNames: t} = this;
              e.removeClass(t.join(" ")),
              this.emitContainerClasses()
          }
      };
      const X = {
          init: !0,
          direction: "horizontal",
          touchEventsTarget: "wrapper",
          initialSlide: 0,
          speed: 300,
          cssMode: !1,
          updateOnWindowResize: !0,
          resizeObserver: !0,
          nested: !1,
          createElements: !1,
          enabled: !0,
          focusableElements: "input, select, option, textarea, button, video, label",
          width: null,
          height: null,
          preventInteractionOnTransition: !1,
          userAgent: null,
          url: null,
          edgeSwipeDetection: !1,
          edgeSwipeThreshold: 20,
          autoHeight: !1,
          setWrapperSize: !1,
          virtualTranslate: !1,
          effect: "slide",
          breakpoints: void 0,
          breakpointsBase: "window",
          spaceBetween: 0,
          slidesPerView: 1,
          slidesPerGroup: 1,
          slidesPerGroupSkip: 0,
          slidesPerGroupAuto: !1,
          centeredSlides: !1,
          centeredSlidesBounds: !1,
          slidesOffsetBefore: 0,
          slidesOffsetAfter: 0,
          normalizeSlideIndex: !0,
          centerInsufficientSlides: !1,
          watchOverflow: !0,
          roundLengths: !1,
          touchRatio: 1,
          touchAngle: 45,
          simulateTouch: !0,
          shortSwipes: !0,
          longSwipes: !0,
          longSwipesRatio: .5,
          longSwipesMs: 300,
          followFinger: !0,
          allowTouchMove: !0,
          threshold: 0,
          touchMoveStopPropagation: !1,
          touchStartPreventDefault: !0,
          touchStartForcePreventDefault: !1,
          touchReleaseOnEdges: !1,
          uniqueNavElements: !0,
          resistance: !0,
          resistanceRatio: .85,
          watchSlidesProgress: !1,
          grabCursor: !1,
          preventClicks: !0,
          preventClicksPropagation: !0,
          slideToClickedSlide: !1,
          preloadImages: !0,
          updateOnImagesReady: !0,
          loop: !1,
          loopAdditionalSlides: 0,
          loopedSlides: null,
          loopFillGroupWithBlank: !1,
          loopPreventsSlide: !0,
          rewind: !1,
          allowSlidePrev: !0,
          allowSlideNext: !0,
          swipeHandler: null,
          noSwiping: !0,
          noSwipingClass: "swiper-no-swiping",
          noSwipingSelector: null,
          passiveListeners: !0,
          containerModifierClass: "swiper-",
          slideClass: "swiper-slide",
          slideBlankClass: "swiper-slide-invisible-blank",
          slideActiveClass: "swiper-slide-active",
          slideDuplicateActiveClass: "swiper-slide-duplicate-active",
          slideVisibleClass: "swiper-slide-visible",
          slideDuplicateClass: "swiper-slide-duplicate",
          slideNextClass: "swiper-slide-next",
          slideDuplicateNextClass: "swiper-slide-duplicate-next",
          slidePrevClass: "swiper-slide-prev",
          slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
          wrapperClass: "swiper-wrapper",
          runCallbacksOnInit: !0,
          _emitClasses: !1
      };
      function K(e, t) {
          return function(r={}) {
              const n = Object.keys(r)[0]
                , o = r[n];
              "object" == typeof o && null !== o ? (["navigation", "pagination", "scrollbar"].indexOf(n) >= 0 && !0 === e[n] && (e[n] = {
                  auto: !0
              }),
              n in e && "enabled"in o ? (!0 === e[n] && (e[n] = {
                  enabled: !0
              }),
              "object" != typeof e[n] || "enabled"in e[n] || (e[n].enabled = !0),
              e[n] || (e[n] = {
                  enabled: !1
              }),
              P(t, r)) : P(t, r)) : P(t, r)
          }
      }
      const Z = {
          eventsEmitter: x,
          update: M,
          translate: L,
          transition: {
              setTransition: function(e, t) {
                  const r = this;
                  r.params.cssMode || r.$wrapperEl.transition(e),
                  r.emit("setTransition", e, t)
              },
              transitionStart: function(e=!0, t) {
                  const r = this
                    , {params: n} = r;
                  n.cssMode || (n.autoHeight && r.updateAutoHeight(),
                  D({
                      swiper: r,
                      runCallbacks: e,
                      direction: t,
                      step: "Start"
                  }))
              },
              transitionEnd: function(e=!0, t) {
                  const r = this
                    , {params: n} = r;
                  r.animating = !1,
                  n.cssMode || (r.setTransition(0),
                  D({
                      swiper: r,
                      runCallbacks: e,
                      direction: t,
                      step: "End"
                  }))
              }
          },
          slide: A,
          loop: R,
          grabCursor: {
              setGrabCursor: function(e) {
                  const t = this;
                  if (t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode)
                      return;
                  const r = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                  r.style.cursor = "move",
                  r.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab",
                  r.style.cursor = e ? "-moz-grabbin" : "-moz-grab",
                  r.style.cursor = e ? "grabbing" : "grab"
              },
              unsetGrabCursor: function() {
                  const e = this;
                  e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "")
              }
          },
          events: W,
          breakpoints: q,
          checkOverflow: {
              checkOverflow: function() {
                  const e = this
                    , {isLocked: t, params: r} = e
                    , {slidesOffsetBefore: n} = r;
                  if (n) {
                      const t = e.slides.length - 1
                        , r = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * n;
                      e.isLocked = e.size > r
                  } else
                      e.isLocked = 1 === e.snapGrid.length;
                  !0 === r.allowSlideNext && (e.allowSlideNext = !e.isLocked),
                  !0 === r.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
                  t && t !== e.isLocked && (e.isEnd = !1),
                  t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
              }
          },
          classes: Y,
          images: {
              loadImage: function(e, t, r, n, o, i) {
                  const a = l();
                  let s;
                  function u() {
                      i && i()
                  }
                  m(e).parent("picture")[0] || e.complete && o ? u() : t ? (s = new a.Image,
                  s.onload = u,
                  s.onerror = u,
                  n && (s.sizes = n),
                  r && (s.srcset = r),
                  t && (s.src = t)) : u()
              },
              preloadImages: function() {
                  const e = this;
                  function t() {
                      null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                      e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(),
                      e.emit("imagesReady")))
                  }
                  e.imagesToLoad = e.$el.find("img");
                  for (let r = 0; r < e.imagesToLoad.length; r += 1) {
                      const n = e.imagesToLoad[r];
                      e.loadImage(n, n.currentSrc || n.getAttribute("src"), n.srcset || n.getAttribute("srcset"), n.sizes || n.getAttribute("sizes"), !0, t)
                  }
              }
          }
      }
        , J = {};
      class Q {
          constructor(...e) {
              let t, r;
              if (1 === e.length && e[0].constructor && "Object" === Object.prototype.toString.call(e[0]).slice(8, -1) ? r = e[0] : [t,r] = e,
              r || (r = {}),
              r = P({}, r),
              t && !r.el && (r.el = t),
              r.el && m(r.el).length > 1) {
                  const e = [];
                  return m(r.el).each((t=>{
                      const n = P({}, r, {
                          el: t
                      });
                      e.push(new Q(n))
                  }
                  )),
                  e
              }
              const n = this;
              n.__swiper__ = !0,
              n.support = C(),
              n.device = j({
                  userAgent: r.userAgent
              }),
              n.browser = _(),
              n.eventsListeners = {},
              n.eventsAnyListeners = [],
              n.modules = [...n.__modules__],
              r.modules && Array.isArray(r.modules) && n.modules.push(...r.modules);
              const o = {};
              n.modules.forEach((e=>{
                  e({
                      swiper: n,
                      extendParams: K(r, o),
                      on: n.on.bind(n),
                      once: n.once.bind(n),
                      off: n.off.bind(n),
                      emit: n.emit.bind(n)
                  })
              }
              ));
              const i = P({}, X, o);
              return n.params = P({}, i, J, r),
              n.originalParams = P({}, n.params),
              n.passedParams = P({}, r),
              n.params && n.params.on && Object.keys(n.params.on).forEach((e=>{
                  n.on(e, n.params.on[e])
              }
              )),
              n.params && n.params.onAny && n.onAny(n.params.onAny),
              n.$ = m,
              Object.assign(n, {
                  enabled: n.params.enabled,
                  el: t,
                  classNames: [],
                  slides: m(),
                  slidesGrid: [],
                  snapGrid: [],
                  slidesSizesGrid: [],
                  isHorizontal: ()=>"horizontal" === n.params.direction,
                  isVertical: ()=>"vertical" === n.params.direction,
                  activeIndex: 0,
                  realIndex: 0,
                  isBeginning: !0,
                  isEnd: !1,
                  translate: 0,
                  previousTranslate: 0,
                  progress: 0,
                  velocity: 0,
                  animating: !1,
                  allowSlideNext: n.params.allowSlideNext,
                  allowSlidePrev: n.params.allowSlidePrev,
                  touchEvents: function() {
                      const e = ["touchstart", "touchmove", "touchend", "touchcancel"]
                        , t = ["pointerdown", "pointermove", "pointerup"];
                      return n.touchEventsTouch = {
                          start: e[0],
                          move: e[1],
                          end: e[2],
                          cancel: e[3]
                      },
                      n.touchEventsDesktop = {
                          start: t[0],
                          move: t[1],
                          end: t[2]
                      },
                      n.support.touch || !n.params.simulateTouch ? n.touchEventsTouch : n.touchEventsDesktop
                  }(),
                  touchEventsData: {
                      isTouched: void 0,
                      isMoved: void 0,
                      allowTouchCallbacks: void 0,
                      touchStartTime: void 0,
                      isScrolling: void 0,
                      currentTranslate: void 0,
                      startTranslate: void 0,
                      allowThresholdMove: void 0,
                      focusableElements: n.params.focusableElements,
                      lastClickTime: g(),
                      clickTimeout: void 0,
                      velocities: [],
                      allowMomentumBounce: void 0,
                      isTouchEvent: void 0,
                      startMoving: void 0
                  },
                  allowClick: !0,
                  allowTouchMove: n.params.allowTouchMove,
                  touches: {
                      startX: 0,
                      startY: 0,
                      currentX: 0,
                      currentY: 0,
                      diff: 0
                  },
                  imagesToLoad: [],
                  imagesLoaded: 0
              }),
              n.emit("_swiper"),
              n.params.init && n.init(),
              n
          }
          enable() {
              const e = this;
              e.enabled || (e.enabled = !0,
              e.params.grabCursor && e.setGrabCursor(),
              e.emit("enable"))
          }
          disable() {
              const e = this;
              e.enabled && (e.enabled = !1,
              e.params.grabCursor && e.unsetGrabCursor(),
              e.emit("disable"))
          }
          setProgress(e, t) {
              const r = this;
              e = Math.min(Math.max(e, 0), 1);
              const n = r.minTranslate()
                , o = (r.maxTranslate() - n) * e + n;
              r.translateTo(o, void 0 === t ? 0 : t),
              r.updateActiveIndex(),
              r.updateSlidesClasses()
          }
          emitContainerClasses() {
              const e = this;
              if (!e.params._emitClasses || !e.el)
                  return;
              const t = e.el.className.split(" ").filter((t=>0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)));
              e.emit("_containerClasses", t.join(" "))
          }
          getSlideClasses(e) {
              const t = this;
              return e.className.split(" ").filter((e=>0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))).join(" ")
          }
          emitSlidesClasses() {
              const e = this;
              if (!e.params._emitClasses || !e.el)
                  return;
              const t = [];
              e.slides.each((r=>{
                  const n = e.getSlideClasses(r);
                  t.push({
                      slideEl: r,
                      classNames: n
                  }),
                  e.emit("_slideClass", r, n)
              }
              )),
              e.emit("_slideClasses", t)
          }
          slidesPerViewDynamic(e="current", t=!1) {
              const {params: r, slides: n, slidesGrid: o, slidesSizesGrid: i, size: a, activeIndex: s} = this;
              let l = 1;
              if (r.centeredSlides) {
                  let e, t = n[s].swiperSlideSize;
                  for (let r = s + 1; r < n.length; r += 1)
                      n[r] && !e && (t += n[r].swiperSlideSize,
                      l += 1,
                      t > a && (e = !0));
                  for (let r = s - 1; r >= 0; r -= 1)
                      n[r] && !e && (t += n[r].swiperSlideSize,
                      l += 1,
                      t > a && (e = !0))
              } else if ("current" === e)
                  for (let e = s + 1; e < n.length; e += 1) {
                      (t ? o[e] + i[e] - o[s] < a : o[e] - o[s] < a) && (l += 1)
                  }
              else
                  for (let e = s - 1; e >= 0; e -= 1) {
                      o[s] - o[e] < a && (l += 1)
                  }
              return l
          }
          update() {
              const e = this;
              if (!e || e.destroyed)
                  return;
              const {snapGrid: t, params: r} = e;
              function n() {
                  const t = e.rtlTranslate ? -1 * e.translate : e.translate
                    , r = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                  e.setTranslate(r),
                  e.updateActiveIndex(),
                  e.updateSlidesClasses()
              }
              let o;
              r.breakpoints && e.setBreakpoint(),
              e.updateSize(),
              e.updateSlides(),
              e.updateProgress(),
              e.updateSlidesClasses(),
              e.params.freeMode && e.params.freeMode.enabled ? (n(),
              e.params.autoHeight && e.updateAutoHeight()) : (o = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0),
              o || n()),
              r.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
              e.emit("update")
          }
          changeDirection(e, t=!0) {
              const r = this
                , n = r.params.direction;
              return e || (e = "horizontal" === n ? "vertical" : "horizontal"),
              e === n || "horizontal" !== e && "vertical" !== e || (r.$el.removeClass(`${r.params.containerModifierClass}${n}`).addClass(`${r.params.containerModifierClass}${e}`),
              r.emitContainerClasses(),
              r.params.direction = e,
              r.slides.each((t=>{
                  "vertical" === e ? t.style.width = "" : t.style.height = ""
              }
              )),
              r.emit("changeDirection"),
              t && r.update()),
              r
          }
          mount(e) {
              const t = this;
              if (t.mounted)
                  return !0;
              const r = m(e || t.params.el);
              if (!(e = r[0]))
                  return !1;
              e.swiper = t;
              const n = ()=>`.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
              let o = (()=>{
                  if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                      const t = m(e.shadowRoot.querySelector(n()));
                      return t.children = e=>r.children(e),
                      t
                  }
                  return r.children(n())
              }
              )();
              if (0 === o.length && t.params.createElements) {
                  const e = a().createElement("div");
                  o = m(e),
                  e.className = t.params.wrapperClass,
                  r.append(e),
                  r.children(`.${t.params.slideClass}`).each((e=>{
                      o.append(e)
                  }
                  ))
              }
              return Object.assign(t, {
                  $el: r,
                  el: e,
                  $wrapperEl: o,
                  wrapperEl: o[0],
                  mounted: !0,
                  rtl: "rtl" === e.dir.toLowerCase() || "rtl" === r.css("direction"),
                  rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === r.css("direction")),
                  wrongRTL: "-webkit-box" === o.css("display")
              }),
              !0
          }
          init(e) {
              const t = this;
              if (t.initialized)
                  return t;
              return !1 === t.mount(e) || (t.emit("beforeInit"),
              t.params.breakpoints && t.setBreakpoint(),
              t.addClasses(),
              t.params.loop && t.loopCreate(),
              t.updateSize(),
              t.updateSlides(),
              t.params.watchOverflow && t.checkOverflow(),
              t.params.grabCursor && t.enabled && t.setGrabCursor(),
              t.params.preloadImages && t.preloadImages(),
              t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0),
              t.attachEvents(),
              t.initialized = !0,
              t.emit("init"),
              t.emit("afterInit")),
              t
          }
          destroy(e=!0, t=!0) {
              const r = this
                , {params: n, $el: o, $wrapperEl: i, slides: a} = r;
              return void 0 === r.params || r.destroyed || (r.emit("beforeDestroy"),
              r.initialized = !1,
              r.detachEvents(),
              n.loop && r.loopDestroy(),
              t && (r.removeClasses(),
              o.removeAttr("style"),
              i.removeAttr("style"),
              a && a.length && a.removeClass([n.slideVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),
              r.emit("destroy"),
              Object.keys(r.eventsListeners).forEach((e=>{
                  r.off(e)
              }
              )),
              !1 !== e && (r.$el[0].swiper = null,
              function(e) {
                  const t = e;
                  Object.keys(t).forEach((e=>{
                      try {
                          t[e] = null
                      } catch (e) {}
                      try {
                          delete t[e]
                      } catch (e) {}
                  }
                  ))
              }(r)),
              r.destroyed = !0),
              null
          }
          static extendDefaults(e) {
              P(J, e)
          }
          static get extendedDefaults() {
              return J
          }
          static get defaults() {
              return X
          }
          static installModule(e) {
              Q.prototype.__modules__ || (Q.prototype.__modules__ = []);
              const t = Q.prototype.__modules__;
              "function" == typeof e && t.indexOf(e) < 0 && t.push(e)
          }
          static use(e) {
              return Array.isArray(e) ? (e.forEach((e=>Q.installModule(e))),
              Q) : (Q.installModule(e),
              Q)
          }
      }
      Object.keys(Z).forEach((e=>{
          Object.keys(Z[e]).forEach((t=>{
              Q.prototype[t] = Z[e][t]
          }
          ))
      }
      )),
      Q.use([function({swiper: e, on: t, emit: r}) {
          const n = l();
          let o = null;
          const i = ()=>{
              e && !e.destroyed && e.initialized && (r("beforeResize"),
              r("resize"))
          }
            , a = ()=>{
              e && !e.destroyed && e.initialized && r("orientationchange")
          }
          ;
          t("init", (()=>{
              e.params.resizeObserver && void 0 !== n.ResizeObserver ? e && !e.destroyed && e.initialized && (o = new ResizeObserver((t=>{
                  const {width: r, height: n} = e;
                  let o = r
                    , a = n;
                  t.forEach((({contentBoxSize: t, contentRect: r, target: n})=>{
                      n && n !== e.el || (o = r ? r.width : (t[0] || t).inlineSize,
                      a = r ? r.height : (t[0] || t).blockSize)
                  }
                  )),
                  o === r && a === n || i()
              }
              )),
              o.observe(e.el)) : (n.addEventListener("resize", i),
              n.addEventListener("orientationchange", a))
          }
          )),
          t("destroy", (()=>{
              o && o.unobserve && e.el && (o.unobserve(e.el),
              o = null),
              n.removeEventListener("resize", i),
              n.removeEventListener("orientationchange", a)
          }
          ))
      }
      , function({swiper: e, extendParams: t, on: r, emit: n}) {
          const o = []
            , i = l()
            , a = (e,t={})=>{
              const r = new (i.MutationObserver || i.WebkitMutationObserver)((e=>{
                  if (1 === e.length)
                      return void n("observerUpdate", e[0]);
                  const t = function() {
                      n("observerUpdate", e[0])
                  };
                  i.requestAnimationFrame ? i.requestAnimationFrame(t) : i.setTimeout(t, 0)
              }
              ));
              r.observe(e, {
                  attributes: void 0 === t.attributes || t.attributes,
                  childList: void 0 === t.childList || t.childList,
                  characterData: void 0 === t.characterData || t.characterData
              }),
              o.push(r)
          }
          ;
          t({
              observer: !1,
              observeParents: !1,
              observeSlideChildren: !1
          }),
          r("init", (()=>{
              if (e.params.observer) {
                  if (e.params.observeParents) {
                      const t = e.$el.parents();
                      for (let e = 0; e < t.length; e += 1)
                          a(t[e])
                  }
                  a(e.$el[0], {
                      childList: e.params.observeSlideChildren
                  }),
                  a(e.$wrapperEl[0], {
                      attributes: !1
                  })
              }
          }
          )),
          r("destroy", (()=>{
              o.forEach((e=>{
                  e.disconnect()
              }
              )),
              o.splice(0, o.length)
          }
          ))
      }
      ]);
      const ee = Q;
      function te(e="") {
          return `.${e.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".")}`
      }
      function re({swiper: e, extendParams: t, on: r, emit: n}) {
          const o = "swiper-pagination";
          let i;
          t({
              pagination: {
                  el: null,
                  bulletElement: "span",
                  clickable: !1,
                  hideOnClick: !1,
                  renderBullet: null,
                  renderProgressbar: null,
                  renderFraction: null,
                  renderCustom: null,
                  progressbarOpposite: !1,
                  type: "bullets",
                  dynamicBullets: !1,
                  dynamicMainBullets: 1,
                  formatFractionCurrent: e=>e,
                  formatFractionTotal: e=>e,
                  bulletClass: `${o}-bullet`,
                  bulletActiveClass: `${o}-bullet-active`,
                  modifierClass: `${o}-`,
                  currentClass: `${o}-current`,
                  totalClass: `${o}-total`,
                  hiddenClass: `${o}-hidden`,
                  progressbarFillClass: `${o}-progressbar-fill`,
                  progressbarOppositeClass: `${o}-progressbar-opposite`,
                  clickableClass: `${o}-clickable`,
                  lockClass: `${o}-lock`,
                  horizontalClass: `${o}-horizontal`,
                  verticalClass: `${o}-vertical`
              }
          }),
          e.pagination = {
              el: null,
              $el: null,
              bullets: []
          };
          let s = 0;
          function l() {
              return !e.params.pagination.el || !e.pagination.el || !e.pagination.$el || 0 === e.pagination.$el.length
          }
          function u(t, r) {
              const {bulletActiveClass: n} = e.params.pagination;
              t[r]().addClass(`${n}-${r}`)[r]().addClass(`${n}-${r}-${r}`)
          }
          function c() {
              const t = e.rtl
                , r = e.params.pagination;
              if (l())
                  return;
              const o = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length
                , a = e.pagination.$el;
              let c;
              const p = e.params.loop ? Math.ceil((o - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
              if (e.params.loop ? (c = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup),
              c > o - 1 - 2 * e.loopedSlides && (c -= o - 2 * e.loopedSlides),
              c > p - 1 && (c -= p),
              c < 0 && "bullets" !== e.params.paginationType && (c = p + c)) : c = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0,
              "bullets" === r.type && e.pagination.bullets && e.pagination.bullets.length > 0) {
                  const n = e.pagination.bullets;
                  let o, l, p;
                  if (r.dynamicBullets && (i = n.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0),
                  a.css(e.isHorizontal() ? "width" : "height", i * (r.dynamicMainBullets + 4) + "px"),
                  r.dynamicMainBullets > 1 && void 0 !== e.previousIndex && (s += c - (e.previousIndex - e.loopedSlides || 0),
                  s > r.dynamicMainBullets - 1 ? s = r.dynamicMainBullets - 1 : s < 0 && (s = 0)),
                  o = Math.max(c - s, 0),
                  l = o + (Math.min(n.length, r.dynamicMainBullets) - 1),
                  p = (l + o) / 2),
                  n.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((e=>`${r.bulletActiveClass}${e}`)).join(" ")),
                  a.length > 1)
                      n.each((e=>{
                          const t = m(e)
                            , n = t.index();
                          n === c && t.addClass(r.bulletActiveClass),
                          r.dynamicBullets && (n >= o && n <= l && t.addClass(`${r.bulletActiveClass}-main`),
                          n === o && u(t, "prev"),
                          n === l && u(t, "next"))
                      }
                      ));
                  else {
                      const t = n.eq(c)
                        , i = t.index();
                      if (t.addClass(r.bulletActiveClass),
                      r.dynamicBullets) {
                          const t = n.eq(o)
                            , a = n.eq(l);
                          for (let e = o; e <= l; e += 1)
                              n.eq(e).addClass(`${r.bulletActiveClass}-main`);
                          if (e.params.loop)
                              if (i >= n.length) {
                                  for (let e = r.dynamicMainBullets; e >= 0; e -= 1)
                                      n.eq(n.length - e).addClass(`${r.bulletActiveClass}-main`);
                                  n.eq(n.length - r.dynamicMainBullets - 1).addClass(`${r.bulletActiveClass}-prev`)
                              } else
                                  u(t, "prev"),
                                  u(a, "next");
                          else
                              u(t, "prev"),
                              u(a, "next")
                      }
                  }
                  if (r.dynamicBullets) {
                      const o = Math.min(n.length, r.dynamicMainBullets + 4)
                        , a = (i * o - i) / 2 - p * i
                        , s = t ? "right" : "left";
                      n.css(e.isHorizontal() ? s : "top", `${a}px`)
                  }
              }
              if ("fraction" === r.type && (a.find(te(r.currentClass)).text(r.formatFractionCurrent(c + 1)),
              a.find(te(r.totalClass)).text(r.formatFractionTotal(p))),
              "progressbar" === r.type) {
                  let t;
                  t = r.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
                  const n = (c + 1) / p;
                  let o = 1
                    , i = 1;
                  "horizontal" === t ? o = n : i = n,
                  a.find(te(r.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${o}) scaleY(${i})`).transition(e.params.speed)
              }
              "custom" === r.type && r.renderCustom ? (a.html(r.renderCustom(e, c + 1, p)),
              n("paginationRender", a[0])) : n("paginationUpdate", a[0]),
              e.params.watchOverflow && e.enabled && a[e.isLocked ? "addClass" : "removeClass"](r.lockClass)
          }
          function p() {
              const t = e.params.pagination;
              if (l())
                  return;
              const r = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length
                , o = e.pagination.$el;
              let i = "";
              if ("bullets" === t.type) {
                  let n = e.params.loop ? Math.ceil((r - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                  e.params.freeMode && e.params.freeMode.enabled && !e.params.loop && n > r && (n = r);
                  for (let r = 0; r < n; r += 1)
                      t.renderBullet ? i += t.renderBullet.call(e, r, t.bulletClass) : i += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`;
                  o.html(i),
                  e.pagination.bullets = o.find(te(t.bulletClass))
              }
              "fraction" === t.type && (i = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`,
              o.html(i)),
              "progressbar" === t.type && (i = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : `<span class="${t.progressbarFillClass}"></span>`,
              o.html(i)),
              "custom" !== t.type && n("paginationRender", e.pagination.$el[0])
          }
          function d() {
              e.params.pagination = function(e, t, r, n) {
                  const o = a();
                  return e.params.createElements && Object.keys(n).forEach((i=>{
                      if (!r[i] && !0 === r.auto) {
                          let a = e.$el.children(`.${n[i]}`)[0];
                          a || (a = o.createElement("div"),
                          a.className = n[i],
                          e.$el.append(a)),
                          r[i] = a,
                          t[i] = a
                      }
                  }
                  )),
                  r
              }(e, e.originalParams.pagination, e.params.pagination, {
                  el: "swiper-pagination"
              });
              const t = e.params.pagination;
              if (!t.el)
                  return;
              let r = m(t.el);
              0 !== r.length && (e.params.uniqueNavElements && "string" == typeof t.el && r.length > 1 && (r = e.$el.find(t.el),
              r.length > 1 && (r = r.filter((t=>m(t).parents(".swiper")[0] === e.el)))),
              "bullets" === t.type && t.clickable && r.addClass(t.clickableClass),
              r.addClass(t.modifierClass + t.type),
              r.addClass(t.modifierClass + e.params.direction),
              "bullets" === t.type && t.dynamicBullets && (r.addClass(`${t.modifierClass}${t.type}-dynamic`),
              s = 0,
              t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
              "progressbar" === t.type && t.progressbarOpposite && r.addClass(t.progressbarOppositeClass),
              t.clickable && r.on("click", te(t.bulletClass), (function(t) {
                  t.preventDefault();
                  let r = m(this).index() * e.params.slidesPerGroup;
                  e.params.loop && (r += e.loopedSlides),
                  e.slideTo(r)
              }
              )),
              Object.assign(e.pagination, {
                  $el: r,
                  el: r[0]
              }),
              e.enabled || r.addClass(t.lockClass))
          }
          function f() {
              const t = e.params.pagination;
              if (l())
                  return;
              const r = e.pagination.$el;
              r.removeClass(t.hiddenClass),
              r.removeClass(t.modifierClass + t.type),
              r.removeClass(t.modifierClass + e.params.direction),
              e.pagination.bullets && e.pagination.bullets.removeClass && e.pagination.bullets.removeClass(t.bulletActiveClass),
              t.clickable && r.off("click", te(t.bulletClass))
          }
          r("init", (()=>{
              d(),
              p(),
              c()
          }
          )),
          r("activeIndexChange", (()=>{
              (e.params.loop || void 0 === e.snapIndex) && c()
          }
          )),
          r("snapIndexChange", (()=>{
              e.params.loop || c()
          }
          )),
          r("slidesLengthChange", (()=>{
              e.params.loop && (p(),
              c())
          }
          )),
          r("snapGridLengthChange", (()=>{
              e.params.loop || (p(),
              c())
          }
          )),
          r("destroy", (()=>{
              f()
          }
          )),
          r("enable disable", (()=>{
              const {$el: t} = e.pagination;
              t && t[e.enabled ? "removeClass" : "addClass"](e.params.pagination.lockClass)
          }
          )),
          r("lock unlock", (()=>{
              c()
          }
          )),
          r("click", ((t,r)=>{
              const o = r.target
                , {$el: i} = e.pagination;
              if (e.params.pagination.el && e.params.pagination.hideOnClick && i.length > 0 && !m(o).hasClass(e.params.pagination.bulletClass)) {
                  if (e.navigation && (e.navigation.nextEl && o === e.navigation.nextEl || e.navigation.prevEl && o === e.navigation.prevEl))
                      return;
                  const t = i.hasClass(e.params.pagination.hiddenClass);
                  n(!0 === t ? "paginationShow" : "paginationHide"),
                  i.toggleClass(e.params.pagination.hiddenClass)
              }
          }
          )),
          Object.assign(e.pagination, {
              render: p,
              update: c,
              init: d,
              destroy: f
          })
      }
      function ne({swiper: e, extendParams: t, on: r, emit: n}) {
          let o;
          function i() {
              const t = e.slides.eq(e.activeIndex);
              let r = e.params.autoplay.delay;
              t.attr("data-swiper-autoplay") && (r = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
              clearTimeout(o),
              o = v((()=>{
                  let t;
                  e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(),
                  t = e.slidePrev(e.params.speed, !0, !0),
                  n("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? l() : (t = e.slideTo(e.slides.length - 1, e.params.speed, !0, !0),
                  n("autoplay")) : (t = e.slidePrev(e.params.speed, !0, !0),
                  n("autoplay")) : e.params.loop ? (e.loopFix(),
                  t = e.slideNext(e.params.speed, !0, !0),
                  n("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? l() : (t = e.slideTo(0, e.params.speed, !0, !0),
                  n("autoplay")) : (t = e.slideNext(e.params.speed, !0, !0),
                  n("autoplay")),
                  (e.params.cssMode && e.autoplay.running || !1 === t) && i()
              }
              ), r)
          }
          function s() {
              return void 0 === o && (!e.autoplay.running && (e.autoplay.running = !0,
              n("autoplayStart"),
              i(),
              !0))
          }
          function l() {
              return !!e.autoplay.running && (void 0 !== o && (o && (clearTimeout(o),
              o = void 0),
              e.autoplay.running = !1,
              n("autoplayStop"),
              !0))
          }
          function u(t) {
              e.autoplay.running && (e.autoplay.paused || (o && clearTimeout(o),
              e.autoplay.paused = !0,
              0 !== t && e.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach((t=>{
                  e.$wrapperEl[0].addEventListener(t, p)
              }
              )) : (e.autoplay.paused = !1,
              i())))
          }
          function c() {
              const t = a();
              "hidden" === t.visibilityState && e.autoplay.running && u(),
              "visible" === t.visibilityState && e.autoplay.paused && (i(),
              e.autoplay.paused = !1)
          }
          function p(t) {
              e && !e.destroyed && e.$wrapperEl && t.target === e.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach((t=>{
                  e.$wrapperEl[0].removeEventListener(t, p)
              }
              )),
              e.autoplay.paused = !1,
              e.autoplay.running ? i() : l())
          }
          function d() {
              e.params.autoplay.disableOnInteraction ? l() : u(),
              ["transitionend", "webkitTransitionEnd"].forEach((t=>{
                  e.$wrapperEl[0].removeEventListener(t, p)
              }
              ))
          }
          function f() {
              e.params.autoplay.disableOnInteraction || (e.autoplay.paused = !1,
              i())
          }
          e.autoplay = {
              running: !1,
              paused: !1
          },
          t({
              autoplay: {
                  enabled: !1,
                  delay: 3e3,
                  waitForTransition: !0,
                  disableOnInteraction: !0,
                  stopOnLastSlide: !1,
                  reverseDirection: !1,
                  pauseOnMouseEnter: !1
              }
          }),
          r("init", (()=>{
              if (e.params.autoplay.enabled) {
                  s();
                  a().addEventListener("visibilitychange", c),
                  e.params.autoplay.pauseOnMouseEnter && (e.$el.on("mouseenter", d),
                  e.$el.on("mouseleave", f))
              }
          }
          )),
          r("beforeTransitionStart", ((t,r,n)=>{
              e.autoplay.running && (n || !e.params.autoplay.disableOnInteraction ? e.autoplay.pause(r) : l())
          }
          )),
          r("sliderFirstMove", (()=>{
              e.autoplay.running && (e.params.autoplay.disableOnInteraction ? l() : u())
          }
          )),
          r("touchEnd", (()=>{
              e.params.cssMode && e.autoplay.paused && !e.params.autoplay.disableOnInteraction && i()
          }
          )),
          r("destroy", (()=>{
              e.$el.off("mouseenter", d),
              e.$el.off("mouseleave", f),
              e.autoplay.running && l();
              a().removeEventListener("visibilitychange", c)
          }
          )),
          Object.assign(e.autoplay, {
              pause: u,
              run: i,
              start: s,
              stop: l
          })
      }
      function oe(e, t, r) {
          const n = "swiper-slide-shadow" + (r ? `-${r}` : "")
            , o = e.transformEl ? t.find(e.transformEl) : t;
          let i = o.children(`.${n}`);
          return i.length || (i = m(`<div class="swiper-slide-shadow${r ? `-${r}` : ""}"></div>`),
          o.append(i)),
          i
      }
      function ie(e, t) {
          return e.transformEl ? t.find(e.transformEl).css({
              "backface-visibility": "hidden",
              "-webkit-backface-visibility": "hidden"
          }) : t
      }
      function ae({swiper: e, extendParams: t, on: r}) {
          t({
              coverflowEffect: {
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  scale: 1,
                  modifier: 1,
                  slideShadows: !0,
                  transformEl: null
              }
          });
          !function(e) {
              const {effect: t, swiper: r, on: n, setTranslate: o, setTransition: i, overwriteParams: a, perspective: s} = e;
              n("beforeInit", (()=>{
                  if (r.params.effect !== t)
                      return;
                  r.classNames.push(`${r.params.containerModifierClass}${t}`),
                  s && s() && r.classNames.push(`${r.params.containerModifierClass}3d`);
                  const e = a ? a() : {};
                  Object.assign(r.params, e),
                  Object.assign(r.originalParams, e)
              }
              )),
              n("setTranslate", (()=>{
                  r.params.effect === t && o()
              }
              )),
              n("setTransition", ((e,n)=>{
                  r.params.effect === t && i(n)
              }
              ))
          }({
              effect: "coverflow",
              swiper: e,
              on: r,
              setTranslate: ()=>{
                  const {width: t, height: r, slides: n, slidesSizesGrid: o} = e
                    , i = e.params.coverflowEffect
                    , a = e.isHorizontal()
                    , s = e.translate
                    , l = a ? t / 2 - s : r / 2 - s
                    , u = a ? i.rotate : -i.rotate
                    , c = i.depth;
                  for (let e = 0, t = n.length; e < t; e += 1) {
                      const t = n.eq(e)
                        , r = o[e]
                        , s = (l - t[0].swiperSlideOffset - r / 2) / r * i.modifier;
                      let p = a ? u * s : 0
                        , d = a ? 0 : u * s
                        , f = -c * Math.abs(s)
                        , y = i.stretch;
                      "string" == typeof y && -1 !== y.indexOf("%") && (y = parseFloat(i.stretch) / 100 * r);
                      let h = a ? 0 : y * s
                        , m = a ? y * s : 0
                        , v = 1 - (1 - i.scale) * Math.abs(s);
                      Math.abs(m) < .001 && (m = 0),
                      Math.abs(h) < .001 && (h = 0),
                      Math.abs(f) < .001 && (f = 0),
                      Math.abs(p) < .001 && (p = 0),
                      Math.abs(d) < .001 && (d = 0),
                      Math.abs(v) < .001 && (v = 0);
                      const g = `translate3d(${m}px,${h}px,${f}px)  rotateX(${d}deg) rotateY(${p}deg) scale(${v})`;
                      if (ie(i, t).transform(g),
                      t[0].style.zIndex = 1 - Math.abs(Math.round(s)),
                      i.slideShadows) {
                          let e = a ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top")
                            , r = a ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
                          0 === e.length && (e = oe(i, t, a ? "left" : "top")),
                          0 === r.length && (r = oe(i, t, a ? "right" : "bottom")),
                          e.length && (e[0].style.opacity = s > 0 ? s : 0),
                          r.length && (r[0].style.opacity = -s > 0 ? -s : 0)
                      }
                  }
              }
              ,
              setTransition: t=>{
                  const {transformEl: r} = e.params.coverflowEffect;
                  (r ? e.slides.find(r) : e.slides).transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t)
              }
              ,
              perspective: ()=>!0,
              overwriteParams: ()=>({
                  watchSlidesProgress: !0
              })
          })
      }
  }
}]);
