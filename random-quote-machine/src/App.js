import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Quotemachine from "./components/quotemachine/Quotemachine";
import Container from "react-bootstrap/Container";

const screencenter = {
  display: "flex",
  height: "100vh",
  alignItems: "center",
  justifyContent: "center",
};
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quotes: [],
      selectedQuote: [],
    };
    this.selectRandomQuote = this.selectRandomQuote.bind(this);
    this.setQuote = this.setQuote.bind(this);
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

  setQuote() {
    this.setState({
      selectedQuote: this.selectRandomQuote(),
    });
  }

  render() {
    console.log(this.state.selectedQuote);
    return (
      <Container style={screencenter} id='quote-box'>
        <Quotemachine
          pickedRandomQuote={this.state.selectedQuote.quote}
          pickedAuthor={this.state.selectedQuote.author}
          newQuote={this.setQuote}
        />
      </Container>
    );
  }
}
export default App;
