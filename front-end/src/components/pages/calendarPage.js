import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function CalendarPage() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const today = new Date();
  const [events, setEvents] = useState([]);
  const [eventDate, setEventDate] = useState(null); // Date object for event selection
  const [eventTitle, setEventTitle] = useState("");
  const [eventDescription, setEventDescription] = useState("");

  // States for time components
  const [selectedHour, setSelectedHour] = useState(today.getHours());
  const [selectedMinute, setSelectedMinute] = useState(today.getMinutes());
  const [selectedSecond, setSelectedSecond] = useState(today.getSeconds());

  // Generate options for dropdowns
  const generateOptions = (start, end) => {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i).map(
      (value) => (
        <option key={value} value={value}>
          {value.toString().padStart(2, "0")}
        </option>
      )
    );
  };

  // Add a new event
  const addEvent = () => {
    if (eventDate && eventTitle) {
      const eventDetails = new Date(eventDate);
      eventDetails.setHours(selectedHour, selectedMinute, selectedSecond);

      setEvents([
        ...events,
        {
          id: Date.now(),
          date: eventDetails,
          title: eventTitle,
          description: eventDescription,
        },
      ]);
      setEventDate(null);
      setSelectedHour(today.getHours());
      setSelectedMinute(today.getMinutes());
      setSelectedSecond(today.getSeconds());
      setEventTitle("");
      setEventDescription("");
    }
  };

  // Delete an event by ID
  const deleteEvent = (id) => {
    setEvents(events.filter((event) => event.id !== id));
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
        <div
          className={`main-content flex flex-col flex-1 transition-all duration-300 overflow-y-auto`}
        >
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
                <a href="#" className="mr-8">
                  <i className="fas fa-user text-white text-3xl"></i>
                </a>

                {/* Bell Icon */}
                <a href="/notification" className="ml-auto">
                  <i className="fas fa-bell text-white text-3xl"></i>
                </a>
              </div>
            </div>

            {/* <!-- Main Content --> */}
            <div class="flex flex-col flex-1">
              {/* <!-- Main Content --> */}
              <div class="flex flex-col flex-1 gap-4">
                {/* Internet Usage Section */}
                <div className="grid grid-cols-[auto,1fr] items-center mt-5 w-full">
                  <a className="relative pl-4" href="/">
                    <i className="fa fa-2x fa-arrow-left"></i>
                  </a>
                  <h1 className="text-center md:text-4xl lg:text-4xl w-full ml-[-5%]">
                    Calendar
                  </h1>
                </div>

                {/* ==================== */}
                <div className="wrapper p-4">
                  <div className="container-calendar grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Left Section */}
                    <div
                      id="left"
                      className="bg-gray-100 p-4 rounded-lg shadow-md"
                    >
                      <div id="reminder-section">
                        <h3 className="text-xl font-semibold mb-3">
                          Reminders
                        </h3>
                        <ul id="reminderList" className="space-y-2">
                          {events.map((event) => (
                            <li
                              key={event.id}
                              className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm"
                            >
                              <div>
                                <strong className="block text-sm font-bold">
                                  {event.title}
                                </strong>
                                <span className="text-sm text-gray-600">
                                  {event.description} on{" "}
                                  {new Date(event.date).toLocaleDateString()} at{" "}
                                  {new Date(event.date).toLocaleTimeString()}
                                </span>
                              </div>
                              <button
                                className="delete-event text-red-500 hover:text-red-700 text-sm"
                                onClick={() => deleteEvent(event.id)}
                              >
                                Delete
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Right Section - DatePicker */}
                    <div
                      id="right"
                      className="flex items-center justify-center bg-gray-100 p-4 rounded-lg shadow-md"
                    >
                      <div className="calendar-wrapper grid grid-rows-[auto] gap-4">
                        <DatePicker
                          selected={eventDate}
                          onChange={(date) => setEventDate(date)}
                          inline
                          dateFormat="yyyy-MM-dd"
                          showMonthDropdown
                          showYearDropdown
                          dropdownMode="select"
                        />

                        {/* Time Selection */}
                        <div className="time-selection flex items-center space-x-4 flex items-center justify-center">
                          <div>
                            <label className="block text-sm font-medium mb-1">
                              Hour:
                            </label>
                            <select
                              value={selectedHour}
                              onChange={(e) =>
                                setSelectedHour(parseInt(e.target.value))
                              }
                              className="border border-gray-300 rounded p-2"
                            >
                              {generateOptions(0, 23)}
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-1">
                              Minute:
                            </label>
                            <select
                              value={selectedMinute}
                              onChange={(e) =>
                                setSelectedMinute(parseInt(e.target.value))
                              }
                              className="border border-gray-300 rounded p-2"
                            >
                              {generateOptions(0, 59)}
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-1">
                              Second:
                            </label>
                            <select
                              value={selectedSecond}
                              onChange={(e) =>
                                setSelectedSecond(parseInt(e.target.value))
                              }
                              className="border border-gray-300 rounded p-2"
                            >
                              {generateOptions(0, 59)}
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Event Form */}
                  <div className="event-form bg-gray-100 p-4 mt-4 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-3">Add Event</h3>
                    <div className="space-y-3">
                      <input
                        type="text"
                        placeholder="Event Title"
                        className="w-full border border-gray-300 rounded p-2"
                        value={eventTitle}
                        onChange={(e) => setEventTitle(e.target.value)}
                      />
                      <textarea
                        placeholder="Event Description"
                        className="w-full border border-gray-300 rounded p-2"
                        value={eventDescription}
                        onChange={(e) => setEventDescription(e.target.value)}
                      ></textarea>

                      <button
                        className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
                        onClick={addEvent}
                      >
                        Add Event
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

export default CalendarPage;
