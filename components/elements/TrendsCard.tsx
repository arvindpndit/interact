import React from "react";

const TrendsCard: React.FC = () => {
  return (
    <div className="bg-gray-50 hover:bg-gray-100 transition-all rounded-3xl cursor-pointer flex-col">
      <header className="px-5 py-3 text-lg font-bold text-black flex">
        <div className="">Trends for you</div>
      </header>

      <main className="flex-col">
        <div className="flex-col  mb-4 ">
          <div className="px-5 text-gray-600 text-xs">Trending in India</div>
          <div className="px-5 font-bold text-gray-500 text-md">
            #openforwork
          </div>
          <div className="px-5 text-gray-600 text-xs">1,412 Interactions</div>
        </div>
      </main>

      <footer className="px-5 pb-2 text-gray-300  text-sm">
        <a className="hover:text-gray-500" href="">
          Show more
        </a>
      </footer>
    </div>
  );
};

export default TrendsCard;
