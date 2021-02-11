import React from 'react';
import Nav from './Nav'
import {Link} from 'react-scroll'
import './Layout.css'

const Layout = (props) => {
  return (
    <div className='layout'>
      <header>
        <Link
          to="landing"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
        <h1 className='logo'>TES</h1>       
        </Link>
        <Nav/>
      </header>
      <div className='layout-children'>
        {props.children}
      </div>
    </div>
  );
};

export default Layout;