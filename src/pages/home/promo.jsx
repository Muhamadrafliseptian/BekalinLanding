import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import PromoImage from "../../assets/home/promo/1.png";

const Promo = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ position: "relative", overflow: "hidden", width: "100%" }}>
      {/* Confetti as full-screen absolute element */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: windowSize.width,
          height: windowSize.height,
          pointerEvents: "none", // biar ga ganggu klik
          zIndex: 10,
        }}
      >
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          numberOfPieces={150}
          recycle={true}
          colors={["#FFD700", "#FFC107", "#FFB300"]}
        />
      </div>

      {/* Promo image below confetti */}
      <img
        src={PromoImage}
        alt="Promo"
        style={{
          width: "100%",
          display: "block",
          objectFit: "cover",
          zIndex: 1,
          position: "relative",
        }}
      />
    </div>
  );
};

export default Promo;
