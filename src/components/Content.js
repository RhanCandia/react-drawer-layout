import React from 'react';

import './Content.css';

const Content = ({ children, pushed, toggleDrawer, header: Header }) => {
  return (
    <div className={`Content ${ pushed ? 'pushed' : '' }`}
         onClick={ () => ( pushed && toggleDrawer() ) }>
      { Header }
      <div className="section">
        <div className="content">
          { children }
        </div>
      </div>
    </div>
  );
};

export default Content;