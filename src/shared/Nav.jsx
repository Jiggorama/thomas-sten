import React from 'react';
import {Link} from 'react-scroll'

const Nav = () => {
  return (
    <div className='nav'>
      <Link
        to="about"
        activeClass="active"
        className='link'
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
          ABOUT
        </Link>
        <Link
          to="projects"
        activeClass="active"
        className='link'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          PROJECTS
        </Link>
        <Link
          to="contact"
        activeClass="active"
        className='link'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
        CONTACT
        </Link>
        <a href="https://drive.google.com/file/d/1nge2pxxEqtdrSX_-W2pFxrpfBwiURW9K/view?usp=sharing" className='link' target="_blank" rel="noopener noreferrer" >RESUME</a>
    </div>
  );
};

export default Nav;