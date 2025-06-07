import React, { useState } from "react";
import { Row, Col, Card, Modal } from "antd";
import menuImage from "../../assets/home/menu/1.png";
import menuImage2 from "../../assets/home/menu/2.png";
import { useResponsive } from "../../helpers/responsive";

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
  const { isMobile } = useResponsive();

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedLabel, setSelectedLabel] = useState("");

  const handleImageClick = (image, label) => {
    setSelectedImage(image);
    setSelectedLabel(label);
    setModalVisible(true);
  };

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
              onClick={() => handleImageClick(menu.image, menu.label)}
            >
              <img
                src={menu.image}
                alt={menu.label}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 10,
                  cursor: "pointer",
                }}
              />
            </Card>
          </Col>
        ))}
      </Row>

      <Modal
        open={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={null}
        centered
        title={selectedLabel}
        width={400} // ukuran ideal
      >
        <img
          src={selectedImage}
          alt={selectedLabel}
          style={{ width: "100%", height: "auto", borderRadius: 10 }}
        />
      </Modal>
    </div>
  );
};

export default FoodMenu;
