import React, { useState } from "react";

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

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
            <a href="index.html">
              <img
                src="./image/NZHome.png"
                alt=""
                className={`${isCollapsed ? "hidden" : "block"}`}
              />
            </a>
          </div>

          {/* Sidebar Items */}
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
          <div className="px-4 grid grid-rows-[6.2rem_1fr] flex-1">
            {/* Main Content Header */}
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
                    <i className={`fas fa-bars`}></i>
                  </button>
                </div>
                <h1 className="text-4xl font-bold text-white mx-auto py-4 flex-1">
                  NZ HOME
                </h1>
                <i className="fas fa-bell text-white text-3xl absolute right-9"></i>
              </div>
            </div>

            {/* <!-- Main Content --> */}
            <div class="flex flex-col flex-1">
              <div class="grid grid-cols-2 p-4 gap-4 mb-4">
                {/* <!-- Widgets --> */}
                <div>
                  <div class="bg-blue-300 rounded-lg mb-4 p-4 flex flex-col justify-end">
                    <img
                      src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
                      alt=""
                      class="rounded-lg mb-4"
                      style={{ height: "170px" }}
                    />
                    <div class="relative bg-white text-gray-800 rounded-full text-sm py-2 px-4 flex justify-center items-center cursor-pointer">
                      Check Camera
                    </div>
                  </div>

                  <div class="pt-6">
                    <div class="rounded-lg p-3 bg-blue-300 flex flex-wrap gap-2 mt-2">
                      <div class="bg-white rounded-lg p-2 teal-text flex-1">
                        <div>Weather Today</div>
                        <div class="text-4xl">Clear</div>
                      </div>
                      <div class="bg-white rounded-lg p-2 teal-text flex-1">
                        <div>Temperature</div>
                        <div class="text-4xl">20 °C</div>
                      </div>
                      <div class="bg-white rounded-lg p-2 teal-text flex-1">
                        <div>Device Status</div>
                        <div class="text-4xl">Stable</div>
                      </div>
                      <div class="bg-white rounded-lg p-2 teal-text flex-1">
                        <div>Network</div>
                        <div class="text-4xl">500 mb/s</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="bg-blue-300 rounded-lg mb-4 p-4 teal-text">
                  {/* <!-- Date Picker --> */}
                  <div class="flex justify-center items-center mb-6">
                    <div class="relative bg-white text-gray-800 rounded-full text-sm py-1 px-2 flex flex-wrap items-center cursor-pointer">
                      <i class="fas fa-calendar mr-2 text-gray-600"></i>
                      6/11/2024
                      <i class="fas fa-chevron-down ml-2 text-gray-600"></i>
                    </div>
                  </div>

                  {/* <!-- Energy Usage Section --> */}
                  <div class="bg-white p-4 rounded-lg shadow-md">
                    <h2 class="text-xl mb-4">Energy Usage</h2>
                    <div class="flex flex-wrap items-center p-2 rounded-xl bg-gray-200 mb-3">
                      <i class="fas fa-bolt text-lg mr-3"></i>
                      Today
                      <div class="ml-auto font-bold w-full sm:w-auto text-right sm:text-left">
                        <span class="block sm:inline">28.6 kWh</span>
                      </div>
                      <div class="ml-2">
                        <i class="fas fa-lock text-xs"></i>
                      </div>
                    </div>
                    <div class="flex flex-wrap items-center p-2 rounded-xl bg-gray-200 mb-3">
                      <i class="fas fa-sync-alt text-lg mr-3"></i>
                      This Month
                      <div class="ml-auto font-bold w-full sm:w-auto text-right sm:text-left">
                        <span class="block sm:inline">325.37 kWh</span>
                      </div>
                      <div class="ml-2">
                        <i class="fas fa-lock text-xs"></i>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Energy Generation Section --> */}
                  <div class="bg-white p-4 rounded-lg shadow-md mt-6">
                    <h2 class="text-xl mb-4">Energy Generation</h2>
                    <div class="flex flex-wrap items-center p-2 rounded-xl bg-gray-200 mb-3">
                      <i class="fas fa-sun text-lg mr-3"></i>
                      This Month
                      <div class="ml-auto font-bold w-full sm:w-auto text-right sm:text-left">
                        <span class="block sm:inline">400 kWh</span>
                      </div>
                      <div class="ml-2">
                        <i class="fas fa-lock text-xs"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 p-4 gap-4">
                {/* <!-- Rooms --> */}
                <div class="rounded-lg p-4 bg-blue-300 mb-4">
                  <h2 class="teal-text text-2xl font-bold mb-2">Rooms</h2>
                  <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <button class="teal-text bg-white p-3 rounded-lg">
                      Living Room
                    </button>
                    <button class="teal-text bg-white p-3 rounded-lg">
                      Kitchen
                    </button>
                    <button class="teal-text bg-white p-3 rounded-lg">
                      Bathroom
                    </button>
                    <button class="teal-text bg-white p-3 rounded-lg">
                      Master
                    </button>
                  </div>
                </div>

                {/* <!-- Track Robot --> */}
                <button class="rounded-lg p-4 bg-blue-300 mb-4" type="button">
                  Track Robot
                </button>
              </div>

              <div class="rounded-lg p-4 teal-text mb-4">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* <!-- More Devices Section --> */}
                  <div class="bg-blue-300 rounded-lg p-4 mb-4">
                    <h2 class="text-2xl font-bold mb-4">More Devices</h2>
                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      <button class="teal-text bg-white p-3 rounded-lg text-sm sm:text-base w-full text-center">
                        Samsung TV
                      </button>
                      <button class="teal-text bg-white p-3 rounded-lg text-sm sm:text-base w-full text-center">
                        Philips Hue
                      </button>
                      <button class="teal-text bg-white p-3 rounded-lg text-sm sm:text-base w-full text-center">
                        Add
                      </button>
                    </div>
                  </div>

                  {/* <!-- Users Section --> */}
                  <div class="bg-blue-300 rounded-lg mb-4 p-4 teal-text">
                    <h2 class="text-2xl font-bold mb-4">Users</h2>
                    <div class="flex flex-wrap gap-4">
                      {/* <!-- User button 1 --> */}
                      <button class="bg-white p-3 rounded-lg w-full sm:w-auto">
                        <div class="text-xl sm:text-2xl">Daughter</div>
                        <span class="bg-red-500 text-xs rounded-full text-white px-2 inline-block">
                          Offline
                        </span>
                      </button>

                      {/* <!-- User button 2 --> */}
                      <button class="bg-white p-3 rounded-lg w-full sm:w-auto">
                        <div class="text-xl sm:text-2xl">Mom</div>
                        <span class="bg-green-500 text-xs rounded-full text-white px-2 inline-block">
                          Online
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
