"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { useRef } from "react";
import Lenis from "lenis";

const Navbar: React.FC = () => {
  const lenis = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis
    lenis.current = new Lenis({
      duration: 0.6, // Control the duration of the scroll
      easing: (t) => 1 - Math.pow(1 - t, 3), // Cubic easing for smooth stop
    });

    const animate = (time: number): void => {
      if (lenis.current) {
        lenis.current.raf(time);
      }
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    // Cleanup on unmount
    return () => {
      if (lenis.current) {
        lenis.current.destroy();
      }
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    console.log(element);
    console.log(lenis.current);
    if (lenis.current && element) {
      lenis.current.scrollTo(element);
    }
  };

  return (
    <div className="w-full z-50 text-primary text-2xl h-18 flex items-center bg-transparent border-b-2 border-[#1e1e1e]">
      <nav className="flex justify-between items-stretch px-4 sm:px-12 w-full">
        <a className="lg:px-4 cursor-pointer select-none" href="#top">
          <div className="flex items-center gap-4 h-8 md:h-10 my-4">
            <Image
              src="/brand-transparent.png"
              alt="DotPro Labs Text"
              width={3285}
              height={399}
              decoding="async"
              className="w-1/2"
            />
          </div>
        </a>

        <div className="items-stretch hidden lg:flex font-monigue w-fit">
          <button
            className="flex items-center justify-center px-8 hover:text-accent transition-colors uppercase cursor-pointer"
            onClick={() => scrollToSection("work")}
          >
            Works
          </button>
          <button
            className="flex items-center justify-center px-8 hover:text-accent transition-colors uppercase cursor-pointer"
            onClick={() => scrollToSection("services")}
          >
            Services
          </button>
          <a
            className="flex items-center justify-center px-8 hover:text-accent transition-colors uppercase cursor-pointer"
            onClick={() => scrollToSection("faq")}
          >
            FAQ
          </a>
          <a
            className="flex items-center justify-center px-8 hover:text-accent transition-colors uppercase cursor-pointer"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </a>
        </div>

        <div className="items-center hidden lg:flex">
          <a
            href="https://links.heysohail.xyz/byte-studio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex gap-1 uppercase items-center rounded-full text-primary border-primary border-2 px-8 py-1 text-xl hover:bg-primary hover:text-black transition-colors select-none cursor-pointer">
              <p className="justify-center items-center mt-[2px] font-monigue">
                Contact Us
              </p>
              <svg
                width="18"
                height="18"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                strokeWidth={2.5}
                className="-me-1 font-bold"
              >
                <path
                  d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </a>
        </div>

        <button
          type="button"
          aria-haspopup="dialog"
          aria-expanded="false"
          aria-controls="radix-:Rgrtb:"
          data-state="closed"
          className="lg:hidden p-2 rounded-md"
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
          >
            <path
              d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
