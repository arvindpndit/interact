import React from "react";
import TrendsCard from "../elements/TrendsCard";
import Searchbar from "../elements/Searchbar";

const RightSidebar = () => {
  return (
    <div className="ml-6 2xl:ml-0">
      <Searchbar />
      <TrendsCard />
    </div>
  );
};

export default RightSidebar;
