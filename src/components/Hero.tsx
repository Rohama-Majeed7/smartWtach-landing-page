import { useEffect, useState } from "react";
import { motion } from "motion/react";
import AOS from "aos";
import "aos/dist/aos.css";

const images = [
  {
    src: "./img1-removebg-preview.png",
    alt: "watch Img",
  },

  {
    src: "./img4-removebg-preview.png",
    alt: "watch Img",
  },
  {
    src: "./img5-removebg-preview.png",
    alt: "watch Img",
  },

  {
    src: "./img7-removebg-preview.png",
    alt: "watch Img",
  },
];
const HeroSection = () => {
  const [imgUrl, setImageUrl] = useState("");
  useEffect(() => {
    console.log("image changed");
  }, [imgUrl]);
  useEffect(() => {
  AOS.init({
    duration: 1000, 
    once: false, 
    easing: 'ease-in-out',
    mirror:true 
  });
}, []);
  return (
    <section
      id="hero"
      className="text-white dark:bg-gray-900 w-[98vw]  max-w-[1050px] mx-auto  dark:bg-blend-darken  flex justify-center px-4 py-12 "
    >
      <div className="flex flex-col-reverse w-[98vw]  max-w-[1050px] mx-auto md:flex-row gap-5 items-center justify-between">
        <div data-aos="fade-down" className="flex flex-col gap-5 md:w-1/2 ">
          <h2 className="text-4xl font-bold text-[#4fced5]">
            Stay Fit. Stay Smart.
          </h2>
          <p className="text-lg">
            Meet FitPulse – your ultimate fitness smartwatch with real-time
            health tracking, sleek design, and smart features to power your
            lifestyle.
          </p>
          <button className=" bg-[#4fced5] px-6 py-2 self-start text-white rounded-lg shadow hover:border-2 hover:border-[#4fced5] hover:text-[#4fced5] hover:bg-transparent transition">
            Buy Now
          </button>
        </div>
        <div className="flex flex-col gap-3 md:py-10">
          <motion.img
            key={imgUrl || "./hero-image-removebg-preview.png"}
            initial={{ opacity: 0, y: -50 }} // animation when component mounts
            animate={{ opacity: 1, y: 0 }} // final state
            transition={{ duration: 0.6, ease: "easeOut" }} // animation timing
            src={imgUrl || "./hero-image-removebg-preview.png"}
            alt="Fitness Smartwatch"
            className="w-65 md:w-75 img md:mt-0 mt-10 mx-auto "
          />
          <div className="flex gap-2 justify-center">
            {images.map((img, index) => {
              return (
                <img
                  key={index}
                  src={img.src}
                  alt={img.alt}
                  onClick={() => setImageUrl(img.src)}
                  className="w-20 h-20  cursor-pointer hover:opacity-60 transition-all"
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
