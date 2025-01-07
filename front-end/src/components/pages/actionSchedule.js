import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ActionSchedule() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isAutoOn, setIsAutoOn] = useState(false); // Manage toggle switch state
  
    const toggleSidebar = () => {
      setIsCollapsed(!isCollapsed);
    };
  
    const navigate = useNavigate();
  
    const handleNavigation = (path) => {
      navigate(path);
    };
  
    // ToggleSwitch component manages the toggle, taking state and setter as props
    function ToggleSwitch({ isAutoOn, setIsAutoOn }) {
      const handleToggle = () => {
        setIsAutoOn(!isAutoOn);  // Toggle the state when the checkbox is clicked
    };
  
    return (
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={isAutoOn}
          onChange={handleToggle}
          className="sr-only peer"
        />
        <span className="relative inline-block w-[50px] h-[24px] bg-gray-300 rounded-full">
          <span
            className="absolute left-1 bottom-[2px] w-[20px] h-[20px] bg-white rounded-full transition-transform peer-checked:translate-x-[26px]"
          ></span>
        </span>
        <span className="ml-4">{isAutoOn ? 'Auto Mode ON' : 'Auto Mode OFF'}</span>
      </div>
    );
  }

  return (
    <div className="baseBG font-sans leading-normal tracking-normal h-screen overflow-hidden">
      <div className="p-2 grid grid-cols-[auto_1fr] h-full">
        <div className="relative flex">
          {/* Sidebar */}
          <div
            className={`sidebar ${isCollapsed ? "w-[0px]" : "w-[100px]"} ${
              isCollapsed ? "" : "baseGreen"
            } rounded-lg min-h-full flex flex-col overflow-y-auto`}
          >
            {/* Sidebar Logo */}
            <div className="h-[100px] flex items-center justify-center">
              <a href="/">
                <img
                  src="../image/NZHome.png"
                  alt="NZ Home Logo"
                  className={`${isCollapsed ? "hidden" : "block"}`}
                />
              </a>
            </div>
            {/* Sidebar Items */}
            <a href="/">
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
            <a href="/electric">
              <div className="flex flex-col items-center justify-center px-4 py-2">
                <i
                  className={`fas fa-bolt text-white text-2xl ${
                    isCollapsed ? "hidden" : "block"
                  }`}
                ></i>
                {!isCollapsed && (
                  <span className="text-white text-center text-sm mt-2">
                    Electrical Usage
                  </span>
                )}
              </div>
            </a>
            <a href="/internet">
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
          </div>

          {/* Collapse Button */}
          <div
            className={`absolute top-1/2 transform -translate-y-1/2 transition-all duration-500 ease-in-out ${
              isCollapsed ? "left-[0px]" : "left-[80px]"
            }`}
          >
            <button
              onClick={toggleSidebar}
              className={`text-white text-2xl baseGreen p-2 rounded-full shadow-md transform transition-all duration-500 ease-in-out ${
                isCollapsed ? "scale-0 opacity-0" : "scale-100 opacity-100"
              }`}
            >
              <i className="fas fa-chevron-left"></i>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="main-content flex flex-col flex-1 transition-all duration-300 overflow-y-auto">
          <div className="px-4 grid grid-rows-[5rem_1fr] flex-1">
            {/* Main Content Header */}
            <div className="flex justify-between items-center relative">
              <div className="baseGreen rounded-lg w-full flex items-center px-4 py-4">
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
                <h1 className="font-bold text-white flex-grow text-center lg:text-4xl titleGold">
                  NZ HOME
                </h1>

                {/* User Icon */}
                <a href="/profile" className="mr-8">
                  <i className="fas fa-user text-white text-3xl"></i>
                </a>

                {/* Bell Icon */}
                <a href="/notification" className="ml-auto">
                  <i className="fas fa-bell text-white text-3xl"></i>
                </a>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col flex-1">
              <div className="grid grid-cols-[auto,1fr] items-center mt-5 w-full">
                <a className="relative pl-4" href="/">
                  <i className="fa fa-2x fa-arrow-left"></i>
                </a>
                <h1 className="text-center lg:text-4xl w-full ml-[-5%]">
                  List of devices
                </h1>
              </div>

              <div className="border border-gray-400 bg-white rounded-lg p-3 font-bold text-xl">
                <h3 className="text-center">Air Conditioner</h3>

                <div className="border border-gray-400 bg-white rounded-lg flex px-20 py-6 mx-16">
                  <label>Temperature</label>
                  <select className="ml-[1018px]">
                    {[...Array(15)].map((_, i) => (
                      <option key={i}>{16 + i}</option>
                    ))}
                  </select>
                </div>

                <br />

                <div className="flex ml-[60px] mr-[60px] gap-[44px] border border-gray-400 bg-white rounded-md px-[252px] py-[24px]">
                  <span>Turn on device</span>
                  <span>Turn off device</span>
                </div>

                <br />

                <div className="border border-gray-400 bg-white rounded-md flex px-3 py-6 place-content-center mx-auto">
                  <span>Auto</span>
                  {/* Pass the state and setter to ToggleSwitch */}
                  <ToggleSwitch isAutoOn={isAutoOn} setIsAutoOn={setIsAutoOn} />
                </div>

                <br />

                <a href="#" className="border border-gray-400 bg-gray-400 rounded-md text-white px-9 py-3 ml-[1296px]">
                  Done
                </a>
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActionSchedule;