import React from "react";
import InteractionCard from "../elements/InteractionCard";
import ComposeInteractions from "../elements/ComposeInteractions";

const MainContainer = () => {
  return (
    <div>
      <ComposeInteractions />

      <InteractionCard />
    </div>
  );
};

export default MainContainer;
