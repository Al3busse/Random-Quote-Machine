import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Quotemachine from "./components/quotemachine/Quotemachine";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quotes: [],
      selectecQuote: null,
    };
  }

  componentDidMount() {
    fetch(
      "https://gist.githubusercontent.com/Al3busse/7891ad8844a728eae79cb0d5be696765/raw/303d0453f3bfb205a218f8cd510962c7a950788c/funnyQuotes.json"
    )
      .then((data) => data.json())
      .then((quotes) => this.setState({ quotes: quotes }));
  }

  render() {
    console.log(this.state.quotes);
    return (
      <div id='quote-box'>
        <Quotemachine />
      </div>
    );
  }
}
export default App;
