import React, { useState } from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Nfts from "./components/Nfts/Nfts";
import Token from './components/Token/Tokens'
import Media from './components/Media/Media'
import Roadmap from "./components/Roadmap/Roadmap";
import Partners from "./components/Partners/Partners";
import Footer from "./components/Footer/Footer";
import Avatars from "./components/Avatars/Avatars";
import Features from "./components/Feauters/Features";

function App() {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 4000);
  }
  return (
    !loading && (
    <div className="dg-wrapper">
      <div className="dg-wrapper-inner">
      <Navbar/>
      <Hero/>
      <Nfts/>
      <Avatars/>
      <Features/>
      <Token/>
      <Media/>
      <Roadmap/>
      <Partners/>
      <Footer/>
      </div>
    
    </div>
    )
  );
}

export default App;
