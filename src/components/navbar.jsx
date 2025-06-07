import React, { useState } from "react";
import { Layout, Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useResponsive } from "../helpers/responsive";
import Logo from "../assets/logo.png";
import { openWhatsApp } from "./openWhatsApp";
import { useNavigate } from "react-router-dom";

const { Header } = Layout;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { isMobile, isTablet } = useResponsive();
  const isSmallScreen = isMobile || isTablet;
  const navigate = useNavigate();

  const scrollToFaq = () => {
    const el = document.getElementById("faq");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/#faq");
    }
  };

  const handleMenuClick = (item) => {
    switch (item) {
      case "Home":
        if (window.location.pathname === "/") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }, 100);
        }
        break;
      case "Faq":
        scrollToFaq();
        break;
      case "Our Community":
        window.open("https://healthy-go.id/community/", "_blank");
        break;
      default:
        break;
    }
    setOpen(false);
  };

  const menuItems = ["Home", "Faq", "Our Community"];

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
        style={{
          display: "flex",
          alignItems: "center",
          marginLeft: isMobile ? "5px" : "30px",
        }}
      >
        <img
          src={Logo}
          alt="Logo"
          style={{ height: 70, objectFit: "contain", cursor: "pointer" }}
          onClick={() => navigate("/")}
        />
      </div>

      {isSmallScreen ? (
        <>
          <div style={{ marginRight: 15 }}>
            <Button
              type="text"
              icon={<MenuOutlined style={{ fontSize: 24 }} />}
              onClick={() => setOpen(true)}
              style={{ border: "none" }}
            />
          </div>
          <Drawer
            title="Bekalin"
            placement="left"
            onClose={() => setOpen(false)}
            open={open}
            width="70%"
            bodyStyle={{ padding: "1rem 0" }}
          >
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  onClick={() => handleMenuClick(item)}
                  style={{
                    padding: "12px 20px",
                    fontWeight: 500,
                    color: "#0B51D5",
                    cursor: "pointer",
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
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
                onClick={() => openWhatsApp()}
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
            gap: "1.5rem",
            marginRight: "1.5rem",
            color: "#0B51D5",
            fontWeight: 500,
          }}
        >
          {menuItems.map((item, index) => (
            <span
              key={index}
              onClick={() => handleMenuClick(item)}
              style={{ cursor: "pointer" }}
            >
              {item}
            </span>
          ))}
          <Button
            type="primary"
            style={{
              backgroundColor: "#0B51D5",
              borderRadius: 24,
              fontWeight: "bold",
              height: 36,
              padding: "0 24px",
            }}
            onClick={() => openWhatsApp()}
          >
            Order Now
          </Button>
        </div>
      )}
    </Header>
  );
};

export default Navbar;
