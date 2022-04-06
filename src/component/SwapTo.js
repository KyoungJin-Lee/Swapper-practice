import React from 'react';
import '../style/index.css';

function SwapTo() {
    return(
        <div className="swap">
            <h2>Swap To</h2>
            <p>
                <a>O</a>
                <select>
                    <option value="ton">TON</option>
                    <option selected value="wton">WTON</option>
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

export default SwapTo;