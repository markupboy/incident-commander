import React, { Component } from "react";
import "./App.css";

import UpdateForm from "./components/update-form";

class App extends Component {
  render() {
    return (
      <div className="App container">
        <h1>CircleIC</h1>
        <UpdateForm />
      </div>
    );
  }
}

export default App;
