import React, { useState } from "react";
import { Card, Row, Col, Typography, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import BackgroundImage from "../../assets/home/testimoni/bg.png";
import { useResponsive } from "../../helpers/responsive";

const { Title, Paragraph } = Typography;

const testimonials = [
  {
    content:
      "Awalnya takut porsinya kedikitan karena harga terjangkau. Tapi pas makan, kenyang dan gak berlebihan. Ternyata emang udah diatur pas banget buat sehari-hari.",
    name: "Dian, 25",
  },
  {
    content:
      "Dari semua menu, aku paling suka tahu tempe balado sama sayur capcaynya. Gak nyangka menu-menu begini bisa masuk ke catering, enaknya gak kalah sama buatan mama.",
    name: "Tia, 23",
  },
  {
    content:
      "Beneran variatif, bukan cuma ganti lauk doang. Kadang dapat pasta, kadang mie goreng, kadang kentang. Seru banget!",
    name: "Rani, 24",
  },
];

const Testimoni = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { isMobile, isTablet, isDesktop } = useResponsive();

  return (
    <div
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "60px 20px",
        textAlign: "center",
      }}
    >
      <Title style={{ color: "#E64420", marginBottom: 100 }}>
        Testimonials
      </Title>
      <Row gutter={[0, 60]} justify="center">
        {testimonials.map((item, index) => {
          const isHovered = hoveredIndex === index;
          const backgroundColor = isHovered ? "#0B51D5" : "#E46119";

          return (
            <Col
              xs={24}
              sm={12}
              md={8}
              key={index}
              style={{
                position: "relative",
                padding: "0 10px",
              }}
            >
              <div style={{ position: "relative" }}>
                <Card
                  style={{
                    border: "none",
                    backgroundColor,
                    color: "white",
                    borderRadius: 10,
                    minHeight: 250,
                    padding: 0,
                    marginTop: !isMobile && index === 1 ? -40 : 0,
                    marginLeft: !isMobile && index === 1 ? -30 : 0,
                    marginRight: !isMobile && index === 1 ? -30 : 0,
                    zIndex: !isMobile && index === 1 ? 1 : 0,
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    boxShadow: isHovered
                      ? "0 12px 24px rgba(0, 0, 0, 0.3)"
                      : "0 4px 10px rgba(0, 0, 0, 0.15)",
                  }}
                  bodyStyle={{ padding: 30, paddingBottom: 50 }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <Paragraph
                    style={{
                      color: "white",
                      fontSize: "16px",
                      lineHeight: 1.6,
                    }}
                  >
                    “{item.content}”
                  </Paragraph>
                </Card>

                {/* Avatar melayang di luar card */}
                <div
                  style={{
                    position: "absolute",
                    bottom: -50,
                    left: "50%",
                    transform: "translateX(-50%)",
                    textAlign: "center",
                    zIndex: 10,
                    width: "100%",
                  }}
                >
                  <Avatar
                    icon={<UserOutlined />}
                    size={50}
                    style={{
                      backgroundColor: "#f0f0f0",
                      color: backgroundColor,
                      border: "2px solid white",
                    }}
                  />
                  <div
                    style={{
                      marginTop: 10,
                      fontWeight: "bold",
                      color: "white",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.name}
                  </div>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Testimoni;
