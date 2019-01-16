import React, { Fragment } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Sidebar from "./components/Sidebar/Sidebar";
import Viewer from "./components/Viewer/Viewer";
import ProductsList from "./data/ProductsList";

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
    products: ProductsList,
    investments: []
  };

  cycleUpdate = () => {
    let start = false;
    if (start === false) {
      setInterval(() => {
        this.callUpdate();
      }, 8000); // IMPORTANT!
      start = true;
    }
  };

  callUpdate = () => {
    console.log("Stock updated!");
    this.state.products.map(item => {
      const addOrRemoveRandomizer = Math.floor(Math.random() * 10 + 1);
      const smallProductsStockRandomizer = Math.floor(Math.random() * 20 + 1);
      const mediumProductsStockRandomizer = Math.floor(Math.random() * 10 + 1);
      const largeProductsStockRandomizer = Math.floor(Math.random() * 5 + 1);

      if (addOrRemoveRandomizer >= 6) {
        switch (item.classification) {
          case "small":
            item.inStock += smallProductsStockRandomizer;
            break;
          case "medium":
            item.inStock += mediumProductsStockRandomizer;
            break;
          case "large":
            item.inStock += largeProductsStockRandomizer;
            break;
          default:
            break;
        }
      } else {
        switch (item.classification) {
          case "small":
            item.inStock -= smallProductsStockRandomizer;
            break;
          case "medium":
            item.inStock -= mediumProductsStockRandomizer;
            break;
          case "large":
            item.inStock -= largeProductsStockRandomizer;
            break;
          default:
            break;
        }
      }
      return item;
    });
    this.setState(prevState => ({
      products: this.state.products
    }));
  };

  buyProduct = product => {
    const index = this.state.products.findIndex(prod => prod.id === product.id);
    const updatedProducts = [...this.state.products];
    const specificProduct = updatedProducts[index];

    if (specificProduct.inStock > 0 && this.state.money > 0) {
      specificProduct.inStock--;
      specificProduct.youHave++;
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
    const specificProduct = updatedProducts[index];

    if (specificProduct.youHave > 0) {
      specificProduct.inStock++;
      specificProduct.youHave--;
    } else {
      return;
    }

    this.setState(prevState => ({
      money: prevState.money + product.price,
      products: updatedProducts
    }));
  };

  componentDidMount() {
    this.cycleUpdate();
  }

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
