import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/home/index-home";
import Navbar from "../components/navbar";
const IndexRoutes = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  </Router>
);

export default IndexRoutes;
