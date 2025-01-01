import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import WidgetsEnergy from "./components/widgetsEnergy";
// import RoomsRobots from "./components/roomsRobots";
// import Devices from "./components/devices";
// import Users from "./components/users";

// import RoomPage from "./components/RoomPage";
// import DevicePage from "./components/DevicePage";
// import UserPage from "./components/UserPage";

import "./profilePage.css";

function ProfilePage() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    const now = new Date();
    const dateOnly = now.toLocaleDateString();
    document.getElementById("datetime").innerHTML = dateOnly;
  }, []);

  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="m-0 font-sans">
      <div className="grid grid-rows-[auto,1fr] grid-cols-[100px,auto] h-screen bg-gray-200 text-white">
        <div clasNames="row-start-2 row-end-3 col-start-1 col-end-2 bg-gray-800 flex flex-col m-2 p-0 rounded-lg overflow-hidden">
          <div className="grid grid-cols-[auto,1fr] h-full">
            {/* Sidebar */}
            <div
              className={`sidebar ${isCollapsed ? "w-[0px]" : "w-[100px]"} ${
                isCollapsed ? "" : "bg-black"
              } 
          rounded-lg flex flex-col overflow-y-auto w-[100px] bg-gray-800 items-center transition-all duration-300 ease-in-out justify-center `}
            >
              {/* Sidebar Logo */}
              <div className="block -ml-3">
                <a href="/">
                  <img
                    src="./image/NZHome.png"
                    alt="NZ Home Logo"
                    className={`${
                      isCollapsed ? "hidden" : "block"
                    }  h-[79px] w-auto my-2.5 items-center`}
                  />
                </a>
              </div>
              {/* Sidebar Items */}
              <a href="/">
                <div className="rounded-lg flex flex-col items-center justify-center my-2.5 mx-[-12px] p-2.5 text-white no-underline w-4/5 text-center">
                  <i
                    className={`fas fa-layer-group mt-1.5 text-2xl mb-1.25 items-center ${
                      isCollapsed ? "hidden" : "block"
                    }`}
                  ></i>

                  {!isCollapsed && (
                    <span className="mt-2 text-[13.5px] text-center">
                      Devices
                    </span>
                  )}
                </div>
              </a>
              <a href="#">
                <div className="rounded-lg flex flex-col items-center justify-center my-2.5 mx-[-12px] p-2.5 text-white no-underline w-4/5 text-center">
                  <i
                    className={`fas fa-chart-pie mt-1.5 text-2xl mb-1.25 items-center"${
                      isCollapsed ? "hidden" : "block"
                    }`}
                  ></i>

                  {!isCollapsed && (
                    <span className="mt-2 text-[13.5px] text-center">
                      Internet Usage
                    </span>
                  )}
                </div>
              </a>

              <a href="#">
                <div className="rounded-lg flex flex-col items-center justify-center my-2.5 mx-[-12px] p-2.5 text-white no-underline w-4/5 text-center">
                  <i
                    className={`fas fa-wind mt-1.5 text-2xl mb-1.25 items-center ${
                      isCollapsed ? "hidden" : "block"
                    }`}
                  ></i>

                  {!isCollapsed && (
                    <span className="mt-2 text-[13.5px] text-center">
                      Calendar
                    </span>
                  )}
                </div>
              </a>
            </div>
          </div>

          <div className="row-start-1 row-end-2 col-start-1 col-end-3 flex items-center justify-between bg-[#1f2937] p-4 rounded-lg text-white">
            <h1 className="text-3xl leading-10 text-center m-0 text-white flex-grow">
              NZ HOME
            </h1>
            <a href="#" class="icon">
              <i className="fas fa-bell text-[30px] text-white"></i>
            </a>
          </div>
        </div>

        {/* Main Content */}
        <div className="row-start-2 row-end-3 col-start-2 col-end-3 p-5 bg-lightgray text-black">
          <div className="flex items-center justify-start gap-[700px]">
            <a
              className="no-underline text-black font-bold text-[50px]"
              href="#"
            >
              {" "}
              &larr;{" "}
            </a>
            <h2 className="m-0 leading-none"> Profile </h2>
          </div>

          <div>
            <div className="rounded-lg border border-gray-500 bg-white p-2.5 my-2.5">
              <pmg
                src="https://static3.depositphotos.com/1000951/138/i/600/depositphotos_1380772-stock-photo-profile-of-beautiful-smiling-girl.jpg"
                alt="Profile Picture"
                className="rounded-full w-[5%] mr-5 float-left"
              />
              <h3 className="ml-5"> Camilia Olson </h3>
              <h4 className="ml-5 text-gold"> Admin </h4>
              <span className="ml-[1230px]">
                {" "}
                Date Joined: <span id="datetime"> </span>{" "}
              </span>
            </div>

            <div
              onClick={() => handleNavigation("/general-settings")}
              className="rounded-lg border border-gray-500 bg-white p-2.5 my-2.5"
            >
              <span className="font-bold">
                {" "}
                General Settings{" "}
                <span className="ml-[1000px] text-gray-500">
                  {" "}
                  Languages, Notifications, Feedback, Security, Privacy{" "}
                </span>{" "}
              </span>
            </div>

            <div
              onClick={() => handleNavigation("/add-user")}
              className="rounded-lg border border-gray-500 bg-white p-2.5 my-2.5"
            >
              <span className="font-bold">
                {" "}
                Add User{" "}
                <span className="ml-[1170px] text-gray-500">
                  {" "}
                  Add User to Your Home{" "}
                </span>{" "}
              </span>
            </div>

            <div
              onClick={() => handleNavigation("/all-users")}
              className="rounded-lg border border-gray-500 bg-white p-2.5 my-2.5"
            >
              <span className="font-bold">
                {" "}
                All Users{" "}
                <span className="ml-[1120px] text-gray-500">
                  {" "}
                  View The Amount of Exiciting Users{" "}
                </span>{" "}
              </span>
            </div>

            <div
              onClick={() => handleNavigation("/change-password")}
              className="rounded-lg border border-gray-500 bg-white p-2.5 my-2.5"
            >
              <span className="font-bold">
                {" "}
                Change Password{" "}
                <span className="ml-[1060px] text-gray-500">
                  {" "}
                  Change your account's password{" "}
                </span>{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
