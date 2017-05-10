import React from 'react';

import './Header.css';

const Header = ({ toggleDrawer }) => {
  return (
    <div className="Header">
      <nav className="nav has-shadow">
        <div className="nav-left">
          <a href="!#"
             onClick={ (e) => { e.preventDefault(); toggleDrawer() } }
             className="nav-item">
            <i className="fa fa-bars">{''}</i>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;