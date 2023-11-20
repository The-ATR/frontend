// Item_Simple.js
import React from 'react';
import './Item_Simple.css'; // Make sure to create a corresponding CSS file

import { BsLink45Deg } from "react-icons/bs";

const Item_Simple = ({ title, slug }) => {
  return (
    <div className="sidenav-item-s-main">
        <span className="sidenav-item-s-icon">
          {<BsLink45Deg />} {/* Main Icon depending on state */}
        </span>
        <a href={`#${slug}`} className="sidenav-item-s-title">
        <span>{title}</span>
        </a>
    </div>
  );
}

export default Item_Simple;
