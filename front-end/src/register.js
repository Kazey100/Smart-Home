import React, { useState }  from "react";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/"); 
  };

    return (
        <div className="bg-gray-800 h-10 rounded-2xl text-center text-yellow-500">
          {/*Upper*/}
          <div className="m-0 p-0">
          <h1>NZ HOME</h1>
          </div>

         {/*Form*/}
        <div className="form">
          <img src="./image/NZHome.png" alt="NZ Home Logo" className={`${isCollapsed ? "hidden" : "block"} mx-auto w-[40%] h-[8%]`} />
          <h2 className="mt-1" >Register</h2>

          <form className="bg-gray-800 inline-block border-5 mx-auto items-center text-white w-[24%] text-base">
            <input type="text" name="username" placeholder="Username" classsame="border-5 border-white p-5 w-[80%] box-border block mx-auto my-2" required/>
            <br/>
            <br/>
            <input type="email" name="email" placeholder="Email" className="border-5 border-white p-5 w-[80%] box-border block mx-auto my-2" required/>
            <br/>
            <br/>
            <input type="password" name="password" placeholder="Password" className="border-5 border-white p-5 w-[80%] box-border block mx-auto my-2" required/>

            <p className="text-center my-5">
              <input type="checkbox" name="checkbox" className="mr-2"required /> I have read and agreed to the 
              <a href=" " class="terms" className="text-[#00BFFF] font-bold"> Terms & Conditions of Use</a> 
            </p>

            <button type="submit" class="button1" className="w-[40%] h-[30px] rounded-full text-white text-lg cursor-pointer bg-green-500" onClick={handleButtonClick}> Sign Up </button>

            <p>-------------------------------- Or --------------------------------</p>

            <button type="button" class="button2" className="w-[40%] h-[30px] rounded-full text-white text-lg cursor-pointer bg-blue-500"  onClick={handleButtonClick}> Log In </button>
            <br/>
            <br/>
          </form>
       </div>
       </div>
    );
}
export default RegisterPage;