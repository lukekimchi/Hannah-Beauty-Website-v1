// FIXME: CORS policy for react resend
// FIXME: toast for form submission styling

import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { Toaster } from "../components/ui/sonner";
import { motion as m } from "framer-motion";
import { fadeInUp, fadeInRight, fadeInLeft } from "../constants/animations";
import { RxCross1 } from "react-icons/rx";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const BookAppointment = () => {
  //  States
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    msg: "",
  });
  const [isMobile, setIsMobile] = useState(false);
  const [drawerScrolling, setDrawerScrolling] = useState(false);
  const form = useRef();
  const drawerScrollRef = useRef(null);

  // Handlers
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // EmailJS details
    const service_id = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const template_id = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const user_id = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      // Send message from customer to HB
      await emailjs.sendForm(service_id, template_id, form.current, user_id);

      console.log("SUCCESS");

      // Success toast
      toast.success("Thanks for reaching out!", {
        description: "We'll get back to you ASAP.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        msg: "",
      });
    } catch (error) {
      console.log("ERROR", error);
      toast.error("Sorry, something went wrong!", {
        description: "Please try again later.",
      });
    }
  };

  // Responsiveness of form depending on screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const element = drawerScrollRef.current;
    if (!element) return;

    let timeoutId;
    const handleScroll = () => {
      setDrawerScrolling(true);
      window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => setDrawerScrolling(false), 700);
    };

    element.addEventListener("scroll", handleScroll);
    return () => {
      element.removeEventListener("scroll", handleScroll);
      window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <Drawer>
      <m.section id="book" className="flex justify-center" {...fadeInUp(0.1)}>
        <div className="w-5/6 py-24">
          <h2 className="mb-8">book appointment</h2>
          <div className="mb-8 text-center">
            <DrawerTrigger>
              <button className="text-md underline text-slate-500 hover:text-slate-900 clickable">
                Before you book
              </button>
            </DrawerTrigger>
          </div>
          <div className="flex justify-center">
            {isMobile ? (
              <form
                ref={form}
                id="mobile"
                className="flex flex-col text-center w-5/6"
                onSubmit={handleSubmit}
              >
                <Toaster richColors position="top-center" />
                <input
                  type="text"
                  name="firstName"
                  placeholder="first name..."
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full h-16 text-xl"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="last name..."
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full h-16 text-xl"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="email... "
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full h-16 text-xl"
                  required
                />
                <input
                  type="number"
                  name="mobile"
                  placeholder="mobile... "
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full h-16 text-xl"
                />
                <textarea
                  rows="5"
                  name="msg"
                  placeholder="your message..."
                  value={formData.msg}
                  onChange={handleChange}
                  className="w-full text-xl p-[14px]"
                  required
                ></textarea>
                <div>
                  <m.p
                    className="text-center text-xl italic font-thin text-gray-700 py-8 tracking-widest"
                    {...fadeInLeft}
                  >
                    Mt Eden, Auckland 1024
                  </m.p>
                  <m.div {...fadeInRight}>
                    <button className="book-now-btn clickable" type="submit">
                      BOOK NOW
                    </button>
                  </m.div>
                </div>
              </form>
            ) : (
              <form
                ref={form}
                id="desktop"
                className="text-center w-5/6"
                onSubmit={handleSubmit}
              >
                <Toaster richColors position="top-center" />
                <div className="m-[-1px]">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="first name..."
                    value={formData.firstName}
                    className="w-1/2"
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="last name..."
                    value={formData.lastName}
                    className="w-1/2"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="email"
                    name="email"
                    placeholder="email... "
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="number"
                    name="mobile"
                    placeholder="mobile... "
                    value={formData.mobile}
                    onChange={handleChange}
                  />
                  <textarea
                    rows="5"
                    name="msg"
                    placeholder="your message..."
                    value={formData.msg}
                    onChange={handleChange}
                    className="w-full text-xl p-[14px]"
                    required
                  ></textarea>
                </div>
                <div>
                  <m.p
                    className="text-center italic font-thin text-slate-500 py-8 tracking-widest"
                    {...fadeInLeft}
                  >
                    Mt Eden, Auckland 1024
                  </m.p>
                  <m.div {...fadeInRight}>
                    <button className="book-now-btn clickable" type="submit">
                      BOOK NOW
                    </button>
                  </m.div>
                </div>
              </form>
            )}
          </div>
        </div>
      </m.section>
      <DrawerContent className="!fixed !inset-0 !mt-0 !border-0 !bg-transparent !rounded-none !shadow-none z-[51] flex items-center justify-center p-4">
        <div className="w-full max-w-[min(95vw,600px)] max-h-[90vh] h-full overflow-hidden rounded-[20px] bg-white shadow-xl">
          <div
            ref={drawerScrollRef}
            className={`min-h-0 h-full overflow-y-auto p-8 sm:p-10 drawer-scrollbar${drawerScrolling ? " scrolling" : ""}`}
          >
            <DrawerClose className="sticky top-0 left-0 z-10 flex justify-start rounded-full bg-white/30 px-3 py-3 backdrop-blur-sm shadow-sm shadow-slate-200/20">
              <RxCross1 className="clickable text-2xl" />
            </DrawerClose>
            <DrawerHeader className="pt-0 mt-2">
              <DrawerTitle>Booking Information</DrawerTitle>
              <DrawerDescription>
                Most of our clients go straight ahead with booking their treatment without needing a separate in-person consultation. To check if the treatment is suitable for you, please send us clear photos of the area with no makeup and good natural lighting.
              </DrawerDescription>
            </DrawerHeader>
            <div className="mt-4 space-y-4 text-left text-slate-700">
              <h3 className="font-semibold uppercase tracking-[0.2em]">Photo Guide</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold">Brows</p>
                  <p className="ml-4">• Front-facing photo</p>
                </div>
                <div>
                  <p className="font-semibold">Eyeliner</p>
                  <p className="ml-4">• Eyes closed photo</p>
                  <p className="ml-4">• Eyes open photo</p>
                </div>
                <div>
                  <p className="font-semibold">Lip Blush</p>
                  <p className="ml-4">• Front-facing photo</p>
                </div>
                <div>
                  <p className="font-semibold">Scalp Micropigmentation (SMP)</p>
                  <p className="ml-4">• Clear photos of the areas affected by hair loss</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold uppercase tracking-[0.2em]">If You’ve Had Previous Tattooing</h3>
                <p className="mt-2">
                  If you’ve had cosmetic tattooing done by another artist before, please send photos of the area before booking.
                </p>
                <p className="mt-2">
                  Please note that if there is a lot of leftover pigment or the previous work is very saturated, the treatment may not be suitable. In some cases, we may recommend fading or removal before proceeding with a new procedure.
                </p>
              </div>
              <div>
                <h3 className="font-semibold uppercase tracking-[0.2em]">Consultation</h3>
                <p className="mt-2">
                  If you would still prefer to come in for a chat first, a 20-minute consultation is available for $50.
                </p>
              </div>
            </div>
            <DrawerFooter className="mt-6" />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default BookAppointment;
