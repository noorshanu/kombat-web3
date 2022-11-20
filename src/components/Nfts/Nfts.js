import React from "react";

function Nfts() {
  return (
    <>
      <section className="dg-nfts text-align-center" id="nfts">
        <img
          src="https://ik.imagekit.io/cforcrypto/block/sectionseparate.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668708660236"
          className="section-separator"
          alt="separator"
        />
        <div className="dg-st-title-holder">
          <h2 className="dg-st-title">
            <span>nfts</span>
          </h2>
          <img
            src="https://ik.imagekit.io/cforcrypto/block/section-title-border.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668708662499"
            alt="dg-separator"
          />
          <br />
        </div>
        <div className="lazy-div" style={{ opacity: "1", transform: "none" }}>
          <div className="nft-wrapper">
            <div className="position-relative">
              <div
                className="slick-arrow slick-prev"
                style={{width: '50px',
                 height: '50px',
                 display: 'block',
                  backgroundImage: 'url("https://ik.imagekit.io/cforcrypto/block/arrow_left.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668708553459")', 
                 backgroundSize: '100% 100%'}}
              ></div>
              <div
                className="slick-arrow slick-next"
                style={{width: '50px',
                height: '50px',
                display: 'block',
                 backgroundImage: 'url("https://ik.imagekit.io/cforcrypto/block/arrow_right.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668708554780")', 
                backgroundSize: '100% 100%'}}
              ></div>
              <div className="swiper swiper-coverflow swiper-3d swiper-initialized swiper-horizontal swiper-pointer-events mySwiper">
                <div className="swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal">
                  <span className="swiper-pagination-bullet"></span>
                  <span className="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
                  <span className="swiper-pagination-bullet"></span>
                  <span className="swiper-pagination-bullet"></span>
                </div>
                <div
                  className="swiper-wrapper"
                  style={{cursor: 'grab',transform: 'translate3d(0px, 0px, 0px)',transitionDuration: '0ms'}}
                >
                  <div
                    className="swiper-slide swiper-slide-visible swiper-slide-prev"
                    style={{width: '396.333px', transform:' translate3d(0px, 0px, -100px) rotateX(0deg) rotateY(50deg) scale(1)', zIndex: '0', transitionDuration: '0ms'}}
                  >
                    <img
                      className="sc-bcXHqe bYquza img fade-in loaded"
                      src="https://ik.imagekit.io/cforcrypto/block/nft1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668708644151"
                      alt="nft item"
                      loading="lazy"
                    />
                    <div
                      className="swiper-slide-shadow-left"
                      style={{opacity: '1',transitionDuration: '0ms'}}
                    ></div>
                    <div
                      className="swiper-slide-shadow-right"
                      style={{opacity: '0',transitionDuration: '0ms'}}
                    ></div>
                  </div>
                  <div
                    className="swiper-slide swiper-slide-visible swiper-slide-active"
                    style={{width: '396.333px',transform: 'translate3d(0px, 0px, -0.0841043px) rotateX(0deg) rotateY(0.0420521deg) scale(1)', zIndex: '1',transitionDuration: '0ms'}}
                  >
                    <img
                      className="sc-bcXHqe bYquza img fade-in loaded"
                      src="https://ik.imagekit.io/cforcrypto/block/nft2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668708646920"
                      alt="nft item"
                      loading="lazy"
                    />
                    <div
                      className="swiper-slide-shadow-left"
                      style={{opacity: '0.000841043', transitionDuration: '0ms'}}
                    ></div>
                    <div
                      className="swiper-slide-shadow-right"
                      style={{opacity: '0',transitionDuration: '0ms'}}
                    ></div>
                  </div>
                  <div
                    className="swiper-slide swiper-slide-visible swiper-slide-next"
                    style={{width: '396.333px',transform: 'translate3d(0px, 0px, -100.084px) rotateX(0deg) rotateY(-50.0421deg) scale(1)', zIndex: '0',transitionDuration: '0ms'}}
                  >
                    <img
                      className="sc-bcXHqe bYquza img fade-in loaded"
                      src="https://ik.imagekit.io/cforcrypto/block/nft3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668708654652"
                      alt="nft item"
                      loading="lazy"
                    />
                    <div
                      className="swiper-slide-shadow-left"
                      style={{opacity: '0',transitionDuration: '0ms'}}
                    ></div>
                    <div
                      className="swiper-slide-shadow-right"
                      style={{ opacity: "1.00084", transitionDuration: "0ms" }}
                    ></div>
                  </div>
                  <div
                    className="swiper-slide"
                    style={{
                      width: "396.333px",
                      transform:
                        "translate3d(0px, 0px, -200px) rotateX(0deg) rotateY(-100deg) scale(1)",
                      zIndex: "-1",
                      transitionDuration: "0ms",
                    }}
                  >
                    <img
                      className="sc-bcXHqe bYquza img lazy fade-in loaded"
                      src="https://ik.imagekit.io/cforcrypto/block/nft4.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668708657284"
                      alt="nft item"
                      loading="lazy"
                    />
                    <div
                      className="swiper-slide-shadow-left"
                      style={{ opacity: "0", transitionDuration: "0ms" }}
                    ></div>
                    <div
                      className="swiper-slide-shadow-right"
                      style={{ opacity: "2", transitionDuration: "0ms" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="info-wraper">
              <div className="info">
                <h4>NFT Minting and Rewards</h4>
                <p>
                  Mint your own unique Blockombat NFTS from our collection of
                  unique characters
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Nfts;
