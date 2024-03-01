import React, { useState, useEffect } from "react";
import backgroundImageWide from "../assets/hannah_wide_shift_right.webp";
import backgroundImageNarrow from "../assets/hannah_narrow.webp";
import { motion as m } from "framer-motion";
import { fadeIn, fadeInUp } from "../constants/animations";

const LandingPage = () => {
  const [backgroundImage, setBackgroundImage] = useState(backgroundImageWide);
  useEffect(() => {
    const handleResize = () => {
      const newBackgroundImage =
        window.innerWidth <= 1200 ? backgroundImageNarrow : backgroundImageWide;
      setBackgroundImage(newBackgroundImage);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <m.div
        className="flex h-screen w-screen"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        {...fadeIn}
      >
        <div className="p-10 w-40vw">
          <div className="flex flex-col text-white">
            <m.span
              className="flex text-[13rem] my-[-75px] lg:my-[-55px] lg:text-[9rem] font-black  justify-start"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              HANNAH
            </m.span>
            <m.span
              className="flex text-[13rem] my-[-75px] lg:my-[-55px] lg:text-[9rem] font-black justify-start"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 1.7, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              BEAUTY
            </m.span>
            <div className="flex justify-between text-white p-2 pr-8">
              <a href="/brows">
                <m.p {...fadeInUp(0)}>BROWS</m.p>
              </a>
              <a href="/lash_lift">
                <m.p {...fadeInUp(0.1)}>LASHES</m.p>
              </a>
              <a href="/eyeliner">
                <m.p {...fadeInUp(0.2)}>EYELINE</m.p>
              </a>
              <a href="/lip_blush">
                <m.p {...fadeInUp(0.3)}>LIPS</m.p>
              </a>
              <a href="/smp">
                <m.p {...fadeInUp(0.4)}>SMP</m.p>
              </a>
            </div>
          </div>
        </div>
      </m.div>
    </div>
  );
};

export default LandingPage;
