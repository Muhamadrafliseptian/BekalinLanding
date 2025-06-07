import React from "react";
import { Row, Col, Card, Typography } from "antd";
import menuImage from "../../assets/home/menu/1.png";
import menuImage2 from "../../assets/home/menu/2.png";
import { useResponsive } from "../../helpers/responsive";

const { Text } = Typography;

const menuList = [
  {
    id: 1,
    label: "Menu batch",
    image: menuImage,
  },
  {
    id: 2,
    label: "Menu batch",
    image: menuImage2,
  },
];

const FoodMenu = () => {
  const { isMobile  } = useResponsive();
  return (
    <div
      style={{
        backgroundColor: "#FFE53C",
        padding: "60px 20px",
        textAlign: "center",
      }}
    >
      <Row gutter={[24, 24]} justify="center">
        {menuList.map((menu) => (
          <Col
            key={menu.id}
            xs={isMobile ? 12 : 24} 
            sm={12}
            md={12}
            lg={8}
            xl={6}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              hoverable
              style={{
                width: "100%",
                maxWidth: 300,
                borderRadius: 12,
                backgroundColor: "#E46119",
                border: "none",
                padding: 12,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              data-aos="fade-up"
              bodyStyle={{ padding: 0 }}
            >
              <img
                src={menu.image}
                alt={menu.label}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 10,
                  // marginBottom: 12,
                }}
              />
              {/* <Text style={{ color: "black", fontWeight: 500 }}>
                {menu.label}
              </Text> */}
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default FoodMenu;
