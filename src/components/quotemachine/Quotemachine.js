import React from "react";
import Button from "../button/Button.js";
import ShareSS from "../shareSS/ShareSS";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "./Quotemachine.css";

const Quotemachine = (props) => (
  <Card border='dark'>
    <Card.Title id='card-title'>Random Quote Machine</Card.Title>
    <Row>
      <Col sm={{ span: 10, offset: 1 }} xs={{ span: 10, offset: 1 }}>
        <p id='text'>
          "{props.pickedRandomQuote ? props.pickedRandomQuote : ""}"
        </p>
      </Col>
    </Row>
    <Row>
      <Col sm={{ span: 8, offset: 4 }} xs={{ span: 8, offset: 4 }}>
        <p id='author'>{props.pickedAuthor ? props.pickedAuthor : ""}</p>
      </Col>
    </Row>
    <Row>
      <Col sm={{ span: 6 }} xs={{ span: 6 }} id='buttonSS-container'>
        <ShareSS
          textShare={props.pickedRandomQuote}
          authorShare={props.pickedAuthor}
        />
      </Col>
      <Col sm={{ span: 6 }} xs={{ span: 6 }}>
        <Button buttonName={props.buttonName} clickHandler={props.newQuote} />
      </Col>
    </Row>
  </Card>
);

export default Quotemachine;
