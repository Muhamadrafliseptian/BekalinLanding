import React, { useState } from "react";
import { Layout, Drawer, Button } from "antd";
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

  const MenuLinks = ({ onClick }) => (
    <nav style={{ display: "flex", flexDirection: isSmallScreen ? "column" : "row", gap: "1.5rem" }}>
      {menuItems.map((item) => (
        <a
          key={item.key}
          href={`#${item.key}`}
          onClick={onClick}
          style={{
            fontWeight: 500,
            textDecoration: "none",
            color: "#000",
          }}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );

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
        padding: "0 2rem",
        height: 64,
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={Logo}
          alt="Logo"
          style={{ height: 40, objectFit: "contain" }}
        />
      </div>

      {/* Desktop / Mobile Navigation */}
      {isSmallScreen ? (
        <>
          <Button
            type="text"
            icon={<MenuOutlined style={{ fontSize: 24 }} />}
            onClick={() => setOpen(true)}
            style={{ border: "none" }}
          />
          <Drawer
            title="Navigation"
            placement="right"
            onClose={() => setOpen(false)}
            open={open}
            bodyStyle={{ padding: "1.5rem 1rem" }}
          >
            <MenuLinks onClick={() => setOpen(false)} />
          </Drawer>
        </>
      ) : (
        <MenuLinks />
      )}
    </Header>
  );
};

export default Navbar;
