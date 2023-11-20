import React from 'react';
import Gradient_Box from '../../Animations/Gradient_Box/Gradient_Box';
import './Animated_Txt.css'; // Assuming the gradient effect CSS will be adapted for text

function Animated_Txt({ text, h, w }) {
    return (
        <Gradient_Box h={h} w={w}>
        <span className="animated-text">{text}</span>
        </Gradient_Box>
    );
}

export default Animated_Txt;