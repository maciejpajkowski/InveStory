import styled from 'styled-components';

const StyledProduct = styled.div`
  box-sizing: border-box;
  color: darkgreen;
  background-color: #fff;
  height: 100%;
  width: 100%;
  box-shadow: 0px 0px 4px 1px #a2d9a2;
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  transition: all 0.3s;

  &:hover {
    box-shadow: 0px 0px 20px 2px lightgreen;
    transform: translateY(-3px);
    cursor: pointer;
  }

  h2 {
    margin: 0.8rem 0;
  }

  .description {
    color: seagreen;
    font-style: italic;
  }

  .divider {
    display: flex;
    justify-content: space-between;
    height: 100%;
    width: 100%;
   /* padding: 1.5rem;*/
  }

  .left-section {
    width: 70%;
  }

  .right-section {
    width: 30%;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    align-items: center;
  }

  .cost {
    margin-top: 0.8rem;
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
    font-size: 1.5rem;
    color: limegreen;
  }

  button {
    width: 4rem;
    padding: 0.7rem;
    font-size: 1rem;
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

  @media (max-width: 992px) {
    font-size: 0.9rem;

    button {
      padding: 0.6rem;
      line-height: 0.8rem;
    }
  }

  @media (max-width: 480px) {
    padding: 1rem;

    .cost {
      margin-bottom: 0.5rem;
    }
  }
`;

export default StyledProduct;