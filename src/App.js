import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import Routers from "./router";


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Routers />
      </div>
    );
  }
}
