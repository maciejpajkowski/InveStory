import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ProductStyle = styled.div`
  color: darkgreen;
  background-color: #fff;
  height: 200px;
  box-shadow: 0px 0px 4px 1px #a2d9a2;
  padding: 30px;
  display: flex;
  flex-direction: column;
  transition: all 0.3s;

  &:hover {
    box-shadow: 0px 0px 20px 2px lightgreen;
    transform: translateY(-3px);
    cursor: pointer;
  }

  h2 {
    margin: 10px 0;
  }

  .description {
    color: seagreen;
    font-style: italic;
  }

  .divider {
    display: flex;
    justify-content: space-between;
    height: 100%;
  }

  .left-section {
    width: 60%;
  }

  .right-section {
    width: 40%;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }

  .cost {
    margin-top: 10px;
    text-align: center;
  }

  .sell-buy {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    input {
      width: 25%;
      padding: 8px;
      margin: 5px 0;
      border: 1px solid darkgreen;
      border-radius: 10px;
      text-align: center;
      box-shadow: 2px 2px 4px 1px #ddd inset;

      &:focus {
        outline: none;
      }

      &::-webkit-inner-spin-button,
      &::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }
  }

  .price {
    font-size: 28px;
    color: limegreen;
  }

  button {
    width: 80px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid lightgreen;
    border-radius: 10px;
    background-color: #fff;
    color: limegreen;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background-color: lightgreen;
      color: #fff;
    }

    &:focus {
      outline: 0;
    }

    &:active {
      background-color: greenyellow;
      border: 1px solid greenyellow;
    }
  }

  .buy-button {
    opacity: ${props =>
      props.money < props.price || props.inStock <= 0 ? "0.3" : "1"};
    ${props =>
      props.money < props.price || props.inStock <= 0
        ? "pointer-events: none"
        : ""};
  }

  .sell-button {
    opacity: ${props => (!props.youHave ? "0.3" : "1")};
    ${props => (!props.youHave ? "pointer-events: none" : "")};
  }

  span.bold {
    font-weight: 800;
  }
`;

const Product = (props) => {
  const [ tradeAmount, setTradeAmount] = useState(1);

  const handleSetTradeAmount = (e) => {
    e.preventDefault();
    setTradeAmount(e.target.value);
  }

  useEffect(() => props.getAmountTraded(tradeAmount), [tradeAmount]);

  return (
    <ProductStyle
      money={props.money}
      price={props.price}
      youHave={props.youHave}
      inStock={props.inStock}
    >
      <div className="divider">
        <div className="left-section">
          <h2>{props.title}</h2>
          <p className="description">{props.description}</p>
          <hr />
          <p>
            Currently available:{" "}
            <span className="bold">
              {props.inStock <= 0 ? "Out of stock!" : props.inStock}
            </span>
          </p>
          <p>
            You have: <span className="bold">{props.youHave}</span>
          </p>
        </div>
        <div className="right-section">
          <div className="cost">
            <span>Price:</span>
            <br />
            <span className="price">
              {parseFloat(props.price).toFixed(2)} $
            </span>
          </div>
          <div className="sell-buy">
            <button
              className="sell-button"
              onClick={() => {
                props.sellProduct(props);
                setTradeAmount(1);
              }}
            >
              SELL
            </button>
            <input
              className="amount"
              type="number"
              value={tradeAmount}
              onChange={(e) => handleSetTradeAmount(e)}
            />
            <button
              className="buy-button"
              onClick={() => { 
                props.buyProduct(props); 
                setTradeAmount(1); 
              }}
            >
              BUY
            </button>
          </div>
        </div>
      </div>
    </ProductStyle>
  );

}

Product.defaultProps = {
  title: "Unnamed",
  description: "This is an unnamed thing available for trade.",
  inStock: 100,
  youHave: 0,
  price: 100.0
};

export default Product;
