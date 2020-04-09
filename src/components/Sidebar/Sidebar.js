import React from "react";
import StyledSidebar from "../../styles/StyledSidebar";
import { Link } from "react-router-dom";

const Sidebar = props => (
  <StyledSidebar money={props.money} counter={props.counter}>
    <h1>InveStory</h1>
    <div className="username">$</div>
    <p className="money">
      Cash: <span>{parseFloat(props.money).toFixed(2)} $</span>
    </p>
    <ul>
      <Link to="/">
        <li>TRADE</li>
      </Link>
      <Link to="/instructions">
        <li>INSTRUCTIONS</li>
      </Link>
    </ul>
    <div className="time-container">
      <p>Stock and prices update:</p>
      <div className="timer">
        <div className="timer--fill" />
      </div>
    </div>
  </StyledSidebar>
);

export default Sidebar;