import React from "react";
import PrimaryButton from "../../components/button";

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
        <PrimaryButton message="Join Sekarang"/>
      </div>
    </div>
  );
};

export default Diskon;
