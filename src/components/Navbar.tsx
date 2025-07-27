// import React from "react";
import ThemeToggle from "./ThemeToggle";
import { Sidebar } from "./Sidebar";

const Navbar = () => {
  return (
    <nav className=" shadow-md  bg-gray-700 dark:bg-gray-900 fixed top-0 left-0 w-full  z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#hero" className="text-2xl font-bold text-[#4fced5]">
          FitPulse
        </a>
        <div className="space-x-6 hidden md:flex">
          <a
            href="#gallery"
            className="text-gray-200 hover:text-[#4fced5] transition"
          >
            Gallery
          </a>
          <a
            href="#features"
            className=" text-gray-200 hover:text-[#4fced5] transition"
          >
            Features
          </a>
          <a
            href="#testimonials"
            className="text-gray-200 hover:text-[#4fced5] transition"
          >
            Testimonials
          </a>
          <a
            href="#pricing"
            className="text-gray-200 hover:text-[#4fced5] transition"
          >
            Pricing
          </a>

          <ThemeToggle />
        </div>
        <div className="md:hidden">
          {/* Mobile menu (optional dropdown logic) */}
          <Sidebar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
