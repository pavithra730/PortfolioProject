import React from 'react'
import paviImg1 from '../assets/paviImg1.jpg';
export const About = () => {
  return (
    <div className="about">
    <section className='scontainer'>
        <h2 className='sheading'>About Me</h2>
        <img src={paviImg1} alt="" className='profile-img'/>
        <a className='gitlink' href="https://github.com/pavithra730" target='_blank' rel='noopener noreferrer'><h6>https://github.com/pavithra730</h6></a>
        <p className='stext'>Hi, I'm <strong>Pavithra</strong>, a passionate frontend developer skilled in 
        <strong> React, JavaScript</strong>, and web development. I enjoy building 
        interactive and user-friendly applications. My goal is to become a 
        <strong> Full-Stack Developer</strong> and explore <strong>DevOps</strong>. 
        I'm always excited to learn and improve my skills!
        </p>
        <a href="/resume.pdf" target='_blank' rel='noopener noreferrer'>
          <button>View Resume</button>
        </a>
    </section>
    </div>
  )
}
