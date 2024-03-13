import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router';

const Register = () => {
const [formData,setFormData]=useState({name:"",email:"",pass:""})
const navigate=useNavigate()

const handleChange=(e)=>{
  const {name,value}=e.target
  setFormData({[name]:value});
};

const handleRegister=(e)=>{
navigate("/home")
  
  e.preventDefault();
  alert("Registration Successful")
  console.log(formData);
}

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Register</h2>
        
        <input type='text' placeholder='Name' name='name' value={formData.name} onChange={(e)=>handleChange(e)} ></input>
        <input type='email' placeholder='Email' name='email' value={formData.email} onChange={(e)=>handleChange(e)}></input>
        <input type='password' placeholder='Enter Password' name='pass' value={formData.pass} onChange={(e)=>handleChange}></input>
        <button type='submit' onClick={handleRegister} >Register</button>
      </div>
    </div>
  )
}

export default Register
