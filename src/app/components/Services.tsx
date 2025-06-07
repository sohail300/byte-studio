"use client";

import React, { useState } from "react";
import { CircleArrowDown } from "lucide-react";

interface AccordionItemProps {
  index: number;
  title: string;
  bgColor: string;
  children?: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  index,
  title,
  bgColor,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      data-state={isOpen ? "open" : "closed"}
      data-orientation="vertical"
      className="[&[data-state=open] svg]:rotate-180"
      style={{ backgroundColor: bgColor }}
    >
      <h3
        data-orientation="vertical"
        data-state={isOpen ? "open" : "closed"}
        className="flex"
      >
        <button
          type="button"
          aria-expanded={isOpen}
          data-state={isOpen ? "open" : "closed"}
          data-orientation="vertical"
          className="flex-1 transition-all text-left w-full flex justify-between items-end px-4 py-0 text-black text-7xl font-anton outline-none select-none [&[data-state=open]>div>svg]:rotate-180 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <p>{index}.</p>
          <div className="flex flex-col items-end transition-transform duration-300">
            <CircleArrowDown
              width={42}
              height={42}
              strokeWidth={1}
              className="my-4 transition-transform duration-300"
              opacity={0.5}
            />
            <p className="uppercase text-4xl md:text-6xl">{title}</p>
          </div>
        </button>
      </h3>
      <div
        data-state={isOpen ? "open" : "closed"}
        role="region"
        aria-hidden={!isOpen}
        data-orientation="vertical"
        className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down mt-4 text-white font-raleway [&_span]:font-bold [&_span]:pe-1"
        style={{ display: isOpen ? "block" : "none" }}
      >
        {children}
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <div
      className="mt-36 w-full mb-16 flex flex-col items-center scroll-mt-24"
      id="services"
    >
      <div className="max-w-screen-2xl w-full px-4 sm:px-12 flex flex-col items-center relative mx-auto overflow-clip">
        <p className="md:self-end text-8xl uppercase flex items-center text-center gap-4">
          <span className="font-monigue">Our Services</span>
        </p>
      </div>

      <div className="w-full mt-8" data-orientation="vertical">
        <AccordionItem index={1} title="Web Dev" bgColor="#B5F0DC">
          <div className="w-full items-center relative pb-4 pt-0 px-8 flex flex-col lg:flex-row justify-between mt-4 md:mt-16 text-black">
            <p className="text-center lg:text-start lg:w-3/5 pb-4 text-lg md:text-2xl">
              From <span className="font-semibold"> enterprise-scale </span>{" "}
              applications to innovative{" "}
              <span className="font-semibold"> MVPs</span>, we{" "}
              <span className="font-semibold">architect</span> and{" "}
              <span className="font-semibold">develop</span> fully functional
              solutions that transform your{" "}
              <span className="font-semibold">vision into reality</span>
            </p>
            <a target="_blank">
              <button className="py-2 px-6 rounded-full bg-black text-[#B5F0DC] uppercase font-anton cursor-pointer">
                Book a call
              </button>
            </a>
          </div>
        </AccordionItem>

        <AccordionItem index={2} title="Mobile App Dev" bgColor="#34D399">
          <div className="w-full items-center relative pb-4 pt-0 px-8 flex flex-col lg:flex-row justify-between mt-4 md:mt-16 text-black">
            <p className="text-center lg:text-start lg:w-3/5 pb-4 text-lg md:text-2xl">
              From <span className="font-semibold"> enterprise-scale </span>{" "}
              applications to innovative{" "}
              <span className="font-semibold"> MVPs</span>, we{" "}
              <span className="font-semibold">architect</span> and{" "}
              <span className="font-semibold">develop</span> fully functional
              solutions that transform your{" "}
              <span className="font-semibold">vision into reality</span>
            </p>
            <a href="https://links.heysohail.xyz/byte-studio" target="_blank">
              <button className="py-2 px-6 rounded-full bg-black text-[#B5F0DC] uppercase font-anton cursor-pointer">
                Book a call
              </button>
            </a>
          </div>
        </AccordionItem>

        <AccordionItem index={3} title="UI/UX" bgColor="#1CA57A">
          <div className="w-full items-center relative pb-4 pt-0 px-8 flex flex-col lg:flex-row justify-between mt-4 md:mt-16 text-black">
            <p className="text-center lg:text-start lg:w-3/5 pb-4 text-lg md:text-2xl">
              From <span className="font-semibold"> enterprise-scale </span>{" "}
              applications to innovative{" "}
              <span className="font-semibold"> MVPs</span>, we{" "}
              <span className="font-semibold">architect</span> and{" "}
              <span className="font-semibold">develop</span> fully functional
              solutions that transform your{" "}
              <span className="font-semibold">vision into reality</span>
            </p>
            <a href="https://links.heysohail.xyz/byte-studio" target="_blank">
              <button className="py-2 px-6 rounded-full bg-black text-[#B5F0DC] uppercase font-anton cursor-pointer">
                Book a call
              </button>
            </a>
          </div>
        </AccordionItem>
      </div>
    </div>
  );
};

export default Services;
