import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import WidgetsEnergy from "./components/widgetsEnergy";
import RoomsRobots from "./components/roomsRobots";
import Devices from "./components/devices";
import Users from "./components/users";

import RoomPage from "./components/RoomPage";
import DevicePage from "./components/DevicePage";
import UserPage from "./components/UserPage";

import "./profilePage.css";

function profilePage() {
    return (
        <Router>
              <div className="bg-gray-800 font-sans leading-normal tracking-normal h-screen overflow-hidden">
                <Routes>
                  {/* Routes that require a full layout */}
                  <Route
                    path="/"
                    element={
                      <div className="p-2 grid grid-cols-[auto_1fr] h-full">
                        <div className="relative flex">
                          {/* Sidebar */}
                          <div
                            className={`sidebar ${
                              isCollapsed ? "w-[0px]" : "w-[100px]"
                            } ${
                              isCollapsed ? "" : "bg-black"
                            } rounded-lg min-h-full flex flex-col overflow-y-auto`}
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
                          </div>
        
                          {/* Collapse Button */}
                          <div
                            className={`absolute top-1/2 transform -translate-y-1/2 transition-all duration-500 ease-in-out ${
                              isCollapsed ? "left-[0px]" : "left-[80px]"
                            }`}
                          >
                            <button
                              onClick={toggleSidebar}
                              className={`text-white text-2xl bg-black p-2 rounded-full shadow-md transform transition-all duration-500 ease-in-out ${
                                isCollapsed
                                  ? "scale-0 opacity-0"
                                  : "scale-100 opacity-100"
                              }`}
                            >
                              <i
                                className={`fas ${
                                  isCollapsed ? "fa-chevron-left" : "fa-chevron-left"
                                }`}
                              ></i>
                            </button>
                          </div>
                        </div>
    )
}