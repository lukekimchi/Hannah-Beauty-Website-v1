import { Outlet, Link } from "react-router-dom";
import { fadeInDownStagger, fadeInUp, fadeInDown } from "../constants/animations";
import MainLayout from "../layout/MainLayout";
import { Reviews } from "../components";
import { academyReviewData } from "../constants/reviews";
import { motion as m } from "framer-motion";

const sections = [
  {
    label: "Brows",
    url: "/academy/brows",
    img: "/images/academy/brows/machine.webp",
    alt: "Brows Course",
  },
  {
    label: "Lash Lift",
    url: "/academy/lash_lift",
    img: "/images/academy/lash_lift/student.webp",
    alt: "Lash Lift Course",
  },
];

const AcademyHomePage = () => {
  return (
    <>
      <MainLayout>
        {/* Header Section */}
        <m.div className="flex flex-col items-center mt-20" >
          <m.img
            className="h-[100px] object-cover mt-5 mb-2"
            src="./images/logo.webp"
            alt="Hannah Beauty Logo"
            {...fadeInDown(0)}
          />
        </m.div>
        <m.div className="w-full flex flex-col items-center pb-10" {...fadeInUp(0)}>
          <m.h2 className="text-center">Hannah Beauty Academy</m.h2>
          <m.p className="description text-gray-600 text-center max-w-xl">
            Advance your skills with our expert-led courses in Brows and Lash
            Lift. Select a course below to get started.
          </m.p>
        </m.div>

        {/* Course Sections */}
        <div className="flex flex-col md:flex-row gap-8 w-full items-center justify-center py-16 px-10">
          {sections.map((section, index) => (
            <m.div
              key={section.label}
              {...fadeInDownStagger(index * 0.2)}
              className="w-full md:w-1/3 flex flex-col items-center"
            >
              <Link
                to={section.url}
                className="group w-full flex flex-col items-center text-center clickable"
              >
                <img
                  src={section.img}
                  alt={section.alt}
                  className="w-full h-64 object-cover rounded-md border border-gray-200 shadow-sm group-hover:shadow-md transition-shadow filter grayscale"
                />
                <h3 className="mt-6 uppercase">{section.label}</h3>
              </Link>
            </m.div>
          ))}
        </div>

        {/* Reviews Section */}
        <Reviews reviewData={academyReviewData} />
      </MainLayout>
      <Outlet />
    </>
  );
};

export default AcademyHomePage;
