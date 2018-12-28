import React, { Component } from "react";
import Counter from "./counter";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="mobile">
          <Counter />
        </div>
      </div>
    );
  }
}

export default App;
