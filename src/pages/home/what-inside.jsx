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
        data-aos="fade-up"
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
              <Col span={12} data-aos="fade-right">
                <div style={{ fontWeight: "bold" }}>
                  <h2
                    className="text-fourth"
                    style={{ fontSize: titleFont, marginBottom: 5 }}
                  >
                    Protein Hewani:
                  </h2>
                  <p
                    className="text-fourth"
                    style={{
                      fontWeight: "400",
                      fontSize: bodyFont,
                      marginTop: 0,
                    }}
                  >
                    Daging Ayam, Sapi, Seafood (Udang/Cumi/Ikan)
                  </p>
                </div>
              </Col>
              <Col span={12} data-aos="fade-right">
                <div style={{ fontWeight: "bold" }}>
                  <h2
                    className="text-fourth"
                    style={{ fontSize: titleFont, marginBottom: 5 }}
                  >
                    Sayuran:
                  </h2>
                  <p
                    className="text-fourth"
                    style={{
                      fontWeight: "400",
                      fontSize: bodyFont,
                      marginTop: 0,
                    }}
                  >
                    Brokoli, Sawi, Wortel, Kangkung, dan sebagainya{" "}
                  </p>
                </div>
              </Col>
            </Row>
          ) : (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
              data-aos="fade-right"
            >
              <div className="text-fourth" style={{ fontWeight: "bold" }}>
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
                  maxWidth: 200,
                  textAlign: "start",
                  alignSelf: "flex-end",
                  marginTop: isMobile || isTablet ? 0 : 50
                }}
              >
                <p className="text-fourth">
                  <span style={{ fontSize: titleFont }}>Sayuran:</span>
                  <br />
                  <span
                    className="text-fourth"
                    style={{ fontWeight: "400", fontSize: bodyFont }}
                  >
                    Brokoli, Sawi, Wortel, Kangkung, dan sebagainya
                  </span>
                </p>
              </div>
            </div>
          )}
        </Col>

        {/* Gambar */}
        <Col xs={24} md={10} style={{ textAlign: "center", padding: 0 }} data-aos="fade-up">
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
            <Row gutter={[16, 32]} data-aos="fade-right">
              <Col span={12}>
                <div style={{ fontWeight: "bold" }}>
                  <h2
                    className="text-fourth"
                    style={{ fontSize: titleFont, marginBottom: 5 }}
                  >
                    Karbohidrat Kompleks:{" "}
                  </h2>
                  <p
                    className="text-fourth"
                    style={{
                      fontWeight: "400",
                      fontSize: bodyFont,
                      marginTop: 0,
                    }}
                  >
                    Nasi Putih, Nasi Merah, Mie/Pasta, Kentang, dll
                  </p>
                </div>
              </Col>
              <Col span={12}>
                <div style={{ fontWeight: "bold" }}>
                  <h2
                    className="text-fourth"
                    style={{ fontSize: titleFont, marginBottom: 5 }}
                  >
                    Special Request/Add On:
                  </h2>
                  <p
                    className="text-fourth"
                    style={{
                      fontWeight: "400",
                      fontSize: bodyFont,
                      marginTop: 0,
                    }}
                  >
                    Healthier (Nasi Merah), Extra Karbo, Extra Protein
                  </p>
                </div>
              </Col>
            </Row>
          ) : (
            <>
              <div style={{ fontWeight: "bold", marginBottom: "2rem" }} data-aos="fade-right">
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

              <div style={{ fontWeight: "bold" }} data-aos="fade-right">
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
