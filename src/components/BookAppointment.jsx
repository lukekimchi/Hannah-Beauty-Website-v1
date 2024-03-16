// FIXME: CORS policy for react resend
// FIXME: toast for form submission styling

import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { Toaster } from "../components/ui/sonner";
import { motion as m } from "framer-motion";
import { fadeInUp, fadeInRight, fadeInLeft } from "../constants/animations";

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
  const form = useRef();

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

  return (
    <m.section id="book" className="flex justify-center" {...fadeInUp(0.1)}>
      <div className="w-5/6 py-24">
        <h2 className="mb-16">book appointment</h2>
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
                  3 Horoeka Avenue, Mt Eden, Auckland 1024
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
  );
};

export default BookAppointment;
