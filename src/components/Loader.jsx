// Loader.jsx
import React, { Component } from "react";
import spinner from "./spinner.gif"; // correctly import the gif

export class Loader extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={spinner} alt="Loading..." />
      </div>
    );
  }
}

export default Loader;
