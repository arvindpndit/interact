import React from "react";

const InteractionCard = () => {
  return (
    <div className="flex items-center justify-center ">
      <div className="p-4 hover:bg-gray-100 border rounded-3xl  my-2 sm:my-3 transition-all bg-gray-50 max-w-xl cursor-pointer">
        <div className="flex justify-between ">
          <div className="flex items-center">
            <img
              className="h-11 w-11 rounded-full"
              src="https://avatars.githubusercontent.com/u/121677260?v=4"
            />
            <div className="ml-1.5 text-sm leading-tigh">
              <span className="text-black   font-bold block ">
                Arvind Pandit
              </span>
              <span className="text-gray-500 font-normal block">
                @arvindpndit
              </span>
            </div>
          </div>
          <svg
            className="text-blue-400 h-6 w-auto inline-block fill-current"
            viewBox="0 0 17 17"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            fill="#dc8add"
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
                  fill="#dc8add"
                >
                  {" "}
                </path>{" "}
              </g>{" "}
            </g>
          </svg>
        </div>
        <p className="text-black block text-xl leading-snug mt-3">
          "If four things are followed - having a great aim, acquiring
          knowledge, hard work, and perseverance - then anything can be
          achieved." - APJ Abdul Kalam
        </p>
        <img
          className="mt-2 rounded-2xl border"
          src="https://st.adda247.com/https://wpassets.adda247.com/wp-content/uploads/multisite/sites/5/2023/02/21150759/2t-19-1658918054.jpg"
        />
        <p className="text-gray-500  text-sm py-1 my-0.5">
          10:05 AM · Dec 19, 2020
        </p>
        <div className="border-gray-200 border border-b-0 my-1"></div>
        <div className="text-gray-600  flex mt-3">
          <div className="flex items-center mr-6">
            <svg className="fill-current h-5 w-auto" viewBox="0 0 24 24">
              <g>
                <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path>
              </g>
            </svg>
            <span className="ml-3">615 Likes</span>
          </div>
          <div className="flex items-center mr-6">
            <svg className="fill-current h-5 w-auto" viewBox="0 0 24 24">
              <g>
                <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path>
              </g>
            </svg>
            <span className="ml-3">93 Interactions</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractionCard;
