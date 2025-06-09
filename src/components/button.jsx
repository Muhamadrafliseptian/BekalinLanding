import React from "react";
import { Button } from "antd";
import { openWhatsApp } from "./openWhatsApp";

const PrimaryButton = ({message}) => {
  return (
    <Button
      type="primary"
      style={{
        backgroundColor: "#0B51D5",
        borderColor: "#0B51D5",
        color: "#FFE034",
        padding: "0 2rem",
        height: "2.5rem",
        fontWeight: "bold",
        borderRadius: 30,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "#0B51D5";
        e.currentTarget.style.borderColor = "#0B51D5";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "#0B51D5";
        e.currentTarget.style.borderColor = "#0B51D5";
      }}
      onClick={() => openWhatsApp()}
    >
      {message}
    </Button>
  );
};

export default PrimaryButton;
