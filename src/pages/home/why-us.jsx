import React from "react";
import { Row, Col } from "antd";
import BackgroundImage from "../../assets/home/benefit/bg2.png";
import WhyUsImage from "../../assets/home/benefit/2.png";
import { useResponsive } from "../../helpers/responsive";
import Image3 from "../../assets/home/benefit/3.png";
import Image4 from "../../assets/home/benefit/4.png";
import Image5 from "../../assets/home/benefit/5.png";
import Image6 from "../../assets/home/benefit/6.png";
import PrimaryButton from "../../components/button";

const features = [
  {
    icon: Image3,
    title: "Lebih Praktis",
    desc: "Bebas ubah alamat untuk kebutuhanmu",
  },
  {
    icon: Image4,
    title: "Lebih Hemat",
    desc: "Mulai dari 20 ribuan untuk makan harianmu tanpa biaya ongkos kirim (GRATIS ONGKIR!)",
  },
  {
    icon: Image6,
    title: "Menu Variatif & Bergizi",
    desc: "Penyediaan 1000+ varian menu dan disusun dengan gizi seimbang, cocok jadi bekal sehat untuk rutinitasmu!",
  },
  {
    icon: Image5,
    title: "Higienis",
    desc: "Setiap hidangan diawasi dengan standar SOP ketat sesuai standar keamanan",
  },
];

const WhyUs = () => {
  const { isMobile, isTablet } = useResponsive();
  return (
    <div
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "4rem 1.5rem",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          display: "inline-block",
          backgroundColor: "#F15A24",
          padding: "0.8rem 2rem",
          borderRadius: "12px",
          fontWeight: "bold",
          fontSize: "1.8rem",
          marginBottom: "3rem",
        }}
        data-aos="fade-up"
        className="text-secondary"
      >
        Kenapa Pilih Bekelin?
      </h2>

      {isMobile || isTablet ? (
        // Mobile/Tablet Layout
        <Row gutter={[16, 16]} justify="center">
          {features.map((item, index) => (
            <Col xs={12} key={index} data-aos="fade-right">
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    backgroundColor: "#F15A24",
                    fontSize: "2.5rem",
                    borderRadius: 12,
                    padding: "0.6 0",
                    marginBottom: "1rem",
                  }}
                  className="text-secondary"
                >
                  <img
                    src={item.icon}
                    alt="data"
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <div style={{ fontWeight: "bold" }} className="text-third">
                  {item.title}
                </div>
                <div style={{ fontSize: "10px" }} className="text-third">
                  {item.desc}
                </div>
              </div>
            </Col>
          ))}
          <div style={{ marginBottom: 30 }}>
            <PrimaryButton message="Pesan Bekalin Sekarang!" />
          </div>
          {/* Gambar di bawah semua cards */}
          <Col xs={24} data-aos="fade-up">
            <div style={{ textAlign: "center", marginTop: "3rem" }}>
              <img
                src={WhyUsImage}
                alt="Kenapa Pilih Bekelin"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  borderRadius: "1rem",
                  marginTop: "2rem",
                }}
              />
            </div>
          </Col>
        </Row>
      ) : (
        <Row gutter={[32, 32]} align="middle" justify="center">
          {/* Left Features */}
          <Col xs={24} md={8} data-aos="fade-right">
            <Row
              gutter={[16, 16]}
              style={{ display: "flex", alignItems: "flex-start" }}
            >
              {/* Card 1 (kiri bawah) */}
              <Col xs={12} style={{ marginTop: "7rem", marginBottom: "8rem" }}>
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      backgroundColor: "#F15A24",
                      color: "#fff",
                      fontSize: "2.5rem",
                      borderRadius: 12,
                      padding: "0.6rem 0",
                      marginBottom: "1rem",
                    }}
                  >
                    <img
                      src={features[0].icon}
                      alt="data"
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                  <div style={{ fontWeight: "bold" }} className="text-third">
                    {features[0].title}
                  </div>
                  <div style={{ fontSize: "10px" }} className="text-third">
                    {features[0].desc}
                  </div>
                </div>
              </Col>

              {/* Card 2 (kanan atas) */}
              <Col xs={12}>
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      backgroundColor: "#F15A24",
                      fontSize: "2.5rem",
                      borderRadius: 12,
                      padding: "0.6rem 0",
                      marginBottom: "1rem",
                    }}
                    className="text-secondary"
                  >
                    <img
                      src={features[1].icon}
                      alt="data"
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                  <div style={{ fontWeight: "bold" }} className="text-third">
                    {features[1].title}
                  </div>
                  <div style={{ fontSize: "10px" }} className="text-third">
                    {features[1].desc}
                  </div>
                </div>
              </Col>
            </Row>
          </Col>

          {/* Center Image */}
          <Col xs={24} md={8} data-aos="fade-up">
            <div style={{ textAlign: "center" }}>
              <img
                src={WhyUsImage}
                alt="Kenapa Pilih Bekelin"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  borderRadius: "1rem",
                  marginTop: "8rem",
                }}
              />
            </div>
          </Col>

          {/* Right Features */}
          <Col xs={24} md={8} data-aos="fade-right">
            <Row gutter={[16, 16]} justify="center">
              {features.slice(2).map((item, index) => (
                <Col
                  xs={12}
                  key={index}
                  style={{
                    marginTop: index === 1 ? "7rem" : 0,
                    marginBottom: index === 1 ? "7rem" : 0,
                  }}
                >
                  <div style={{ textAlign: "center" }}>
                    <div
                      className="text-secondary"
                      style={{
                        backgroundColor: "#F15A24",
                        fontSize: "2.5rem",
                        borderRadius: 12,
                        padding: "0.6rem 0",
                        marginBottom: "1rem",
                      }}
                    >
                      <img
                        src={item.icon}
                        alt="data"
                        style={{
                          width: "100px",
                          height: "100px",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                    <div style={{ fontWeight: "bold" }} className="text-third">
                      {item.title}
                    </div>
                    <div style={{ fontSize: "10px" }} className="text-third">
                      {item.desc}
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
          <div style={{ marginBottom: 30 }}>
            <PrimaryButton message="Pesan Bekalin Sekarang!" />
          </div>
        </Row>
      )}
    </div>
  );
};

export default WhyUs;
