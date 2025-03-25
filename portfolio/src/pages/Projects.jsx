import React from 'react'

const projects = [
    { title: "Quiz App", description: "An interactive quiz application built with React." },
    { title: "Spotify Clone", description: "A music streaming platform with React and API integration." },
    { title: "Task Manager", description: "A simple task manager to organize daily tasks." },
    { title: "Task Manager", description: "A simple task manager to organize daily tasks." },
    
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
