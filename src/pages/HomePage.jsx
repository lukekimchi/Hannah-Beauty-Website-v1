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
  const shouldScrollBook = location.hash === "#book";

  useEffect(() => {
    if (shouldScrollBook) {
      const element = document.getElementById("book");
      if (element) {
        const offset = element.offsetTop - 175;
        window.scrollTo({
          top: offset,
          behavior: "smooth",
        });
      }
    }
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
