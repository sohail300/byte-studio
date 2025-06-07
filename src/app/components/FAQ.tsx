import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const FAQSection: React.FC = () => {
  // Animation variants for different elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: -50,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
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

  const cardHoverVariants = {
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="max-w-screen-2xl w-full px-4 sm:px-12 flex flex-col items-center relative mx-auto overflow-clip mb-12 scroll-mt-28"
      id="faq"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div className="relative mt-4" variants={titleVariants}>
        <p aria-label="FAQS" className="text-8xl font-monigue">
          FAQS
        </p>
      </motion.div>

      <motion.p
        aria-label="FAQ Attack! The Answers You've Been Secretly Wondering About!"
        className="w-full text-center font-raleway text-primary font-light"
        variants={subtitleVariants}
      >
        FAQ Attack! Everything You Wanted to Know (But Didn&apos;t Ask).
      </motion.p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-6 xl:grid-cols-12 gap-8 mt-10 w-full text-[#ECECEC] [&_span]:font-semibold [&_span]:text-[#ECECEC]"
        variants={containerVariants}
      >
        {/* Why Us Section */}
        <motion.div
          className="w-full md:row-span-2 md:col-span-8 flex flex-col xl:flex-row items-center gap-8 relative rounded-lg overflow-clip py-16 px-4 md:px-12 text-center xl:text-left"
          variants={{ ...cardVariants, ...cardHoverVariants }}
          whileHover="hover"
        >
          <Image
            alt=""
            src="/faq/faq-bg-why.webp"
            loading="lazy"
            width={400}
            height={400}
            className="-z-10 object-cover select-none"
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              left: 0,
              top: 0,
              right: 0,
              bottom: 0,
              color: "transparent",
            }}
          />
          <motion.p
            className="font-anton text-accent text-9xl uppercase"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Why Us
          </motion.p>
          <motion.div
            className="font-raleway md:w-4/5 flex flex-col gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-lg">
              Our work speaks louder than words. We&apos;re a team of product
              builders and design enthusiasts, turning your digital dreams into
              reality — without the usual <span>coding nightmares</span>.
            </p>
            <p className="text-lg">
              We{" "}
              <span>
                dive deep into research, strategy, and technology, carefully
                selecting the best tools
              </span>
              and refining every detail through thoughtful iteration.
            </p>
          </motion.div>
        </motion.div>

        {/* Who is the team Section */}
        <motion.div
          className="w-full md:row-span-2 md:col-span-4 flex flex-col items-center gap-8 relative rounded-lg overflow-clip py-16 px-4 md:px-12"
          variants={{ ...cardVariants, ...cardHoverVariants }}
          whileHover="hover"
        >
          <motion.p
            className="font-anton text-accent text-6xl uppercase text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Who&apos;s Behind Byte Studio?
          </motion.p>
          <Image
            alt=""
            src="/faq/faq-bg-us.webp"
            loading="lazy"
            width={400}
            height={400}
            className="-z-10 object-cover select-none"
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              left: 0,
              top: 0,
              right: 0,
              bottom: 0,
              color: "transparent",
            }}
          />

          <motion.p
            className="text-center md:text-start font-raleway"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Senior-level developers and designers, trusted by startups and
            enterprises alike.
          </motion.p>
        </motion.div>

        {/* wiLL yOu gHoSt uS? Section */}
        <motion.div
          className="w-full md:row-span-2 md:col-span-4 flex flex-col items-center gap-8 relative rounded-lg overflow-clip py-16 px-4 md:px-12"
          variants={{ ...cardVariants, ...cardHoverVariants }}
          whileHover="hover"
        >
          <Image
            alt=""
            src="/faq/faq-bg-ghost.webp"
            loading="lazy"
            width={400}
            height={400}
            className="-z-10 object-cover select-none"
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              left: 0,
              top: 0,
              right: 0,
              bottom: 0,
              color: "transparent",
            }}
          />
          <motion.p
            className="font-anton text-accent text-3xl text-center"
            initial={{ opacity: 0, rotate: -5 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            wiLL yOu gHoSt uS?
          </motion.p>
          <motion.div
            className="font-raleway"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-center md:text-start text-lg">
              Ask our <span>5+</span> previous clients — they&apos;ll tell you.
              😉
            </p>
            <p className="text-[#6F6F6F] text-end font-raleway text-sm mt-4">
              Hint : we believe in building real, lasting client relationships.
            </p>
          </motion.div>
        </motion.div>

        {/* Pricing Section */}
        <motion.div
          className="w-full md:row-span-2 md:col-span-8 flex flex-col items-center gap-8 relative rounded-lg overflow-clip py-16 px-8 md:px-12"
          variants={{ ...cardVariants, ...cardHoverVariants }}
          whileHover="hover"
        >
          <Image
            alt=""
            src="/faq/faq-bg-cash.webp"
            loading="lazy"
            width={400}
            height={400}
            className="-z-10 object-cover select-none"
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              left: 0,
              top: 0,
              right: 0,
              bottom: 0,
              color: "transparent",
            }}
          />
          <motion.p
            className="font-anton text-accent text-7xl text-center uppercase"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Pricing
          </motion.p>
          <motion.div
            className="font-raleway"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <p className="text-lg">
                First, we dive deep into your project to understand your needs
                and unique requirements. Then, we offer two flexible payment
                options:
              </p>
              <motion.ol
                className="decoration list-decimal [&_span]:text-primary my-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <span>Project-Based:</span> Pay 50% upfront and 50% upon
                  completion.
                </motion.li>
                <motion.li
                  className="mt-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <span>Monthly Plan:</span> Spread the cost with steady monthly
                  payments until your project is complete.
                </motion.li>
              </motion.ol>
              <motion.p
                className="text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                viewport={{ once: true }}
              >
                Book a call or mail us — we&apos;ll tailor a plan that fits you.
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default FAQSection;
