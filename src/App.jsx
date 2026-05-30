import { Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./constants/ScrollToTop.js";
import { servicesData } from "./constants/services";
import { browsCoursesData, lashLiftCoursesData, eyelinerCoursesData, lipBlushCoursesData, smpCoursesData } from "./constants/academy.js";

// Lazy load page components
const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const ServicesPage = lazy(() => import("./pages/ServicesPage.jsx"));
const AcademyPage = lazy(() => import("./pages/AcademyPage.jsx"));
const AcademyHomePage = lazy(() => import("./pages/AcademyHomePage.jsx"));
const BlogPage = lazy(() => import("./pages/BlogPage.jsx"));
const AftercarePage = lazy(() => import("./pages/AftercarePage.jsx"));

const LoadingFallback = () => <div style={{ padding: "20px", textAlign: "center" }}>Loading...</div>;

const App = () => {
  const location = useLocation();
  const shouldRenderScrollToTop = !location.pathname.includes("#book");

  return (
    <Suspense fallback={<LoadingFallback />}>
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
          <Route path="aftercare">
            <Route path="" element={<AftercarePage/>} />
            <Route path="brows" element={<AftercarePage/>} />
            <Route path="lash_lift" element={<AftercarePage/>} />
            <Route path="eyeliner" element={<AftercarePage/>} />
            <Route path="lip_blush" element={<AftercarePage/>} />
            <Route path="smp" element={<AftercarePage/>} />
          </Route>
        </Routes>
      </>
    </Suspense>
  );
};

export default App;

// TODO: Fix routing for academy links is weird – need to double click to move away from /academy/brows in some cases.
