import React from "react";
import { motion as m } from "framer-motion";

const Notice = ( {title, text}) => {
  return (
    <m.div>
      <div className="flex flex-col w-screen h-20 h-min-25 lg:p-10 p-12 bg-[#C92F2F] justify-center text-white">
        <p className="text-center text-2xl lg:text-xl uppercase">
          <strong>{title}</strong>
        </p>
        <p className="text-center text-xl text-semibold lg:text-lg">
          {text}
        </p>
      </div>
    </m.div>
  );
};

export default Notice;