"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface HeroSectionProps {
  startAnimation?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  startAnimation = false,
}) => {
  const [shouldAnimate, setShouldAnimate] = React.useState(false);
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
    // Only start animations when loader is done
    if (startAnimation) {
      const timer = setTimeout(() => {
        setShouldAnimate(true);
      }, 100); // Small delay to ensure smooth transition

      return () => clearTimeout(timer);
    }
  }, [startAnimation]);

  React.useEffect(() => {
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
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const launchVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotate: -20,
      scale: 0.5,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotate: -6,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.4,
        ease: "backOut",
      },
    },
  };

  const blobVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
      rotate: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "backOut",
      },
    },
  };

  const contentVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        delay: 0.2,
        ease: "backOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const statsVariants = {
    hidden: {
      opacity: 0,
      x: 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: 0.3,
        ease: "easeOut",
      },
    },
  };

  const circleVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
      rotate: 0,
    },
    visible: {
      opacity: 0.8,
      scale: 1,
      rotate: -6,
      transition: {
        duration: 0.8,
        delay: 0.5,
        ease: "backOut",
      },
    },
  };

  return (
    <motion.div
      className="relative w-full flex flex-col items-center pb-10 pt-0 mt-0"
      initial="hidden"
      animate={shouldAnimate ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="absolute -z-[1000] inset-0 grain-background"></div>
      <div className="max-w-screen-2xl w-full px-4 sm:px-12 flex flex-col items-center relative mx-auto overflow-clip">
        {/* Animated Blob 1 */}
        <motion.div
          className="absolute -z-50 md:-z-10 aspect-auto select-none w-[50vw] max-w-[600px] min-w-[300px] top-[60px] lg:top-[18%] left-[8px] lg:left-0"
          variants={blobVariants}
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
        </motion.div>

        {/* Animated Blob 2 */}
        <motion.div
          className="absolute -z-50 md:-z-10 aspect-auto select-none w-[40vw] max-w-[320px] min-w-[270px] top-[25%] md:top-[10%] -right-5 md:right-[5%]"
          variants={blobVariants}
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
        </motion.div>

        {/* Animated Main Title Section */}
        <motion.div
          className="mt-32 md:mt-16 text-center self-start w-full text-9xl lg:text-[185px] text-primary flex flex-col items-center font-monigue"
          variants={containerVariants}
        >
          <div className="flex flex-wrap leading-none gap-x-16 justify-center -z-30 w-full sm:w-fit">
            <motion.p className="uppercase" variants={titleVariants}>
              Imagine
            </motion.p>
            <motion.p className="uppercase" variants={titleVariants}>
              Build
            </motion.p>
          </div>
          <motion.div
            className="bg-accent px-4 md:px-12 rounded-sm mt-8"
            variants={launchVariants}
            style={{ translateY: "-25%" }}
          >
            <p className="uppercase leading-none translate-y-1 lg:translate-y-3">
              Launch
            </p>
          </motion.div>
        </motion.div>

        {/* Animated Content Section */}
        <motion.div
          className="w-full flex flex-col md:flex-row justify-between items-center mt-2 gap-y-2 md:gap-y-12"
          variants={containerVariants}
        >
          <motion.div
            className="flex flex-col items-center md:items-start mt-24"
            variants={contentVariants}
          >
            <p className="font-raleway font-regular text-[#aeaeae] md:w-3/5 md:text-start text-center text-sm md:text-md">
              No noise. Just pixel-perfect designs and flawless code.{" "}
              <span className="text-accent font-bold italic">
                Start your project today.
              </span>{" "}
            </p>
            <motion.a
              href="https://links.heysohail.xyz/byte-studio"
              target="_blank"
              rel="noopener noreferrer"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <button className="flex gap-1 uppercase items-center rounded-full text-primary border-primary border-2 px-8 py-1 text-xl hover:bg-primary hover:text-black transition-colors select-none mt-4">
                <p className="translate-y-[0.5px] mx-8 font-monigue">
                  Book a Call
                </p>
              </button>
            </motion.a>
          </motion.div>

          <motion.div className="text-primary" variants={statsVariants}>
            <div className="text-4xl relative hidden md:block font-monigue">
              <motion.div
                className="absolute inset-0 w-full h-[96] border-[2px] border-[#d4cbb5] rounded-[100%] scale-x-[1.2] scale-y-[0.6] translate-y-[-30px] -z-10 pointer-events-none"
                variants={circleVariants}
              ></motion.div>
              <span className="whitespace-nowrap">
                Your <span className="text-accent">Ideas</span>, Our{" "}
                <span className="text-accent">Code</span>
              </span>
            </div>
            <motion.div
              className="uppercase text-3xl mt-12 font-anton flex md:flex-col gap-6 items-center md:items-start"
              variants={contentVariants}
            >
              <p className="text-xl flex flex-col md:flex-row items-center md:items-end gap-x-2">
                <motion.span
                  className="text-5xl"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={
                    shouldAnimate
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0 }
                  }
                  transition={{
                    delay: 0.8,
                    duration: 0.5,
                    ease: "backOut",
                  }}
                >
                  5+
                </motion.span>
                <span className="text-[#c6c6c6]">Services provided</span>
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
