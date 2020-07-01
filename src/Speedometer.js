import React, { Component } from "react";
import Gauge from "./Gauge.js";

class Speedometer extends Component {
  state = {
    units: "km/hr",
    value: "40",
    min: 0,
    max: 160
  };
  changeValue(value) {
    this.setState({
      value: value
    });
  }
  render() {
    return (
      <div
        style={{
          marginTop: "5%"
        }}
      >
        <Gauge
          value={this.state.value}
          min={this.state.min}
          max={this.state.max}
          units={this.state.units}
        ></Gauge>
        <div
          style={{
            marginLeft: "45%",
            marginTop: "5%"
          }}
        >
          <input
            value={this.state.value}
            onChange={e => this.changeValue(e.target.value)}
          />
          <label
            style={{
              display: "block"
            }}
          >
            Max is:{this.state.max}
          </label>
        </div>
      </div>
    );
  }
}

export default Speedometer;
