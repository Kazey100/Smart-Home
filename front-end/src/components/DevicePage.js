import React, { useState } from "react";
import { useParams } from "react-router-dom";

function DevicePage() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const { name } = useParams();

  return (
    <div className="bg-gray-800 font-sans leading-normal tracking-normal h-screen overflow-hidden">
      <div className="p-2 grid grid-cols-[auto_1fr] h-full">
        {/* Sidebar */}
        <div
          className={`sidebar ${isCollapsed ? "w-[0px]" : "w-[100px]"} ${
            isCollapsed ? "" : "bg-black"
          } rounded-lg min-h-full flex flex-col transition-all duration-300 overflow-y-auto`}
        >
          {/* Sidebar Logo */}
          <div className="h-[100px] flex items-center justify-center">
            <a href="/">
              <img
                src="../image/NZHome.png"
                alt=""
                className={`${isCollapsed ? "hidden" : "block"}`}
              />
            </a>
          </div>

          {/* Sidebar Items */}
          <a href="#">
            <div className="flex flex-col items-center justify-center px-4 py-2">
              <i
                className={`fas fa-layer-group text-white text-2xl ${
                  isCollapsed ? "hidden" : "block"
                }`}
              ></i>
              {!isCollapsed && (
                <span className="text-white text-center text-sm mt-2">
                  Devices
                </span>
              )}
            </div>
          </a>
          <a href="#">
            <div className="flex flex-col items-center justify-center px-4 py-2">
              <i
                className={`fas fa-chart-pie text-white text-2xl ${
                  isCollapsed ? "hidden" : "block"
                }`}
              ></i>
              {!isCollapsed && (
                <span className="text-white text-center text-sm mt-2">
                  Internet Usage
                </span>
              )}
            </div>
          </a>
          <a href="#">
            <div className="flex flex-col items-center justify-center px-4 py-2">
              <i
                className={`fas fa-wind text-white text-2xl ${
                  isCollapsed ? "hidden" : "block"
                }`}
              ></i>
              {!isCollapsed && (
                <span className="text-white text-center text-sm mt-2">
                  Calendar
                </span>
              )}
            </div>
          </a>

          {/* Collapse Button inside the Sidebar */}
          <div className="flex justify-center px-4 py-4 mt-auto">
            <button
              onClick={toggleSidebar}
              className={`text-white text-2xl bg-transparent border-0 ${
                isCollapsed ? "hidden" : "block"
              }`}
            >
              <i
                className={`fas ${
                  isCollapsed ? "fa-chevron-right" : "fa-chevron-left"
                }`}
              ></i>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div
          className={`main-content flex flex-col flex-1 transition-all duration-300 overflow-y-auto`}
        >
          <div className="px-4 grid grid-rows-[5rem_1fr] flex-1">
            {/* Main Content Header */}
            <div className="flex justify-between items-center relative">
              <div className="bg-black rounded-lg w-full flex items-center px-4 py-4">
                {/* Hamburger Button */}
                <div
                  className={`flex items-center ${
                    isCollapsed ? "block" : "hidden"
                  }`}
                >
                  <button
                    onClick={toggleSidebar}
                    className="text-white text-2xl bg-transparent border-0 mr-4"
                  >
                    <i className="fas fa-bars"></i>
                  </button>
                </div>

                {/* Centered Text */}
                <h1 className="font-bold text-white flex-grow text-center text-4xl">
                  NZ HOME
                </h1>

                {/* Bell Icon */}
                <a href="#" className="ml-auto">
                  <i className="fas fa-bell text-white text-3xl"></i>
                </a>
              </div>
            </div>

            {/* <!-- Main Content --> */}
            <div class="flex flex-col flex-1">
              <h1 className="text-4xl font-bold">Welcome to {name}</h1>
              <p>This is the {name} page.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DevicePage;
