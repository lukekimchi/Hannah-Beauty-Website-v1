import React from "react";
import { motion as m } from "framer-motion";
import { fadeInUp, fadeInDown } from "../constants/animations";

const AboutUs = () => {
  return (
    <m.div className="flex justify-center" {...fadeInUp(0.1)}>
      <div className="w-5/6 border-t border-gray-500 py-20">
        <h2 className="mb-16">About Us</h2>
        <div className="flex h-full w-5/6 md:w-[60%] mx-auto text-center leading-7">
          <m.div {...fadeInDown(0.1)}>
            Welcome to Hannah Beauty, where we're all about celebrating your
            natural beauty with a touch of our expertise! At Hannah Beauty, we
            specialize in enhancing your features with precision and care. From
            perfectly shaped brows to lashes, eyeliner to lip blush, and scalp
            micro-pigmentation, our treatments are designed to enhance your
            unique beauty, leaving you with a look that's both stunning and
            seamlessly natural.
            <br />
            <br />
            What sets us apart is our advanced nano hairstroke and shading
            technique for brows. As pioneers of this technique here in Auckland,
            New Zealand, we're determined to stay at the forefront of innovation
            in the beauty industry.
            <br />
            But it's not just about the techniques – it's about how you feel. We
            want you to feel relaxed and confident in our hands. Our friendly
            team is here to ensure your experience is as comfortable and
            enjoyable as possible, whether it's your first time or you're a
            regular. With 6 years of experience, we're growing even more
            passionate about satisfying our customers' cosmetic desires.
            <br />
            <br />
            So, if you're looking to enhance your natural beauty with a little
            help from the experts, come and visit us at Hannah Beauty. Let's
            bring out your best features together!
          </m.div>
        </div>
      </div>
    </m.div>
  );
};

export default AboutUs;
