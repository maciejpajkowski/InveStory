import React from "react";
import styled from "styled-components";
import Product from "./Product";

const ViewerStyle = styled.div`
  background-color: #fafafa;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 40px;
  padding: 40px;
  overflow-y: scroll;
`;

const Viewer = props => (
  <ViewerStyle>
    {props.products.map(product => {
      return product.inStock > 0 ||
        product.youHave > 0 ||
        product.price <= 0 ? (
        <Product
          key={product.id}
          {...product}
          money={props.money}
          amountTraded={props.amountTraded}
          buyProduct={props.buyProduct}
          sellProduct={props.sellProduct}
          getAmountTraded={props.getAmountTraded}
        />
      ) : null;
    })}
  </ViewerStyle>
);

export default Viewer;
