import React, { Component } from "react";
import classnames from "classnames";
import logo from "./logo.svg";

class App extends Component {
  render() {
    return (
      <div className={classnames("App")}>
        <header className={classnames("App-header")}>
          <img src={logo} className={classnames("App-logo")} alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className={classnames("App-link")}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
