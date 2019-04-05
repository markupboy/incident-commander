import React, { useState, useRef, useEffect } from "react";

import { Button, Form } from "react-bootstrap";
import Container from "./container";

const selectOnFocus = event => {
  event.target.select();
};

const emoji = ":rotating_light:";

function OutputBlock({ update }) {
  if (update) {
    const { description, status, message } = update;
    const [copied, setCopied] = useState(false);
    const outputRef = useRef(null);
    let timeout;

    const copyToClipbaord = () => {
      setCopied(true);
      outputRef.current.select();
      document.execCommand("copy");
    };

    const output = `${emoji} *Incident Status Update* ${emoji}
*Incident Description*:  ${description}
*Status*: ${status}
*Update*: ${message}`;

    useEffect(() => {
      clearTimeout(timeout);
      if (copied) {
        timeout = setTimeout(() => {
          setCopied(false);
        }, 5e3);
      }
    });

    let copyText = copied ? (
      <span>Copied</span>
    ) : (
      <span>Copy to Clipboard</span>
    );

    return (
      <Container>
        <h2>Update Formatted for Slack</h2>
        <Form.Group>
          <Form.Control
            as="textarea"
            value={output}
            rows="4"
            readOnly
            onFocus={selectOnFocus}
            ref={outputRef}
          />
        </Form.Group>
        <Form.Group>
          <Button variant="outline-dark" onClick={copyToClipbaord}>
            {copyText}
          </Button>
        </Form.Group>
      </Container>
    );
  }

  return null;
}

export default OutputBlock;
