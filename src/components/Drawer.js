import React from 'react';

import './Drawer.css';

const Drawer = ({ visible, toggleDrawer }) => {
  return (
    <div className={`Drawer ${ visible ? '' : 'hide' }`}>
      <aside className="menu">
        <ul className="menu-list">
          <li onClick={ (e) => { e.preventDefault(); toggleDrawer() } }><a href="!#">Home</a></li>
          <li onClick={ (e) => { e.preventDefault(); toggleDrawer() } }><a href="!#">About</a></li>
        </ul>
      </aside>
    </div>
  );
};

export default Drawer;