import React from "react";
import InteractionContainer from "./InteractionContainer";
import ComposeInteractions from "../elements/ComposeInteractions";

const MainContainer = () => {
  return (
    <div>
      <ComposeInteractions />
      <InteractionContainer />
    </div>
  );
};

export default MainContainer;
