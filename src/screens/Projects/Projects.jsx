import React from 'react';
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      name: "Camp-Connect",
      image: "https://i.imgur.com/n4rBWSz.png",
      description: 'Camp Connect is a campsite tracking tool for Green Ridge state forest in Flinstone MD. Users can track campsites visited and leave comments for each specific campsite. This app utilizes Ruby on Rails to power the backend and React for the frontend.  Camp-connect also incorporates the Material-UI component library.',
      url: "https://camp-connect.netlify.app/",
      github: 'https://github.com/Jiggorama/Camp-Connect'
    },
    {
      name: 'Wanderin\' Bard',
      image: 'https://i.imgur.com/v5XhBGs.png',
      description: 'Wanderin\' Bard is a full stack mock ecommerce site built with the MERN(MongoDB, Express, React, Node) technology stack. This was a collaborative project built in a git flow team enviroment using github. The site has full crud and incorporates user auth to provide the capabilties of an ecommerce site admin managing the stores products.',
      url: 'https://jovial-meitner-83abc5.netlify.app/',
      github: 'https://github.com/info2amy/Wanderin-Bard'
    },
    {
      name: 'Muscle-Masons',
      image: 'https://i.imgur.com/GtMsRgL.png',
      description: 'Muscle-Masons is an interactive fitness app built with React and Airtable.com. The app allows users to view and update a collection of exercises which can be added to a personalized workout routine.  All styling for Muscle-Masons was done useing TailwindsCSS.',
      url: 'https://muscle-masons.netlify.app/',
      github: 'https://github.com/Jiggorama/Muscle-Masons'
    },
    {
      name: 'DnD-Character-Creator',
      image: 'https://i.imgur.com/ZLMKdYZ.png',
      description: 'A simple application that allows a user to create a charecter for the famous role-playing game Dungeons and Dragons. The user will select a race followed by a class and then see a preview of the charecter they have created with relevent attributes and abilities. Built with vanilla HTML, CSS, Javascript',
      url: 'https://jiggorama.github.io/DnD-Character-Creator/',
      github: 'https://github.com/Jiggorama/DnD-Character-Creator'
    }
  ]


  return (
    <div className='projects'>
      <h3>My Projects</h3>
      <div className='project-container'>
        {projects.map(project => {
          return (
            <div className='project-card'>
              <h5 className='project-name'>{project.name}</h5>
              <img className='project-image' src={project.image} alt="" />
              <div className='description'>{project.description}</div>
              <div className='project-links'>
                <a href={project.url} target='_blank'rel="noopener noreferrer">Live Site</a>
                <a href={project.github} target='_blank'rel="noopener noreferrer">GitHub</a>                
              </div>
            </div>
          )
        })}
      </div>
      
    </div>
  );
};

export default Projects;