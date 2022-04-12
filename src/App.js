//import logo from './logo.svg';
import './App.css';
import './style/index.css';
import Header from './component/Header';
import ConnectSig from './component/ConnectSig';
import SwapFrom from './component/SwapFrom';
import SwapTo from './component/SwapTo';
import Footer from './component/Footer';
import Responsive from './component/responsive/Responsive';
// import MediaQuery from 'react-responsive';

// import { useEffect, useState } from "react";
// import { useMetamask }         from "use-metamask";
// // you can use any web3 interface
// // import { ethers }           from "ethers";
//  import Web3                 from "web3";

function App() {
  
  return (
    <div>
      {/* <MediaQuery maxWidth={767}>
      </MediaQuery> */}
      <Header />
      <ConnectSig />
      <SwapFrom />
      <SwapTo />
      <Footer />
    </div>

  );
}

export default App;
