import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useParams,
} from "react-router-dom";

// ViewSpecificDevice Component
function ViewSpecificDevice() {
  const [isCollapsed, setIsCollapsed] = useState(false);

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
                  src="./image/NZHome.png"
                  alt="NZ Home Logo"
                  className={`${isCollapsed ? "hidden" : "block"}`}
                />
              </a>
            </div>
            {/* Sidebar Items */}
            <a href="/devices">
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
            <a href="/calendar">
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
              <i
                className={`fas ${
                  isCollapsed ? "fa-chevron-left" : "fa-chevron-left"
                }`}
              ></i>
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
          return (
            <div
              key={device.name}
              className="rounded-lg border-2 border-gray-300 bg-white p-4 flex flex-col items-center"
            >
              {/* React Router Link */}
              <Link
                to={`/devices/${title
                  .toLowerCase()
                  .replace(" ", "_")}/${device.name
                  .toLowerCase()
                  .replace(" ", "_")}`}
                className="w-full text-center"
              >
                <img
                  src=""
                  alt={`${device.name} logo`}
                  className="border border-black rounded-lg mb-4 mx-auto"
                  style={{ height: "100px", width: "100px" }}
                />
                <span className="block font-medium text-sm">{device.name}</span>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Device Page Component (for each device)
function DevicePage() {
  const { category, deviceName } = useParams();

  return (
    <div className="p-4">
      <h1 className="text-center lg:text-4xl mb-6">{`${category} - ${deviceName}`}</h1>
      <p>
        Details about {deviceName} from {category} will be displayed here.
      </p>
    </div>
  );
}

// Router Configuration (without App component)
function RouterConfig() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ViewSpecificDevice />} />
        <Route path="/devices/:category/:deviceName" element={<DevicePage />} />
      </Routes>
    </Router>
  );
}

export default RouterConfig;
