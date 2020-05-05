import React from "react";
import Button from "../button/Button.js";
import ShareSS from "../shareSS/ShareSS";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "./Quotemachine.css";

const Quotemachine = (props) => (
  <Card id='card' style={{ boxShadow: "3px 3px 20px 0px" }}>
    <Row
      sm={{ span: 12 }}
      xs={{ span: 12 }}
      style={{ margin: "1rem 1rem 1rem 1rem" }}
    >
      <Col>
        <p id='text' style={{ color: props.textColor }}>
          "{props.pickedRandomQuote ? props.pickedRandomQuote : undefined}"
        </p>
      </Col>
    </Row>
    <Row>
      <Col sm={{ span: 8, offset: 4 }} xs={{ span: 8, offset: 4 }}>
        <p id='author' style={{ color: props.textColor }}>
          {props.pickedAuthor ? props.pickedAuthor : undefined}
        </p>
      </Col>
    </Row>
    <Row>
      <Col sm={{ span: 6 }} xs={{ span: 6 }} id='buttonSS-container'>
        <ShareSS
          textShare={props.pickedRandomQuote}
          authorShare={props.pickedAuthor}
          borderColor={{
            border: "1px solid" + props.textColor,
            boxShadow: "1px 1px 10px 1px" + props.textColor,
          }}
        />
      </Col>
      <Col sm={{ span: 6 }} xs={{ span: 6 }}>
        <Button
          buttonName={props.buttonName}
          clickHandler={props.newQuote}
          textColor={{
            color: props.textColor,
            border: "1px solid" + props.textColor,
            boxShadow: "1px 1px 10px 1px" + props.textColor,
          }}
        />
      </Col>
    </Row>
  </Card>
);

export default Quotemachine;
