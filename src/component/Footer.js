import React from 'react';
import '../style/index.css';
import telegram from '../img/telegram.png';
import discord from '../img/discord.png';
import medium from '../img/medium.png';
import github from '../img/github.png';
import twitter from '../img/twitter.png';
import letter from '../img/letter.png';

function Footer() {
    return (
        <div className="footer">
            <p className="info">
                <span><b>ONTHER PTE.LTD.</b></span>
                <span>111 SOMERSET ROAD #06-07O 111 SOMERSET SINGAPORE 238164</span>
                <span><img src={letter} alt="email"/>info@onther.io</span>
            </p>

            <div>
                <ul>
                    <li><a href="https://t.me/tokamak_network" title="Telegram"><img src={telegram} alt="Telegram"/></a></li>
                    <li><a href="https://discord.com/invite/6wJ8HAA2nD" title="Discord"><img src={discord} alt="Discord"/></a></li>
                    <li><a href="https://github.com/onther-tech" title="Github"><img src={github} alt="Github"/></a></li>
                    {/* <li><a href="https://www.facebook.com/OntherInc" title="Facebook"><img src="" alt="Facebook"/></a></li> */}
                    {/* <li><a href="https://www.youtube.com/channel/UCPutAtXTii4zXhiKsJ0DAqA" title="youtube"><img src="" alt="youtube"/></a></li> */}
                    <li><a href="https://twitter.com/tokamak_network" title="Twitter"><img src={twitter} alt="Twitter"/></a></li>
                    {/* <li><a href="https://www.instagram.com/onther_official/" title="Instagram"><img src="" alt="Instagram"/></a></li> */}
                    <li><a href="https://medium.com/@onther" title="Medium"><img src={medium} alt="Medium"/></a></li>
                </ul>
                <select>
                    <option value="FamilySite">Family Site</option>
                </select>
            </div>
            
        </div>
    );
}


export default Footer;