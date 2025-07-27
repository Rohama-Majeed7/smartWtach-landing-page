import React from "react";
import { BadgeCheck } from "lucide-react";

export interface contentProps {
  src: string;
  alt: string;
  color: string;
  price: string;
  f1: string;
  f2: string;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: contentProps | undefined;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <section className="fixed inset-0 z-50 flex items-center h-full w-full justify-center bg-black/40 backdrop-blur-sm px-4">
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-6 md:p-10 max-w-2xl w-full flex flex-col md:items-center  justify-center md:flex-row gap-6 animate-fadeIn animate-slideUp relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 font-bold text-2xl cursor-pointer dark:text-gray-300 hover:text-blue-700 transition"
        >
          ✕
        </button>

        {/* Image */}
        <div className="flex-shrink-0">
          <img
            src={content?.src}
            alt={content?.alt}
            className="w-[250px] h-auto rounded-lg object-contain mx-auto "
          />
        </div>

        {/* Details */}
        <div className="flex flex-col gap-3  p-3 text-gray-700 dark:text-gray-200">
          <div className="flex gap-3 items-center  md:justify-between">
            <h3 className="text-base text-blue-700 font-semibold uppercase tracking-wide">
              Color :
            </h3>
            <p className="text-base font-bold">{content?.color}</p>
          </div>

          <div className="flex gap-3 items-center md:justify-between">
            <h3 className="text-base text-blue-700 font-semibold uppercase tracking-wide">
              Price :
            </h3>
            <p className="text-base font-bold self-start">{content?.price}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide">
              Description :
            </h3>
            <p className="text-base flex items-center gap-2">
              {" "}
              <BadgeCheck className="text-blue-700 w-4 h-4" /> {content?.f1}
            </p>
            <p className="text-base flex items-center gap-2">
              {" "}
              <BadgeCheck className="text-blue-700 w-4 h-4" />
              {content?.f2}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
