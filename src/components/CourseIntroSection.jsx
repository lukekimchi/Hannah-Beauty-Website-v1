import React from "react";
import { motion as m } from "framer-motion";
import {
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  fadeInUp,
} from "../constants/animations";

// FIXME: This should be a modular component that can be reconfigured with props for different serviceTypes. This is a hack for now.

export default function CourseIntroSection({ serviceType }) {
  return (
    <>
      <m.div className="flex-col border-b border-gray-500 pb-10 w-full">
        <div className="flex justify-start py-10">
          <m.div className="my-auto">
            <m.img
              {...fadeInUp}
              className="w-full h-auto object-cover justify-between my-auto"
              src="/images/academy/machine.jpg"
            />
          </m.div>
          <m.div className="px-10 my-auto" {...fadeInRight}>
            <strong>What will you learn?</strong>
            <br />
            <br />
            In the Hannah Beauty Nano-Hairstroke & Shading courses, you will
            learn all the knowledge needed to become a skillful beautician. Nano
            hairstroke and shading is the most state-of-the-art technique,
            requiring a greater level of advanced technical expertise and
            equipment than microblading. Results are more realistic and hair
            strokes are finer. Hannah Beauty Academy courses offer an
            opportunity to become a master of this technique using the most
            advanced nano-hairstroke & shading machine. The following outlines
            the various concepts you will be learning:
            <br />
            <br />
          </m.div>
        </div>

        <div className="grid grid-cols-2 py-20 place-items-center border-y border-gray-500">
          <m.div className="align-middle">
            • Skin Anatomy <br />
            • Fitzpatrick Scale <br />
            • Colour Theory <br />
            • Machine and Needle <br />
            • Needle Selection
            <br />
          </m.div>
          <m.div className="">
            • Skin Approach Angle <br />
            • Design Theory <br />
            • Hairstroke Technique <br />
            • Latex Practice <br />
            • Hygiene <br />
          </m.div>
        </div>

        <div className="flex justify-end py-10">
          <m.div className="px-10 my-auto" {...fadeInLeft}>
            You will be given opportunities to apply these concepts into
            practice. This includes demonstrations by our beauty specialist,
            Hannah and ongoing practice using latex sheets by you.
            <br />
            <br />
            You will also receive a workbook including all information about the
            Nano-Hairstroke & Shading technique. Throughout the course, you can
            borrow our own machine and use the available pigments for practice.
            We will provide information about where you can source these
            materials at the end of the course, as they will not be provided to
            you directly.
          </m.div>
          <m.div className="my-auto">
            <m.img
              {...fadeInUp}
              className="w-full h-auto object-cover justify-between"
              src="/images/academy/brow.jpg"
            />
          </m.div>
        </div>
      </m.div>
    </>
  );
}
