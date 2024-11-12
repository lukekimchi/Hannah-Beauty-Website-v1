import { React } from "react";
import { Link, Outlet } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ServiceDetails from "../components/ServiceDetails";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion as m } from "framer-motion";
import { fadeInDown } from "../constants/animations";
import { servicesData } from "../constants/services";
import { fadeIn } from "../constants/animations";

const ServicesPage = ({ service }) => {
  return (
    <>
      <MainLayout>
        <m.div className="flex justify-center" {...fadeInDown(0)}>
          <Tabs defaultValue={service.name}>
            <div className="flex justify-center">
              <TabsList className="w-[90%] justify-between px-12 rounded-none py-5 mt-10">
                <TabsTrigger className="tab-trigger" value="brows">
                  <Link to="/brows">BROWS</Link>
                </TabsTrigger>
                <TabsTrigger className="tab-trigger" value="lash_lift">
                <Link to="/lash_lift">LASH LIFT</Link>
                </TabsTrigger>
                <TabsTrigger className="tab-trigger" value="eyeliner">
                <Link to="/eyeliner">EYELINER</Link>
                </TabsTrigger>
                <TabsTrigger className="tab-trigger" value="lip_blush">
                <Link to="/lip_blush">LIP BLUSH</Link>
                </TabsTrigger>
                <TabsTrigger className="tab-trigger border-r" value="smp">
                <Link to="/smp">SMP</Link>
                </TabsTrigger>
              </TabsList>
            </div>
            <div className="flex justify-center px-5">
              {servicesData.map((s) => (
                <TabsContent
                  key={s.id}
                  value={s.name}
                  className="w-5/6 bg-primary px-2 my-5"
                  {...fadeIn}
                >
                  <ServiceDetails service={s} />
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </m.div>
      </MainLayout>
      <Outlet />
    </>
  );
};

export default ServicesPage;

// FIXME: Fix routing when TabTrigger is clicked. Unusual behaviour atm.