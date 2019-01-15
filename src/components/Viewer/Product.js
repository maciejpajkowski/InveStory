import React from "react";
import styled from "styled-components";

const ProductStyle = styled.div`
  background-color: #fff;
  height: 200px;
  box-shadow: 0px 0px 4px 1px #a2d9a2;
  padding: 30px;
  display: flex;
  flex-direction: column;
  transition: all 0.3s;

  &:hover {
    box-shadow: 0px 0px 20px 2px #a2d9a2;
    transform: translateY(-5px);
    cursor: pointer;
  }

  h2 {
    margin: 10px 0;
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
    height: 100%;
    width: 30%;
    justify-content: space-between;
    align-items: flex-end;
  }

  button {
    padding: 10px;
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
    }
  }
`;

const B = styled.span`
  font-weight: 800;
`;

const Product = props => (
  <ProductStyle>
    <div className="divider">
      <div className="left-section">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <p>
          Available for: <B>{props.timeAvailable}</B>
        </p>
        <span>
          Currently available: <B>{props.inStock}</B>
        </span>
        <br />
        <span>
          You have: <B>{props.youHave}</B>
        </span>
      </div>
      <div className="right-section">
        <button>SELL</button>
        <button>BUY</button>
      </div>
    </div>
  </ProductStyle>
);

Product.defaultProps = {
  title: "Unnamed",
  description: "This is an unnamed thing available for trade.",
  timeAvailable: "00:00:00",
  inStock: 100,
  youHave: 0
};

export default Product;
