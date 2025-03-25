import React from 'react'
import paviImg1 from '../assets/paviImg1.jpg';
export const About = () => {
  return (
    <div className="about">
    <section className='scontainer'>
        <h2 className='sheading'>About Me</h2>
        <img src={paviImg1} alt="" className='profile-img'/>
        <p className='stext'>Hi, I'm <strong>Pavi</strong>, a passionate frontend developer skilled in 
        <strong> React, JavaScript</strong>, and web development. I enjoy building 
        interactive and user-friendly applications. My goal is to become a 
        <strong> Full-Stack Developer</strong> and explore <strong>DevOps</strong>. 
        I'm always excited to learn and improve my skills!
        </p>
    </section>
    </div>
  )
}
