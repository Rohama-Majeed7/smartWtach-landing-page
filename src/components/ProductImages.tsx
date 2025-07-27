import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Modal } from "./Modal";
import type { contentProps } from "./Modal";
import Aos from "aos";
import "aos/dist/aos.css";

const images = [
  {
    src: "./img1-removebg-preview.png",
    alt: "watch Img",
    color: "Black",
    price: "99$",
    f1: "Heart Rate Monitor",
    f2: "Step Tracking",
  },

  {
    src: "./img4-removebg-preview.png",
    alt: "watch Img",
    color: "Purple",
    price: "149$",
    f1: "Heart Rate Monitor",
    f2: "Step Tracking",
  },
  {
    src: "./img5-removebg-preview.png",
    alt: "watch Img",
    color: "Pink",
    price: "99$",
    f1: "Heart Rate Monitor",
    f2: "Step Tracking",
  },

  {
    src: "./img7-removebg-preview.png",
    alt: "watch Img",
    color: "Light Gray",
    price: "199$",
    f1: "Heart Rate Monitor",
    f2: "Step Tracking",
  },
];

const ProductImages = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<contentProps | null>(null);

  const openModal = (slideContent: contentProps) => {
    setSelectedImage(slideContent);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
 useEffect(() => {
  Aos.init({
    duration: 1000, 
    once: false, 
    easing: 'ease-in-out', 
    mirror: true
  });
}, []);
  return (
    <section
      id="gallery"
      className="px-6 w-full sm:rounded-lg max-w-[1050px] mx-auto md:px-16 md:py-15 py-10  flex justify-center  dark:bg-gray-900  transition-colors"
    >
      <div className=" flex flex-col gap-[40px] md:gap-[60px]">
        <h2 data-aos="fade-up" className="text-4xl  font-bold text-center md:text-5xl text-[#4fced5]">
          Explore Our Watches
        </h2>
        <Carousel>
          <CarouselContent className="relative">
            {images.map((img, index) => {
              return (
                <CarouselItem
                data-aos="zoom-in"
                  className="md:basis-1/2 md:h-[300px] h-[300px]  lg:basis-1/3 hover:scale-105 group mx-auto transition-all rounded-xl cursor-pointer relative"
                  key={index}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full rounded mx-auto   group-hover:opacity-40  transition-all"
                  />
                  <span
                    onClick={() => openModal(img)}
                    className="absolute group-hover:block top-[50%] left-[26%] hidden text-white rounded-lg hover:bg-white hover:text-[#4fced5] text-wrap bg-[#4fced5] p-2"
                  >
                    Click for more details
                  </span>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          
          <CarouselPrevious className="bg-[#4fced5] absolute top-[-20px] left-0 text-white hover:bg-white hover:text-blue-700" />
          <CarouselNext className="bg-[#4fced5] absolute top-[-20px] right-0 text-white hover:bg-white hover:text-blue-700" />

        </Carousel>
      </div>
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        content={selectedImage ?? undefined}
      />
    </section>
  );
};

export default ProductImages;
