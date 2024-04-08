import React from "react";
import InteractionCard from "../elements/InteractionCard";
import ComposeInteractions from "../elements/ComposeInteractions";

const MainContainer = () => {
  return (
    <div>
      <div>
        <ComposeInteractions />
      </div>
      <InteractionCard />
      <InteractionCard />
      <InteractionCard />
      <InteractionCard />
    </div>
  );
};

export default MainContainer;
