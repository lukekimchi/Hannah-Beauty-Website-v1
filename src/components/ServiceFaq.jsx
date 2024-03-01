import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  browsFaqData,
  lashLiftFaqData,
  eyelinerFaqData,
  lipBlushFaqData,
  smpFaqData,
} from "../constants/faq";
import { motion as m } from "framer-motion";
import { fadeInUp, fadeInLeftStagger } from "../constants/animations";

const ServiceFaq = ({ service }) => {
  const serviceImageMapping = {
    brows: browsFaqData,
    lash_lift: lashLiftFaqData,
    eyeliner: eyelinerFaqData,
    lip_blush: lipBlushFaqData,
    smp: smpFaqData,
  };

  const serviceFaqData = serviceImageMapping[service] || [];

  return (
    <div className="mt-44 mb-96">
      <m.h2 className="my-20 text-left" {...fadeInUp(0.2)}>
        FAQ.
      </m.h2>
      <Accordion type="single" collapsible>
        {serviceFaqData.map((pair, index) => (
          <m.div key={index} {...fadeInLeftStagger(0.1 * index)}>
            <AccordionItem value={index + 1}>
              <AccordionTrigger className="question text-left py-5">
                {pair.q}
              </AccordionTrigger>
              <AccordionContent className="description m-5 text-left">
                {pair.a}
              </AccordionContent>
            </AccordionItem>
          </m.div>
        ))}
      </Accordion>
    </div>
  );
};

export default ServiceFaq;
