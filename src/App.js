import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import StyledMainGrid from './styles/StyledMainGrid';
import Sidebar from "./components/Sidebar/Sidebar";
import Viewer from "./components/Viewer/Viewer";
import ProductsList from "./data/ProductsList";
import Instructions from "./components/Instructions/Instructions";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export default class App extends React.Component {
  state = {
    money: 100.0,
    products: ProductsList,
    gameStarted: false,
    amountTraded: 1,
    counter: 0
  };

  countdown = () => {
    let counter = this.state.counter;
    counter += 10;
    if (counter === 100) {
      counter = 0;
    }
    this.setState(() => ({
      counter
    }));
  };

  cycleUpdate = () => {
    if (!this.state.gameStarted) {
      setInterval(() => {
        this.callUpdate();
      }, 10000); // IMPORTANT!
      setInterval(() => {
        this.countdown();
      }, 1000);
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
        Math.floor(Math.random() * 15 + 1) / 100;
      const mediumProductsCostRandomizer =
        Math.floor(Math.random() * 380 + 1) / 100;
      const largeProductsCostRandomizer =
        Math.floor(Math.random() * 750 + 1) / 100;

      if (addOrRemoveRandomizer >= 6) {
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
            if (item.price < 0.15) {
              break;
            } else {
              item.price -= smallProductsCostRandomizer;
              break;
            }
          case "medium":
            if (item.price < 4) {
              break;
            } else {
              item.price -= mediumProductsCostRandomizer;
              break;
            }
          case "large":
            if (item.price < 8) {
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
    });
  };

  getAmountTraded = (tradeAmount) => {
    this.setState(
      () => ({
        amountTraded: parseFloat(tradeAmount)
      })
    );
  };

  buyProduct = product => {
    const index = this.state.products.findIndex(prod => prod.id === product.id);
    const updatedProducts = [...this.state.products];
    const specificProduct = updatedProducts[index];

    if (
      specificProduct.inStock > 0 &&
      this.state.money > 0 &&
      specificProduct.inStock >= this.state.amountTraded
    ) {
      specificProduct.inStock -= this.state.amountTraded;
      specificProduct.youHave += this.state.amountTraded;

      switch (specificProduct.classification) {
        case "small":
          specificProduct.price += 0.01 * this.state.amountTraded * 0.8;
          break;
        case "medium":
          specificProduct.price += 4.15 * this.state.amountTraded * 0.8;
          break;
        case "large":
          specificProduct.price += 26.6 * this.state.amountTraded * 0.8;
          break;
        default:
          break;
      }
    } else {
      return;
    }

    this.setState(prevState => ({
      money: prevState.money - specificProduct.price * this.state.amountTraded,
      products: updatedProducts,
      amountTraded: 1
    }));
  };

  sellProduct = product => {
    const index = this.state.products.findIndex(prod => prod.id === product.id);
    const updatedProducts = [...this.state.products];
    const specificProduct = updatedProducts[index];

    if (
      specificProduct.youHave > 0 &&
      specificProduct.youHave >= this.state.amountTraded
    ) {
      switch (specificProduct.classification) {
        case "small":
          specificProduct.price -= 0.01;
          break;
        case "medium":
          specificProduct.price -= 4.15;
          break;
        case "large":
          specificProduct.price -= 26.6;
          break;
        default:
          break;
      }
      specificProduct.inStock += this.state.amountTraded;
      specificProduct.youHave -= this.state.amountTraded;
    } else {
      return;
    }

    this.setState(prevState => ({
      money: prevState.money + specificProduct.price * this.state.amountTraded,
      products: updatedProducts,
      amountTraded: 1
    }));
  };

  componentDidMount() {
    console.log("calling componentDidMount");
    this.cycleUpdate();
  }

  render() {
    return (
      <>
        <GlobalStyle />
        <BrowserRouter>
          <StyledMainGrid>
            <Sidebar money={this.state.money} counter={this.state.counter} />
            <Switch>
              <Route exact path="/">
                <Viewer
                  money={this.state.money}
                  products={this.state.products}
                  amountTraded={this.state.amountTraded}
                  buyProduct={this.buyProduct}
                  sellProduct={this.sellProduct}
                  getAmountTraded={this.getAmountTraded}
                />
              </Route>
              <Route path="/instructions">
                <Instructions />
              </Route>
            </Switch>
          </StyledMainGrid>
        </BrowserRouter>
      </>
    );
  }
}
