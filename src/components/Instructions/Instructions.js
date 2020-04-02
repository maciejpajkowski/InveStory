import React from "react";
import styled from "styled-components";

const InstructionsStyle = styled.div`
  color: darkgreen;
  background-color: #fff;
  height: 20vh;
  box-shadow: 0px 0px 4px 1px #a2d9a2;
  padding: 30px;
  margin: 30px;
  display: flex;
  flex-direction: column;
  transition: all 0.3s;
  
  h2 {
    margin: 10px 0;
  }
`;

const Instructions = () => (
  <InstructionsStyle>
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
  </InstructionsStyle>
);

export default Instructions;