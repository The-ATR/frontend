import React, { useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import './Matrix_Cascade.css';

function Matrix_Cascade({ color, children }) {
  const bgRef = useRef();

  useEffect(() => {
    const bg = bgRef.current;
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const chinese = "田由甲申甴电甶男甸甹町画甼甽甾甿畀畁畂畃畄畅畆畇畈畉畊畋界畍畎畏畐畑";
    const font_size = 10;
    const columns = Math.ceil(bg.clientWidth / font_size);
    const drops = [];

    canvas.width = columns * font_size;
    canvas.height = bg.clientHeight;

    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    function draw() {
      ctx.fillStyle = "rgba(0,0,0,0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = color;
      ctx.font = font_size + 'px arial';

      for (let i = 0; i < drops.length; i++) {
        const text = chinese[Math.floor(Math.random() * chinese.length)];
        ctx.fillText(text, i * font_size, drops[i] * font_size);

        if (drops[i] * font_size > canvas.height && Math.random() > 0.975)
          drops[i] = 0;

        drops[i]++;
      }
    }

    const intervalId = setInterval(draw, 50); // Adjust the interval duration for slower animation

    bg.appendChild(canvas);

    return () => {
      clearInterval(intervalId);
      bg.removeChild(canvas);
    };
  }, []);

  const { opacity } = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <animated.div className="matrix-canvas" style={{ opacity }} ref={bgRef} >
      {children}
    </animated.div>
  );
}

export default Matrix_Cascade;