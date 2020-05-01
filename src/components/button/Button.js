import React from "react";
import "./Button.css";

const Button = ({ clickHandler, buttonName }) => (
  <button id='new-quote' onClick={clickHandler}>
    {buttonName}
  </button>
);

export default Button;
