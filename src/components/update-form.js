import React from "react";

import { Button, Form } from "react-bootstrap";

function UpdateForm({ addUpdate }) {
  const descriptionRef = React.createRef();
  const statusRef = React.createRef();
  const messageRef = React.createRef();

  const handleReset = event => {
    descriptionRef.current.value = "";
    statusRef.current.value = "";
    messageRef.current.value = "";
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

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formDescription">
        <Form.Label>Incident description</Form.Label>
        <Form.Control type="text" ref={descriptionRef} />
        <Form.Text className="text-muted">
          A smaller than twitter-sized overview of what's occurring, this should
          rarely change between updates
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="formStatus">
        <Form.Label>Status</Form.Label>
        <Form.Control as="select" ref={statusRef}>
          <option value="" readonly />
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
  );
}

export default UpdateForm;
