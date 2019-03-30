import React from "react";

const statusMap = {
  Investigating: "badge badge-danger",
  Identified: "badge badge-warning",
  Monitoring: "badge badge-info",
  Resolved: "badge badge-success"
};

function StatusBadge({ status }) {
  return <span className={statusMap[status]}>{status}</span>;
}

export default StatusBadge;
