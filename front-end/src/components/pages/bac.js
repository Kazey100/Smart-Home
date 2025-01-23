import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Bac = () => {
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

  // Get events on a specific date
  const getEventsOnDate = (date, month, year) => {
    return events.filter((event) => {
      const eventDate = new Date(event.date);
      return (
        eventDate.getDate() === date &&
        eventDate.getMonth() === month &&
        eventDate.getFullYear() === year
      );
    });
  };

  return (
    <div className="wrapper p-4">
      <div className="oneLine flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Calendar</h2>
        <button
          className="add text-lg text-green-500 hover:text-green-700"
          onClick={addEvent}
        >
          &plus;
        </button>
      </div>

      <div className="container-calendar grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Section */}
        <div id="left" className="bg-gray-100 p-4 rounded-lg shadow-md">
          <div id="reminder-section">
            <h3 className="text-xl font-semibold mb-3">Reminders</h3>
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
          <div className="calendar-wrapper">
            <DatePicker
              selected={eventDate}
              onChange={(date) => setEventDate(date)}
              inline
              dateFormat="yyyy-MM-dd"
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
            />
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

          {/* Time Selection */}
          <div className="time-selection flex items-center space-x-4">
            <div>
              <label className="block text-sm font-medium mb-1">Hour:</label>
              <select
                value={selectedHour}
                onChange={(e) => setSelectedHour(parseInt(e.target.value))}
                className="border border-gray-300 rounded p-2"
              >
                {generateOptions(0, 23)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Minute:</label>
              <select
                value={selectedMinute}
                onChange={(e) => setSelectedMinute(parseInt(e.target.value))}
                className="border border-gray-300 rounded p-2"
              >
                {generateOptions(0, 59)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Second:</label>
              <select
                value={selectedSecond}
                onChange={(e) => setSelectedSecond(parseInt(e.target.value))}
                className="border border-gray-300 rounded p-2"
              >
                {generateOptions(0, 59)}
              </select>
            </div>
          </div>

          <button
            className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
            onClick={addEvent}
          >
            Add Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bac;
