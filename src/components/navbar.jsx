import React, { useState } from "react";
import { Layout, Drawer, Button, Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useResponsive } from "../helpers/responsive";
import Logo from "../assets/logo.png";

const { Header } = Layout;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { isMobile, isTablet } = useResponsive();
  const isSmallScreen = isMobile || isTablet;

  const menuItems = [
    { key: "hero", label: "Home" },
    { key: "features", label: "Faq" },
    { key: "testimonials", label: "Our Community" },
    { key: "contact", label: "Contact" },
  ];

  const handleClick = (e) => {
    const section = document.getElementById(e.key);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <Header
      style={{
        position: "fixed",
        zIndex: 1000,
        width: "100%",
        backgroundColor: "#FFE034",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 0,
        height: 64,
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        style={{ display: "flex", alignItems: "center", marginLeft: "30px" }}
      >
        <img
          src={Logo}
          alt="Logo"
          style={{ height: 70, objectFit: "contain" }}
        />
      </div>

      {isSmallScreen ? (
        <>
          <Button
            type="text"
            icon={<MenuOutlined style={{ fontSize: 24 }} />}
            onClick={() => setOpen(true)}
            style={{ border: "none" }}
          />
          <Drawer
            title="Bekalin"
            placement="left"
            onClose={() => setOpen(false)}
            open={open}
            width="70%" // 👈 ini kuncinya
            bodyStyle={{ padding: "1rem 0" }}
          >
            <Menu
              mode="vertical"
              onClick={handleClick}
              items={menuItems}
              className="menu-item"
              style={{ border: "none" }}
            />
            <div style={{ padding: 10 }}>
              <Button
                type="primary"
                block
                style={{
                  backgroundColor: "#0B51D5",
                  borderRadius: 24,
                  marginTop: 16,
                  fontWeight: "bold",
                }}
              >
                Order Now
              </Button>
            </div>
          </Drawer>
        </>
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginRight: "1rem",
          }}
        >
          <Menu
            mode="horizontal"
            onClick={handleClick}
            items={menuItems}
            className="custom-menu"
            style={{
              backgroundColor: "#FFE034",
              borderBottom: "none",
              fontWeight: 500,
            }}
          />
          <Button
            type="primary"
            style={{
              backgroundColor: "#0B51D5",
              borderRadius: 24,
              fontWeight: "bold",
              height: 36,
              padding: "0 24px",
            }}
          >
            Order Now
          </Button>
        </div>
      )}
    </Header>
  );
};

export default Navbar;
