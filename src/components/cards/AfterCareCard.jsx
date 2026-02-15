import { motion as m } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight } from "../../constants/animations";

const AfterCareCard = ({ title, sections }) => {
  return (
    <m.div className="flex flex-col w-full py-10 my-10" {...fadeInUp}>
      <h3 className="uppercase pb-5">{title}</h3>
      {sections && sections.map((section, index) => (
        <m.div key={index} className="flex gap-4 py-5 relative">
          <m.img
            className="w-48 min-h-full object-cover object-center flex-shrink-0"
            src={section.img}
            alt={section.title}
            {...fadeInLeft}
          />
          <m.div className="flex flex-col w-full">
            <h4 className="font-semibold mb-2">{section.title}</h4>
            <m.div
              className="aftercare-content text-justify w-full"
              dangerouslySetInnerHTML={{ __html: section.content }}
              {...fadeInRight}
            />
          </m.div>
        </m.div>
      ))}
    </m.div>
  );
};

export default AfterCareCard;
