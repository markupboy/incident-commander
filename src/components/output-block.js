import React from "react";

import { Form } from "react-bootstrap";

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
*Update*: ${message}
`;

    const divStyle = {
      marginTop: "3rem"
    };

    return (
      <div style={divStyle}>
        <h2>Update Formatted for Slack</h2>
        <Form.Control
          as="textarea"
          value={output}
          rows="4"
          readOnly
          onFocus={selectOnFocus}
        />
      </div>
    );
  }

  return null;
}

export default OutputBlock;
