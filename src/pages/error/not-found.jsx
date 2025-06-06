import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <div
        className="background-secondary"
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "2rem",
        }}
      >
        <h1 style={{ fontSize: "5rem", color: "#0B51D5", fontWeight: "bold" }}>
          404
        </h1>
        <p style={{ fontSize: "1.5rem", color: "#E46119" }}>
          Oops! Halaman tidak ditemukan.
        </p>
        <Link
          to="/"
          style={{
            marginTop: "1.5rem",
            backgroundColor: "#0B51D5",
            color: "#FFE034",
            padding: "0.75rem 1.5rem",
            textDecoration: "none",
            borderRadius: "8px",
            fontWeight: "bold",
          }}
        >
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
