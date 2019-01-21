import React from "react";
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
    height: 100%;
  }

  .left-section {
    flex-grow: 0.9;
  }

  .right-section {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 30%;
    justify-content: space-between;
  }

  .cost {
    margin-top: 10px;
    text-align: center;
  }

  .sell-buy {
    display: flex;
    justify-content: space-between;
  }

  .price {
    font-size: 28px;
    color: limegreen;
  }

  button {
    width: 60px;
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
`;

const B = styled.span`
  font-weight: 800;
`;

export default class Product extends React.Component {
  render() {
    return (
      <ProductStyle>
        <div className="divider">
          <div className="left-section">
            <h2>{this.props.title}</h2>
            <p className="description">{this.props.description}</p>
            <p>--------------------------</p>
            <span>
              Currently available:{" "}
              <B>
                {this.props.inStock <= 0 ? "Out of stock" : this.props.inStock}
              </B>
            </span>
            <br />
            <span>
              You have: <B>{this.props.youHave}</B>
            </span>
          </div>
          <div className="right-section">
            <div className="cost">
              <span>Price:</span>
              <br />
              <span className="price">
                {parseFloat(this.props.price).toFixed(2)} $
              </span>
            </div>
            <div className="sell-buy">
              <button onClick={() => this.props.sellProduct(this.props)}>
                SELL
              </button>
              <button onClick={() => this.props.buyProduct(this.props)}>
                BUY
              </button>
            </div>
          </div>
        </div>
      </ProductStyle>
    );
  }
}

Product.defaultProps = {
  title: "Unnamed",
  description: "This is an unnamed thing available for trade.",
  inStock: 100,
  youHave: 0,
  price: 100.0
};
