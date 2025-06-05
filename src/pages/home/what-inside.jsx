import React from "react";
import { Row, Col } from "antd";
import Food from "../../assets/home/what-inside/1.png";
import BackgroundImage from "../../assets/home/what-inside/bg.png";

const WhatInside = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "4rem 2rem",
        color: "#000",
      }}
    >
      <h2
        className="text-fourth"
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "2rem",
        }}
      >
        Apa Saja isi dalam Bekelin?
      </h2>
      <Row
        gutter={0}
        align="middle"
        justify="center"
        style={{ marginTop: "3rem" }}
      >
        {/* Kiri */}
        <Col xs={24} md={6} style={{ padding: 0 }}>
          <div
            className="text-fourth"
            style={{
              fontWeight: "bold",
              marginBottom: "2rem",
            }}
          >
            <p className="text-fourth">
              <span style={{ fontSize: "1.5rem" }}>Protein Hewani:</span>
              <br />
              <span
                className="text-fourth"
                style={{ fontWeight: "400", fontSize: "1rem" }}
              >
                Daging Ayam, Sapi, Seafood (Udang/Cumi/Ikan)
              </span>
            </p>
          </div>

          <div
            style={{
              fontWeight: "bold",
              marginTop: 150,
              maxWidth: 200,
              textAlign: "start",
            }}
          >
            <p className="text-fourth">
              <span style={{ fontSize: "1.5rem" }}>Sayuran:</span>
              <br />
              <span
                className="text-fourth"
                style={{ fontWeight: "400", fontSize: "1rem" }}
              >
                Brokoli, Sawi, Wortel, Kangkung, dan sebagainya
              </span>
            </p>
          </div>
        </Col>

        {/* Gambar */}
        <Col xs={24} md={10} style={{ textAlign: "center", padding: 0 }}>
          <img
            src={Food}
            alt="Isi Bekelin"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              borderRadius: "1rem",
            }}
          />
        </Col>

        {/* Kanan */}
        <Col xs={24} md={6} style={{ padding: 0 }}>
          <div
            style={{
              fontWeight: "bold",
              marginBottom: "2rem",
            }}
          >
            <p className="text-fourth">
              <span style={{ fontSize: "1.5rem" }}>Karbohidrat Kompleks:</span>
              <br />
              <span
                className="text-fourth"
                style={{ fontWeight: "400", fontSize: "1rem" }}
              >
                Nasi Putih, Nasi Merah, Mie/Pasta, Kentang, dan sebagainya
              </span>
            </p>
          </div>

          <div style={{ fontWeight: "bold" }}>
            <p className="text-fourth">
              <span style={{ fontSize: "1.5rem" }}>
                Special Request/Add On:
              </span>
              <br />
              <span
                className="text-fourth"
                style={{ fontWeight: "400", fontSize: "1rem" }}
              >
                Healthier (Nasi Merah), Extra Karbo, Extra Protein
              </span>
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default WhatInside;
