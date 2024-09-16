import React from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import Features from "./Components/Features";
import Tokenomics from "./Components/Tokenomics";
import Airdrop from "./Components/Airdrop";
import Roadmap from "./Components/Roadmap";
// import Plan from "./Components/Plan";
// import Wallet from "./Components/Wallet";
// import Top from "./User/topbar";

function App() {
  return (
    <div className="min-h-screen">
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="tokenomics">
        <Tokenomics />
      </div>
      <div id="airdrop">
        <Airdrop />
      </div>
      <div id="roadmap">
        <Roadmap />
      </div>
      {/* <div id="plan">
        <Plan />
      </div>
      <div id="wallet">
        <Wallet />
      </div> */}
      {/* <Top /> */}
    </div>
  );
}

export default App;
