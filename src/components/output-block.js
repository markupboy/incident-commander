import React, { Component } from "react";

import { Form } from "react-bootstrap";

const selectOnFocus = event => {
  event.target.select();
};

const emoji = ":rotating_light:"

class OutputBlock extends Component {
  render() {
    const output = [
      `${emoji} *Incident Status Update* ${emoji}`,
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
