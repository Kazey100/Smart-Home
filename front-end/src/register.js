import React, { useState }  from "react";
import { useNavigate } from "react-router-dom";
import "./registerPage.css";

function RegisterPage() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/"); 
  };

    return (
        <div className="registerPage">
          {/*Upper*/}
          <div className="upper">
          <h1>NZ HOME</h1>
          </div>

         {/*Form*/}
        <div className="form">
          <img src="./image/NZHome.png" alt="NZ Home Logo" className={`${isCollapsed ? "hidden" : "block"}`} />
          <h2>Register</h2>

          <form>
            <input type="text" name="username" placeholder="Username" required/>
            <br/>
            <br/>
            <input type="email" name="email" placeholder="Email" required/>
            <br/>
            <br/>
            <input type="password" name="password" placeholder="Password" required/>

            <p>
             <input type = "checkbox" name="checkbox" required /> I have read and agreed to the 
             <a href =" " class="terms"> Terms & Conditions of Use</a> 
            </p>

            <button type="submit" class="button1" onClick={handleButtonClick}> Sign Up </button>

            <p>-------------------------------- Or --------------------------------</p>

            <button type="button" class="button2" onClick={handleButtonClick}> Log In </button>
            <br/>
            <br/>
          </form>
       </div>
       </div>
    );
}
export default RegisterPage;