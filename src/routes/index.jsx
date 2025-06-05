import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/home/index-home";
import Navbar from "../components/navbar";
import AOS from 'aos';
import 'aos/dist/aos.css';

import React, { useEffect } from 'react';

const IndexRoutes = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default IndexRoutes;
