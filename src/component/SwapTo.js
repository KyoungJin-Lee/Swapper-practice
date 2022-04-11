import React from 'react';
import '../style/index.css';
import imgUrl from '../img/icon.svg';

function SwapTo() {
    return(
        <div className="swap">
            <h2>Swap To</h2>
            <p>
                <img className="swapIcon" src={imgUrl} alt="Tokamak Network"/>
                <select>
                    <option value="ton">TON</option>
                    <option selected value="wton">WTON</option>
                    <option value="aur">AUR</option>
                    <option value="doc">DOC</option>
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