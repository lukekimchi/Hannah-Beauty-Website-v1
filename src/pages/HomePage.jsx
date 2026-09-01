import { useEffect } from "react";
import {
  LandingPage,
  ServicesPreview,
  BookAppointment,
  Gallery,
  Reviews,
  MeetTheTeam,
  AboutUs
} from "../components";
import MainLayout from "../layout/MainLayout";
import { useLocation } from "react-router-dom";
import { googleReviewData } from "../constants/reviews";

const HomePage = () => {
  const location = useLocation();
  const shouldScrollBook =
    location.hash === "#book" || location.pathname === "/book";

  useEffect(() => {
    if (!shouldScrollBook) return;

    // 예약 섹션 위쪽 이미지들이 뒤늦게 로드되면서 페이지 높이가 계속 바뀐다.
    // 한 번만 스크롤하면 그 사이 레이아웃이 밀려 섹션을 지나쳐 버리므로,
    // 높이가 바뀔 때마다 위치를 다시 맞춘다.
    let cancelled = false;
    let first = true;

    const stop = () => {
      cancelled = true;
    };

    const scrollToBook = () => {
      if (cancelled) return;
      const element = document.getElementById("book");
      if (!element) return;
      // offsetTop 은 레이아웃이 바뀌면 어긋나므로 현재 위치로 계산한다.
      const top = element.getBoundingClientRect().top + window.scrollY - 175;
      // 처음 한 번만 부드럽게 내려가고, 이후 보정은 티 나지 않게 즉시 이동한다.
      window.scrollTo({ top, behavior: first ? "smooth" : "auto" });
      first = false;
    };

    // 손님이 직접 스크롤하기 시작하면 더 이상 끼어들지 않는다.
    window.addEventListener("wheel", stop, { once: true, passive: true });
    window.addEventListener("touchstart", stop, { once: true, passive: true });

    scrollToBook();

    const observer = new ResizeObserver(scrollToBook);
    observer.observe(document.body);

    // 로드가 끝나면 더 볼 필요가 없다. 최대 8초까지만 따라간다.
    const done = setTimeout(() => observer.disconnect(), 8000);

    return () => {
      clearTimeout(done);
      observer.disconnect();
      window.removeEventListener("wheel", stop);
      window.removeEventListener("touchstart", stop);
    };
  }, [location]);

  // useEffect(() => {
  //   // Use setTimeout to wait for 3 seconds before smooth scrolling
  //   const timeoutId = setTimeout(() => {
  //     // Get the container element by ID (make sure to add this element to your JSX)
  //     const container = document.getElementById("scrollContainer");

  //     if (!shouldScrollBook) {
  //       // Scroll the container down by 100vh with smooth behavior
  //       container.scrollBy({
  //         top: window.innerHeight,
  //         behavior: "smooth",
  //       });
  //     }
  //   }, 3000);

  //   // Clear the timeout if the component unmounts before 3 seconds
  //   return () => clearTimeout(timeoutId);
  // }, []);

  return (
    <>
      {/* <div
        id="scrollContainer"
        style={{
          overflowY: "scroll",
          height: "100vh",
          scrollBehavior: "smooth",
          transition: "scroll-margin 4s ease-in-out",
        }}
      > */}
      <LandingPage />
      <MainLayout>
        <ServicesPreview />
        <BookAppointment />
        <Gallery />
        <Reviews reviewData={googleReviewData} />
        <MeetTheTeam />
        <AboutUs />
      </MainLayout>
      {/* </div> */}
    </>
  );
};

export default HomePage;

// TODO: Making landing page scroll up after some time doesn't seem to work alongside the bookappointment.
// Might have to create a separate booking page.
