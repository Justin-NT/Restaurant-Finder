import React, { Component } from "react";
import "./App.css";
import FetchComponent from "./Components/FetchComponent";

class App extends Component() {
  render() {
    return (
      <div className="App">
        <FetchComponent />
      </div>
    );
  }
}

export default App;
