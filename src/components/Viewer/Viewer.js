import React from "react";
import styled from "styled-components";
import Product from "./Product";
import uuid from "uuid";

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
      return (
        <Product
          key={uuid()}
          title={product.title}
          description={product.description}
          price={product.price}
          inStock={product.inStock}
          youHave={product.youHave}
          buyProduct={props.buyProduct}
          sellProduct={props.sellProduct}
        />
      );
    })}
  </ViewerStyle>
);

export default Viewer;
