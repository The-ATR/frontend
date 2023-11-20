import React, { useEffect, useRef } from 'react';
import './Head_Text.css';

function Head_Text({ text, textsize, txt_col }) {

  const textStyle = {
    fontSize: textsize,
    '--txt-col': txt_col, // This sets the stroke color
  };

  return (    
    <div className="headtext" >
      <p className='hover-target headtext-header' style={textStyle}>{text}</p>
    </div>
  );
}

export default Head_Text;