import React from "react";
import "./Button.css";

const Button = ({ clickHandler, buttonName, textColor }) => (
  <div id='button-container'>
    <button id='new-quote' onClick={clickHandler} style={textColor}>
      {buttonName}
    </button>
  </div>
);

export default Button;
