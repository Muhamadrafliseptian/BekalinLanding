import React from 'react';
import PromoImage from "../../assets/home/promo/1.png";

const Promo = () => {
  return (
    <div style={{ width: '100%', margin: 0, padding: 0 }}>
      <img
        src={PromoImage}
        alt="Promo"
        style={{
          width: '100%',
          display: 'block',
          objectFit: 'cover'
        }}
      />
    </div>
  );
};

export default Promo;
