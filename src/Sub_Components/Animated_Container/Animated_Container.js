import React from 'react';
import './Animated_Container.css'; // Ensure you have this CSS file

function Animated_Container({ h, w, ...props }) {
  const containerStyle = {
    height: h,
    width: w
  };

  // The rest of the props are passed to the container div, which includes className, id, etc.
  return (
    <div className="animated-container" style={containerStyle} {...props}>
      {/* Implicit children */}
    </div>
  );
}

export default Animated_Container;