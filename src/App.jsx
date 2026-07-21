import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import AcademyPage from "./pages/AcademyPage.jsx";
import AcademyHomePage from "./pages/AcademyHomePage.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import ScrollToTop from "./constants/ScrollToTop.js";
import { servicesData } from "./constants/services";
import { browsCoursesData, lashLiftCoursesData, eyelinerCoursesData, lipBlushCoursesData, smpCoursesData } from "./constants/academy.js";

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
        <Route path="academy">
          <Route path="" element={<AcademyHomePage/>} />
          <Route path="brows" element={<AcademyPage serviceCourseType={browsCoursesData} />} />
          <Route path="lash_lift" element={<AcademyPage serviceCourseType={lashLiftCoursesData} />} />
          <Route path="eyeliner" element={<AcademyPage serviceCourseType={eyelinerCoursesData} />} />
          <Route path="lip_blush" element={<AcademyPage serviceCourseType={lipBlushCoursesData} />} />
          <Route path="smp" element={<AcademyPage serviceCourseType={smpCoursesData} />} />
        </Route>
        <Route path="blog" element={<BlogPage />} />
      </Routes>
    </>
  );
};

export default App;

// TODO: Fix routing for academy links is weird – need to double click to move away from /academy/brows in some cases.
