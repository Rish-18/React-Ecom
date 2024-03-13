import React, { useState } from 'react'
import "./Contact.css"

const Contact = () => {
const [issuccess,setSuccess]=useState(false)    

const [name,setName]=useState("")
const [errName,setErrName]=useState(false)

const [email,setEmail]=useState("")
const [errEmail,setErrEmail]=useState(false)
const [validEmail,setValidEmail]=useState(false)

const [num,setNum]=useState("")
const [errNum,setErrNum]=useState(false)
const [validNum,setValidNum]=useState(false)

const [msg,setMsg]=useState("")
const [errMsg,setErrMsg]=useState(false)

const handleName=(e)=>{
  setName(e.target.value)
  setErrName(false)
}
const handleEmail=(e)=>{
  setEmail(e.target.value)
 
}
const handleNum=(e)=>{
  setNum(e.target.value)
  setErrNum(false)
}
const handleMsg=(e)=>{
  setMsg(e.target.value)
  setErrMsg(false)
}

const handleSubmit=()=>{

    if(name==""){setErrName(true)}else{setErrName(false)}

    if(email==""){setErrEmail(true)}else{setErrEmail(false)
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

        if(regex.test(email)){
            setValidEmail(false)
        }
        else{
            setValidEmail(true)}

    }

    if(num==""){setErrNum(true)}else{setErrNum(false) 
        if(num.length==10){
            setValidNum(false)
        }
        else{
            setValidNum(true)
        }
    }



    if(email&&name&&num){
        if(!validEmail){
           console.log();
            
           const postData = {
            name: name,
            email: email,
            number:num
          };
          
          // Options for the fetch request
          const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
          };
          
          // Perform the POST request using fetch
          fetch("https://formspree.io/f/mjvnvwpv", options)
            .then(response => {
              // Check if the response is successful
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              // Parse the response JSON
              return response.json();
            })
            .then(data => {
              // Handle the response data
              console.log(data);
              alert("form submitted")
              // Here you can do something with the response data
            })
            .catch(error => {
              // Handle any errors that occurred during the fetch
              console.error('There was a problem with the fetch operation:', error);
            });

        }

        
    }
}
  return (
    <div className='contact-back'>
      <div className='c-container form'>
        <h4>CONTACT US</h4>
        <p></p>
        <div action="https://formspree.io/f/mjvnvwpv" method="POST" id="myForm" className='c-form'>
            <div>
            <div className="row">
                <div className="col-sm formflex ">
                    <input type='text' placeholder='Name' name='name' onChange={(e)=>handleName(e)}></input>
                    {errName===true?  <div style={{fontSize:"15px",color:"red"}}>*Required</div>:""}<br/>
                </div>
                <div className="col-sm formflex">
                    <input type='email' placeholder='Email' name='email' onChange={(e)=>handleEmail(e)}></input>
                    {errEmail===true? <div style={{color:"red",fontSize:"15px"}}>"Required"</div>:""}
                    {validEmail? <div style={{color:"red"}}>*Enter valid  email</div>:""}<br/>
                </div>
            </div>
            <div className="row">
                <div className="col-sm">
                    <input type='number' placeholder='Phone Number' name='number' onChange={(e)=>handleNum(e)}></input>
                    {errNum===true?  <div style={{fontSize:"15px",color:"red"}}>*Required</div>:""}
                    {validNum? <div style={{color:"red"}}>*Enter 10 digit number</div>:""}<br/>
                </div>
            </div>
            <div className="row">
                <div className="col-sm">
                    <textarea type='message' placeholder='Comment' name='message' onChange={(e)=>handleMsg(e)}></textarea>
                </div>
            </div>
          

            
            </div>

          


            <button className="submit"  type="text" onClick={handleSubmit}>SEND MESSAGE</button>
        </div>
      </div>
    </div>
  )
}

export default Contact