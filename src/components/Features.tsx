import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { featureData } from "../types";
const Features = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000, 
      once: true, 
      easing: 'ease-in-out',
    });
  }, []);
  return (
    <section id="features" className="px-8 w-full  max-w-[1050px] mx-auto md:py-20 py-15 md:[80vh] flex justify-center">
      <div className="flex flex-col gap-[30px] md:gap-[50px]">
      <h3 data-aos="fade-up" className="text-4xl md:text-5xl font-bold text-center mb-12 text-blue-700 dark:text-white ">Key Features</h3>
      <div className="grid w-[95vw] max-w-[1050px] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featureData.map((feature, i) => (
          <div data-aos="fade-up" key={i} className="px-5 py-10 hover:scale-105 transition-transform bg-gray-700 rounded-lg shadow-lg shadow-blue-600/20">
            <div className="mb-3  text-3xl text-blue-700">{feature.icon && <feature.icon />}</div>
            <h4 className="text-xl font-semibold mb-2 text-white">{feature.title}</h4>
            <p className="text-white">{feature.description}</p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Features;
