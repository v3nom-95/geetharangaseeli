import React, { useEffect } from 'react';
import './PageTransition.css';

function PageTransition({ show }) {
  return (
    <div className={`page-transition-overlay${show ? ' show' : ''}`}>
      <div className="page-transition-content">
        <span className="transition-name">Geetha Rangaseeli</span>
        <div className="transition-bar"></div>
      </div>
    </div>
  );
}

export default PageTransition;
