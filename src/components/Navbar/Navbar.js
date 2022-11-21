import React,{useState} from "react";
import { ConnectButton } from '@rainbow-me/rainbowkit';
function Navbar() {
    const [mobNav ,setMobNav]=useState(false)
   
  
  return (
    <>
      <header className="dg-page-header" id="header">
        <div
          id="stickyHeader"
          className="dg-sticky-header header-appear  animate__animated  animate__fadeInDown"
        >
          <div className="dg-sticky-holder">
            <div
              className="dg-vertical-align-containers"
              style={{ paddingRight: "0px" }}
            >
              <div className="dg-position-center">
                <div className="dg-position-center-inner">
                  <nav className="dg-main-menu dg-drop-down dg-sticky-nav">
                    <ul
                      id="menu-main-menu-main-navigation-mobile-navigation"
                      className="clearfix"
                    >
                      <li
                        id="nav-menu-item"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children has_sub narrow dg-active-item"
                      >
                        <a href="/" className="dg-header-logo-container">
                          <img
                            className="dg-normal-logo"
                            src="https://ik.imagekit.io/cforcrypto/block/logo-dark.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668710877366"
                            alt="dark logo"
                            style={{ maxHeight: "12vh" }}
                          />
                        </a>
                      </li>
                      <li
                        id="nav-menu-item"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children has_sub narrow"
                      >
                        <a href="#roadmap" className="">
                          <span className="item_outer">
                            <span
                              className="item_inner"
                              style={{ fontWeight: "bold", color: "white" }}
                            >
                              <span className="bold-item">Roadmap</span>
                            </span>
                          </span>
                        </a>
                      </li>
                      <li
                        id="nav-menu-item"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children has_sub narrow"
                      >
                        <a href="#partners" className="">
                          <span className="item_outer">
                            <span
                              className="item_inner"
                              style={{ fontWeight: "bold", color: "white" }}
                            >
                              <span className="bold-item">Partners</span>
                            </span>
                          </span>
                        </a>
                      </li>
                      <li
                        id="nav-menu-item"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children has_sub narrow dg-active-item"
                      >
                        <a href="/">
                          <span className="item_outer">
                            <span
                              className="item_inner"
                              style={{ fontWeight: "bold", color: "white" }}
                            >
                              <span className="bold-item">
                                Documents
                                <img
                                  src="https://ik.imagekit.io/cforcrypto/block/vector_down.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668708663156"
                                  width="13"
                                  alt="vectordown"
                                  style={{ display: "inline" }}
                                />
                              </span>
                            </span>
                          </span>
                        </a>
                        <div id="game-lore-dropdown" className="second">
                          <div className="inner">
                            <ul>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page ">
                                <a target="_blank" href="/" className="">
                                  <span className="item_outer">
                                    <span className="item_inner">
                                      <span className="item_text">
                                        White Paper
                                      </span>
                                    </span>
                                  </span>
                                </a>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page ">
                                <a href="/" className="">
                                  <span className="item_outer">
                                    <span className="item_inner">
                                      <span className="item_text">
                                        Token Metrics
                                      </span>
                                    </span>
                                  </span>
                                </a>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page ">
                                <a target="_blank" href="/" className=" ">
                                  <span className="item_outer">
                                    <span className="item_inner">
                                      <span className="item_text">
                                        Pitch Deck
                                      </span>
                                    </span>
                                  </span>
                                </a>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page ">
                                <a target="_blank" href="/" className="">
                                  <span className="item_outer">
                                    <span className="item_inner">
                                      <span className="item_text">
                                        All about Mainnet
                                      </span>
                                    </span>
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li
                        id="nav-menu-item"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children has_sub narrow"
                      >
                        <a href="#tokenInfo" className="">
                          <span className="item_outer">
                            <span
                              className="item_inner"
                              style={{ fontWeight: "bold", color: "white" }}
                            >
                              <span className="bold-item">Tokens</span>
                            </span>
                          </span>
                        </a>
                      </li>
                      <li
                        id="nav-menu-item"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children has_sub narrow"
                      >
                        <a href="/" className="">
                          <span className="item_outer">
                            <span
                              className="item_inner"
                              style={{ fontWeight: "bold", color: "white" }}
                            >
                              <span className="bold-item">Stake</span>
                            </span>
                          </span>
                        </a>
                      </li>
                      <li
                        id="nav-menu-item"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children has_sub narrow"
                      >
                        <a target="_blank" href="/" className="">
                          <span className="item_outer">
                            <span
                              className="item_inner"
                              style={{ fontWeight: "bold", color: "white" }}
                            >
                              <span className="bold-item">MARKETPLACE</span>
                            </span>
                          </span>
                        </a>
                      </li>
                      <li
                        id="nav-menu-item"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children has_sub narrow"
                      >
                        <a href="#nfts" className="">
                          <span className="item_outer">
                            <span
                              className="item_inner"
                              style={{ fontWeight: "bold", color: "white" }}
                            >
                              <span className="bold-item">NFTS</span>
                            </span>
                          </span>
                        </a>
                      </li>
                      <li
                        id="nav-menu-item"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children has_sub wide"
                      >
                        <a href="#playnow" className="dg-header-logo-container">
                          <img
                            className="dg-normal-logo playnow-btn"
                            src="https://ik.imagekit.io/cforcrypto/block/play-btn.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668708660229"
                            alt="dark logo"
                          />
                        </a>
                      </li>

                      <li
                        id="nav-menu-item"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children has_sub narrow"
                      >
                        <a href="#nfts" className="">
                          <span className="item_outer">
                            <span
                              className="item_inner"
                              style={{ fontWeight: "bold", color: "white" }}
                            >
                               <ConnectButton />
                              {/* <button onClick={connectWallet} className="bold-item">Connect</button> */}
                            </span>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header class="dg-mobile-header">
        <div class="dg-mobile-header-inner">
          <div
            class="dg-mobile-header-holder"
            style={{backgroundImage: 'url("https://ik.imagekit.io/cforcrypto/block/pattern-dark.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668708650266")',backgroundSize: '100% 100%'}}
          >
            <div class="dg-grid">
              <div class="dg-vertical-align-containers">
                <div class="dg-mobile-menu-opener">
                  <a href="#home" onClick={()=>setMobNav(!mobNav)}>
                    <span class="dg-mobile-opener-icon-holder">
                      <svg
                        class="svg-inline--fa fa-bars dg-icon-font-awesome"
                        style={{color: 'white'}}
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="bars"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        data-fa-i2svg=""
                      >
                        <path
                          fill="currentColor"
                          d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
                        ></path>
                      </svg>
                      {/* <!-- <i class="dg-icon-font-awesome fa fa-bars" style="color: white;"></i> Font Awesome fontawesome.com -->  */}
                    </span>
                  </a>
                </div>
                <div class="dg-position-center">
                  <div class="dg-position-center-inner">
                    <div class="dg-mobile-logo-wrapper">
                      <a href="/" style={{height: '90px'}}>
                        <img
                          height="200"
                          width="410"
                          src="https://ik.imagekit.io/cforcrypto/block/logo-dark.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668710877366"
                          alt="mobile-logo"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div class="dg-position-right">
                  <div class="dg-position-right-inner"></div>
                </div>
              </div>
            </div>
          </div>
          <nav
            className={mobNav ? "dg-mobile-nav  dg-mobile-nav-mob" : "dg-mobile-nav"}
            id="dgMobileNav"
            style={{
              backgroundImage:
                "url(https://ik.imagekit.io/cforcrypto/block/pattern-dark.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668708650266)",
              backgroundSize: "100% 100%",
             
            }}
          >
            <div className="dg-grid">
              <ul
                id="menu-main-menu-main-navigation-mobile-navigation-2"
                className=""
              >
                <li
                  id="nav-menu-item-200"
                  class="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children dg-active-item has_sub narrow"
                >
                  <a href="/">
                    <span class="item_outer">
                      <span class="item_inner">
                        <span class="item_text">GamePlays</span>
                      </span>
                    </span>
                  </a>
                  <ul
                    id="game-play-dropdown-mobile"
                    class="sub_menu"
                    style={{display: 'none'}}
                  >
                    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-128 current_page_item ">
                      <a href="#dragons" class="">
                        <span>Dragon</span>
                      </a>
                    </li>
                    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-128 current_page_item ">
                      <a href="#characters" class="">
                        <span>Characters</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li
                  id="nav-menu-item"
                  class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children  has_sub narrow"
                >
                  <a href="#features" class="">
                    <span class="item_outer">
                      <span class="item_inner">
                        <span class="item_text">Features</span>
                      </span>
                    </span>
                  </a>
                </li>
                <li
                  id="nav-menu-item"
                  class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children  has_sub narrow"
                >
                  <a href="#roadmap" class="">
                    <span class="item_outer">
                      <span class="item_inner">
                        <span class="item_text">Roadmap</span>
                      </span>
                    </span>
                  </a>
                </li>
                <li
                  id="nav-menu-item"
                  class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children  has_sub narrow"
                >
                  <a href="#partners" class="">
                    <span class="item_outer">
                      <span class="item_inner">
                        <span class="item_text">Partners</span>
                      </span>
                    </span>
                  </a>
                </li>
                <li
                  id="nav-menu-item-200"
                  class="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children dg-active-item has_sub narrow"
                >
                  <a href="/">
                    <span class="item_outer">
                      <span class="item_inner">
                        <span class="item_text">Documents</span>
                      </span>
                    </span>
                  </a>
                  <ul
                    id="game-lore-dropdown-mobile"
                    class="sub_menu"
                    style={{display: 'none'}}
                  >
                    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-128 current_page_item ">
                      <a href="/" class="">
                        <span>White Paper</span>
                      </a>
                    </li>
                    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-128 current_page_item ">
                      <a href="/" class="">
                        <span>Token Metrics</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li
                  id="nav-menu-item"
                  class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children  has_sub narrow"
                >
                  <a href="#tokenInfo" class="">
                    <span class="item_outer">
                      <span class="item_inner">
                        <span class="item_text">Tokens</span>
                      </span>
                    </span>
                  </a>
                </li>
                <li
                  id="nav-menu-item"
                  class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children  has_sub narrow"
                >
                  <a href="/" class="">
                    <span class="item_outer">
                      <span class="item_inner">
                        <span class="item_text">Stake</span>
                      </span>
                    </span>
                  </a>
                </li>
                <li
                  id="nav-menu-item"
                  class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children  has_sub narrow"
                >
                  <a target="_blank" href="/" class="">
                    <span class="item_outer">
                      <span class="item_inner">
                        <span class="item_text">Marketplace</span>
                      </span>
                    </span>
                  </a>
                </li>
                <li
                  id="nav-menu-item"
                  class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children  has_sub narrow"
                >
                  <a href="#nfts" class="">
                    <span class="item_outer">
                      <span class="item_inner">
                        <span class="item_text">NFTS</span>
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      <a id="dg-back-to-top" href="#home" class="on" style={{left: '29px', right: 'auto', bottom: '30px'}}><span class="dg-icon-stack">
        <img src="https://ik.imagekit.io/cforcrypto/block/arrow_white.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668708554804" alt="Back to Top"/></span></a>
    </>
  );
}

export default Navbar;
