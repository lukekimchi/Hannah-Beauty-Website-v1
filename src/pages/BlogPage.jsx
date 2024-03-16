import React from "react";
import MainLayout from "../layout/MainLayout";
import { motion as m } from "framer-motion";
import { fadeInDown, fadeInUp, fadeInLeft, fadeInRight } from "../constants/animations";

const BlogPage = () => {
  return (
    <MainLayout>
      <div className="flex flex-col h-[2000px]">
        <m.div className="flex flex-col items-center mt-20" >
          <m.img
            className="h-[100px] object-cover mt-5 mb-2"
            src="./images/logo.webp"
            alt="Hannah Beauty Logo"
            {...fadeInLeft}
          />
          <m.p className="text-lg text-black text-center" {...fadeInRight}>Hannah Beauty<br/>Academy</m.p>
        </m.div>
        <div className="h-fit text-center mt-10 p-10">
          <m.h3 {...fadeInDown(0)}>COMING SOON</m.h3>
          <m.p {...fadeInUp(0.2)}>Stay tuned.</m.p>
        </div>
      </div>
    </MainLayout>
  );
};

export default BlogPage;

// TODO: add images above text
