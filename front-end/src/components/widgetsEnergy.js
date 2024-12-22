import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function WidgetsEnergy() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log(date.toLocaleDateString("en-US"));
  };

  return (
    <div className="grid grid-cols-2 p-4 gap-4 mb-4">
      {/* Widgets */}
      <div>
        <div className="bg-blue-300 rounded-lg mb-4 p-4 flex flex-col justify-center">
          <img
            src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
            alt=""
            className="rounded-lg mb-4"
            style={{ height: "170px" }}
          />
          <a href="#">
            <div className="relative bg-white text-gray-800 rounded-full text-sm py-2 px-4 flex justify-center items-center cursor-pointer">
              Check Camera
            </div>
          </a>
        </div>

        <a href="#">
          <div className="mt-12">
            <div className="rounded-lg p-3 bg-blue-300 flex flex-wrap gap-2 mt-2">
              <div className="bg-white rounded-lg p-2 teal-text flex-1">
                <div>Weather Today</div>
                <div className="text-4xl">Clear</div>
              </div>
              <div className="bg-white rounded-lg p-2 teal-text flex-1">
                <div>Temperature</div>
                <div className="text-4xl">20 °C</div>
              </div>
              <div className="bg-white rounded-lg p-2 teal-text flex-1">
                <div>Device Status</div>
                <div className="text-4xl">Stable</div>
              </div>
              <div className="bg-white rounded-lg p-2 teal-text flex-1">
                <div>Network</div>
                <div className="text-4xl">500 mb/s</div>
              </div>
            </div>
          </div>
        </a>
      </div>

      <div className="bg-blue-300 rounded-lg mb-4 p-4 teal-text">
        {/* Date Picker */}
        <div className="flex justify-center items-center mb-6">
          <div className="relative bg-white text-gray-800 rounded-full text-sm py-1 px-2 flex items-center cursor-pointer w-[170px]">
            <i className="fas fa-calendar mr-2 text-gray-600"></i>
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="MM/dd/yyyy"
              className="bg-transparent border-0 cursor-pointer w-full"
            />
          </div>
        </div>

        {/* Energy Usage Section */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl mb-4">Energy Usage</h2>
          <a href="#">
            <div className="flex flex-wrap items-center p-2 rounded-xl bg-gray-200 mb-3">
              <i className="fas fa-bolt text-lg mr-3"></i>
              Today
              <div className="ml-auto font-bold w-full sm:w-auto text-right sm:text-left">
                <span className="block sm:inline">28.6 kWh</span>
              </div>
              <div className="ml-2">
                <i className="fas fa-lock text-xs"></i>
              </div>
            </div>
          </a>
          <a href="#">
            <div className="flex flex-wrap items-center p-2 rounded-xl bg-gray-200 mb-3">
              <i className="fas fa-sync-alt text-lg mr-3"></i>
              This Month
              <div className="ml-auto font-bold w-full sm:w-auto text-right sm:text-left">
                <span className="block sm:inline">325.37 kWh</span>
              </div>
              <div className="ml-2">
                <i className="fas fa-lock text-xs"></i>
              </div>
            </div>
          </a>
        </div>

        {/* Energy Generation Section */}
        <div className="bg-white p-4 rounded-lg shadow-md mt-6">
          <h2 className="text-xl mb-4">Energy Generation</h2>
          <a href="#">
            <div className="flex flex-wrap items-center p-2 rounded-xl bg-gray-200 mb-3">
              <i className="fas fa-sun text-lg mr-3"></i>
              This Month
              <div className="ml-auto font-bold w-full sm:w-auto text-right sm:text-left">
                <span className="block sm:inline">400 kWh</span>
              </div>
              <div className="ml-2">
                <i className="fas fa-lock text-xs"></i>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default WidgetsEnergy;
