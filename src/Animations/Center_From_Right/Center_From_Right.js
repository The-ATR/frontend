import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

function Center_From_Right({ children }) {
    const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

    const animationStyle = useSpring({
      from: { opacity: 0, transform: 'translateX(100%)' },
      to: { 
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0)' : 'translateX(100%)'
      },
      config: { mass: 1, tension: 280, friction: 120 }
    });
  return (
    <animated.div style={animationStyle} ref={ref}>
      {children}
    </animated.div>
  );
}

export default Center_From_Right;
