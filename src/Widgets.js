import React from 'react';
import "./Widgets.css";

function Widgets() {
    return (
        <div className="widgets">
            <iframe
            src='https://assets.visme.co/templates/blockinfographics/fullsize/i_The-Psychology-of-Colors_full.jpg'
            width="850"
            height="100%"
            style={{border: "none", overflow: "hidden"}}
            scrolling="yes"
            frameborder="0"
            allowTransparency="true"
            allow="encrypted-media"
            ></iframe>
        </div>
    )
}

export default Widgets;
