import React from "react";
import { NavLink } from "react-router-dom";
import Notice from "./Notice";
import { academy } from "../constants/notice";

const Navbar = () => {
  return (
    <div className="stick-to-top">
      <Notice title={academy.title} text={academy.text} />
      <div className="flex w-screen h-24 lg:h-16 justify-center bg-primary border-b border-gray-500">
        <nav className="flex w-[70%] justify-between items-center text-black uppercase">
          <NavLink to="/">
            <p className="nav-link">home</p>
          </NavLink>
          <NavLink to="/services">
            <p className="nav-link">services</p>
          </NavLink>
          <NavLink to="/academy">
            <p className="nav-link">academy</p>
          </NavLink>
          <NavLink to="/blog">
            <p className="nav-link">blog</p>
          </NavLink>

          <NavLink
            to="/#book"
            onClick={(e) => {
              window.scroll({
                top: document.querySelector("#book").offsetTop - 100,
                behavior: "smooth",
              });
              e.preventDefault();
            }}
          >
            <p className="text-white hover:bg-red-800 clickable bg-accent shadow-lg font-medium text-lg px-6 py-2">book
            </p>
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
