import React from "react";
import "./Hamburger.css";

const Hamburger = (props) => {
  return (
    <div
      id={`nav-icon`}
      className={props.show ? "nav-icon open_menu" : "nav-icon"}
      onClick={props.onClick}
    >
      <span className="nav-icon-item"></span>
      <span className="nav-icon-item"></span>
      <span className="nav-icon-item"></span>
    </div>
  );
};
export default Hamburger;
