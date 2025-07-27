import { Quote } from "lucide-react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { testimonials } from "@/types";

const Testimonials = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000, 
      once: false, 
      easing: 'ease-in-out', 
      mirror: true
    });
  }, []);
  return (
    <section id="testimonials" className=" w-full  max-w-[1050px] mx-auto py-17 sm:rounded-lg bg-gray-700 dark:bg-gray-900  flex  justify-center">
      <div className="flex flex-col gap-[55px]">
      <h3 data-aos="fade-up" className="text-3xl font-bold text-center mb-12 md:text-5xl text-[#4fced5]">What Our Users Say</h3>
      <div className="w-[95vw] max-w-[1050px] mx-auto grid grid-cols-1 md:px-6 px-2 md:grid-cols-2 lg:grid-cols-3 gap-[40px] md:gap-[60px]">
        {testimonials.map((t, i) => (
          <div key={i} data-aos="fade-up" className="p-6 group hover:bg-[#26333a] hover:scale-105 transition-all  text-white shadow-lg shadow-blue-600/20 h-[200px] bg-white flex flex-col items-center justify-center border-2 border-[#4fced5]  rounded-xl  relative">
            <Quote className="absolute top-4 right-4 text-[#4fced5]" size={40} />
            <p className="italic mb-4 text-black group-hover:text-white">"{t.feedback}"</p>
            <h5 className="font-bold text-right self-end text-[#4fced5]">- {t.name}</h5>
          <img src="./test.jpg" className="h-15 absolute top-[-30px] left-[40%] rounded-full border-2 border-[#4fced5] p-1 w-15 object-cover" />
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Testimonials;
