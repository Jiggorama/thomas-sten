import React from 'react';
import Nav from './Nav'
import './Layout.css'

const Layout = (props) => {
  return (
    <div className='Layout'>
      <header>
        <h1 className='logo'>Thomas Sten</h1>
        <Nav/>
      </header>
      <div className='layout-children'>
        {props.children}
      </div>
    </div>
  );
};

export default Layout;