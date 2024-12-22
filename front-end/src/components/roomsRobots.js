import React, { useState } from "react";

function RoomsRobots() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(""); // Track animation direction
  const rooms = [
    { img: "room1.jpg", name: "Living Room" },
    { img: "room2.jpg", name: "Kitchen" },
    { img: "room3.jpg", name: "Bathroom" },
    { img: "room4.jpg", name: "Master" },
    { img: "room5.jpg", name: "Guest Room" },
    { img: "room6.jpg", name: "Office" },
    { img: "room7.jpg", name: "Garage" },
    { img: "room8.jpg", name: "Patio" },
  ];

  const prevItems = () => {
    setDirection("prev");
    setCurrentIndex(Math.max(currentIndex - 4, 0)); // Avoid going negative
  };

  const nextItems = () => {
    setDirection("next");
    setCurrentIndex(Math.min(currentIndex + 4, rooms.length - 4)); // Prevent exceeding the length
  };

  const totalPages = Math.ceil(rooms.length / 4);
  const currentPage = Math.floor(currentIndex / 4);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 p-4 gap-4">
      {/* Rooms */}
      <div className="rounded-lg p-4 bg-blue-300 mb-4 relative overflow-hidden">
        <h2 className="teal-text text-2xl font-bold mb-2">Rooms</h2>
        <div className="transition-all duration-500 ease-in-out">
          <div
            className={`grid sm:grid-cols-4 gap-4 transition-all duration-500 ease-in-out ${
              direction === "next"
                ? "animate-slide-in-next"
                : "animate-slide-in-prev"
            }`}
          >
            {rooms.slice(currentIndex, currentIndex + 4).map((room, index) => (
              <div
                key={index}
                className="bg-white rounded-lg mb-4 p-4 flex flex-col justify-end"
              >
                <img
                  src={room.img}
                  alt={room.name}
                  className="rounded-lg mb-4"
                  style={{ height: "170px" }}
                />
                <a href="#">
                  <div className="relative bg-white text-gray-800 rounded-full text-sm py-2 px-4 flex justify-center items-center cursor-pointer">
                    {room.name}
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-4 space-x-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <span
              key={index}
              className={`text-2xl ${
                index === currentPage ? "teal-text" : "text-white"
              }`}
            >
              •
            </span>
          ))}
        </div>
        <div className="absolute inset-y-1/2 w-[95%] flex justify-between items-center">
          <button
            onClick={prevItems}
            disabled={currentIndex === 0}
            className="bg-white text-gray-800 p-2 rounded-full"
          >
            &lt;
          </button>
          <button
            onClick={nextItems}
            disabled={currentIndex + 4 >= rooms.length}
            className="bg-white text-gray-800 p-2 rounded-full"
          >
            &gt;
          </button>
        </div>
      </div>
      {/* Track Robot */}
      <div className="bg-blue-300 rounded-lg mb-4 p-4 flex flex-col justify-center">
        <img
          src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
          alt=""
          className="rounded-lg mb-4"
          style={{ height: "300px" }}
        />
        <a href="#">
          <div className="relative bg-white text-gray-800 rounded-full text-sm py-2 px-4 flex justify-center items-center cursor-pointer">
            Track Robot
          </div>
        </a>
      </div>
    </div>
  );
}

export default RoomsRobots;
