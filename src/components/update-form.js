import React, { Component } from "react";

import { Button, Form } from "react-bootstrap";
import OutputBlock from "./output-block";

class UpdateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      status: "",
      update: ""
    };

    this.descriptionRef = React.createRef();
    this.statusRef = React.createRef();
    this.updateRef = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  updateStateFromForm() {
    this.setState({
      description: this.descriptionRef.current.value,
      status: this.statusRef.current.value,
      update: this.updateRef.current.value
    });
  }

  handleReset(event) {
    this.descriptionRef.current.value = "";
    this.statusRef.current.value = "";
    this.updateRef.current.value = "";
    this.updateStateFromForm();
    event.preventDefault();
  }

  handleSubmit(event) {
    this.updateStateFromForm();
    this.updateRef.current.value = "";
    event.preventDefault();
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="formDescription">
          <Form.Label>Incident description</Form.Label>
          <Form.Control type="text" ref={this.descriptionRef} />
          <Form.Text className="text-muted">
            A smaller than twitter-sized overview of what's occurring, this
            should rarely change between updates
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formStatus">
          <Form.Label>Status</Form.Label>
          <Form.Control as="select" ref={this.statusRef}>
            <option value="" readonly />
            <option value="Investigating">Investigating</option>
            <option value="Identified">Identified</option>
            <option value="Monitoring">Monitoring</option>
            <option value="Resolved">Resolved</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="formUpdate">
          <Form.Label>Update</Form.Label>
          <Form.Control type="text" ref={this.updateRef} />
          <Form.Text className="text-muted">
            A concise overview of the delta in status since the previous update.
            This should highlight important changes or why no important changes
            have been made.
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>&nbsp;
            <Button variant="secondary" onClick={this.handleReset}>
            Reset
          </Button>
        </Form.Group>

        <OutputBlock
          description={this.state.description}
          status={this.state.status}
          update={this.state.update}
        />
      </Form>
    );
  }
}

export default UpdateForm;
