import React from 'react';
import '../style/index.css';

function SwapFrom() {
    return(
        <div className="swap">
            <h2>Swap From</h2>
            <p>
                <a>O</a>
                <select>
                    <option selected value="ton">TON</option>
                    <option value="wton">WTON</option>
                    <option value="AUR">AUR</option>
                    <option value="DOC">DOC</option>
                </select>
            </p>
            <p className="amount">
                <span className="bal">Balance</span> <span className="bal_num">0</span><button>MAX</button>
            </p>
            <input type="text"/>
        </div>
    );
}

export default SwapFrom;