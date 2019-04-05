import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import "./App.css";

import Incident from "./pages/incident";

function App() {
  return (
    <Router>
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>CircleIC</Navbar.Brand>
        </Navbar>

        <Route path="/" exact component={Incident} />
      </div>
    </Router>
  );
}

export default App;
