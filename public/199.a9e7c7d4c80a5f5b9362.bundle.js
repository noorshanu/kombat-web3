(self.webpackChunkmain_website = self.webpackChunkmain_website || []).push([
  [199],
  {
    8199: (s, e, n) => {
      "use strict";
      n.r(e), n.d(e, { default: () => me, route: () => ge });
      var a = n(8152),
        t = n(7294),
        i = n(9852),
        r = n(1850),
        o = n.n(r),
        l = n(7519),
        c = n.n(l),
        d = n(6111),
        p = n.n(d),
        m = n.n(g),
        g = n(496),
       
        h = n(8110),
        u = n.n(h),
        f = n(6446),
        x = n.n(f),
        y = n(8072),
        j = n.n(y),
        w =
          (n(9782),
          [
            {
              name: "Play on Web",
              image: j(),
              url:"#",
            },
            {
              name: 'Play on Android',
              image: u(),
              url: "#",
              class:'andriod'
            },
            {
              name: "Play on IOS",
              image: x(),
              url: "#",
            },
          ]),
        v = n(9249),
        b = n(5998),
        k = n(6488),
        N = n(5893),
        S = function () {
          var s = (0, b.v9)(k.i),
            e = t.useState(!1),
            n = (0, a.Z)(e, 2),
            i = n[0],
            r = n[1];
          return (0, N.jsxs)("section", {
            className: "dg-banner dg-preload-background ".concat(
              window.innerWidth > 1200 ? "ag-sparkS" : ""
            ),
            id: "playnow",
            children: [
              (0, N.jsx)("div", {
                className: window.innerWidth > 1200 ? "g" : "",
              }),
              !i && (0, N.jsx)("img", { src: c(), alt: "banner" ,className:'noor' }),
              (0, N.jsx)("video", {
              autoPlay:'autoplay',
              playsInline:'playsinline',
              loop:'loop',
              id:"myVideo",
           
               
            
              }),
              (0, N.jsx)("img", {
                className: "dg-banner-comming-soon",
                src: '',
                alt: "",
              }),
              (0, N.jsx)("div", {
                className: "dragonwar-info-container ".concat(
                  s.playnow || window.innerWidth < 968
                    ? "animate__animated animate__backInLeft"
                    : s.first
                    ? "d-none"
                    : "animate__animated animate__backOutRight",
                  "  "
                ),
                style: {},
                
                children: (0, N.jsx)("div", {
                  style: { display: "table", margin: "0 auto" },
                  children: (0, N.jsx)("div", {
                    className: "dg-platform-container",
                    children: w.map(function (s, e) {
                      return (0, N.jsxs)("div", {
                        className: "platform-item",
                        onClick: function () {
                          s.url ? (("event", "menu", {
                                event_category: "navigation",
                                event_label: "clicked",
                              }),
                              window.open(s.url, "_blank")): "";
                        },
                        children: [
                          (0, N.jsx)("a", {
                            href: '#',
                            children: (0, N.jsx)("img", {
                              className: "platform-icon",
                              src: s.image,
                              alt: "platform of Blockombat",
                            }),
                          }),
                          (0, N.jsx)("p", { children: s.name ,className:s.class }),
                        ],
                      });
                    }),
                  }),
                }),
              }),
            ],
          });
        },
        M = n(1152),
        T = n.n(M),
        D = n(1210),
        E = n.n(D),
        A = n(3270),
        C = n.n(A),
        W = n(9750),
        P = n.n(W),
        F = n(1025),
        I = n.n(F),
        z = [
          {
            image: T(),
            content:
              '<p style="text-align:justify"><span style="font-size:13pt"><span style="font-family:Nunito,sans-serif"><span ><strong>Free Play</strong></span></span></span></p>\n\n<p style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Nunito,sans-serif"><span >any user can simply download and play the Blockombat game without needing to hold any $BKB tokens. &nbsp;&nbsp;</span></span></span></p>\n\n<p style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Nunito,sans-serif"><span ><strong>&nbsp;</strong></span></span></span></p>\n\n<p style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Nunito,sans-serif"><span > </span></span></span></p>\n\n<p style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Nunito,sans-serif"><span ><strong></strong></span></span></span></p>\n\n<p style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Nunito,sans-serif"><span ></span></span></span></p>\n',
          },
          {
            image: E(),
            content:
              '\n        <p><span style="font-size:11pt"><span style="font-family:Mulish,sans-serif"><span ><strong>Solo Mode</strong></span></span></span></p>\n\n<ul>\n\t<li style="list-style-type:disc"><span style="font-size:11pt"><span style="font-family:Mulish,sans-serif"><span >in this mode users require the $BKB token to be able to access the P2E feature,users do not lose tokens when they lose a battle but earn when they win.  </span></span></span></li>\n</ul>\n\n<p><span style="font-size:11pt"><span style="font-family:Mulish,sans-serif"><span ></span></span></span></p>\n\n<ul>\n\ \n</ul>\n',
          },
          {
            image: C(),
            content:
              '<p><span style="font-size:11pt"><span style="font-family:Mulish,sans-serif"><span > <strong>Duel mode &nbsp;</strong></span></span></span></p>\n<p><span style="font-size:11pt"><span style="font-family:Mulish,sans-serif"><span >in this mode users will require $BKB to access the P2E feature but the playing scenario is between two users who wager an  agreed amount and the winner of the bout goes  with 90% of the combined wager while 10% is  remitted to the ecosystem.</p>\n<p><span style="font-size:11pt"><span style="font-family:Mulish,sans-serif"><span ></span></span></span></p>\n<p><span style="font-size:11pt"><span style="font-family:Mulish,sans-serif"><span ></span></span></span></p>\n',
          },
          {
            image: P(),
            content:
              '<p><span style="font-size:11pt"><span style="font-family:Mulish,sans-serif"><span ><span > <strong>Tournament mode &nbsp;</strong>nbsp;&nbsp;</span></span></span></p>\n\n\n\n<p><span style="font-size:11pt"><span style="font-family:Mulish,sans-serif"><span >this is the exciting mode where over 1000 users can participate, all they need to join the tournament which can have a prize pool of up to $10,000 and more is to buy and deposit $50-100 worth of $BKB to  participate.&nbsp;</span></span></span></p>\n\n<p><span style="font-size:11pt"><span style="font-family:Mulish,sans-serif"><span ></span></span></span></span></p>\n\n<p><span style="font-size:11pt"><span style="font-family:Mulish,sans-serif"><span ></span></span></span></p>\n\n\n\n<p><span style="font-size:11pt"><span style="font-family:Mulish,sans-serif"><span >  </span></span></span></p>\n\n\n',
          },
          {
            image: I(),
            content:
              '\n        <p><span style="font-size:11pt"><span style="font-family:Mulish,sans-serif"><span ><strong>Skills, weapons, characters and arenas &nbsp;</strong></span></span></span></p>\n\n\n\n<p><span style="font-size:11pt"><span style="font-family:Mulish,sans-serif"><span >Our native $BKB tokens will give users the advantage of being able to acquire skills for undue advantage over their opponents, weapons to guarantee a better fighting chance and arenas to change the feel and experience of a battle.  &nbsp;</span></span></span></p>\n\n<p><span style="font-size:11pt"><span style="font-family:Mulish,sans-serif"><span >&nbsp;&nbsp;</span></span></span></p>\n\n<p><span style="font-size:11pt"><span style="font-family:Mulish,sans-serif"><span ></span></span></span></p>\n\n<p><span style="font-size:11pt"><span style="font-family:Mulish,sans-serif"><span ></span></span></span></p>\n\n',
          },
        ],
        _ = n(1574),
        G = n.n(_),
        B = n(4356),
        H = n.n(B),
        L = {
          dots: !1,
          infinite: !0,
          faded: !0,
          speed: 500,
          slidesToShow: 4,
          swipeToSlide: !0,
          slidesToScroll: 1,
          nextArrow: (0, N.jsx)(i.F8, {}),
          prevArrow: (0, N.jsx)(i.Kf, {}),
          responsive: [
            {
              breakpoint: 1600,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: !1,
                dots: !1,
              },
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: !1,
                dots: !1,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: !1,
                dots: !1,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1,
                infinite: !1,
                dots: !1,
              },
            },
          ],
        },
        O = function () {
          var s = t.useState(!1),
            e = (0, a.Z)(s, 2),
            n = e[0],
            r = e[1],
            o = t.useState(0),
            l = (0, a.Z)(o, 2),
            c = l[0],
            d = l[1];
          return (0, N.jsxs)("section", {
            className: "dg-features text-align-center",
            id: "features",
            children: [
              n &&
                (0, N.jsxs)(N.Fragment, {
                  children: [
                    (0, N.jsx)("div", { className: "modal-overlay" }),
                    (0, N.jsx)("div", {
                      className: "modal-wrapper",
                      "aria-modal": !0,
                      "aria-hidden": !0,
                      tabIndex: -1,
                      role: "dialog",
                      onClick: function () {
                        return r(!n);
                      },
                      children: (0, N.jsx)("div", {
                        className: "position-relative h-100",
                        children: (0, N.jsx)("div", {
                          className: "modal text-start",
                          children: (0, N.jsx)("div", {
                            dangerouslySetInnerHTML: { __html: z[c].content },
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              (0, N.jsx)("img", {
                src: G(),
                className: "section-separator",
                alt: "separator",
              }),
              (0, N.jsxs)("div", {
                className: "dg-st-title-holder",
                children: [
                  (0, N.jsx)("h2", {
                    className: "dg-st-title",
                    children: (0, N.jsx)("span", { children: "Features" }),
                  }),
                  (0, N.jsx)("img", { src: H(), alt: "dg-separator-image" }),
                  (0, N.jsx)("br", {}),
                  (0, N.jsx)("h1", {
                    className: "dg-st-title challenge-to-earn",
                    children: (0, N.jsx)("span", {
                      children: "Experience, Play, and Earn!",
                    }),
                  }),
                ],
              }),
              (0, N.jsx)(i.ip, {
                children: (0, N.jsx)("div", {
                  className: "feature-wrapper",
                  children: (0, N.jsx)(i.lr, {
                    items: z.map(function (s, e) {
                      return (0, N.jsx)(
                        "div",
                        {
                          onClick: function () {
                            r(!n), d(e);
                          },
                          className: "feature-item-wrapper animation-bounce",
                          children: (0, N.jsx)(
                            "img",
                            { src: s.image, alt: "feature item" },
                            e
                          ),
                        },
                        e
                      );
                    }),
                    settings: L,
                  }),
                }),
              }),
            ],
          });
        },
        R = {
          title: "TOP 3 ARENA WEEKLY",
          list: [
            {
              level: 84,
              power: "884",
              username: "LISHUZHE88",
              race: "dark_elf",
              order: 1,
            },
            {
              level: 83,
              power: "829",
              username: "BJDAVIDLS",
              race: "human",
              order: 2,
            },
            {
              level: 82,
              power: "766",
              username: "ZORK2323",
              race: "human",
              order: 3,
            },
          ],
        },
        q = n(3244),
        Z = n(9054),
        V = n.n(Z),
        U = n(4946),
        K = n.n(U),
        X = function () {
          return (0, N.jsxs)("section", {
            className: "dg-describe d-none  text-align-center",
            id: "eventSection",
            children: [
              (0, N.jsx)("img", {
                src: G(),
                className: "section-separator",
                alt: "separator",
              }),
              (0, N.jsxs)("div", {
                className: "dg-game-describe-warper",
                style: { margin: "auto 1.2vw" },
                children: [
                  (0, N.jsx)("h2", { children: R.title }),
                  (0, N.jsx)("img", { src: H(), alt: "dg-separator-image" }),
                  (0, N.jsx)("div", {
                    children: (0, N.jsx)(q.i, {
                      fromLeft: !1,
                      children: (0, N.jsx)("div", {
                        className: "container-xl rank",
                        children: R.list.map(function (s) {
                          return (0,
                          N.jsx)("div", { className: "w-100", children: (0, N.jsxs)("div", { className: "row pt-5 pb-5", children: [(0, N.jsx)("div", { className: "col-lg-3", children: (0, N.jsx)("img", { className: "rank-order", src: "../assets/images/rank/".concat(s.order, ".png") }) }), (0, N.jsx)("div", { className: "col-lg-3", children: (0, N.jsx)("img", { className: "rank-avatar", src: "../assets/images/rank/race/".concat(s.race, "_avatar.png") }) }), (0, N.jsxs)("div", { className: "col-lg-6", children: [(0, N.jsxs)("h4", { children: [s.username, " TOP ", s.order] }), (0, N.jsx)("div", { className: "spliter-small", children: (0, N.jsx)("img", { src: K(), alt: "" }) }), (0, N.jsxs)("h4", { children: ["LEVEL ", s.level] }), (0, N.jsxs)("h4", { children: ["POWER ", s.power] })] }), (0, N.jsx)("div", { className: "col-lg-12", children: (0, N.jsx)("img", { className: "spliter", src: V(), alt: "" }) })] }) });
                        }),
                      }),
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        
        J = n(5107),
        Y = n.n(J),
        Q = n(8597),
        $ = n.n(Q),
        ss = n(2152),
        es = n.n(ss),
        ns = n(6897),
        as = n.n(ns),
        ts = n(6260),
        is = n.n(ts),
        rs = n(6034),
        os = n.n(rs),
        ls = n(8762),
        cs = n.n(ls);
      const ds = [
        {
          icon: $(),
          data: [
            {
              title: "Solana Metaverse Project Dragon War Reveals IDO Plans",
              url: "#",
              description:
                "Dragon War, a turn-based strategy game built on the Solana blockchain, has revealed details about its highly-anticipated public sale. Between March 20 and...",
            },
            {
              title:
                "Dragon War is Bringing the Most Exclusive NFT Collections to Magic Eden",
              url: "#",
              description:
                "NFT strategy game Dragon War has confirmed a partnership with Magic Eden, Solana’s fast-growing NFT marketplace. As part of the deal, the play-to-earn",
            },
          ],
        },
        {
          icon: es(),
          data: [
            {
              title: "Solana Strategy Game Dragon War Mobilises For March IDO",
              url: "#",
              description:
                "Solana Strategy Game Dragon War Mobilises For March IDO",
            },
          ],
        },
        {
          icon: Y(),
          data: [
            {
              title: "Solana Strategy Game Dragon War Mobilises For March IDO",
              url: "#",
              description:
                "Solana Strategy Game Dragon War Mobilises For March IDO",
            },
          ],
        },
        {
          icon: as(),
          data: [
            {
              title: "Solana Strategy Game Dragon War Mobilises For March IDO",
              url: "#",
              description:
                "Solana Strategy Game Dragon War Mobilises For March IDO",
            },
          ],
        },
        {
          icon: is(),
          data: [
            {
              title: "Solana Strategy Game Dragon War Mobilises For March IDO",
              url: "#",
              description:
                "Solana Strategy Game Dragon War Mobilises For March IDO",
            },
          ],
        },
        {
          icon: os(),
          data: [
            {
              title:
                "Dragon War: A Turn-Based Fantasy Metaverse Building on NFTs",
              url: "#",
              description:
                "Dragon War: A Turn-Based Fantasy Metaverse Building on NFTs",
            },
            {
              title:
                "Dragon War is Bringing the Most Exclusive NFT Collections to Magic Eden | Bitcoinist.com",
              url: "#",
              description:
                "NFT strategy game Dragon War has confirmed a partnership with Magic Eden, Solana’s fast-growing NFT marketplace. As part of the deal, the play-to-earn project",
            },
          ],
        },
        {
          icon: cs(),
          data: [
            {
              title:
                "Over 100 Venture Capitals, KOLs, and Gaming Guilds Busy Bug Hunting in Dragon War",
              url: "#",
              description:
                "Dragon War is notable for its vast NFT collection, with literally tens of thousands of unique assets available. ",
            },
          ],
        },
      ];
      var ps = n(3935);
      const gs = function (s) {
        var e = s.isShowing,
          n = s.hide,
          a = s.background,
          i = s.children;
        return e
          ? ps.createPortal(
              (0, N.jsxs)(t.Fragment, {
                children: [
                  (0, N.jsx)("div", { className: "modal-overlay" }),
                  (0, N.jsx)("div", {
                    className: "modal-wrapper",
                    "aria-modal": !0,
                    "aria-hidden": !0,
                    tabIndex: -1,
                    role: "dialog",
                    onClick: n,
                  }),
                  (0, N.jsx)("div", {
                    className: "modal",
                    style: { background: a, backgroundSize: "100% 100%" },
                    children: i,
                  }),
                ],
              }),
              document.body
            )
          : null;
      };
      const ms = function () {
        var s = (0, t.useState)(!1),
          e = (0, a.Z)(s, 2),
          n = e[0],
          i = e[1];
        return {
          isShowing: n,
          toggle: function () {
            i(!n);
          },
        };
      };
      var hs = function () {
          var s = ms(),
            e = s.isShowing,
            n = s.toggle,
            i = t.useState([]),
            r = (0, a.Z)(i, 2),
            o = r[0],
            l = r[1];
          return (0, N.jsxs)("section", {
            className: "dg-media text-align-center dg-preload-background",
            id: "media",
            children: [
              (0, N.jsx)("img", {
                src: G(),
                className: "section-separator",
                alt: "separator",
              }),
              (0, N.jsxs)("div", {
                className: "media-warper",
                children: [
                  (0, N.jsxs)("div", {
                    className: "dg-section-title dg-section-align-center",
                    children: [
                      (0, N.jsx)("div", {
                        className: "dg-st-inner",
                        children: (0, N.jsx)("div", {
                          className: "dg-st-title-holder",
                          children: (0, N.jsx)("h2", {
                            className: "dg-st-title",
                            children: (0, N.jsx)("span", {
                              children: "Media Coverage (Coming Soon)",
                            }),
                          }),
                        }),
                      }),
                      (0, N.jsxs)("div", {
                        children: [
                          (0, N.jsx)("img", {
                            src: H(),
                            alt: "dg-separator-image",
                          }),
                          (0, N.jsx)("br", {}),
                        ],
                      }),
                    ],
                  }),
                  (0, N.jsx)(q.i, {
                    fromLeft: !1,
                    children: (0, N.jsx)("div", {
                      className: "MuiBox-root jss16",
                      children: (0, N.jsx)("div", {
                        className:
                          "MuiGrid-root backers__grid MuiGrid-container MuiGrid-spacing-xs-2 MuiGrid-justify-content-xs-center med-container",
                        children: ds.map(function (s, e) {
                          var a =
                              ds.length < 6 ? Math.round(12 / ds.length) : 2,
                            t = ds.length < 2 ? Math.round(12 / ds.length) : 6;
                          return (0, N.jsx)(
                            "div",
                            {
                              className:
                                "MuiGrid-root backers__grid-item MuiGrid-item MuiGrid-grid-xs-"
                                  .concat(t, " MuiGrid-grid-sm-")
                                  .concat(a, " MuiGrid-grid-md-")
                                  .concat(a, " media-item  animation-bounce"),
                              children: (0, N.jsx)("img", {
                                className: "media-img backer",
                                src: s.icon,
                                onClick: function () {
                                  return (function (s) {
                                    l(s),
                                      s.length > 1
                                        ? n()
                                        : window.open(s[0].url);
                                  })(s.data);
                                },
                              }),
                            },
                            e
                          );
                        }),
                      }),
                    }),
                  }),
                ],
              }),
              (0, N.jsx)(gs, {
                isShowing: e,
                hide: n,
                background: "white",
                children: (0, N.jsx)("ul", {
                  children: o.map(function (s) {
                    return (0, N.jsxs)("li", {
                      style: { borderBottom: "1px solid" },
                      children: [
                        (0, N.jsx)("h2", {
                          className: "result-link",
                          children: (0, N.jsx)("a", {
                            onClick: function () {
                              return window.open(s.url);
                            },
                            children: s.title,
                          }),
                        }),
                        (0, N.jsx)("p", {
                          className: "green-link",
                          children: s.url.substring(0, 50) + "...",
                        }),
                        (0, N.jsx)("span", { className: "down-arrow" }),
                        (0, N.jsx)("p", { children: s.description }),
                      ],
                    });
                  }),
                }),
              }),
            ],
          });
        },
        us = n(7466),
        fs = n.n(us),
        xs = n(9595),
        ys = n.n(xs),
        js = n(1356),
        ws = n.n(js),
        vs = n(6730),
        bs = n.n(vs),
        ks = n(9517),
        Ns = n.n(ks),
        Ss = n(7211),
        Ms = n.n(Ss),
        Ts = [
       
          {
            image: fs(),
            title: "Blockombats",
            des: "Each Kombat will bring unique strength according to their Race.",
          },
          {
            image: ys(),
            title: "NFT Minting and Rewards",
            des: "Mint your own unique Blockombat NFTS from our collection of unique characters",
          },
          {
            image: ws(),
            title: "Rare NFTs",
            des: "rewards that power our tournament system.",
          },
          {
            image: bs(),
            title: "Skills & Ability Cards",
            des: "Each Kombat will have a number of skill slots, according to its rarity.",
          },
        ],
        Ds = n(5591),
        Es = n(1801),
        As = n(5697),
        Cs = n(4665);
      Cs.ZP.use([Cs.lI, Cs.tl, Cs.pt]);
      var Ws = function (s) {
        var e = t.useState(null),
          n = (0, a.Z)(e, 2),
          i = n[0],
          r = n[1];
        return (
          t.useEffect(
            function () {
              var e;
              s.scrollTo && ((e = s.scrollTo), i && i.slideTo(e));
            },
            [s.scrollTo]
          ),
          (0, N.jsx)(N.Fragment, {
            children: (0, N.jsx)(Es.t, {
              onSwiper: r,
              onSlideChange: s.onchange,
              effect: "coverflow",
              grabCursor: !0,
              centeredSlides: !0,
              initialSlide: 1,
              slidesPerView: 3,
              coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: !0,
              },
              pagination: !0,
              className: "mySwiper",
              children: s.items,
            }),
          })
        );
      };
      Ws.propTypes = {
        items: As.array.isRequired,
        onchange: As.func.isRequired,
        scrollTo: As.number.isRequired,
      };
      var Ps = n(7762),
        Fs = n.n(Ps),
        Is = n(518),
        zs = n.n(Is),
        _s = function () {
          var s = t.useState(0),
            e = (0, a.Z)(s, 2),
            n = e[0],
            r = e[1],
            o = t.useState(0),
            l = (0, a.Z)(o, 2),
            c = l[0],
            d = l[1];
          return (0, N.jsxs)("section", {
            className: "dg-nfts text-align-center",
            id: "nfts",
            children: [
              (0, N.jsx)("img", {
                src: G(),
                className: "section-separator",
                alt: "separator",
              }),
              (0, N.jsxs)("div", {
                className: "dg-st-title-holder",
                children: [
                  (0, N.jsx)("h2", {
                    className: "dg-st-title",
                    children: (0, N.jsx)("span", { children: "nfts" }),
                  }),
                  (0, N.jsx)("img", { src: H(), alt: "dg-separator-image" }),
                  (0, N.jsx)("br", {}),
                ],
              }),
              (0, N.jsx)(i.ip, {
                children: (0, N.jsxs)("div", {
                  className: "nft-wrapper",
                  children: [
                    (0, N.jsxs)("div", {
                      className: "position-relative",
                      children: [
                        (0, N.jsx)("div", {
                          className: "slick-arrow slick-prev",
                          onClick: function () {
                            return d(n - 1 >= 0 ? n - 1 : Ts.length);
                          },
                          style: {
                            width: 50,
                            height: 50,
                            display: "block",
                            backgroundImage: "url('".concat(Fs(), "')"),
                            backgroundSize: "100% 100%",
                          },
                        }),
                        (0, N.jsx)("div", {
                          className: "slick-arrow slick-next",
                          onClick: function () {
                            return d(n + 1 <= Ts.length ? n + 1 : 0);
                          },
                          style: {
                            width: 50,
                            height: 50,
                            display: "block",
                            backgroundImage: "url('".concat(zs(), "')"),
                            backgroundSize: "100% 100%",
                          },
                        }),
                        (0, N.jsx)(Ws, {
                          scrollTo: c,
                          onchange: function (s) {
                            return (function (s) {
                              r(s.activeIndex);
                            })(s);
                          },
                          items: Ts.map(function (s, e) {
                            return (0, N.jsx)(
                              Es.o,
                              {
                                onClick: function () {
                                  return d(e);
                                },
                                children: (0, N.jsx)(
                                  Ds.w,
                                  {
                                    dataSrc: s.image,
                                    dataSrcset: s.image,
                                    alt: "nft item",
                                  },
                                  e
                                ),
                              },
                              e
                            );
                          }),
                        }),
                      ],
                    }),
                    (0, N.jsx)("div", {
                      className: "info-wraper",
                      children: (0, N.jsxs)("div", {
                        className: "info",
                        children: [
                          (0, N.jsx)("h4", { children: Ts[n].title }),
                          (0, N.jsx)("p", { children: Ts[n].des }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        Gs = [
          {
            token: "BKB",
            maxSupply: "1,000,000,000",
            usecase: [
              "Play to earn.",
              "Arena Store",
              "Character Store",
              "Skills Store",
              "Weapons Store",
              "NFT Store",
              "Solo mode",
              "Duel mode",
              "Tournament mode ,Trading NFTs on the Marketplace.",
            ],
            contact: [
              {
                name: "BKB",
                token: "soon",
                link: "#",
              },
            ],
          },
          {
            token: "200,000,000",
            maxSupply: "120,000,000",
            usecase: [
              "Marketing: 150,000,000",
              "Rewards for (P2E & LP/Single Staking): 100,000,000 ",
              "Team: 80,000,000",
              "Operations/Development: 170,000,000",
              "Legal: 10,000,000 ",
            ],
            contact: [
              {
                name: "",
                token: "",
                link: "#",
              },
            ],
          },
        ],
        Bs = n(7700),
        Hs = n.n(Bs),
        Ls = n(8449),
        Os = n.n(Ls),
        Rs = n(5668),
        qs = n.n(Rs),
        Zs = n(8282),
        Vs = n.n(Zs),
        Us = n(9638),
        Ks = n.n(Us),
        Xs = function () {
          return (0, N.jsxs)("section", {
            className: "dg-tokenInfo text-align-center dg-preload-background",
            style: {
              backgroundImage:
                "url(https://ik.imagekit.io/l4k8brcjb/kombat/background_thunder.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666517240885)",
            },
            id: "tokenInfo",
            children: [
              (0, N.jsx)("img", {
                src: G(),
                className: "section-separator",
                alt: "separator",
              }),
              (0, N.jsx)("div", {
                className: "dg-section-title dg-section-align-center",
                style: { margin: "auto 1.2vw" },
                children: (0, N.jsx)("div", {
                  className: "token-container",
                  children: (0, N.jsxs)("div", {
                    className: "token-container-bg",
                    children: [
                      (0, N.jsx)("div", {
                        className: "dg-st-inner",
                        children: (0, N.jsx)("div", {
                          className: "dg-st-title-holder",
                          children: (0, N.jsx)("h2", {
                            className: "dg-st-title",
                            children: (0, N.jsx)("span", {
                              children: "Tokenomics",
                            }),
                          }),
                        }),
                      }),
                      (0, N.jsx)("br", {}),
                      (0, N.jsx)("img", {
                        src: H(),
                        alt: "dg-separator-image",
                      }),
                      (0, N.jsx)("br", {}),
                      (0, N.jsxs)("div", {
                        className: "dg-elements-holder dg-responsive-mode-768",
                        children: [
                          (0, N.jsxs)("div", {
                            className:
                              "dg-elements-holder-item dg-width-1-1 dg-vertical-alignment-middle dg-horizontal-alignment-left border-left-50",
                            children: [
                              (0, N.jsxs)("h4", {
                                children: [
                                  (0, N.jsx)("span", {
                                    children: (0, N.jsx)("img", {
                                      width: 20,
                                      src: zs(),
                                      alt: "arrow",
                                    }),
                                  }),
                                  "TOKEN",
                                ],
                              }),
                              (0, N.jsxs)("h3", {
                                children: ["    ", Gs[0].token],
                              }),
                              (0, N.jsxs)("h4", {
                                children: [
                                  (0, N.jsx)("span", {
                                    children: (0, N.jsx)("img", {
                                      width: 20,
                                      src: zs(),
                                      alt: "arrow",
                                    }),
                                  }),
                                  "MAX SUPPLY",
                                ],
                              }),
                              (0, N.jsxs)("h5", {
                                children: [
                                  (0, N.jsx)("span", {
                                    children: (0, N.jsx)("img", {
                                      width: 30,
                                      src: Vs(),
                                      alt: "diamon",
                                    }),
                                  }),
                                  Gs[0].maxSupply,
                                ],
                              }),
                              (0, N.jsxs)("h4", {
                                children: [
                                  (0, N.jsx)("span", {
                                    children: (0, N.jsx)("img", {
                                      width: 20,
                                      src: zs(),
                                      alt: "arrow",
                                    }),
                                  }),
                                  "USE CASES",
                                ],
                              }),
                              (0, N.jsx)("ul", {
                                children: Gs[0].usecase.map(function (s) {
                                  return s
                                    ? (0, N.jsx)("li", { children: s })
                                    : (0, N.jsx)("br", {});
                                }),
                              }),
                              (0, N.jsxs)("h4", {
                                children: [
                                  (0, N.jsx)("span", {
                                    children: (0, N.jsx)("img", {
                                      width: 20,
                                      src: zs(),
                                      alt: "arrow",
                                    }),
                                  }),
                                  "Contract Address",
                                ],
                              }),
                              Gs[0].contact.map(function (s) {
                                return (0, N.jsxs)("p", {
                                  children: [
                                    s.name,
                                    ": ",
                                    s.token,
                                    (0, N.jsx)("span", {
                                      style: { cursor: "pointer" },
                                      onClick: function () {
                                        navigator.clipboard.writeText(s.token),
                                          (0, v.Am)("Copied ! ");
                                      },
                                      children: (0, N.jsx)("img", {
                                        width: 20,
                                        src: Os(),
                                        alt: "copy to clipboard",
                                      }),
                                    }),
                                    (0, N.jsx)("span", {
                                      style: { cursor: "pointer" },
                                      onClick: function () {
                                        window.open(s.link, "_blank").focus();
                                      },
                                      children: (0, N.jsx)("img", {
                                        width: 20,
                                        src: qs(),
                                        alt: "copy to clipboard",
                                      }),
                                    }),
                                  ],
                                });
                              }),
                              (0, N.jsx)("h4", {
                                children: (0, N.jsx)("a", {
                                  href: "#",
                                  target: "_blank",
                                  children: (0, N.jsx)("img", {
                                    src: Hs(),
                                    alt: "Buy DRAW",
                                  }),
                                }),
                              }),
                            ],
                          }),
                          (0, N.jsxs)("div", {
                            className:
                              "dg-elements-holder-item dg-width-1-1 dg-vertical-alignment-middle dg-horizontal-alignment-left",
                            children: [
                              (0, N.jsxs)("h4", {
                                children: [
                                  (0, N.jsx)("span", {
                                    children: (0, N.jsx)("img", {
                                      width: 20,
                                      src: zs(),
                                      alt: "arrow",
                                    }),
                                  }),
                                  "Seed",
                                ],
                              }),
                              (0, N.jsxs)("h3", {
                                children: ["    ", Gs[1].token],
                              }),
                              (0, N.jsxs)("h4", {
                                children: [
                                  (0, N.jsx)("span", {
                                    children: (0, N.jsx)("img", {
                                      width: 20,
                                      src: zs(),
                                      alt: "arrow",
                                    }),
                                  }),
                                  "Private",
                                ],
                              }),
                              (0, N.jsxs)("h5", {
                                children: [
                                  (0, N.jsx)("span", {
                                    children: (0, N.jsx)("img", {
                                      width: 30,
                                      src: Vs(),
                                      alt: "diamon",
                                    }),
                                  }),
                                  Gs[1].maxSupply,
                                ],
                              }),
                              (0, N.jsxs)("h4", {
                                children: [
                                  (0, N.jsx)("span", {
                                    children: (0, N.jsx)("img", {
                                      width: 20,
                                      src: zs(),
                                      alt: "arrow",
                                    }),
                                  }),
                                  "More",
                                ],
                              }),
                              (0, N.jsx)("ul", {
                                children: Gs[1].usecase.map(function (s) {
                                  return s
                                    ? (0, N.jsx)("li", { children: s })
                                    : (0, N.jsx)("br", {});
                                }),
                              }),
                              (0, N.jsxs)("h4", {
                                children: [
                                  (0, N.jsx)("span", {
                                   
                                  }),
                                  "",
                                ],
                              }),
                              Gs[1].contact.map(function (s) {
                                return (0, N.jsxs)("p", {
                                  children: [
                                    s.name,
                                    " ",
                                    s.token,
                                    (0, N.jsx)("span", {
                                      style: { cursor: "pointer" },
                                      onClick: function () {
                                        navigator.clipboard.writeText(s.token),
                                          (0, v.Am)("Copied ! ");
                                      },
                                      
                                    }),
                                    (0, N.jsx)("span", {
                                      style: { cursor: "pointer" },
                                      onClick: function () {
                                        window.open(s.link, "_blank").focus();
                                      },
                                    
                                    }),
                                  ],
                                });
                              }),
                            ],
                          }),
                          (0, N.jsx)("div", {
                            className:
                              "dg-elements-holder-item dg-width-1-1 dg-vertical-alignment-middle dg-horizontal-alignment-left thunder-dragon",
                            children: (0, N.jsx)("img", { src: Ks(), alt: "" }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            ],
          });
        },
        Js = n(2004),
        Ys = n(4361),
        Qs = n.n(Ys),
        $s = n(6529),
        se = n.n($s),
        ee = n(7235),
        ne = n.n(ee),
        ae = n(5921),
        te = n.n(ae),
        ie = n(3986),
        re = n.n(ie),
        oe = [
          { thumb: Qs(), video: "https://www.youtube.com/watch?v=iVf3Nima7UY" },
          { thumb: se(), video: "https://www.youtube.com/watch?v=RtSG-ixqQJ4" },
          { thumb: ne(), video: "https://www.youtube.com/watch?v=u-_pYUHCfwc" },
          { thumb: te(), video: "https://www.youtube.com/watch?v=FqlBPwvwSqI" },
          { thumb: re(), video: "https://www.youtube.com/watch?v=PoeD_qU5RsI" },
        ],
        le = n(4907),
        ce = {
          dots: !0,
          infinite: !0,
          faded: !0,
          speed: 500,
          slidesToShow: 2,
          swipeToSlide: !0,
          slidesToScroll: 1,
          nextArrow: (0, N.jsx)(le.F8, {}),
          prevArrow: (0, N.jsx)(le.Kf, {}),
          responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: !1,
                dots: !0,
              },
            },
          ],
        },
        de = function () {
          return (0, N.jsx)("section", {
            className: "dg-video text-align-center dg-preload-background",
            id: "Video",
            children: (0, N.jsxs)("div", {
              className: "container-xxl m-auto",
              children: [
                (0, N.jsx)("img", {
                  src: G(),
                  className: "section-separator",
                  alt: "separator",
                }),
                (0, N.jsx)("div", {
                  className: "dg-section-title dg-section-align-center",
                  style: { margin: "auto 1.2vw" },
                  children: (0, N.jsx)("div", {
                    className: "token-container",
                    children: (0, N.jsxs)("div", {
                      className: "token-container-bg",
                      children: [
                        (0, N.jsx)("div", {
                          className: "dg-st-inner",
                          children: (0, N.jsxs)("div", {
                            className: "dg-st-title-holder",
                            children: [
                              (0, N.jsx)("h2", {
                                className: "dg-st-title",
                                children: (0, N.jsx)("span", {
                                  children: "Top highlighted videos",
                                }),
                              }),
                              (0, N.jsx)("img", {
                                src: H(),
                                alt: "dg-separator-image",
                              }),
                              (0, N.jsx)("br", {}),
                            ],
                          }),
                        }),
                        (0, N.jsx)("br", {}),
                        (0, N.jsx)(q.i, {
                          children: (0, N.jsx)("div", {
                            className: "video-wraper m-auto",
                            children: (0, N.jsx)(le.lr, {
                              items: oe.map(function (s, e) {
                                return (0,
                                N.jsx)("div", { className: "p-5", children: (0, N.jsx)(Js.Z, { width: "100%", height: "427px", url: s.video }) });
                              }),
                              settings: ce,
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
          });
        },
        pe = n(8706),
        ge = "/";
      const me = function () {
        var s = t.useState(!1),
          e = (0, a.Z)(s, 2),
          n = (e[0], e[1]);
        return (
          t.useEffect(function () {
            setTimeout(function () {
              n(!0);
            }, 5e3);
          }, []),
          (0, N.jsxs)("div", {
            children: [
              (0, N.jsxs)("div", {
                children: [
                  (0, N.jsx)(S, {}),
                  (0, N.jsx)(i.Bs, {}),
                  (0, N.jsx)(i.Lr, {}),
                  (0, N.jsx)(i.Oc, {}),
                  (0, N.jsx)(O, {}),
                  (0, N.jsx)(_s, {}),
                  (0, N.jsx)(X, {}),
                  (0, N.jsx)(Xs, {}),
                  (0, N.jsx)(hs, {}),
                  (0, N.jsx)(de, {}),
                  (0, N.jsx)(i.kT, {}),
                  (0, N.jsx)(i.Xw, {}),
                  (0, N.jsx)(i.cN, {}),
                ],
              }),
              (0, pe.A)(),
            ],
          })
        );
      };
    },
    8706: (s, e, n) => {
      "use strict";
      n.d(e, { A: () => o });
      var a = n(5861),
        t = n(4687),
        i = n.n(t),
        r = (function () {
          var s = (0, a.Z)(
            i().mark(function s() {
              var e;
              return i().wrap(function (s) {
                for (;;)
                  switch ((s.prev = s.next)) {
                    case 0:
                      (e = new IntersectionObserver(
                        function (s, e) {
                          s.forEach(function (s) {
                            if (s.isIntersecting) {
                              var n = s.target;
                              (n.src = n.getAttribute("data-src")),
                                (n.srcset = n.getAttribute("data-srcset")),
                                n.classList.remove("lazy"),
                                e.unobserve(n);
                            }
                          });
                        },
                        { threshold: 0.1 }
                      )),
                        (document.querySelectorAll("[data-src]") || []).forEach(
                          function (s) {
                            e.observe(s);
                          }
                        );
                    case 3:
                    case "end":
                      return s.stop();
                  }
              }, s);
            })
          );
          return function () {
            return s.apply(this, arguments);
          };
        })(),
        o = function () {
          setTimeout(function () {
            r();
          });
        };
    },
    8449: (s, e, n) => {
      s.exports = n.p + "assets/images/copy.png";
    },
    5668: (s, e, n) => {
      s.exports = n.p + "assets/images/open-link.png";
    },
    1850: (s, e, n) => {
      s.exports =  "assets/images/banner.gif";
    },
    496: (s, e, n) => {
      s.exports = "assets/images/comingsoon.png";
    },
    8282: (s, e, n) => {
      s.exports = n.p + "assets/images/diamond.png";
    },
    1152: (s, e, n) => {
      s.exports =  "assets/images/1.png";
    },
    1210: (s, e, n) => {
      s.exports = "assets/images/2.png";
    },
    3270: (s, e, n) => {
      s.exports = "assets/images/3.png";
    },
    9750: (s, e, n) => {
      s.exports =  "assets/images/4.png";
    },
    1025: (s, e, n) => {
      s.exports =  "assets/images/5.png";
    },
    6897: (s, e, n) => {
      s.exports = n.p + "assets/images/benzinga.png";
    },
    6034: (s, e, n) => {
      s.exports = n.p + "assets/images/bitcoinist.png";
    },
    8762: (s, e, n) => {
      s.exports = n.p + "assets/images/coinspeaker.png";
    },
    5107: (s, e, n) => {
      s.exports = n.p + "assets/images/marketwatch.png";
    },
    8597: (s, e, n) => {
      s.exports = n.p + "assets/images/newsbtc.png";
    },
    6260: (s, e, n) => {
      s.exports = n.p + "assets/images/thenewyorkage.png";
    },
    2152: (s, e, n) => {
      s.exports = n.p + "assets/images/yahoonews.png";
    },
    7466: (s, e, n) => {
      s.exports =  "assets/images/nft1.png";
    },
    9595: (s, e, n) => {
      s.exports ="assets/images/nft2.png";
    },
    1356: (s, e, n) => {
      s.exports =  "assets/images/nft3.png";
    },
    6730: (s, e, n) => {
      s.exports =  "assets/images/nft4.png";
    },
    9517: (s, e, n) => {
      s.exports = n.p + "assets/images/nft6.png";
    },
    7211: (s, e, n) => {
      s.exports = n.p + "assets/images/nft7.png";
    },
    9782: (s, e, n) => {
      s.exports = n.p + "assets/images/outline.png";
    },
    8110: (s, e, n) => {
      s.exports = n.p + "assets/images/platform_android.png";
    },
    6111: (s, e, n) => {
      s.exports = n.p + "assets/images/platform_bg.png";
    },
    6446: (s, e, n) => {
      s.exports = n.p + "assets/images/platform_ios.png";
    },
    8072: (s, e, n) => {
      s.exports = n.p + "assets/images/platform_web.png";
    },
    9054: (s, e, n) => {
      s.exports = n.p + "assets/images/spliter.png";
    },
    4946: (s, e, n) => {
      s.exports = n.p + "assets/images/spliter_small.png";
    },
    9638: (s, e, n) => {
      s.exports = "https://ik.imagekit.io/l4k8brcjb/kombat/Image.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666532212974";
    },
    4361: (s, e, n) => {
      s.exports = n.p + "assets/images/thumb1.png";
    },
    6529: (s, e, n) => {
      s.exports = n.p + "assets/images/thumb2.png";
    },
    7235: (s, e, n) => {
      s.exports = n.p + "assets/images/thumb3.png";
    },
    5921: (s, e, n) => {
      s.exports = n.p + "assets/images/thumb4.png";
    },
    3986: (s, e, n) => {
      s.exports = n.p + "assets/images/thumb5.png";
    },
  },
]);
