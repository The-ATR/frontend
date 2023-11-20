import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './Glowing_Box.css';

function Glowing_Box({ content, h, w }) {
  const [isHovered, setIsHovered] = useState(false);

  const boxProps = useSpring({
    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
    borderColor: isHovered ? '#008eb5' : '#9e0396',
    config: { tension: 200, friction: 20 },
  });

  return (
    <div style={{ width: w, height: h }}>
      <animated.div
        className="glowing-box"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={boxProps}
      >
        {content}
      </animated.div>
    </div>
  );
}

export default Glowing_Box;