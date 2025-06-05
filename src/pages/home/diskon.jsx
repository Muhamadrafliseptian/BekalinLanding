import { Button } from "antd";
import React from "react";

const Diskon = () => {
  return (
    <div
      style={{
        backgroundColor: "#FFE034",
        padding: "3rem 1rem",
        textAlign: "center",
      }}
    >
      <h1 style={{ marginBottom: "1rem" }} className="text-primary">Khusus Hari Ini! Diskon 35%</h1>
      <Button
        type="primary"
        className="background-primary"
        style={{
          padding: "0 2rem",
          height: "2.5rem",
          fontWeight: "bold",
          borderRadius: 30
        }}
      >
        <p className="text-secondary">Join Sekarang!</p>
      </Button>
    </div>
  );
};

export default Diskon;
