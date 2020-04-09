import React from "react";
import StyledViewer from "../../styles/StyledViewer";
import Product from "./Product";

const Viewer = props => (
  <StyledViewer>
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
  </StyledViewer>
);

export default Viewer;
