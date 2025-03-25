import React from 'react'

const projects = [
    { title: "Quiz App", description: "An interactive quiz application built with React." },
    { title: "Spotify Clone", description: "A music streaming platform with React." },
    { title: "Personal Portfolio", description: "Created a Personal Portfolio using React." },
    { title: "Sign-Up", description: "A simple Sign-up and Login page using React." },
    { title: "Restaurant Website", description: "Responsive Food website using only HTML, CSS and Java Script." },
    
  ];
export const Projects = () => {
  return (
    <div className='projects-container'>
        {projects.map((project,index)=>(
            <div key={index} className="project-card">
                <h2 className='project-title'>{project.title}</h2>
                <p className="project-description">{project.description}</p>
            </div>
        ))}
    </div>
  )
};
