
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
    const navigate=useNavigate()
    
    const eml = "girishparab11@gmail.com";
    const password = "12345678";
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passError, setPassError] = useState("");

    const handleLogin = () => {
        let isValid = true;
        if (email === "") {
            setEmailError("Email is required");
            isValid = false;
        } else {
            const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
            if (!emailRegex.test(email)) {
                setEmailError("Please enter a valid email address");
                isValid = false;
            } else {
                setEmailError("");
            }
        }
        
        if (pass.length < 8) {
            setPassError("Password must be at least 8 characters long");
            isValid = false;
        } else {
            setPassError("");
        }
        
        if (isValid) {
            navigate("/home");
        }
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h2>Login</h2>
                <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                {emailError && <div style={{color:"red", fontSize:"15px"}}>{emailError}</div>}
                <br/>

                <input type="password"  placeholder="Password" value={pass} onChange={(e) => setPass(e.target.value)}/>
                {passError && <div style={{color:"red", fontSize:"15px"}}>{passError}</div>}
                <br/>

                <button onClick={handleLogin}>Login</button>
                <p className="signup-link">Don't have an account? <a href="/register">Sign up</a></p>
            </div>
        </div>
    );
};

export default Login;
