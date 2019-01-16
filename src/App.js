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
        id: 0,
        title: "Apples",
        description: "Good old apples!",
        price: 0.3,
        inStock: 41,
        youHave: 0
      },
      {
        id: 1,
        title: "Cars",
        description: "Used ones.",
        price: 1500,
        inStock: 11,
        youHave: 0
      }
    ],
    investments: []
  };

  buyProduct = product => {
    const index = this.state.products.findIndex(prod => prod.id === product.id);
    const updatedProducts = [...this.state.products];
    if (updatedProducts[index].inStock > 0) {
      updatedProducts[index].inStock--;
      updatedProducts[index].youHave++;
    } else {
      return;
    }

    this.setState(prevState => ({
      money: prevState.money - product.price,
      products: updatedProducts
    }));
  };

  sellProduct = product => {
    const index = this.state.products.findIndex(prod => prod.id === product.id);
    const updatedProducts = [...this.state.products];
    if (updatedProducts[index].youHave > 0) {
      updatedProducts[index].inStock++;
      updatedProducts[index].youHave--;
    } else {
      return;
    }

    this.setState(prevState => ({
      money: prevState.money + product.price,
      products: updatedProducts
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
