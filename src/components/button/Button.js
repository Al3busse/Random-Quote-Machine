import React from "react";
import "./Button.css";

const Button = ({ clickHandler, buttonName }) => (
  <div id='button-container'>
    <button id='new-quote' onClick={clickHandler}>
      {buttonName}
    </button>
  </div>
);

export default Button;
