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
            {serviceCourseType[0].serviceType === "brows" && (
              <div className="py-10 my-20 border-t border-gray-500">
                <p className="text-lg">
                  <strong>The Model</strong>
                </p>
                <br />
                <p className="description">
                  For all Hannah Beauty Academy courses, you will have the
                  opportunity to apply your learned skills on a model. The model
                  may be referred by you or by Hannah Beauty, and must meet the
                  following requirements:
                </p>
                <br />
                <ul className="description list-disc ml-5">
                  <li>Not pregnant or breastfeeding.</li>
                  <li>At least 18 years old.</li>
                  <li>
                    Must not have any active skin conditions or infections in
                    the brow area.
                  </li>
                  <li>
                    First time models who have never had semi-permanent brows
                    done before, or who have very minimal pigment residue.
                    Review may be required by photo.
                  </li>
                  <li>
                    Model should be comfortable with having videos and photos
                    taken during the course and uploaded to Hannah Beauty's
                    social media and website.
                  </li>
                </ul>
              </div>
            )}
          </div>
        </m.div>
      </MainLayout>
      <Outlet />
    </>
  );
};

export default AcademyPage;
