import React from "react";

import { Form } from "react-bootstrap";
import Container from "./container";

const selectOnFocus = event => {
  event.target.select();
};

const emoji = ":rotating_light:";

function OutputBlock({ update }) {
  if (update) {
    const { description, status, message } = update;

    const output = `${emoji} *Incident Status Update* ${emoji}
*Incident Description*:  ${description}
*Status*: ${status}
*Update*: ${message}`;

    return (
      <Container>
        <h2>Update Formatted for Slack</h2>
        <Form.Control
          as="textarea"
          value={output}
          rows="4"
          readOnly
          onFocus={selectOnFocus}
        />
      </Container>
    );
  }

  return null;
}

export default OutputBlock;
