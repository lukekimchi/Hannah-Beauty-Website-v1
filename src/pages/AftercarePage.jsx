import { Link, Outlet } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AfterCareDetails from "../components/AfterCareDetails";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion as m } from "framer-motion";
import { fadeInDown } from "../constants/animations";
import { aftercareData } from "../constants/aftercare";

const AftercarePage = () => {
  return (
    <>
      <MainLayout>
        <m.div className="flex justify-center" {...fadeInDown(0)}>
          <Tabs defaultValue="brows" className="w-[90%]">
            <div className="flex justify-center">
              <TabsList className="w-[90%] justify-between px-12 rounded-none py-5 mt-10">
                <TabsTrigger className="tab-trigger" value="brows">
                  <Link to="/aftercare/brows">BROWS</Link>
                </TabsTrigger>
                <TabsTrigger className="tab-trigger" value="lash_lift">
                  <Link to="/aftercare/lash_lift">LASH LIFT</Link>
                </TabsTrigger>
                <TabsTrigger className="tab-trigger" value="eyeliner">
                  <Link to="/aftercare/eyeliner">EYELINER</Link>
                </TabsTrigger>
                <TabsTrigger className="tab-trigger" value="lip_blush">
                  <Link to="/aftercare/lip_blush">LIP BLUSH</Link>
                </TabsTrigger>
                <TabsTrigger className="tab-trigger border-r" value="smp">
                  <Link to="/aftercare/smp">SMP</Link>
                </TabsTrigger>
              </TabsList>
            </div>
            <div className="flex justify-center px-5">
              {aftercareData.map((a) => (
                <TabsContent
                  key={a.id}
                  value={a.name}
                  className="w-5/6 bg-primary px-2 my-5"
                >
                  <AfterCareDetails aftercare={a} />
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

export default AftercarePage;
