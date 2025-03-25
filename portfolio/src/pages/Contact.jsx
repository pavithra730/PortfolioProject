import React, { useState } from 'react'

export const Contact = () => {

    const [formData,setFormdata]=useState({
        name:"",
        email:"",
        msg:"",
    });

    const handleChange=(e)=>{
        setFormdata({...formData,[e.target.name]:e.target.value})
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        alert(`Message Sent by ${formData.name}!`);
        setFormdata({name:"",email:"",msg:""});
    };
  return (
    <div className='contact-container'>
        <h1>Contact  Me</h1>
        <form className='contact-form' onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" name='name' value={formData.name} onChange={handleChange} required/>
            <label>Email:</label>
            <input type="email" name='email' value={formData.email} onChange={handleChange} required/>
            <label>Message:</label>
            <textarea name='msg' value={formData.msg} onChange={handleChange} required/>
            <button type='submit'>Send Message</button>

        </form>
    </div>
  )
};
