import React from 'react';
import './Top_Panel.css'; // Make sure to create a corresponding CSS file

const Top_Panel = ({ title, subtitle }) => {
    return (
      <div className="docs-sidenav-top-panel">
        <img
          alt="Logo"
          src='/logo.svg'
          width="150"
          height="150"
          className="d-inline-block align-top"
        />
        <div className='docs-sidenav-top-panel-sub'>      
            <h3 className="desc">{subtitle}</h3>
            <h2 className="main">{title}</h2>
        </div>
      </div>
    );
  }
export default Top_Panel;