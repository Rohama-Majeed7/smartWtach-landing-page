import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import ThemeToggle from "./components/ThemeToggle";
import "./App.css"
import Footer from "./components/Footer";
import ProductImages from "./components/ProductImages";
const App = () => {
    
  return (
    <>
      <Navbar />
      <Hero />
      <ProductImages />
      <Features />
      <Testimonials />
      <Pricing />
      <Footer />
    </>
  );
};

export default App;
