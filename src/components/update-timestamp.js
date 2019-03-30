import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const compareTimestamps = (timeA, timeB) => {
  const comparison = Math.floor((timeB - timeA) / 600);
  if (comparison < 60) {
    return "<1m";
  }
  return `${Math.floor(comparison / 60)}m`;
};

function UpdateTimestamp({ start, timestamp }) {
  return (
    <OverlayTrigger
      placement="top"
      overlay={<Tooltip id={`tooltip-top`}>{timestamp.toTimeString()}</Tooltip>}
    >
      <span>{compareTimestamps(start, timestamp)}</span>
    </OverlayTrigger>
  );
}

export default UpdateTimestamp;
