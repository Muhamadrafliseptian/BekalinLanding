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
      <div data-aos="fade-right">
        <h1 style={{ marginBottom: "1rem" }} className="text-primary">
          Khusus Hari Ini! Diskon 35%
        </h1>
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
          Join Sekarang!!
        </Button>
      </div>
    </div>
  );
};

export default Diskon;
