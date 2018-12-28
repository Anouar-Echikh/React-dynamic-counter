import React, { Component } from "react";
import Counter from "./counter";
import "./App.css";

class App extends Component {
  state = {
    time: 53456825 // enter a number < 86.400.000
  };
  render() {
    return (
      <div className="App">
        <div className="mobile">
          <Counter time={this.state.time} />
        </div>
      </div>
    );
  }
}

export default App;
