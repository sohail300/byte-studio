"use client";

import React from "react";
import Image from "next/image";

const HeroSection: React.FC = () => {
  const [position, setPosition] = React.useState({
    x: 0,
    y: 0,
    rotate: 2765.78,
  });
  const [position2, setPosition2] = React.useState({
    x: 0,
    y: 0,
    rotate: 2758.77,
  });

  React.useEffect(() => {
    // Optional: Add animation or mouse movement effect
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 15 - 7.5;
      const y = (e.clientY / window.innerHeight) * 15 - 7.5;

      setPosition({
        x: -x,
        y: -y,
        rotate: 2765.78 + (x * y) / 50,
      });

      setPosition2({
        x: x,
        y: y * 3,
        rotate: 2758.77 + (x * y) / 50,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative w-full flex flex-col items-center pb-10 pt-0 mt-0">
      <div className="absolute -z-[1000] inset-0 grain-background"></div>
      <div className="max-w-screen-2xl w-full px-4 sm:px-12 flex flex-col items-center relative mx-auto overflow-clip">
        {/* Blob 1 */}
        <div
          className="absolute -z-50 md:-z-10 aspect-auto select-none w-[50vw] max-w-[600px] min-w-[300px] top-[60px] lg:top-[18%] left-[8px] lg:left-0"
          style={{
            transform: `translateX(${position.x}px) translateY(${position.y}px) rotate(${position.rotate}deg)`,
          }}
        >
          <div>
            <Image
              alt=""
              width={532}
              height={480}
              loading="lazy"
              decoding="async"
              src="/blob1.webp"
            />
          </div>
        </div>

        {/* Blob 2 */}
        <div
          className="absolute -z-50 md:-z-10 aspect-auto select-none w-[40vw] max-w-[320px] min-w-[270px] top-[25%] md:top-[10%] -right-5 md:right-[5%]"
          style={{
            transform: `translateX(${position2.x}px) translateY(${position2.y}px) rotate(${position2.rotate}deg)`,
          }}
        >
          <div>
            <Image
              alt=""
              width={326}
              height={373}
              loading="lazy"
              decoding="async"
              src="/blob2.webp"
            />
          </div>
        </div>

        {/* Main Title Section */}
        <div className="mt-32 md:mt-16 text-center self-start w-full text-9xl lg:text-[185px] text-primary flex flex-col items-center font-monigue">
          <div className="flex flex-wrap leading-none gap-x-16 justify-center -z-30 w-full sm:w-fit">
            <p className="uppercase" style={{ opacity: 1, transform: "none" }}>
              Imagine
            </p>
            <p className="uppercase" style={{ opacity: 1, transform: "none" }}>
              Build
            </p>
          </div>
          <div
            className="bg-accent px-4 md:px-12 rounded-sm mt-8"
            style={{ opacity: 1, transform: "translateY(-25%) rotate(-6deg)" }}
          >
            <p className="uppercase leading-none translate-y-1 lg:translate-y-3">
              Launch
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center mt-2 gap-y-2 md:gap-y-12">
          <div
            className="flex flex-col items-center md:items-start mt-24"
            style={{ opacity: 1, transform: "none" }}
          >
            <p className="font-raleway font-regular text-[#aeaeae] md:w-3/5 md:text-start text-center text-sm md:text-md">
              No noise. Just pixel-perfect designs and flawless code.{" "}
              <span className="text-accent font-bold italic">
                Start your project today.
              </span>{" "}
            </p>
            <a
              href="https://cal.com/bytestudio/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex gap-1 uppercase items-center rounded-full text-primary border-primary border-2 px-8 py-1 text-xl hover:bg-primary hover:text-black transition-colors select-none mt-4">
                <p className="translate-y-[0.5px] mx-8 font-monigue">
                  Book a Call
                </p>
              </button>
            </a>
          </div>

          <div
            className="text-primary"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="text-4xl relative hidden md:block font-monigue">
              <div className="absolute inset-0 w-full h-[96] border-[2px] border-[#d4cbb5] rounded-[100%] -rotate-6 scale-x-[1.2] scale-y-[0.6] translate-y-[-30px] -z-10 pointer-events-none opacity-80"></div>
              <span className="whitespace-nowrap">
                Your <span className="text-accent">Ideas</span>, Our{" "}
                <span className="text-accent">Code</span>
              </span>
            </div>
            <div className="uppercase text-3xl mt-12 font-anton flex md:flex-col gap-6 items-center md:items-start">
              <p className="text-xl flex flex-col md:flex-row items-center md:items-end gap-x-2">
                <span className="text-5xl">5+</span>
                <span className="text-[#c6c6c6]">Services provided</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
