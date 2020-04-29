import React from "react";
import Button from "../button/Button.js";
import ShareSS from "../shareSS/ShareSS";

const Quotemachine = (props) => (
  <div>
    <p id='text'>"{}asda"</p>
    <p id='author'>asdasd{}</p>
    <Button buttonName={"New Quote"} />
    <ShareSS />
  </div>
);

export default Quotemachine;
