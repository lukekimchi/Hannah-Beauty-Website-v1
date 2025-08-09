import MainLayout from "../layout/MainLayout";
import { motion as m } from "framer-motion";
import { fadeInDown, fadeInUp } from "../constants/animations";

const BlogPage = () => {
  return (
    <MainLayout>
      <div className="flex flex-col h-[2000px]">
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
