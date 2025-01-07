import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function devicesPage() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [devices, setDevices] = useState([
    { brand: "Daikin", imageSrc: "../image/air-conditioner.png", status: "Offline" },
    { brand: "Sony", imageSrc: "../image/television.png", status: "Offline" },
  ]);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleToggle = (index) => {
    const updatedDevices = [...devices];
    updatedDevices[index].status = updatedDevices[index].status === "Offline" ? "Online" : "Offline";
    setDevices(updatedDevices);
  };

  const addDevice = (brand, imageSrc) => {
    setDevices((prevDevices) => [
      ...prevDevices,
      { brand, imageSrc, status: "Offline" },
    ]);
  };

  const updateBehindText = () => {
    return devices.length > 1 ? "none" : "block";
  };

  return (
    <div className="baseBG font-sans leading-normal tracking-normal h-screen overflow-hidden">
      <div className="p-2 grid grid-cols-[auto_1fr] h-full">
        <div className="relative flex">
          {/* Sidebar */}
          <div
            className={`sidebar ${isCollapsed ? "w-[0px]" : "w-[100px]"} ${isCollapsed ? "" : "baseGreen"} rounded-lg min-h-full flex flex-col overflow-y-auto`}
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
                  className={`fas fa-layer-group text-white text-2xl ${isCollapsed ? "hidden" : "block"}`}
                ></i>
                {!isCollapsed && (
                  <span className="text-white text-center text-sm mt-2">
                    Devices
                  </span>
                )}
              </div>
            </a>{" "}
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
              <i className={`fas ${isCollapsed ? "fa-chevron-left" : "fa-chevron-left"}`}></i>
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
                  className={`flex items-center ${isCollapsed ? "block" : "hidden"}`}
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
                <a href="#" className="ml-auto">
                  <i className="fas fa-bell text-white text-3xl"></i>
                </a>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col flex-1">
              <div className="flex items-center justify-between px-5 py-2.5">
                <a className="no-underline text-black font-bold text-[50px]" href="/">
                    &larr;
                </a>
                <h1 className="m-0 leading-none">List of Devices</h1>
                <a
                  className="no-underline text-black font-bold text-[50px]"
                  href="#"
                  id="addButton"
                  onClick={() => addDevice("New Device", "../image/default-device.png")}
                >
                    &plus;
                </a>
              </div>

              <div
                className="flex flex-wrap gap-5 justify-start p-5 bg-white border border-gray-400 rounded-md font-bold min-h-[80%] relative"
              >
                {devices.map((device, index) => (
                  <div
                    key={index}
                    className="flex flex-col border border-gray-400 bg-white rounded-md text-center items-center p-2 w-[12%] h-[12%]"
                  >
                    <img src={device.imageSrc} alt={device.brand} />
                    <p>{device.brand}</p>
                    <p className="statusText">{device.status}</p>
                    <label className="relative flex justify-center items-center w-[50px] h-[24px] mt-2">
                      <input
                        type="checkbox"
                        className="hidden peer"
                        checked={device.status === "Online"}
                        onChange={() => handleToggle(index)}
                      />
                      <span className="absolute w-full h-full bg-gray-300 rounded-full transition-colors duration-300 peer-checked:bg-green-500"></span>
                      <span className="absolute w-[20px] h-[20px] bg-white rounded-full transition-transform duration-300 left-1 bottom-1 peer-checked:translate-x-[26px]"></span>
                    </label>
                  </div>
                ))}
                <p
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-400 text-center behind"
                  style={{ display: updateBehindText() }}
                >
                  Click on the devices to view more details
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default devicesPage;