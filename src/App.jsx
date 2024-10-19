import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import ScrollToTop from "./constants/ScrollToTop.js";
import { servicesData } from "./constants/services";

const App = () => {
  const location = useLocation();
  const shouldRenderScrollToTop = !location.pathname.includes("#book");

  return (
    <>
      {shouldRenderScrollToTop && <ScrollToTop />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="services"
          element={<ServicesPage service={servicesData[0]} />}
        />
        <Route
          path="brows"
          element={<ServicesPage service={servicesData[0]} />}
        />
        <Route
          path="lash_lift"
          element={<ServicesPage service={servicesData[1]} />}
        />
        <Route
          path="eyeliner"
          element={<ServicesPage service={servicesData[2]} />}
        />
        <Route
          path="lip_blush"
          element={<ServicesPage service={servicesData[3]} />}
        />
        <Route
          path="smp"
          element={<ServicesPage service={servicesData[4]} />}
        />
        <Route path="blog" element={<BlogPage />} />
      </Routes>
    </>
  );
};

export default App;

// TODO: Fix routing for service preview LEARN MORE button.
