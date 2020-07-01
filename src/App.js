import React, { Component } from "react";

import "./App.css";
import Speedometer from "./Speedometer.js";
import { render } from "@testing-library/react";

class App extends Component {
  render() {
    return <Speedometer></Speedometer>;
  }
}

export default App;
