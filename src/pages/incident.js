import React, { useEffect, useState } from "react";

import UpdateForm from "../components/update-form";
import OutputBlock from "../components/output-block";
import Timeline from "../components/timeline";
import Container from "../components/container";

function Incident({ match }) {
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

  useEffect(() => {
    if (updates && updates.length === 0) {
      const loadedUpdates = JSON.parse(localStorage.getItem("updates"));
      if (loadedUpdates) {
        setUpdate(loadedUpdates);
      }
      return;
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("updates", JSON.stringify(updates));
  });

  const resetUpdates = () => {
    setUpdate([]);
  };

  const getLatestUpdate = () => {
    if (updates === null) {
      return null;
    }
    return updates[updates.length - 1];
  };

  return (
    <Container>
      <UpdateForm
        previousUpdate={getLatestUpdate()}
        addUpdate={addUpdate}
        resetUpdates={resetUpdates}
      />
      <OutputBlock update={getLatestUpdate()} />
      <Timeline updates={updates} />
    </Container>
  );
}

export default Incident;
