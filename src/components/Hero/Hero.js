import React from 'react'
import BgVideo from'../assets/bg.mp4';

function Hero() {
  return (
    <>
    <section className="dg-banner dg-preload-background ag-sparkS" id="playnow ">
   
    
    <video  playsInline
       loop
       autoPlay
       muted id="myVideo" 
       src={BgVideo} >
        {/* <source className="" type="video/mp4"/> */}
    </video>
    
    <div className="dragonwar-info-container d-none  " id='home'>
        <div style={{display: 'table', margin: '0px auto'}}>
            <div className="dg-platform-container">
                <div className="platform-item">
                    <a href="/"><img className="platform-icon" src="https://ik.imagekit.io/cforcrypto/block/platform_web.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668708660155" alt="platform of Blockombat"/></a>
                    <p>Play on Web</p>
                </div>
                <div className="platform-item">
                    <a href="/"><img className="platform-icon" src="https://ik.imagekit.io/cforcrypto/block/platform_android.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668708659958" alt="platform of Blockombat"/></a>
                    <p className="andriod">Play on Android</p>
                </div>
                <div className="platform-item">
                    <a href="/"><img className="platform-icon" src="https://ik.imagekit.io/cforcrypto/block/platform_ios.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668708659976" alt="platform of Blockombat"/></a>
                    <p>Play on IOS</p>
                </div>
            </div>
        </div>
    </div>
</section>
    </>
  )
}

export default Hero