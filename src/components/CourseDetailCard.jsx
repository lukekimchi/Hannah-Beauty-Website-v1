import React from "react";
import { motion as m } from "framer-motion";
import { fadeInUp, fadeInRight, fadeInLeft } from "../constants/animations";

export default function CourseDetailCard({ course }) {
  return (
    <m.div className="py-10" {...fadeInUp}>
      <m.h3 className="uppercase" {...fadeInLeft}>
        {course.name}
      </m.h3>
      <div className="flex py-10 pl-14">
        <m.p className="description text-justify" {...fadeInRight}>
          {course.description}
        </m.p>
      </div>
      <div className="flex justify-between pl-14">
        <m.p className="description" {...fadeInLeft}>
          <em>
            {course.duration} total ({course.sessions})
          </em>
        </m.p>
        <m.p className="description" {...fadeInLeft}>
          <em>${course.price}</em>
        </m.p>
      </div>
    </m.div>
  );
}
