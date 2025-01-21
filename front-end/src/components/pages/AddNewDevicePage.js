import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function AddNewDevicePage() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();

  const deviceCategories = {
    "Air Conditioner Brand": [{ name: "Brand 1" }, { name: "Brand 2" }],
    "Microwave Brand": [{ name: "Brand 1" }, { name: "Brand 2" }],
    "Robot Vacuum Cleaner Brand": [{ name: "Brand 1" }, { name: "Brand 2" }],
    "Television Brand": [{ name: "Brand 1" }, { name: "Brand 2" }],
    "Washing Machine Brand": [{ name: "Brand 1" }, { name: "Brand 2" }],
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="baseBG font-sans leading-normal tracking-normal h-screen overflow-hidden">
      <div className="p-2 grid grid-cols-[auto_1fr] h-full">
        {/* Sidebar */}
        <div className="relative flex">
          <div
            className={`sidebar ${isCollapsed ? "w-0" : "w-64"} ${
              isCollapsed ? "" : "baseGreen"
            } rounded-lg min-h-full flex flex-col overflow-y-auto`}
          >
            <div className="h-20 flex items-center justify-center">
              <a href="/">
                <img
                  src="/image/NZHome.png"
                  alt="NZ Home Logo"
                  className={isCollapsed ? "hidden" : "block"}
                />
              </a>
            </div>
          </div>

          {/* Collapse Button */}
          <div
            className={`absolute top-1/2 transform -translate-y-1/2 transition-all duration-500 ${
              isCollapsed ? "left-0" : "left-16"
            }`}
          >
            <button
              onClick={toggleSidebar}
              className="text-white text-2xl baseGreen p-2 rounded-full shadow-md"
            >
              <i className={`fas ${isCollapsed ? "fa-chevron-right" : "fa-chevron-left"}`}></i>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col flex-1 overflow-y-auto">
          <div className="px-4 grid grid-rows-[5rem_1fr] flex-1">
            <div className="flex justify-between items-center baseGreen rounded-lg px-4 py-4">
              <h1 className="font-bold text-white flex-grow text-center lg:text-4xl">
                NZ HOME
              </h1>
            </div>

            {/* Content */}
            <div className="p-4">
              <h1 className="text-center lg:text-4xl mb-6">Select a Device</h1>

              {/* Device Sections */}
              <div className="grid gap-8">
                {Object.entries(deviceCategories).map(([title, devices]) => (
                  <DeviceSection key={title} title={title} devices={devices} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Combined DeviceSection Component
function DeviceSection({ title, devices }) {
  return (
    <div>
      <h2 className="text-left font-medium text-lg mb-4">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {devices.map((device) => {
          const [isDeviceOn, setIsDeviceOn] = useState(false);

          const handleToggle = () => {
            setIsDeviceOn(!isDeviceOn);
          };

          return (
            <div
              key={device.name}
              className="rounded-lg border-2 border-gray-300 bg-white p-4 flex flex-col items-center"
            >
              <Link to={`/devices/${device.name}`} className="w-full text-center">
                <img
                  src=""
                  alt={`${device.name} logo`}
                  className="border border-black rounded-lg mb-4 mx-auto"
                  style={{ height: "100px", width: "100px" }}
                />
                <span className="block font-medium text-sm">{device.name}</span>
              </Link>

              {/* Toggle Switch */}
              <div className="mt-4 flex items-center">
                <span className="mr-2 text-sm">{isDeviceOn ? "ON" : "OFF"}</span>
                <label className="switch">
                  <input type="checkbox" checked={isDeviceOn} onChange={handleToggle} />
                  <span className="slider round"></span>
                </label>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AddNewDevicePage;