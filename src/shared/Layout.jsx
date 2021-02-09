import React from 'react';
import Nav from './Nav'
import './Layout.css'

const Layout = (props) => {
  return (
    <div className='layout'>
      <header>
        <h1 className='logo'>TES</h1>
        <Nav/>
      </header>
      <div className='layout-children'>
        {props.children}
      </div>
    </div>
  );
};

export default Layout;