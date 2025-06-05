import React from "react";
import { Row, Col } from "antd";
import HeroImage from "../../assets/home/hero/1.png";
import { useResponsive } from "../../helpers/responsive";
import BackgroundImage from "../../assets/home/hero/bg.png";

const Hero = () => {
  const { isMobile, isDesktop, isTablet } = useResponsive();
  const fontSizeTitle = isMobile
    ? "28px"
    : isTablet
    ? "2.5vw"
    : isDesktop
    ? "3vw"
    : "30px";

  const fontSizeBody = isMobile
    ? "18px"
    : isTablet
    ? "1.8vw"
    : isDesktop
    ? "24px"
    : "20px";

  const textAlign = isMobile ? "center" : "left";
  const imageAlign = isMobile ? "center" : "right";

  return (
    <div
      id="hero"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        paddingLeft: isMobile ? 0 : 30,
        paddingTop: isMobile ? "8rem" : '50px' ,
        minHeight: "400px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Row
        style={{ width: "100%" }}
        justify="space-between"
        align="middle"
        gutter={isMobile ? [16, 32] : [0, 0]}
      >
        {/* Text Column */}
        <Col xs={24} md={12} style={{ textAlign }}>
          <h1
            className="text-secondary"
            style={{
              fontWeight: "700",
              fontSize: fontSizeTitle,
              lineHeight: 1.3,
              marginBottom: "1rem",
            }}
          >
            Makan Bergizi mulai dari <br></br> 20rb-an aja! FREE ONGKIR
          </h1>
          <h2
            className="text-secondary"
            style={{
              fontSize: fontSizeBody,
              fontWeight: 400,
              lineHeight: 1.5,
            }}
          >
            Hadir dengan 900+ variasi menu, hadirkan solusi makan praktis,
            fleksibel, lezat dan HEMAT!
          </h2>
        </Col>

        {/* Image Column */}
        <Col
          xs={24}
          md={12}
          style={{
            textAlign: imageAlign,
            display: "flex",
            justifyContent: isMobile ? "flex-end" : "flex-end",
            alignItems: 'center',
          }}
        >
          <img
            src={HeroImage}
            alt="Hero"
            style={{
              maxWidth: isMobile ? "100%" : "100%",
              height: "auto",
              borderRadius: 8,
            }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Hero;
