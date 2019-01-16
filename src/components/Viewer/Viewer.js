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
      return (
        <Product
          key={product.id}
          {...product}
          money={props.money}
          buyProduct={props.buyProduct}
          sellProduct={props.sellProduct}
        />
      );
    })}
  </ViewerStyle>
);

export default Viewer;
