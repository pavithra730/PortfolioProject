import React from 'react'

const skills = [
    { name: "React", level: "80%" },
    { name: "JavaScript", level: "75%" },
    { name: "CSS", level: "85%" },
    { name: "HTML", level: "90%" },
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
