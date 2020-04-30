import React from "react";

const Button = ({ clickHandler, buttonName }) => (
  <button id='new-quote' onClick={clickHandler}>
    {buttonName}
  </button>
);

export default Button;
