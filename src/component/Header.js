import React from 'react';
import '../style/index.css';

function Header() {
    return(
        <div className="nav">
            <h1><a href="http://tokamak.network.com" title="Tokamak Network">Tokamak Network</a></h1>
            <button>Create Wallet</button>
        </div>
    );
}

export default Header;