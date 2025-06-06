import Benefit from "./benefit";
import Diskon from "./diskon";
import Faq from "./faq";
import FoodMenu from "./food-menu";
import Hero from "./hero";
import Promo from "./promo";
import Testimoni from "./testimoni";
import WhatInside from "./what-inside";
import WhyUs from "./why-us";
const HomePage = () => {
  return (
    <>
      <Hero />
      <Diskon />
      <Promo />
      <FoodMenu/>
      <Benefit/>
      <WhyUs/>
      <WhatInside/>
      <Testimoni/>
      <Faq/>
    </>
  );
};

export default HomePage;
