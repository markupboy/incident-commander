import React from "react";

function Container({ children }) {
  const containerStyle = {
    marginTop: "3rem"
  };

  return (
    <div className="App container" style={containerStyle}>
      {children}
    </div>
  );
}

export default Container;
