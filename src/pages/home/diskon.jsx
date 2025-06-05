import { Button } from "antd";
import React from "react";
import { openWhatsApp } from "../../components/openWhatsApp";

const Diskon = () => {
  return (
    <div
      style={{
        backgroundColor: "#FFE034",
        padding: "3rem 1rem",
        textAlign: "center",
      }}
    >
      <div>
        <h1 style={{ marginBottom: "1rem" }} className="text-primary">
          Khusus Hari Ini! Diskon 35%
        </h1>
        <Button
          type="primary"
          className="background-primary"
          style={{
            padding: "0 2rem",
            height: "2.5rem",
            fontWeight: "bold",
            borderRadius: 30,
          }}
          onClick={() => openWhatsApp()}
        >
          <p className="text-secondary">Join Sekarang!!</p>
        </Button>
      </div>
    </div>
  );
};

export default Diskon;
