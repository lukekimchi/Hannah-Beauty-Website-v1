import { serviceTypeIntros } from "../constants/academy";
import { motion as m } from "framer-motion";
import {
  fadeInLeft,
  fadeInRight,
  fadeInUp
} from "../constants/animations";

export default function CourseIntroSection({ serviceType }) {
  const serviceTypeIntro = serviceTypeIntros[serviceType];

  if (!serviceTypeIntro) {
    return <div>Service not found.</div>; // Fallback for invalid serviceType
  }

  const { title, description, concepts, practical, images } = serviceTypeIntro;

  // Dynamically split the concepts array into two halves
  const midIndex = Math.ceil(concepts.length / 2);
  const firstColumn = concepts.slice(0, midIndex);
  const secondColumn = concepts.slice(midIndex);

  return (
    <>
      <m.div className="flex-col border-b border-gray-500 pb-10 w-full">
        <div className="flex justify-start py-10">
          <m.div className="my-auto">
            <m.img
              {...fadeInUp}
              className="w-full h-auto object-cover justify-between my-auto"
              src={images.primary}
            />
          </m.div>
          <m.div className="px-10 my-auto text-justify" {...fadeInRight}>
            <strong>{title}</strong>
            <br />
            <br />
            {description}
            <br />
            <br />
          </m.div>
        </div>

        <div className="grid grid-cols-2 py-20 place-items-center border-y border-gray-500">
          <m.div className="align-middle">
            {firstColumn.map((item, idx) => (
              <div key={idx} className="">• {item}</div>
            ))}
          </m.div>
          <m.div className="align-middle">
            {secondColumn.map((item, idx) => (
              <div key={idx} className="">• {item}</div>
            ))}
          </m.div>
        </div>

        <div className="flex justify-end py-10 text-justify">
          <m.div className="pr-20 my-auto" {...fadeInLeft}>
            {practical}
          </m.div>
          <m.div className="my-auto">
            <m.img
              {...fadeInUp}
              className="w-full h-auto object-cover justify-between"
              src={images.secondary}
            />
          </m.div>
        </div>
      </m.div>
    </>
  );
}
