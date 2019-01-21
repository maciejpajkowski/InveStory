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
    investments: [],
    gameStarted: false
  };

  cycleUpdate = () => {
    if (!this.state.gameStarted) {
      setInterval(() => {
        this.callUpdate();
      }, 8000); // IMPORTANT!
      this.setState({
        gameStarted: true
      });
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
            if (item.inStock < 0) {
              break;
            } else {
              item.inStock -= smallProductsStockRandomizer;
              break;
            }
          case "medium":
            if (item.inStock < 0) {
              break;
            } else {
              item.inStock -= mediumProductsStockRandomizer;
              break;
            }
          case "large":
            if (item.inStock < 0) {
              break;
            } else {
              item.inStock -= largeProductsStockRandomizer;
              break;
            }
          default:
            break;
        }
      }
      return item;
    });
    this.modifyPrices();
    this.setState(() => ({
      products: this.state.products
    }));
  };

  modifyPrices = () => {
    console.log("Prices updated!");
    this.state.products.map(item => {
      // Stock independent flow of prices
      const addOrRemoveRandomizer = Math.floor(Math.random() * 10 + 1);
      const smallProductsCostRandomizer =
        Math.floor(Math.random() * 35 + 1) / 100;
      const mediumProductsCostRandomizer =
        Math.floor(Math.random() * 120 + 1) / 100;
      const largeProductsCostRandomizer =
        Math.floor(Math.random() * 600 + 1) / 100;

      if (addOrRemoveRandomizer >= 5) {
        switch (item.classification) {
          case "small":
            item.price += smallProductsCostRandomizer;
            break;
          case "medium":
            item.price += mediumProductsCostRandomizer;
            break;
          case "large":
            item.price += largeProductsCostRandomizer;
            break;
          default:
            break;
        }
      } else {
        switch (item.classification) {
          case "small":
            if (item.price < 0.3) {
              break;
            } else {
              item.price -= smallProductsCostRandomizer;
              break;
            }
          case "medium":
            if (item.price < 2) {
              break;
            } else {
              item.price -= mediumProductsCostRandomizer;
              break;
            }
          case "large":
            if (item.price < 20) {
              break;
            } else {
              item.price -= largeProductsCostRandomizer;
              break;
            }
          default:
            break;
        }
      }
      return item;
      // 1. If the stocks are low, the price should be significantly higher and the other way round
      // 2. There should be a basic flow of prices, independent of stock
    });
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

  componentWillMount() {
    console.log("calling componentWillMount");
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
