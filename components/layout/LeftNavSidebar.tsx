import React from "react";

const LeftNavSidebar = () => {
  return (
    <div className=" h-screen w-64">
      <div className="flex items-center pl-8 h-16  ">
        <span>
          <svg
            className="w-8"
            viewBox="0 0 17 17"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <title>812</title> <defs> </defs>{" "}
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                {" "}
                <path
                  d="M14.5,13.043 C14.242,13.043 14.002,13.112 13.79,13.225 L10.531,9.954 C10.738,9.664 10.885,9.331 10.953,8.968 L12.086,8.968 C12.287,9.544 12.84,9.96 13.5,9.96 C14.329,9.96 15,9.308 15,8.502 C15,7.696 14.329,7.044 13.5,7.044 C12.826,7.044 12.264,7.479 12.074,8.073 L10.955,8.073 C10.893,7.725 10.764,7.401 10.573,7.119 L13.863,3.817 C14.057,3.906 14.271,3.96 14.5,3.96 C15.329,3.96 16,3.308 16,2.502 C16,1.696 15.329,1.044 14.5,1.044 C13.672,1.044 13.002,1.696 13.002,2.502 C13.002,2.763 13.077,3.005 13.201,3.217 L9.945,6.486 C9.652,6.279 9.316,6.133 8.949,6.067 L8.949,4.886 C9.556,4.7 10,4.155 10,3.502 C10,2.696 9.329,2.044 8.5,2.044 C7.672,2.044 7.002,2.696 7.002,3.502 C7.002,4.157 7.447,4.705 8.06,4.889 L8.06,6.066 C7.696,6.13 7.36,6.271 7.069,6.474 L3.809,3.203 C3.927,2.994 4,2.758 4,2.503 C4,1.697 3.329,1.045 2.5,1.045 C1.672,1.045 1.002,1.697 1.002,2.503 C1.002,3.309 1.672,3.961 2.5,3.961 C2.734,3.961 2.955,3.904 3.152,3.811 L6.437,7.108 C6.241,7.393 6.107,7.721 6.044,8.075 L4.926,8.075 C4.737,7.48 4.173,7.046 3.499,7.046 C2.671,7.046 2.001,7.698 2.001,8.504 C2.001,9.31 2.671,9.962 3.499,9.962 C4.159,9.962 4.714,9.546 4.913,8.97 L6.046,8.97 C6.114,9.339 6.267,9.677 6.48,9.97 L3.226,13.236 C3.01,13.119 2.765,13.047 2.499,13.047 C1.671,13.047 1.001,13.699 1.001,14.505 C1.001,15.311 1.671,15.963 2.499,15.963 C3.328,15.963 3.999,15.311 3.999,14.505 C3.999,14.279 3.942,14.068 3.849,13.879 L7.124,10.59 C7.401,10.774 7.718,10.899 8.059,10.959 L8.059,12.118 C7.447,12.302 7.001,12.849 7.001,13.505 C7.001,14.311 7.671,14.963 8.499,14.963 C9.328,14.963 9.999,14.311 9.999,13.505 C9.999,12.853 9.556,12.307 8.948,12.121 L8.948,10.958 C9.292,10.896 9.611,10.768 9.89,10.581 L13.159,13.862 C13.06,14.056 13.001,14.273 13.001,14.505 C13.001,15.311 13.671,15.963 14.499,15.963 C15.328,15.963 15.999,15.311 15.999,14.505 C15.999,13.699 15.329,13.043 14.5,13.043 L14.5,13.043 Z"
                  fill="#434343"
                  className="si-glyph-fill"
                >
                  {" "}
                </path>{" "}
              </g>{" "}
            </g>
          </svg>
        </span>
        <span className="text-xl font-bold ml-2  text-gray-600"> interact</span>
      </div>
      <div className="mt-6">
        <div>
          <div className=" p-2 flex ">
            <a
              href="#"
              className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
            >
              <span className="inline-flex justify-center items-center ml-4">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  ></path>
                </svg>
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">Home</span>
            </a>
          </div>
          <div className=" p-2 flex">
            <a
              href="#"
              className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
            >
              <span className="inline-flex justify-center items-center ml-4">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  ></path>
                </svg>
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">
                Notifications
              </span>
              <span className="px-2 ml-1 py-0.5  text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">
                1.2k
              </span>
            </a>
          </div>
          <div className=" p-2 flex">
            <a
              href="#"
              className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
            >
              <span className="inline-flex justify-center items-center ml-4">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  ></path>
                </svg>
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">
                Messages
              </span>
            </a>
          </div>

          <div className=" p-2 flex">
            <a
              href="#"
              className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
            >
              <span className="inline-flex justify-center items-center ml-4">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  ></path>
                </svg>
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">
                Friends
              </span>
              <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-green-500 bg-green-50 rounded-full">
                (15)
              </span>
            </a>
          </div>

          <div className="p-2 flex">
            <a
              href="#"
              className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
            >
              <span className="inline-flex justify-center items-center ml-4">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  ></path>
                </svg>
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">Lists</span>
            </a>
          </div>

          <div className=" p-2 flex">
            <a
              href="#"
              className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
            >
              <span className="inline-flex justify-center items-center ml-4">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  ></path>
                </svg>
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">
                Profile
              </span>
            </a>
          </div>

          <div className=" p-2 flex">
            <a
              href="#"
              className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
            >
              <span className="inline-flex justify-center items-center ml-4">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">
                Settings
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftNavSidebar;
