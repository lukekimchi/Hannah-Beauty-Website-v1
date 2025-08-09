import { useState } from "react";

import { motion as m, AnimatePresence } from "framer-motion";
import { fadeInUp, fadeInRight, fadeInLeft } from "../constants/animations";

export default function CourseDetailCard({ course }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <m.div
      className="py-10 hover:-translate-x-1 hover:-translate-y-1 transition duration-200 ease-in-out border border-black rounded-lg bg-white w-full"
      {...fadeInUp}
    >
      <m.h3 className="uppercase px-14" {...fadeInLeft}>
        {course.name}
      </m.h3>
      <div className="flex py-10 px-14">
        <m.p className="description" {...fadeInRight}>
          {course.description}
        </m.p>
      </div>
      <div className="flex justify-between items-center px-14">
        <m.p className="description" {...fadeInLeft}>
          <em>
            {course.duration} total
          </em>
        </m.p>
        <button
          className="underline text-sm"
          onClick={() => setExpanded((prev) => !prev)}
        >
          {expanded ? "Show less" : "Learn more"}
        </button>
      </div>
      <AnimatePresence>
        {expanded && (
          <m.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="description overflow-hidden px-14 pt-6"
          >
            <div>
              <ul className="list-disc ml-5 mb-2">
                {course.details?.sessions && (
                  <p>
                    <strong>Sessions<br /></strong> {course.details.sessions}
                  </p>
                )}
                <br />
                {course.details?.model && (
                  <p>
                    <strong>Model<br /></strong> {course.details.model}
                  </p>
                )}
              </ul>
              {course.extra && <p className="text-gray-700">{course.extra}</p>}
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </m.div>
  );
}
