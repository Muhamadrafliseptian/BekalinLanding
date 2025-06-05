import Benefit from "./benefit";
import Diskon from "./diskon";
import FoodMenu from "./food-menu";
import Hero from "./hero";
import Promo from "./promo";
const HomePage = () => {
  return (
    <>
      <Hero />
      <Diskon />
      <Promo />
      <FoodMenu/>
      <Benefit/>
    </>
  );
};

export default HomePage;
