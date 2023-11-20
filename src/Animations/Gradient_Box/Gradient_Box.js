import React from 'react';
import './Gradient_Box.css';

function Gradient_Box({ children, h, w, bgcol }) {

    return (
        
        <div className='gradient-effect' style={{ width: w, height: h, backgroundColor: bgcol }}>
        {children}
        </div>
    );
}

export default Gradient_Box;