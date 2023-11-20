import React from 'react';
import './Neon_Container.css'; // Ensure you have this CSS file

function Neon_Container({ color1, color2, color3, h, w, ...props }) {
  const containerStyle = {
    '--color1': color1,
    '--color2': color2,
    '--color3': color3,
    height: h,
    width: w
  };

  return (
    <div className="neon-container" style={containerStyle} {...props}>
      {/* Children passed implicitly */}
    </div>
  );
}

export default Neon_Container;