import React, { useRef } from "react";
import { CircleCheckBig } from "lucide-react";
import { motion, useInView } from "framer-motion";

const PricingPlans: React.FC = () => {
  // Refs for scroll detection
  const ref = useRef(null);
  const titleRef = useRef(null);
  const cardRef = useRef(null);

  // Detect when elements come into view
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const isTitleInView = useInView(titleRef, { once: true, amount: 0.5 });
  const isCardInView = useInView(cardRef, { once: true, amount: 0.3 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.3,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 80,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.1,
        ease: "easeOut",
      },
    }),
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.8,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.98,
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        delay: 0.5,
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
  };

  const priceVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.4,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const deliverables = [
    "Project ready within in 3-4 weeks.",
    "Responsive design.",
    "Pleasant Visual design matching your brand.",
    "Essential Features Only",
    "Basic SEO optimization.",
    "30 days of support.",
  ];

  return (
    <div className="md:mx-8">
      <motion.div
        ref={ref}
        className="flex flex-col w-full h-full relative overflow-hidden justify-center items-center px-4 mt-20 mb-20 bg-[#161616] py-10 md:rounded-3xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2]"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Animated background overlay */}
        <motion.div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#161616] bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
        />

        <div className="flex flex-col w-full max-w-5xl justify-center items-center">
          <motion.h1
            ref={titleRef}
            className="text-6xl md:text-8xl flex w-full flex-col text-center"
            variants={titleVariants}
            initial="hidden"
            animate={isTitleInView ? "visible" : "hidden"}
          >
            <div className="relative flex flex-wrap text-primary justify-center items-center w-full font-monigue">
              The right{" "}
              <motion.span
                className="text-accent"
                initial={{ opacity: 0, rotateX: 90 }}
                animate={
                  isTitleInView
                    ? { opacity: 1, rotateX: 0 }
                    : { opacity: 0, rotateX: 90 }
                }
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                &nbsp;Plans&nbsp;
              </motion.span>{" "}
              for your&nbsp;
              <motion.span
                className="z-30 relative"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Ideas
              </motion.span>
            </div>
          </motion.h1>

          <motion.p
            className="text-center text-sm font-raleway text-primary font-light italic"
            variants={subtitleVariants}
            initial="hidden"
            animate={isTitleInView ? "visible" : "hidden"}
          >
            &quot;
            <span className="font-semibold">Top-Tier Speed and Quality, </span>
            Without the Big Agency Costs.&quot;
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center lg:items-stretch items-center gap-6 w-full mt-8">
          {/* Launchpad Plan Card */}
          <motion.div
            ref={cardRef}
            className="bg-neutral-900 border border-neutral-900 rounded-xl w-full max-w-md flex flex-col relative my-4 z-0 glow-on-hover hover:shadow-lg hover:shadow-amber-400"
            variants={cardVariants}
            initial="hidden"
            animate={isCardInView ? "visible" : "hidden"}
            whileHover={{
              y: -10,
              boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)",
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col bg-neutral-950 h-full w-full p-6 z-40 rounded-xl">
              <div className="flex flex-col font-raleway font-bold w-full">
                <div className="flex gap-4 items-center">
                  <motion.h1
                    className="text-xl font-black pb-2 font-raleway"
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isCardInView
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: -20 }
                    }
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    Launchpad Plan
                  </motion.h1>
                  <motion.div
                    className="rounded-full whitespace-nowrap bg-accent text-xs text-black font-extrabold py-1 px-2 text-center"
                    variants={badgeVariants}
                    initial="hidden"
                    animate={isCardInView ? "visible" : "hidden"}
                  >
                    40% OFF
                  </motion.div>
                </div>
                <motion.div
                  className="flex items-end gap-3"
                  variants={priceVariants}
                  initial="hidden"
                  animate={isCardInView ? "visible" : "hidden"}
                >
                  <h3 className="text-xl py-2 font-bold line-through text-neutral-500">
                    $499 (₹43000)
                  </h3>
                  <h3 className="text-4xl py-2 font-black">$299 (₹26000)</h3>
                </motion.div>
              </div>

              <motion.p
                className="flex font-raleway text-sm text-neutral-300 pb-3 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isCardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                To Deliver a fast, functional, and impactful MVP to kickstart
                your product journey.
              </motion.p>

              <motion.div
                className="w-full flex flex-col gap-4 h-[1px] bg-neutral-800 my-3"
                initial={{ scaleX: 0 }}
                animate={isCardInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />

              <div className="flex flex-col w-full flex-grow">
                <motion.p
                  className="text-lg font-raleway font-extrabold py-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isCardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  DELIVERABLES INCLUDE:{" "}
                </motion.p>
                <ul className="font-raleway flex flex-col gap-3 flex-grow">
                  {deliverables.map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex flex-row items-center gap-2 font-medium text-sm"
                      variants={listItemVariants}
                      initial="hidden"
                      animate={isCardInView ? "visible" : "hidden"}
                      custom={index}
                    >
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={
                          isCardInView
                            ? { scale: 1, rotate: 0 }
                            : { scale: 0, rotate: -180 }
                        }
                        transition={{
                          duration: 0.4,
                          delay: 1 + index * 0.1,
                          type: "spring",
                          stiffness: 200,
                        }}
                      >
                        <CircleCheckBig className="text-accent w-5 h-5" />
                      </motion.div>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <a
                href="https://links.heysohail.xyz/byte-studio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-full flex justify-center pt-6">
                  <motion.button
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 w-full py-5 rounded-full text-sm font-raleway font-extrabold cursor-pointer"
                    variants={buttonVariants}
                    initial="hidden"
                    animate={isCardInView ? "visible" : "hidden"}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={isCardInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.3, delay: 1.3 }}
                    >
                      Launch Your Site NOW!
                    </motion.span>
                  </motion.button>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default PricingPlans;
