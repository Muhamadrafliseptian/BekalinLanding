import React from "react";
import { Row, Col } from "antd";
import BackgroundImage from "../../assets/home/benefit/bg.png";
import Food from "../../assets/home/benefit/1.png";
import { useResponsive } from "../../helpers/responsive";
import BackgroundResponsive from "../../assets/home/hero/bg.png";
import PrimaryButton from "../../components/button";

const Benefit = () => {
  const { isMobile, isTablet, isDesktop } = useResponsive();
  const imageBackground =
    isMobile || isTablet ? BackgroundResponsive : BackgroundImage;
  const textColorCondition =
    isMobile || isTablet ? "text-secondary" : "text-third";
  const mobileCondition =
    isMobile || isTablet
      ? "background-secondary text-third"
      : "background-third text-secondary";
  return (
    <div
      style={{
        backgroundImage: `url(${imageBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "4rem 2rem",
        color: "#fff",
      }}
    >
      <div>
        <Row gutter={[24, 24]} align="top" justify="space-between">
          <Col xs={24} md={8}>
            <h2
              className={textColorCondition}
              style={{
                fontWeight: "700",
                fontSize: "30px",
                textAlign: isMobile ? "center" : "start",
              }}
            >
              Daripada Pesan Online Tapi malah...
            </h2>
            <div
              style={{
                marginTop: "1.5rem",
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "0.5rem",
              }}
            >
              {[
                "‼️ Nunggunya Lama",
                "‼️ Ongkir mahal",
                "‼️ Harga makin naik",
                "‼️ Bingung Cari Menu",
                "‼️ Bisa-bisa zonk",
              ].map((text, index) => (
                <div
                  key={index}
                  className={mobileCondition}
                  style={{
                    fontWeight: 600,
                    padding: "0.4rem 1rem",
                    borderRadius: "8px",
                    textAlign: isMobile ? "center" : "start",
                  }}
                >
                  {text}
                </div>
              ))}
            </div>
          </Col>

          {/* Tengah */}
          <Col xs={24} md={8}>
            <div
              style={{
                textAlign: "center",
                marginTop: isMobile ? "0" : "5rem",
              }}
            >
              {isMobile && (
                <div style={{ marginTop: 0, marginBottom: 20 }}>
                  <PrimaryButton message="Pesan Bekalin Sekarang!" />
                </div>
              )}
              <img
                src={Food}
                alt="food"
                style={{ maxWidth: "100%", height: "auto" }}
              />
              {!isMobile && (
                <div style={{ marginTop: 20, marginBottom: 20 }}>
                  <PrimaryButton message="Pesan Bekalin Sekarang!" />
                </div>
              )}
            </div>
          </Col>

          {/* Kanan */}
          <Col xs={24} md={8}>
            <div
              style={{
                textAlign: "right",
                marginTop: isMobile ? "0" : "10rem",
              }}
            >
              <h2
                className="text-secondary"
                style={{
                  fontWeight: "700",
                  fontSize: "30px",
                  textAlign: isMobile ? "center" : "start",
                }}
              >
                Mending andelin
                <br />
                Bekalin aja!
              </h2>
              <div
                style={{
                  marginTop: "1.5rem",
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "0.5rem",
                }}
              >
                {[
                  "Antar Sampai Ke Meja",
                  "Gratis Ongkir!",
                  "Menu Ganti Tiap Hari",
                  "Mulai 20ribu-an aja!",
                ].map((text, index) => (
                  <div
                    key={index}
                    className="text-third background-secondary"
                    style={{
                      fontWeight: 600,
                      padding: "0.4rem 1rem",
                      borderRadius: "8px",
                      textAlign: "center",
                    }}
                  >
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Benefit;
