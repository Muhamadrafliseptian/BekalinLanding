import React from "react";
import { Row, Col } from "antd";
import HeroImage from "../../assets/home/hero/1.png";
import { useResponsive } from "../../helpers/responsive";
import BackgroundImage from "../../assets/home/hero/bg.png";

const Hero = () => {
    const { isMobile, isDesktop, isTablet } = useResponsive();
    const fontSizeTitle = isMobile ? '36px' : isTablet ? '2vw' : isDesktop ? '3vw' : 30
    const fontSizeBody = isMobile ? '24px' : isTablet ? '2vw' : isDesktop ? '24px' : 30
  
  return (
    <div
      id="hero"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "4rem 2rem",
        minHeight: "400px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Row
        style={{ width: "100%" }}
        justify="space-between"
        align="middle"
        gutter={[32, 32]}
      >
        {/* Text Column */}
        <Col xs={24} md={12}>
          <h1 className="text-secondary" style={{ fontWeight: "700", fontSize: fontSizeTitle }}>
            Makan Bergizi mulai dari 20rb-an aja! FREE ONGKIR
          </h1>
          <h2 className="text-secondary" style={{ fontSize: fontSizeBody, fontWeight: 400 }}>
            Hadir dengan 900+ variasi menu, hadirkan solusi makan praktis, fleksibel,
            lezat dan HEMAT!
          </h2>
        </Col>

        {/* Image Column */}
        <Col xs={24} md={12} style={{ textAlign: "right" }}>
          <img
            src={HeroImage}
            alt="Hero"
            style={{ maxWidth: "100%", height: "auto", borderRadius: 8 }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Hero;
