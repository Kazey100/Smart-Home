import React from "react";
import { useNavigate } from "react-router-dom";

import "./registerPage.css";

function RegisterPage() {
    const navigate = useNavigate();

    const handleButtonClick = () => {
      navigate("/"); // Adjust the path to match the route in App.js
    };

    return (
        <div className="registerPage">
          {/* Upper*/}
          <div className="upper">
          <h1>NZ HOME</h1>
        </div>

         {/* Form*/}
        <div className="form">
          <img src="./image/NZHome.png" alt="NZ Home Logo"/>
          <h2>Register</h2>

           <form>
            <input type="text" name="username" placeholder="Username" required/>
            <input type="email" name="email" placeholder="Email" required/>
            <input type="password" name="password" placeholder="Password" required/>

            <p>
             <input type = "checkbox" name="checkbox" required /> I have read and agreed to the <p name="T&C"> Terms & Conditions of Use</p> 
            </p>

            <button type="submit" className="submitButton"> Sign Up </button>

            <p>---------------- Or ----------------</p>

            <button type="button" className="submitButton" onClick={handleButtonClick}>Log In</button>
           </form>
       </div>
       </div>
    );
}
export default RegisterPage;