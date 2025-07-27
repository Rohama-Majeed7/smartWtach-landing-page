"use client";

import { Button, Drawer, DrawerItems } from "flowbite-react";
import { useState } from "react";
import { Menu } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { PanelLeftClose } from 'lucide-react';

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div className="flex items-center justify-center">
        <Button onClick={() => setIsOpen(true)} className="p-2 bg-transparent focus:outline-none hover:text-blue-700">
          <Menu />
        </Button>
      </div>
      <Drawer open={isOpen} onClose={handleClose}>
        <PanelLeftClose onClick={() => setIsOpen(false)} className="text-blue-700 text-xl absolute top-2 right-2"/>
        <DrawerItems>
          <div className="max-w-7xl mx-auto px-6 py-4 flex mt-10 flex-col gap-5">
            <a href="#hero" className="text-2xl font-bold text-blue-600">
              FitPulse
            </a>
            <div className="space-x-6 flex flex-col gap-4">
              <a href="#features" className=" text-blue-600 transition" onClick={() => setIsOpen(false)}>
                Features
              </a>
              <a href="#testimonials" className=" text-blue-600 transition" onClick={() => setIsOpen(false)}>
                Testimonials
              </a>
              <a href="#pricing" className=" text-blue-600 transition" onClick={() => setIsOpen(false)}>
                Pricing
              </a>
              <a href="#gallery" className=" text-blue-600 transition" onClick={() => setIsOpen(false)}>
                Gallery
              </a>
              <ThemeToggle />
            </div>
          </div>
        </DrawerItems>
      </Drawer>
    </>
  );
}
