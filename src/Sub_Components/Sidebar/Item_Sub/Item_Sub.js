import React, { useState } from 'react';
import './Item_Sub.css'; // Make sure to create a corresponding CSS file

import { BsCaretDown, BsCaretRight } from "react-icons/bs";


const Item_Sub = ({ title, subItems }) => { // Changed `sub` to `subItems` to match the usage

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    
    <div className={`sidenav-item ${isOpen ? 'open' : ''}`}>
      <div className="sidenav-item-main" onClick={toggleDropdown}>
        <span className="sidenav-item-icon">
          {isOpen ? <BsCaretDown /> : <BsCaretRight />} {/* Main Icon depending on state */}
        </span>
        <span className="sidenav-item-title">{title}</span>
      </div>
      {isOpen && subItems && (
        <div className="sidenav-item-sub">
        {subItems.map((subItem, index) => (
          <a key={index} href={`#${subItem.slug}`} className="sidenav-item-sub-item">
            {subItem.icon && <span className="sidenav-item-sub-icon">{subItem.icon}</span>}
            <span className="sidenav-item-title">{subItem.title}</span>
          </a>
        ))}
        </div>
      )}
    </div>
  );
}

export default Item_Sub;
