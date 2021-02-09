import React from 'react';
import me from '../../assets/me.jpg'
import './About.css'

const About = () => {
  return (
    <div className='about'>
        <h3>About Me</h3>
      <div className='info-container'>
        <div className='info'>I’m a perpetually curious and enthusiastic software engineer with over 15 years of military experience. I work well on a team as either a leader or team member, and I am adapted to fast-paced environments with a keen eye for detail. My passion for learning combined with my optimistic demeanor has resulted in a richly rewarding experience as a software engineer while I continue to grow with each exciting new challenge I undertake.</div>
      <div className='image'>
        <img className='me' src={me} alt=""/>
      </div>      
      </div>
    </div>
  );
};

export default About;