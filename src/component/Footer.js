import React from 'react';
import '../style/index.css';

function Footer() {
    return (
        <div className="footer">
            <p>
                <span><b>ONTHER PTE.LTD.</b></span>
                <span>10 Address</span>
                <span>info@onther.io</span>
            </p>

            <div>
                <ul>
                    <li><a href="https://t.me/tokamak_network" title="Telegram"><img src="" alt=""/>Telegram</a></li>
                    <li><a href="https://discord.com/invite/6wJ8HAA2nD" title="Discord"><img src="" alt=""/>Discord</a></li>
                    <li><a href="https://github.com/onther-tech" title="Github"><img src="" alt=""/>Github</a></li>
                    <li><a href="https://www.facebook.com/OntherInc" title="Facebook"><img src="" alt=""/>Facebook</a></li>
                    <li><a href="https://www.youtube.com/channel/UCPutAtXTii4zXhiKsJ0DAqA" title=""><img src="" alt=""/>Youtube</a></li>
                    <li><a href="https://twitter.com/tokamak_network" title="Twitter"><img src="" alt=""/>Twitter</a></li>
                    <li><a href="https://www.instagram.com/onther_official/" title="Instagram"><img src="" alt=""/>Instagram</a></li>
                    <li><a href="https://medium.com/@onther" title="Medium"><img src="" alt=""/>Medium</a></li>
                </ul>
                <select>
                    <option value="FamilySite">Family Site</option>
                </select>
            </div>
            
        </div>
    );
}


export default Footer;