import React from "react";

function Partners() {
  return (
    <>
      <section
        className="dg-partners text-align-center dg-preload-background"
        id="partners"
      >
        <img
          src="https://ik.imagekit.io/cforcrypto/block/sectionseparate.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668708660236"
          className="section-separator"
          alt="separator"
        />
        <div className="partners-warper">
          <div className="dg-section-title dg-section-align-center">
            <div className="dg-st-inner">
              <div className="dg-st-title-holder">
                <h2 className="dg-st-title">
                  <span>BACKERS &amp; PARTNERS</span>
                </h2>
              </div>
            </div>
            <div>
              <img
                src="https://ik.imagekit.io/cforcrypto/block/section-title-border.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668708662499"
                alt="dg-separator"
              />
              <br />
            </div>
          </div>
          <div className="lazy-div" style={{opacity: '1', transform: 'none'}}>
            <div className="MuiBox-root jss16">
              <div className="MuiGrid-root backers__grid MuiGrid-container MuiGrid-spacing-xs-2 MuiGrid-justify-content-xs-left partner-container">
                <div className="MuiGrid-root backers__grid-item MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-2 MuiGrid-grid-md-2 partners-item  animation-bounce">
                  <img
                    className="partners-img backer"
                    alt="solana"
                    src="https://ik.imagekit.io/cforcrypto/block/solana.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668708662611"
                  />
                </div>
                <div className="MuiGrid-root backers__grid-item MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-2 MuiGrid-grid-md-2 partners-item  animation-bounce">
                  <img
                    className="partners-img backer"
                    alt="redkite"
                    src="https://ik.imagekit.io/cforcrypto/block/redkite.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668708660169"
                  />
                </div>
                <div className="MuiGrid-root backers__grid-item MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-2 MuiGrid-grid-md-2 partners-item  animation-bounce">
                  <img
                    className="partners-img backer"
                    alt="solanium"
                    src="https://ik.imagekit.io/cforcrypto/block/solanium.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668708662675"
                  />
                </div>
                <div className="MuiGrid-root backers__grid-item MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-2 MuiGrid-grid-md-2 partners-item  animation-bounce">
                  <img
                    className="partners-img backer"
                    alt="au21"
                    src="https://ik.imagekit.io/cforcrypto/block/au21.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668708557093"
                  />
                </div>
                <div className="MuiGrid-root backers__grid-item MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-2 MuiGrid-grid-md-2 partners-item  animation-bounce">
                  <img
                    className="partners-img backer"
                    alt="daomaker"
                    src="https://ik.imagekit.io/cforcrypto/block/daomaker.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668708597270"
                  />
                </div>
                <div className="MuiGrid-root backers__grid-item MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-2 MuiGrid-grid-md-2 partners-item  animation-bounce">
                  <img
                    className="partners-img backer"
                    alt="maven_m"
                    src="https://ik.imagekit.io/cforcrypto/block/maven_m.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668708636243"
                  />
                </div>
                <div className="MuiGrid-root backers__grid-item MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-2 MuiGrid-grid-md-2 partners-item  animation-bounce">
                  <img
                    className="partners-img backer"
                    alt="goodgame"
                    src="https://ik.imagekit.io/cforcrypto/block/goodgame.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668708615549"
                  />
                </div>
                <div
                  className="MuiGrid-root backers__grid-item MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-2 MuiGrid-grid-md-2 partners-item  animation-bounce"
                  style={{position: 'relative'}}
                >
                  <img
                    className="partners-img backer"
                    alt="hgventures"
                    src="https://ik.imagekit.io/cforcrypto/block/hgventures.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668708615725"
                    style={{position: 'absolute', top: '50%',left: '50%',transform: 'translate(-50%, -50%)'}}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Partners;
