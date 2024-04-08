import React from "react";

const Searchbar = () => {
  return (
    <div className="max-w-lg w-full bg-white py-2">
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="w-full text-sm  bg-gray-100 rounded-full px-4 py-2 pl-10 focus:outline-none focus:border-blue-500 transition-colors duration-300 ease-in-out"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="absolute left-3 top-2 h-5 w-5 text-gray-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Searchbar;
