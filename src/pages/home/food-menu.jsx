import React from "react";
import { Row, Col, Card, Typography } from "antd";
import menuImage from "../../assets/home/menu/1.png"; // pastikan path-nya sesuai

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
    image: menuImage,
  },
];

const FoodMenu = () => {
  return (
    <div
      style={{
        backgroundColor: "#FFE53C",
        padding: "60px 20px",
        textAlign: "center",
      }}
    >
      <Row gutter={[32, 32]} justify="center">
        {menuList.map((menu) => (
          <Col xs={24} sm={12} md={8} lg={6} key={menu.id}>
            <Card
              hoverable
              style={{
                borderRadius: 12,
                backgroundColor: "#E46119",
                padding: 30,
                height: 320,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              bodyStyle={{ padding: 0 }}
            >
              <img
                src={menu.image}
                alt={menu.label}
                style={{ width: "100%", borderRadius: 10 }}
              />
              <Text style={{ color: "black", fontWeight: 500 }}>
                {menu.label}
              </Text>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default FoodMenu;
