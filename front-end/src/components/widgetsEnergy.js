import React from "react";

function WidgetsEnergy() {
  return (
    <div class="grid grid-cols-2 p-4 gap-4 mb-4">
      {/* <!-- Widgets --> */}
      <div>
        <div class="bg-blue-300 rounded-lg mb-4 p-4 flex flex-col justify-center">
          <img
            src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
            alt=""
            class="rounded-lg mb-4"
            style={{ height: "170px;" }}
          />
          <a href="#">
            <div class="relative bg-white text-gray-800 rounded-full text-sm py-2 px-4 flex justify-center items-center cursor-pointer">
              Check Camera
            </div>
          </a>
        </div>

        <a href="#">
          <div class="mt-12">
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
        </a>
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
          <a href="#">
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
          </a>
          <a href="#">
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
          </a>
        </div>

        {/* <!-- Energy Generation Section --> */}
        <div class="bg-white p-4 rounded-lg shadow-md mt-6">
          <h2 class="text-xl mb-4">Energy Generation</h2>
          <a href="#">
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
          </a>
        </div>
      </div>
    </div>
  );
}

export default WidgetsEnergy;
