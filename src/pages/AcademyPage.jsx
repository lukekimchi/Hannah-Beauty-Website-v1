import { motion as m } from "framer-motion";
import { Outlet, useNavigate } from "react-router-dom";
import { fadeInDown } from "../constants/animations";
import MainLayout from "../layout/MainLayout";
import CourseIntroSection from "../components/CourseIntroSection";
import CourseDetails from "../components/CourseDetails";

const AcademyPage = ({ serviceCourseType }) => {
  const navigate = useNavigate();

  return (
    <>
      <MainLayout>
        <m.div className="flex justify-center" {...fadeInDown(0)}>
          <div className="flex-col justify-center px-5 w-2/3">
            {serviceCourseType[0].serviceType === "brows" && (
              <div className="flex flex-col items-center pt-20 pb-20">
                <h2>Learn Nano-Hairstroke & Shading</h2>
                <p>
                  <em>become a master with Hannah Beauty</em>
                </p>
              </div>
            )}
            {serviceCourseType[0].serviceType === "lash_lift" && (
              <div className="flex flex-col items-center pt-20 pb-20">
                <h2>Learn Lash Lift</h2>
                <p>
                  <em>become a master with Hannah Beauty</em>
                </p>
              </div>
            )}
            <div className="mx-auto">
              <CourseIntroSection
                serviceType={serviceCourseType[0].serviceType}
              />
              <div className="flex flex-col items-center py-20">
                <h2>Courses</h2>
              </div>
              {serviceCourseType.map((course) => (
                <CourseDetails course={course} />
              ))}
            </div>
          </div>
        </m.div>
      </MainLayout>
      <Outlet />
    </>
  );
};

export default AcademyPage;
