import React from 'react';
import Gradient_Box from '../../Animations/Gradient_Box/Gradient_Box';

import './Animated_Btn.css';

function Animated_Btn({ text, url, h, w }) {
    
    const animatedbtn = <span className='animbtn-text' alt="Animated Btn">{text}</span>
        
    return (
        <a href={url} style={{ textDecoration: 'none', color: 'white' }} > 
        <div className="animbtn-content"> 
        <Gradient_Box children={animatedbtn} h={h} w={w}>
        </Gradient_Box>
        </div>
        </a>
    );
}

export default Animated_Btn;
    