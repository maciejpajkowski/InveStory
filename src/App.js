import React, { Fragment } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Sidebar from "./components/Sidebar/Sidebar";
import Viewer from "./components/Viewer/Viewer";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Trebuchet MS', 'Verdana', monospace;
  }
`;

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 300px 1620px;
  height: 100vh;
`;

export default class App extends React.Component {
  state = {
    money: 0.0,
    availableProducts: [
      {
        title: "Apples",
        description: "Good old apples!",
        inStock: 41
      },
      {
        title: "Cars",
        description: "90's Ford Mondeos.",
        inStock: 11
      }
    ],
    ownedProducts: [],
    investments: []
  };

  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <MainGrid>
          <Sidebar money={this.state.money} />
          <Viewer
            money={this.state.money}
            availableProducts={this.state.availableProducts}
          />
        </MainGrid>
      </Fragment>
    );
  }
}
