import React from 'react';
import Nav from './Nav'

const Layout = (props) => {
  return (
    <div className='Layout'>
      <header>
        <div className='logo'>logo</div>
        <Nav/>
      </header>
      <div className='layout-children'>
        {props.children}
      </div>
    </div>
  );
};

export default Layout;