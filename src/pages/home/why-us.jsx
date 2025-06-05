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
    desc: "Mulai dari 20 ribuan untuk makan harianmu tetap bergizi tanpa kirim BERKALI-KALI ONGKIR!",
  },
  {
    icon: "📊",
    title: "Menu Variatif & Bergizi",
    desc: "Penyediaan 1000+ jenis menu disusun dengan gizi seimbang, cocok jadi bekal sehat untuk rutinitasmu!",
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
        maxWidth: "1440px",
        margin: "0 auto",
        height: "100vh",
      }}
    >
      <h2
        className="text-secondary background-third"
        style={{
          display: "inline-block",
          padding: "0.8rem 2rem",
          borderRadius: "10px",
          fontWeight: "bold",
          fontSize: "1.5rem",
          marginBottom: "3rem",
        }}
      >
        Kenapa Pilih Bekelin?
      </h2>

      <div style={{}}>
        <Row gutter={[24, 32]} align="middle" justify="center">
          <Col xs={24} md={8}>
            <Row gutter={[16, 16]}>
              {features.slice(0, 2).map((item, index) => (
                <Col
                  xs={12}
                  key={index}
                  style={index === 0 ? { marginTop: "10rem" } : {}}
                >
                  <div style={{ textAlign: "center" }}>
                    <div
                      className="background-third"
                      style={{
                        fontSize: "2.5rem",
                        borderRadius: 18,
                        padding: "2rem 0",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {item.icon}
                    </div>
                    <div className="text-third" style={{ fontWeight: "bold" }}>
                      {item.title}
                    </div>
                    <div className="text-third" style={{ fontSize: "12px" }}>
                      {item.desc}
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>

          <Col xs={24} md={8}>
            <div style={{ textAlign: "center", marginTop: "10rem" }}>
              <img
                src={WhyUsImage}
                alt="Why Choose Us"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  borderRadius: "1rem",
                }}
              />
            </div>
          </Col>

          <Col xs={24} md={8}>
            <Row gutter={[16, 16]}>
              {features.slice(2).map((item, index) => (
                <Col
                  xs={12}
                  key={index}
                  style={index === 1 ? { marginTop: "10rem" } : {}}
                >
                  <div style={{ textAlign: "center" }}>
                    <div
                      className="background-third"
                      style={{
                        fontSize: "2.5rem",
                        borderRadius: 18,
                        padding: "2rem 0",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {item.icon}
                    </div>
                    <div className="text-third" style={{ fontWeight: "bold" }}>
                      {item.title}
                    </div>
                    <div className="text-third" style={{ fontSize: "12px" }}>
                      {item.desc}
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default WhyUs;
