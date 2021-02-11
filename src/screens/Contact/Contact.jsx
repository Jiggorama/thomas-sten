import React from 'react';
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
      <h3>Contact Me</h3>
      <div className='contact-info'>
        <div className='email'>Email:<span>thomas.e.sten@gmail.com</span></div>
        <div className ='contact-links'>         
          <a href="https://www.linkedin.com/in/thomas-sten/" target='_blank'rel="noopener noreferrer">Linkedin</a>
          <a href="https://github.com/Jiggorama" target='_blank'rel="noopener noreferrer">Github</a>
        </div>
      </div>      
    </div>
  );
};

export default Contact;