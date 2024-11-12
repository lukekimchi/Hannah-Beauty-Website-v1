import MainLayout from "../layout/MainLayout";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import CourseDetails from "../components/CourseDetails";
import CourseIntroSection from "../components/CourseIntroSection";
import { Link, Outlet } from "react-router-dom";
import { motion as m } from "framer-motion";
import {
  fadeInDown,
  fadeIn,
  fadeInRight,
  fadeInLeft,
  fadeInUp,
} from "../constants/animations";
import { Italic } from "lucide-react";

const AcademyPage = ({ serviceCourseType }) => {
  return (
    <>
      <MainLayout>
        <m.div className="flex justify-center" {...fadeInDown(0)}>
          {/* TABS VERSION – When more academy services are ready to be launched */}
          {/* <Tabs defaultValue={serviceCourseType[0].serviceType}>
            <div className="flex justify-center">
              <TabsList className="w-[90%] justify-between px-12 rounded-none py-5 mt-10">
                <TabsTrigger className="tab-trigger" value="brows">
                  <Link to="/academy/brows">BROWS</Link>
                </TabsTrigger>
                <TabsTrigger className="tab-trigger" value="lash_lift">
                  <Link to="/academy/lash_lift">LASH LIFT</Link>
                </TabsTrigger>
                <TabsTrigger className="tab-trigger" value="eyeliner">
                  <Link to="/academy/eyeliner">EYELINER</Link>
                </TabsTrigger>
                <TabsTrigger className="tab-trigger" value="lip_blush">
                  <Link to="/academy/lip_blush">LIP BLUSH</Link>
                </TabsTrigger>
                <TabsTrigger className="tab-trigger" value="smp">
                  <Link to="/academy/smp">SMP</Link>
                </TabsTrigger>
              </TabsList>
            </div>

            {serviceCourseType[0].serviceType === "brows" && (
              <div className="flex flex-col items-center pt-20 pb-10">
                <h2>Learn Nano-Hairstroke & Shading</h2>
                <p>
                  <em>with</em> Hannah Beauty
                </p>
              </div>
            )}
            {serviceCourseType[0].serviceType != "brows" && (
              <div className="flex flex-col h-[2000px]">
                <m.div className="flex flex-col items-center mt-20">
                  <m.img
                    className="h-[100px] object-cover mt-5 mb-2"
                    src="./images/logo.webp"
                    alt="Hannah Beauty Logo"
                    {...fadeInLeft}
                  />
                  <m.p
                    className="text-lg text-black text-center"
                    {...fadeInRight}
                  >
                    Hannah Beauty
                    <br />
                    Academy
                  </m.p>
                </m.div>
                <div className="h-fit text-center mt-10 p-10">
                  <m.h3 {...fadeInDown(0)}>COMING SOON</m.h3>
                  <m.p {...fadeInUp(0.2)}>Stay tuned.</m.p>
                </div>
              </div>
            )}

            <div className="flex justify-center px-5">
              <div className="mx-auto">
                {serviceCourseType.map((course) => (
                  <TabsContent
                    key={course.id}
                    value={course.serviceType}
                    className="w-5/6 mx-auto bg-primary px-2 my-5"
                    {...fadeIn}
                  >
                    <CourseDetails course={course} />
                  </TabsContent>
                ))}
              </div>
            </div>
          </Tabs> */}

          {/* NON-TAB VERSION – ONLY BROWS COURSES available as of November 2024 */}
          <div className="flex-col justify-center px-5 w-2/3">
            {serviceCourseType[0].serviceType === "brows" && (
              <div className="flex flex-col items-center pt-20 pb-20">
                <h2>Learn Nano-Hairstroke & Shading</h2>
                <p>
                  <em>become a master with Hannah Beauty</em> 
                </p>
              </div>
            )}
            <div className="mx-auto">
              <CourseIntroSection
                serviceType={serviceCourseType[0].serviceType}
              />
              <div className="flex flex-col items-center pt-10">
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
