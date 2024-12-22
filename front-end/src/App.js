import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import WidgetsEnergy from "./components/widgetsEnergy";
import RoomsRobots from "./components/roomsRobots";
import Devices from "./components/devices";
import Users from "./components/users";
import RoomPage from "./components/RoomPage";
import DevicePage from "./components/DevicePage";

import "./App.css";

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Router>
      <div className="bg-gray-800 font-sans leading-normal tracking-normal h-screen overflow-hidden">
        <Routes>
          {/* Routes that require a full layout */}
          <Route
            path="/"
            element={
              <div className="p-2 grid grid-cols-[auto_1fr] h-full">
                {/* Sidebar */}
                <div
                  className={`sidebar ${
                    isCollapsed ? "w-[0px]" : "w-[100px]"
                  } ${
                    isCollapsed ? "" : "bg-black"
                  } rounded-lg min-h-full flex flex-col transition-all duration-300 overflow-y-auto`}
                >
                  {/* Sidebar Logo */}
                  <div className="h-[100px] flex items-center justify-center">
                    <a href="/">
                      <img
                        src="./image/NZHome.png"
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

                  {/* Collapse Button */}
                  <div className="flex justify-center px-4 py-4 mt-auto">
                    <button
                      onClick={toggleSidebar}
                      className="text-white text-2xl bg-transparent border-0"
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
                <div className="main-content flex flex-col flex-1 transition-all duration-300 overflow-y-auto">
                  <div className="px-4 grid grid-rows-[6.2rem_1fr] flex-1">
                    {/* Header */}
                    <div className="flex justify-between items-center relative">
                      <div className="bg-black rounded-lg relative w-[99%] flex items-center">
                        <div
                          className={`absolute top-6 left-9 z-10 ${
                            isCollapsed ? "block" : "hidden"
                          }`}
                        >
                          <button
                            onClick={toggleSidebar}
                            className="text-white text-2xl bg-transparent border-0"
                          >
                            <i className="fas fa-bars"></i>
                          </button>
                        </div>
                        <h1 className="text-4xl font-bold text-white mx-auto py-4">
                          NZ HOME
                        </h1>
                        <a href="#" className="mb-9">
                          <i className="fas fa-bell text-white text-3xl absolute right-9"></i>
                        </a>
                      </div>
                    </div>

                    {/* Main Widgets */}
                    <WidgetsEnergy />
                    <RoomsRobots />
                    <Devices />
                    <Users />
                  </div>
                </div>
              </div>
            }
          />

          {/* Routes that display a blank page */}
          <Route path="/room/:name" element={<RoomPage />} />
          <Route path="/device/:name" element={<DevicePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
