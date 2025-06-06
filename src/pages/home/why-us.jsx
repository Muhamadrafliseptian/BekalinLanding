import React from "react";
import { Row, Col } from "antd";
import BackgroundImage from "../../assets/home/benefit/bg2.png";
import WhyUsImage from "../../assets/home/benefit/2.png";

const features = [
  {
    icon: "🍱",
    title: "Lebih Praktis",
    desc: "Bebas ubah alamat untuk kebutuhanmu",
  },
  {
    icon: "💰",
    title: "Lebih Hemat",
    desc: "Mulai dari 20 ribuan untuk makan harianmu tanpa biaya ongkos kirim (GRATIS ONGKIR!)",
  },
  {
    icon: "📊",
    title: "Menu Variatif & Bergizi",
    desc: "Penyediaan 1000+ varian menu dan disusun dengan gizi seimbang, cocok jadi bekal sehat untuk rutinitasmu!",
  },
  {
    icon: "⚙️",
    title: "Higienis",
    desc: "Setiap hidangan diawasi dengan standar SOP ketat sesuai standar keamanan",
  },
];

const WhyUs = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "4rem 2rem",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          display: "inline-block",
          backgroundColor: "#F15A24",
          color: "#fff",
          padding: "0.8rem 2rem",
          borderRadius: "12px",
          fontWeight: "bold",
          fontSize: "1.8rem",
          marginBottom: "3rem",
        }}
      >
        Kenapa Pilih Bekelin?
      </h2>

      <Row gutter={[32, 32]} align="middle" justify="center">
        {/* Left Features */}
        <Col xs={24} md={8}>
          <Row gutter={[16, 16]} justify="center">
            {features.slice(0, 2).map((item, index) => (
              <Col xs={12} key={index}>
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      backgroundColor: "#F15A24",
                      color: "#fff",
                      fontSize: "2.5rem",
                      borderRadius: 12,
                      padding: "1.5rem 0",
                      marginBottom: "1rem",
                    }}
                  >
                    {item.icon}
                  </div>
                  <div style={{ fontWeight: "bold", color: "#000" }}>
                    {item.title}
                  </div>
                  <div style={{ fontSize: "12px", color: "#333" }}>
                    {item.desc}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Col>

        {/* Center Image */}
        <Col xs={24} md={8}>
          <div style={{ textAlign: "center" }}>
            <img
              src={WhyUsImage}
              alt="Kenapa Pilih Bekelin"
              style={{
                maxWidth: "100%",
                height: "auto",
                borderRadius: "1rem",
                marginTop: "1rem",
              }}
            />
          </div>
        </Col>

        {/* Right Features */}
        <Col xs={24} md={8}>
          <Row gutter={[16, 16]} justify="center">
            {features.slice(2).map((item, index) => (
              <Col xs={12} key={index}>
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      backgroundColor: "#F15A24",
                      color: "#fff",
                      fontSize: "2.5rem",
                      borderRadius: 12,
                      padding: "1.5rem 0",
                      marginBottom: "1rem",
                    }}
                  >
                    {item.icon}
                  </div>
                  <div style={{ fontWeight: "bold", color: "#000" }}>
                    {item.title}
                  </div>
                  <div style={{ fontSize: "12px", color: "#333" }}>
                    {item.desc}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default WhyUs;
