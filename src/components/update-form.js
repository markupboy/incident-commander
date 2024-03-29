import React, { useEffect } from "react";

import { Button, Form } from "react-bootstrap";
import Container from "./container";

function UpdateForm({ addUpdate, resetUpdates, previousUpdate }) {
  const descriptionRef = React.createRef();
  const statusRef = React.createRef();
  const messageRef = React.createRef();

  const handleReset = event => {
    resetUpdates();
    event.preventDefault();
  };

  const handleSubmit = event => {
    addUpdate(
      descriptionRef.current.value,
      statusRef.current.value,
      messageRef.current.value
    );
    messageRef.current.value = "";
    event.preventDefault();
  };

  useEffect(() => {
    if (previousUpdate) {
      descriptionRef.current.value = previousUpdate.description;
      statusRef.current.value = previousUpdate.status;
    } else {
      descriptionRef.current.value = "";
      statusRef.current.value = "";
    }
  });

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formDescription">
          <Form.Label>Incident description</Form.Label>
          <Form.Control type="text" ref={descriptionRef} />
          <Form.Text className="text-muted">
            A short, succinct description of the customer impact of the
            incident. Rarely more than 10 words and should rarely change between
            updates.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formStatus">
          <Form.Label>Status</Form.Label>
          <Form.Control as="select" ref={statusRef}>
            <option value="" readOnly />
            <option value="Investigating">Investigating</option>
            <option value="Identified">Identified</option>
            <option value="Monitoring">Monitoring</option>
            <option value="Resolved">Resolved</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="formUpdate">
          <Form.Label>Update</Form.Label>
          <Form.Control type="text" ref={messageRef} />
          <Form.Text className="text-muted">
            A concise overview of the delta in status since the previous update.
            This should highlight important changes or why no important changes
            have been made.
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          &nbsp;
          <Button variant="secondary" onClick={handleReset}>
            Reset
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
}

export default UpdateForm;
