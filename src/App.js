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
    money: 100.0,
    products: [
      {
        id: 1,
        title: "Apples",
        description: "Good old apples!",
        price: 0.3,
        inStock: 41,
        youHave: 0
      },
      {
        id: 2,
        title: "Cars",
        description: "Used ones.",
        price: 1500,
        inStock: 11,
        youHave: 0
      }
    ],
    investments: []
  };

  buyProduct = productPrice => {
    this.setState(prevState => ({
      money: prevState.money - productPrice,
      products: [...this.state.products]
    }));
  };

  sellProduct = productPrice => {
    this.setState(prevState => ({
      money: prevState.money + productPrice,
      products: [...this.state.products]
    }));
  };

  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <MainGrid>
          <Sidebar money={this.state.money} />
          <Viewer
            money={this.state.money}
            products={this.state.products}
            buyProduct={this.buyProduct}
            sellProduct={this.sellProduct}
          />
        </MainGrid>
      </Fragment>
    );
  }
}
