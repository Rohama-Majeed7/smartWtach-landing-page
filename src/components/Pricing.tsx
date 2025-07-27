import { BadgeCheck } from "lucide-react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { plans } from "@/types";

const Pricing = () => {
  useEffect(() => {
      Aos.init({
        duration: 1000, 
        once: false, 
        easing: 'ease-in-out', 
        mirror: true
      });
    }, []);
  return (
    <section id="pricing" className="px-4 py-16 w-full  max-w-[1050px] mx-auto flex  justify-center fill-emerald-50 ">
      <div className="flex flex-col gap-3">
      <h3 data-aos="fade-up" className="text-4xl dark:text-white font-bold text-center mb-12 md:text-5xl text-[#4fced5]">Choose Your Fit</h3>
      <div className="grid md:grid-cols-3 gap-8 w-[95vw] max-w-[1050px] mx-auto">
        {plans.map((p, i) => (
          <div key={i} data-aos="zoom-in" className="shadow-lg group hover:bg-[#4fced5] hover:scale-105 transition-all shadow-[#4fced5]/20 p-6 rounded-xl  text-white flex flex-col justify-between bg-[#26333a] ">
            <h4 className="text-xl font-semibold mb-2">{p.plan}</h4>
            <p className="text-3xl font-bold mb-4 text-[#4fced5] group-hover:text-[#26333a]">{p.price}</p>
            <ul className="space-y-1 mb-4 text-sm">
              {p.features.map((f, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <BadgeCheck className="text-[#4fced5] group-hover:text-[#26333a] w-4 h-4" /> {f}
                </li>
              ))}
            </ul>
            <button className="bg-[#4fced5] group-hover:bg-[#26333a]  text-white px-4 py-2 rounded-lg border-2 hover:border-[#4fced5] w-full">Select</button>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Pricing;
