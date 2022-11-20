import React from "react";

function Features() {
  return (
    <>
      <section class="dg-features text-align-center" id="features">
        <img
          src="https://ik.imagekit.io/cforcrypto/block/sectionseparate.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668708660236"
          class="section-separator"
          alt="separator"
        />
        <div class="dg-st-title-holder">
          <h2 class="dg-st-title">
            <span>Features</span>
          </h2>
          <img
            src="https://ik.imagekit.io/cforcrypto/block/section-title-border.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668708662499"
            alt="dg-separator"
          />
          <br />
          <h1 class="dg-st-title challenge-to-earn">
            <span>Experience, Play, and Earn!</span>
          </h1>
        </div>
        <div class="lazy-div" style={{ opacity: "1", transform: "none" }}>
          <div class="feature-wrapper">
            <div class="slick-slider slick-initialized" dir="ltr">
              <div
                class="slick-arrow slick-prev slick-disabled"
                style={{display: 'block',backgroundImage: 'url("https://ik.imagekit.io/cforcrypto/block/arrow_left.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668708553459")' ,backgroundSize: '100% 100%'}}
              ></div>
              <div class="slick-list">
                <div
                  class="slick-track"
                  style={{width: '1490px', opacity: '1',transform: 'translate3d(0px, 0px, 0px)'}}
                >
                  <div
                    data-index="0"
                    class="slick-slide slick-active slick-current"
                    tabindex="-1"
                    aria-hidden="false"
                    style={{outline: 'none', width: '298px'}}
                  >
                    <div>
                      <div
                        class="feature-item-wrapper animation-bounce"
                        tabindex="-1"
                        style={{width: '100%', display: 'inline-block'}}
                      >
                        <img src="https://ik.imagekit.io/cforcrypto/block/1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668708556359" alt="feature item" />
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="1"
                    class="slick-slide slick-active"
                    tabindex="-1"
                    aria-hidden="false"
                    style={{outline:' none', width: '298px'}}
                  >
                    <div>
                      <div
                        class="feature-item-wrapper animation-bounce"
                        tabindex="-1"
                        style={{width: '100%',display: 'inline-block'}}
                      >
                        <img src="https://ik.imagekit.io/cforcrypto/block/2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668708556327" alt="feature item" />
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="2"
                    class="slick-slide slick-active"
                    tabindex="-1"
                    aria-hidden="false"
                    style={{outline:' none', width: '298px'}}
                  >
                    <div>
                      <div
                        class="feature-item-wrapper animation-bounce"
                        tabindex="-1"
                        style={{width: '100%',display: 'inline-block'}}
                      >
                        <img src="https://ik.imagekit.io/cforcrypto/block/3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668708555922" alt="feature item" />
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="3"
                    class="slick-slide slick-active"
                    tabindex="-1"
                    aria-hidden="false"
                    style={{outline:' none', width: '298px'}}
                  >
                    <div>
                      <div
                        class="feature-item-wrapper animation-bounce"
                        tabindex="-1"
                        style={{width: '100%',display: 'inline-block'}}
                      >
                        <img src="https://ik.imagekit.io/cforcrypto/block/4.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668708556566" alt="feature item" />
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="4"
                    class="slick-slide"
                    tabindex="-1"
                    aria-hidden="true"
                    style={{outline:' none', width: '298px'}}
                  >
                    <div>
                      <div
                        class="feature-item-wrapper animation-bounce"
                        tabindex="-1"
                        style={{width: '100%',display: 'inline-block'}}
                      >
                        <img src="https://ik.imagekit.io/cforcrypto/block/5.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668708556288" alt="feature item" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="slick-arrow slick-next"
                style={{display: 'block',backgroundImage: 'url("https://ik.imagekit.io/cforcrypto/block/arrow_right.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668708554780")', backgroundSize: '100% 100%'}}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Features;
