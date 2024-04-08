import React from "react";
import InteractionCard from "../elements/InteractionCard";
import ComposeInteractions from "../elements/ComposeInteractions";
import TopBar from "../elements/TopBar";

const MainContainer = () => {
  return (
    <div>
      <ComposeInteractions />

      <InteractionCard />
      <InteractionCard />
      <InteractionCard />
      <InteractionCard />
    </div>
  );
};

export default MainContainer;
