import React from "react";

function DevicesUsers() {
  return (
    <div class="rounded-lg p-4 teal-text mb-4">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* <!-- More Devices Section --> */}
        <div class="bg-blue-300 rounded-lg p-4 mb-4">
          <h2 class="text-2xl font-bold mb-4">More Devices</h2>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {/* <!-- Samsung TV --> */}
            <div class="flex flex-col items-center bg-white p-3 rounded-lg">
              <a
                href="#"
                class="teal-text text-sm sm:text-base w-full text-center mb-2"
              >
                Samsung TV
              </a>
              {/* <!-- Switch --> */}
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" class="sr-only peer" />
                <div class="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-teal-500 peer-focus:ring-2 peer-focus:ring-teal-300"></div>
                <span class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-transform"></span>
              </label>
            </div>

            {/* <!-- Philips Hue --> */}
            <div class="flex flex-col items-center bg-white p-3 rounded-lg">
              <a
                href="#"
                class="teal-text text-sm sm:text-base w-full text-center mb-2"
              >
                Philips Hue
              </a>
              {/* <!-- Switch --> */}
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" class="sr-only peer" />
                <div class="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-teal-500 peer-focus:ring-2 peer-focus:ring-teal-300"></div>
                <span class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-transform"></span>
              </label>
            </div>

            {/* <!-- Add --> */}
            <div class="flex items-center justify-center bg-white p-3 rounded-lg h-full">
              <a
                href="#"
                class="teal-text text-sm sm:text-base w-full text-center"
              >
                Add
              </a>
            </div>
          </div>
        </div>

        {/* <!-- Users Section --> */}
        <a href="##">
          <div class="bg-blue-300 rounded-lg mb-4 p-4 teal-text">
            <h2 class="text-2xl font-bold mb-4">Users</h2>
            <div class="flex flex-wrap gap-4">
              {/* <!-- User button 1 --> */}
              <a
                href="#"
                class="text-center bg-white p-3 rounded-lg w-full sm:w-auto"
              >
                <div class="text-xl sm:text-2xl">Daughter</div>
                <span class="bg-red-500 text-xs rounded-full text-white px-2 inline-block">
                  Offline
                </span>
              </a>

              {/* <!-- User button 2 --> */}
              <a
                href="#"
                class="text-center bg-white p-3 rounded-lg w-full sm:w-auto"
              >
                <div class="text-xl sm:text-2xl">Mom</div>
                <span class="bg-green-500 text-xs rounded-full text-white px-2 inline-block">
                  Online
                </span>
              </a>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default DevicesUsers;
