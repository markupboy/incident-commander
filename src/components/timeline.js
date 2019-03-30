import React from "react";
import { Table } from "react-bootstrap";
import StatusBadge from "./status-badge";
import UpdateTimestamp from "./update-timestamp";

function Timeline({ updates }) {
  if (updates && updates.length) {
    const zeroHour = updates[0].timestamp;
    const formattedUpdates = updates.map(({ timestamp, status, message }) => {
      return (
        <tr key={timestamp}>
          <td>
            <UpdateTimestamp start={zeroHour} timestamp={timestamp} />
          </td>
          <td>
            <StatusBadge status={status} />
          </td>
          <td>{message}</td>
        </tr>
      );
    });

    const divStyle = {
      marginTop: "3rem"
    };

    return (
      <div style={divStyle}>
        <h2>Timeline</h2>
        <Table striped>
          <tbody>{formattedUpdates}</tbody>
        </Table>
      </div>
    );
  }

  return null;
}

export default Timeline;
