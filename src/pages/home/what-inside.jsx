import React from "react";
import { Row, Col } from "antd";
import Food from "../../assets/home/what-inside/1.png";
import BackgroundImage from "../../assets/home/what-inside/bg.png";
import { useResponsive } from "../../helpers/responsive";

const WhatInside = () => {
  const { isDesktop, isMobile, isTablet } = useResponsive();

  const titleFont = isMobile ? "1.2rem" : "1.5rem";
  const bodyFont = isMobile ? "0.8rem" : "1rem";

  return (
    <div
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "20px",
        color: "#000",
      }}
    >
      <h2
        className="text-fourth"
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: isMobile ? "1.5rem" : "2rem",
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
          {isMobile ? (
            <Row gutter={[16, 32]}>
              <Col span={12}>
                <div style={{ fontWeight: "bold" }}>
                  <p className="text-fourth">
                    <span style={{ fontSize: titleFont }}>Protein Hewani:</span>
                    <br />
                    <span
                      className="text-fourth"
                      style={{ fontWeight: "400", fontSize: bodyFont }}
                    >
                      Daging Ayam, Sapi, Seafood (Udang/Cumi/Ikan)
                    </span>
                  </p>
                </div>
              </Col>
              <Col span={12}>
                <div style={{ fontWeight: "bold" }}>
                  <p className="text-fourth">
                    <span style={{ fontSize: titleFont }}>Sayuran:</span>
                    <br />
                    <span
                      className="text-fourth"
                      style={{ fontWeight: "400", fontSize: bodyFont }}
                    >
                      Brokoli, Sawi, Wortel, Kangkung, dll
                    </span>
                  </p>
                </div>
              </Col>
            </Row>
          ) : (
            <>
              <div
                className="text-fourth"
                style={{ fontWeight: "bold", marginBottom: "2rem" }}
              >
                <p className="text-fourth">
                  <span style={{ fontSize: titleFont }}>Protein Hewani:</span>
                  <br />
                  <span
                    className="text-fourth"
                    style={{ fontWeight: "400", fontSize: bodyFont }}
                  >
                    Daging Ayam, Sapi, Seafood (Udang/Cumi/Ikan)
                  </span>
                </p>
              </div>

              <div
                style={{
                  fontWeight: "bold",
                  marginTop: 150,
                  maxWidth: isMobile ? 1440 : 200,
                  textAlign: "start",
                }}
              >
                <p className="text-fourth">
                  <span style={{ fontSize: titleFont }}>Sayuran:</span>
                  <br />
                  <span
                    className="text-fourth"
                    style={{ fontWeight: "400", fontSize: bodyFont }}
                  >
                    Brokoli, Sawi, Wortel, Kangkung, dll
                  </span>
                </p>
              </div>
            </>
          )}
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
          {isMobile ? (
            <Row gutter={[16, 32]}>
              <Col span={12}>
                <div style={{ fontWeight: "bold" }}>
                  <p className="text-fourth">
                    <span style={{ fontSize: titleFont }}>
                      Karbohidrat Kompleks:
                    </span>
                    <br />
                    <span
                      className="text-fourth"
                      style={{ fontWeight: "400", fontSize: bodyFont }}
                    >
                      Nasi Putih, Nasi Merah, Mie/Pasta, Kentang, dll
                    </span>
                  </p>
                </div>
              </Col>
              <Col span={12}>
                <div style={{ fontWeight: "bold" }}>
                  <p className="text-fourth">
                    <span style={{ fontSize: titleFont }}>
                      Special Request/Add On:
                    </span>
                    <br />
                    <span
                      className="text-fourth"
                      style={{ fontWeight: "400", fontSize: bodyFont }}
                    >
                      Healthier (Nasi Merah), Extra Karbo, Extra Protein
                    </span>
                  </p>
                </div>
              </Col>
            </Row>
          ) : (
            <>
              <div style={{ fontWeight: "bold", marginBottom: "2rem" }}>
                <p className="text-fourth">
                  <span style={{ fontSize: titleFont }}>
                    Karbohidrat Kompleks:
                  </span>
                  <br />
                  <span
                    className="text-fourth"
                    style={{ fontWeight: "400", fontSize: bodyFont }}
                  >
                    Nasi Putih, Nasi Merah, Mie/Pasta, Kentang, dll
                  </span>
                </p>
              </div>

              <div style={{ fontWeight: "bold" }}>
                <p className="text-fourth">
                  <span style={{ fontSize: titleFont }}>
                    Special Request/Add On:
                  </span>
                  <br />
                  <span
                    className="text-fourth"
                    style={{ fontWeight: "400", fontSize: bodyFont }}
                  >
                    Healthier (Nasi Merah), Extra Karbo, Extra Protein
                  </span>
                </p>
              </div>
            </>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default WhatInside;
