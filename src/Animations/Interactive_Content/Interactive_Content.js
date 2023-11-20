import React, { useRef, useEffect } from 'react';

const Interactive_Content = ({ children, className }) => {
  const contentRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const { left, top, width, height } = contentRef.current.getBoundingClientRect();

      const x = (clientX - left) / width;
      const y = (clientY - top) / height;

      const xOffset = (x - 0.5) * 10; // Adjust for desired effect strength
      const yOffset = (y - 0.5) * 10; // Adjust for desired effect strength

      contentRef.current.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
    };

    const handleMouseLeave = () => {
      contentRef.current.style.transform = 'translate(0px, 0px)';
    };

    const contentElem = contentRef.current;
    contentElem.addEventListener('mousemove', handleMouseMove);
    contentElem.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      contentElem.removeEventListener('mousemove', handleMouseMove);
      contentElem.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={contentRef}
      className={className} // Use className prop if needed to apply styles
      style={{
        transition: 'transform 0.2s ease-out', // Only the transition for the transform effect
        willChange: 'transform', // Optimize for animations
      }}
    >
      {children}
    </div>
  );
};

export default Interactive_Content;