import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

function Bottom_Text({ children }) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const springProps = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(50px)' },
    config: { mass: 1, tension: 280, friction: 120 }
  });

  return (
    <animated.div ref={ref} style={springProps}>
      {children}
    </animated.div>
  );
}

export default Bottom_Text;