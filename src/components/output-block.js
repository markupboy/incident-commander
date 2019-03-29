import React, { Component } from "react";

import { Form } from "react-bootstrap";

const selectOnFocus = event => {
  event.target.select();
};

class OutputBlock extends Component {
  render() {
    const output = [
      ":boom::boom::boom: *Incident Status Update* :boom::boom::boom:",
      "*Incident Description*: " + this.props.description,
      "*Status*: " + this.props.status,
      "*Update*: " + this.props.update
    ].join("\n");

    return (
      <Form.Group controlId="formOutput">
        <Form.Label>Slack formatted update</Form.Label>
        <Form.Control
          as="textarea"
          value={output}
          rows="4"
          readOnly
          onFocus={selectOnFocus}
        />
      </Form.Group>
    );
  }
}

export default OutputBlock;
