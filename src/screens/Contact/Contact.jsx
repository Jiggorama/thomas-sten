import React from 'react';
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
      <h3>Contact Me</h3>
      <div contact-info>
        <div>EMAIL: thomas.e.sten@gmail.com</div>
        <div className ='contact-links'>         
          <a href="https://www.linkedin.com/in/thomas-sten/">Linkedin</a>
          <a href="https://github.com/Jiggorama">Github</a>
        </div>
      </div>      
    </div>
  );
};

export default Contact;