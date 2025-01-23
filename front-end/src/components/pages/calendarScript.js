import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function CalendarPage() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [reminders, setReminders] = useState([]);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const daysInMonth = (month, year) => {
    return 32 - new Date(year, month, 32).getDate();
  };

  const previous = () => {
    if (currentMonth === 0) {
      setCurrentYear(currentYear - 1);
      setCurrentMonth(11);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const next = () => {
    if (currentMonth === 11) {
      setCurrentYear(currentYear + 1);
      setCurrentMonth(0);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const jump = (month, year) => {
    setCurrentMonth(month);
    setCurrentYear(year);
  };

  useEffect(() => {
    console.log(`Calendar updated for ${currentMonth + 1}/${currentYear}`);
  }, [currentMonth, currentYear]);

  return (
    <div className="grid grid-rows-[auto_1fr] grid-cols-[auto_1fr] bg-gray-300 h-full w-auto">
    <div className="row-span-2 col-span-1 bg-gray-800 flex flex-col m-2 p-0 rounded-lg overflow-hidden h-screen">
        <div className="flex flex-col items-center justify-center w-24 bg-gray-800 rounded-lg transition-all ease-in-out">
        <div className="flex items-center justify-center h-24 mb-5">
            <a href="/">
            <img src="../image/NZHome.png" alt="NZ Home Logo" className="h-20 w-auto" />
            </a>
        </div>
        <a href="/" className="flex flex-col items-center justify-center m-2 p-2 w-4/5 text-white text-center rounded-lg no-underline">
            <i className="fas fa-layer-group text-2xl my-1"></i>
            <span className="text-xs mt-1">Devices</span>
        </a>
        <a href="#" className="flex flex-col items-center justify-center m-2 p-2 w-4/5 text-white text-center rounded-lg no-underline">
            <i className="fas fa-chart-pie text-2xl my-1"></i>
            <span className="text-xs mt-1">Internet Usage</span>
        </a>
        <a href="#" className="flex flex-col items-center justify-center m-2 p-2 w-4/5 text-white text-center rounded-lg no-underline">
            <i className="fas fa-wind text-2xl my-1"></i>
            <span className="text-xs mt-1">Calendar</span>
        </a>
        </div>
    </div>

    <div className="row-span-1 col-span-2 flex items-center justify-between bg-gray-800 p-4 rounded-lg text-white">
        <h1 className="text-3xl font-bold text-center flex-grow">NZ HOME</h1>
        <a href="#" className="text-white text-2xl">
        <i className="fas fa-bell"></i>
        </a>
    </div>

    <div className="w-full mx-auto my-4">
        <div className="flex items-center justify-between px-5">
        <a className="text-black font-bold text-4xl no-underline" href="#">←</a>
        <h2 className="m-0 text-lg">Calendar</h2>
        <a className="text-black font-bold text-4xl no-underline" href="#" id="addButton">+</a>
        </div>
        <div className="flex bg-white p-4 max-w-11/12 mx-auto shadow-lg gap-8">
        <div className="min-w-[200px] max-w-[300px] bg-teal-500 rounded-lg p-4">
            <div className="my-4">
            <h3 className="text-black text-base">Reminders</h3>
            <ul className="list-none p-0">
                <li className="my-2 text-sm">
                <strong>Event Title</strong> - Event Description on Event Date
                <button className="ml-4 bg-red-600 text-white px-2 py-1 text-xs rounded hover:bg-red-700">Delete</button>
                </li>
            </ul>
            </div>
        </div>
        <div className="bg-gray-700 w-full h-full p-4 rounded-lg">
            <h3 className="text-white text-center">
            {new Date().toLocaleString("default", { month: "long" })} {new Date().getFullYear()}
            </h3>
            <div className="flex justify-between my-4">
            <button className="bg-green-600 text-white px-3 py-1 rounded">‹</button>
            <button className="bg-green-600 text-white px-3 py-1 rounded">›</button>
            </div>
            <table className="table-auto border-collapse w-full h-[70vh] text-center">
            <thead></thead>
            <tbody></tbody>
            </table>
            <div className="flex justify-between my-4">
            <label htmlFor="month">Jump To: </label>
            <select id="month" className="cursor-pointer bg-white text-gray-700 border rounded px-3 py-1">
                {Array.from({ length: 12 }, (_, i) => (
                <option key={i} value={i}>
                    {new Date(0, i).toLocaleString("default", { month: "short" })}
                </option>
                ))}
            </select>
            <select id="year" className="cursor-pointer bg-white text-gray-700 border rounded px-3 py-1">
                {Array.from({ length: 10 }, (_, i) => (
                <option key={i} value={currentYear - 5 + i}>
                    {currentYear - 5 + i}
                </option>
                ))}
            </select>
            </div>
        </div>
        </div>
    </div>
    </div>
  );
}

export default calendarPage;