import { React } from "react";
import { motion as m } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight } from "../constants/animations";
import { Link, Outlet } from "react-router-dom";

const ServicePreviewCard = ({ name, img, preview }) => {
  return (
    <>
      <Link to={`/${name}`}>
        <m.div className="border-b border-gray-500 py-10" {...fadeInUp}>
          <m.h3 className="uppercase" {...fadeInRight}>{name.replace("_", " ")}</m.h3>
          <m.div className="flex py-5 relative" {...fadeInLeft}>
            <m.img
              className="h-48 w-48 object-cover object-center"
              src={img}
              alt={name}
              {...fadeInLeft}
            />
            <p className="description pl-14 w-[60%]">{preview}</p>
            <p className="uppercase absolute bottom-0 right-0 mb-5 mr-5 underline text-slate-600 text-md clickable">
              Learn More
            </p>
          </m.div>
        </m.div>
        <Outlet />
      </Link>
    </>
  );
};

export default ServicePreviewCard;

// TODO: LEARN MORE should link to relevant tab in ServicesPage.
