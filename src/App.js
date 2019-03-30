import React, { useState } from "react";
import { Navbar } from "react-bootstrap";
import "./App.css";

import UpdateForm from "./components/update-form";
import OutputBlock from "./components/output-block";
import Timeline from "./components/timeline";

function App() {
  const [updates, setUpdate] = useState([]);

  const addUpdate = (description, status, message) => {
    setUpdate([
      ...updates,
      {
        timestamp: new Date(),
        description,
        status,
        message
      }
    ]);
  };

  const getLatestUpdate = () => updates[updates.length - 1];

  const containerStyle = {
    marginTop: "3rem"
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>CirlceIC</Navbar.Brand>
      </Navbar>
      <div className="App container" style={containerStyle}>
        <UpdateForm addUpdate={addUpdate} />
        <OutputBlock update={getLatestUpdate()} />
        <Timeline updates={updates} />
      </div>
    </div>
  );
}

export default App;
