import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Quotemachine from "./components/quotemachine/Quotemachine";
import Container from "react-bootstrap/Container";
import "./fonts/BerkshireSwash-Regular.ttf";
import styled, { keyframes } from "styled-components";
import { flash } from "react-animations";

const FlashDiv = styled.div`
  animation: 1.8s ${keyframes`${flash}`};
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quotes: [],
      selectedQuote: [],
      flashing: "div",
      colorHexCode: "white",
    };
    this.selectRandomQuote = this.selectRandomQuote.bind(this);
    this.setQuote = this.setQuote.bind(this);
    this.afterSetStateFinished = this.afterSetStateFinished.bind(this);
    this.randomColor = this.randomColor.bind(this);
  }

  componentDidMount() {
    fetch(
      "https://gist.githubusercontent.com/Al3busse/7891ad8844a728eae79cb0d5be696765/raw/303d0453f3bfb205a218f8cd510962c7a950788c/funnyQuotes.json"
    )
      .then((data) => data.json())
      .then((quotes) => this.setState({ quotes }))
      .then(() =>
        this.setState({
          selectedQuote: this.selectRandomQuote(),
          colorHexCode: this.randomColor(),
        })
      );
  }

  selectRandomQuote() {
    if (!this.state.quotes.length) {
      return;
    }
    return this.state.quotes[
      Math.floor(Math.random() * this.state.quotes.length)
    ];
  }

  afterSetStateFinished() {
    setTimeout(
      function () {
        this.setState({ flashing: "div" });
      }.bind(this),
      1900
    );
  }

  randomColor() {
    return "#" + (((1 << 24) * Math.random()) | 0).toString(16);
  }

  setQuote() {
    setTimeout(
      function () {
        this.setState({
          selectedQuote: this.selectRandomQuote(),

          colorHexCode: this.randomColor(),
        });
      }.bind(this),

      900
    );

    this.setState(
      {
        flashing: FlashDiv,
      },
      () => {
        this.afterSetStateFinished();
      }
    );
  }

  render() {
    return (
      <this.state.flashing style={{ backgroundColor: this.state.colorHexCode }}>
        <Container id='quote-box'>
          <Quotemachine
            textColor={this.state.colorHexCode}
            pickedRandomQuote={this.state.selectedQuote.quote}
            pickedAuthor={this.state.selectedQuote.author}
            newQuote={this.setQuote}
            buttonName={"New Quote"}
          />
          <footer id='footer'>
            Made by{" "}
            <a href='https://github.com/Al3busse' id='footerA'>
              Alejandro Busse
            </a>
          </footer>
        </Container>
      </this.state.flashing>
    );
  }
}
export default App;
