import React from 'react';
import '../style/index.css';
import imgUrl from '../img/icon.svg';
import ConnectWallet from './ConnectWallet';

function Header() {

    return(
        <div className="nav">
            <h1><a href="http://tokamak.network" title="Tokamak Network"><img src={imgUrl} alt="Tokamak Network"/>Tokamak Network</a></h1>
            <button onClick={ConnectWallet}> <ConnectWallet />Connect Wallet</button>
           
        </div>
    );
}

export default Header;