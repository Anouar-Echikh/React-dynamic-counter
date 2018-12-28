import React, { Component } from "react";

import "./App.css";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 60212453 // enter a number < 86.400.000
    };
  }
  Time = () => {
    // 1- Convert to seconds:
    if (this.props.time >= 86400000) {
      return alert("Your milliseconds number must be < 86.400.000");
    } else {
      var seconds = this.state.time / 1000;
      // 2- Extract hours:
      const hours = parseInt(seconds / 3600); // 3,600 seconds in 1 hour
      seconds = seconds % 3600; // seconds remaining after extracting hours
      // 3- Extract minutes:
      var minutes = parseInt(seconds / 60); // 60 seconds in 1 minute
      // 4- Keep only seconds not extracted to minutes:
      const second = seconds % 60;
      const obj = {
        hour: String(hours).padStart(2, 0),
        minute: String(minutes).padStart(2, 0),
        second: second.toFixed(0).padStart(2, 0)
      };

      return obj;
    }
  };
  render() {
    console.log(this.Time());
    return (
      <div className="counter">
        <div className="bloc">
          <p className="number">{this.Time().hour}</p>
          <p className="title">Hour</p>
        </div>
        <div className="bloc">
          <p className="number">:</p>
          <p className="title" />
        </div>
        <div className="bloc">
          <p className="number">{this.Time().minute}</p>
          <p className="title">Minute</p>
        </div>
        <div className="bloc">
          <p className="number">:</p>
          <p className="title" />
        </div>
        <div className="bloc">
          <p className="number">{this.Time().second}</p>
          <p className="title">Second</p>
        </div>
      </div>
    );
  }
}

export default Counter;
