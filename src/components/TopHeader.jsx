import React from "react";
import "../styles/Shared.css";

const TopHeader = () => {
  return (
    <div>
      <h1
        style={{
          fontSize: "4rem",
          fontWeight: 700,
          display: "flex",
          justifyContent: "center",
          marginTop: 25,
        }}
      >
        Welcome to BTCDisplay!
      </h1>
    </div>
  );
};

export default TopHeader;
