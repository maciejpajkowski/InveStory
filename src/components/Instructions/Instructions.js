import React from "react";
import StyledInstructions from '../../styles/StyledInstructions';

const Instructions = () => (
  <StyledInstructions>
    <h2>Instructions</h2>
    <p>
      InveStory is a game all about trading goods - buying cheap and selling
      with profit.
    </p>
    <p>
      Every 10 seconds the market prices and stocks will be modified randomly -
      some products will be cheaper, some will be more expensive, some will be
      more available, some will go out of stock.
    </p>
    <p>Try to make as much money as you can! Have fun!</p>
  </StyledInstructions>
);

export default Instructions;