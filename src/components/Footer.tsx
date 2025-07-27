// import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-700 dark:bg-gray-900 py-5 shadow-md  px-6 text-center mt-20 transition-colors">
      <p className=" dark:text-gray-400 text-white">
        © {new Date().getFullYear()} FitPulse. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
