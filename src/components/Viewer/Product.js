import React, { useState, useEffect } from "react";
import StyledProduct from '../../styles/StyledProduct';

const Product = (props) => {
  const [ tradeAmount, setTradeAmount] = useState(1);

  const handleSetTradeAmount = (e) => {
    e.preventDefault();
    setTradeAmount(e.target.value);
  }

  const { getAmountTraded } = props;

  useEffect(() => getAmountTraded(tradeAmount), [getAmountTraded, tradeAmount]);

  return (
    <StyledProduct
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
    </StyledProduct>
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
