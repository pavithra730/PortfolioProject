import React from 'react'

const skills = [
    { name: "HTML", level: "90%" },
    { name: "React", level: "55%" },
    { name: "JavaScript", level: "60%" },
    { name: "CSS", level: "80%" },
    { name: "MySQL", level: "63%" },
    { name: "Bootstrap", level: "40%" },
    { name: "Python", level: "50%" },
    { name: "Git & GitHub", level: "70%" },
    
  ];

export const Skills = () => {
  return (
    <div className='skills-container'>
        <h1>My Skills</h1>
        <div className="skills-list">
            {skills.map((skill,index)=>(
                <div key={index} className="skill-item">
                   <p className="skill-name">{skill.name}</p>
                   <div className="skill-bar">
                    <div style={{width: skill.level}} className="skill-progress">
                    </div>
                   </div>
                </div>
            ))}
        </div>
    </div>
  )
};
