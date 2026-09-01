import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import AcademyPage from "./pages/AcademyPage.jsx";
import AcademyHomePage from "./pages/AcademyHomePage.jsx";
import ScrollToTop from "./constants/ScrollToTop.js";
import { servicesData } from "./constants/services";
import { browsCoursesData, lashLiftCoursesData } from "./constants/academy.js";

const App = () => {
  const location = useLocation();
  // ScrollToTop 은 경로가 바뀔 때마다 맨 위로 올린다.
  // "/book" 은 예약 섹션까지 내려가야 하므로 제외한다.
  // (이전 조건은 pathname 에서 "#book" 을 찾고 있었는데,
  //  해시는 pathname 에 들어가지 않으므로 한 번도 걸린 적이 없다.)
  const shouldRenderScrollToTop = location.pathname !== "/book";

  return (
    <>
      {shouldRenderScrollToTop && <ScrollToTop />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* 예약 섹션으로 바로 가는 깨끗한 주소.
            "/#book" 은 해시라 서버로 전송되지 않아 구글 비즈니스 프로필,
            디렉터리, 인스타 프로필 링크 등 외부에 넣으면 잘려나간다. */}
        <Route path="book" element={<HomePage />} />
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
          {/* Courses we do not run were removed. Send their old URLs to the academy home. */}
          <Route path="*" element={<Navigate to="/academy" replace />} />
        </Route>
        {/* <Route path="blog" element={<BlogPage />} /> */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};

export default App;

// TODO: Fix routing for academy links is weird – need to double click to move away from /academy/brows in some cases.
