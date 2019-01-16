import React from "react";
import styled from "styled-components";

const SidebarStyle = styled.div`
  background-color: #fff;
  box-shadow: 0px 0px 12px 1px lightgreen;
  z-index: 1;
  display: flex;
  padding: 20px 0;
  flex-direction: column;

  h1 {
    text-align: center;
    color: lightgreen;
  }

  .username {
    display: flex;
    height: 180px;
    width: 180px;
    border: 1px solid lightgreen;
    border-radius: 100%;
    margin: 10px auto;
    font-weight: bold;
    justify-content: center;
    align-items: center;
  }

  .money {
    font-size: 24px;
    color: ${props => (props.money < 0 ? "red" : "limegreen")};
    text-align: center;
  }

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    color: limegreen;
    display: flex;
    justify-content: center;
    width: 100%;
    line-height: 50px;
    transition: all 0.3s;

    &:hover {
      background-color: lightgreen;
      color: #fff;
      cursor: pointer;
      font-size: 20px;
    }
  }
`;

const B = styled.span`
  font-weight: 800;
  font-size: 26px;
`;

const Sidebar = props => (
  <SidebarStyle money={props.money}>
    <h1>InveStory</h1>
    <div className="username" />
    <p className="money">
      Cash: <B>{parseFloat(props.money).toFixed(2)} $</B>
    </p>
    <ul>
      <li>TRADE</li>
      <li>INVEST</li>
      <li>STATS</li>
    </ul>
  </SidebarStyle>
);

Sidebar.defaultProps = {
  money: 100.0
};

export default Sidebar;
