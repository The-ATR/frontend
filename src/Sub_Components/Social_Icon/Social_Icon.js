import React from 'react';
import Glowing_Box from '../../Animations/Glowing_Box/Glowing_Box';

function Social_Icon({ src, url, h, w }) {
    const socialicon = <img src={src} alt="Social Icon" className="glowing-box-content" />
    return (
        <div>
        <a href={url} target="_blank" className="social-link">
        <Glowing_Box content={socialicon} h={h} w={w}>
            
        </Glowing_Box>
        </a>
        </div>
    );
}

export default Social_Icon;