import Image from "next/image";
import React from "react";

const FAQSection: React.FC = () => {
  return (
    <div
      className="max-w-screen-2xl w-full px-4 sm:px-12 flex flex-col items-center relative mx-auto overflow-clip mb-12 scroll-mt-28"
      id="faq"
    >
      <div className="relative mt-4">
        <p
          aria-label="FAQS"
          className="text-8xl font-monigue"
          style={{ opacity: 1, transform: "none" }}
        >
          FAQS
        </p>
      </div>

      <p
        aria-label="FAQ Attack! The Answers You've Been Secretly Wondering About!"
        className="w-full text-center font-raleway text-primary font-light"
        style={{ opacity: 1, transform: "none" }}
      >
        FAQ Attack! Everything You Wanted to Know (But Didn&apos;t Ask).
      </p>

      <div className="grid grid-cols-1 md:grid-cols-6 xl:grid-cols-12 gap-8 mt-10 w-full text-[#ECECEC] [&_span]:font-semibold [&_span]:text-[#ECECEC]">
        {/* Why Us Section */}
        <div className="w-full md:row-span-2 md:col-span-8 flex flex-col xl:flex-row items-center gap-8 relative rounded-lg overflow-clip py-16 px-4 md:px-12 text-center xl:text-left">
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
          <p className="font-anton text-accent text-9xl uppercase">Why Us</p>
          <div className="font-raleway md:w-4/5 flex flex-col gap-4">
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
          </div>
        </div>
        {/* Who is the team Section */}
        <div className="w-full md:row-span-2 md:col-span-4 flex flex-col items-center gap-8 relative rounded-lg overflow-clip py-16 px-4 md:px-12">
          <p className="font-anton text-accent text-6xl uppercase text-center">
            Who&apos;s Behind Byte Studio?
          </p>
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

          <p className="text-center md:text-start font-raleway">
            Senior-level developers and designers, trusted by startups and
            enterprises alike.
          </p>
        </div>

        {/* wiLL yOu gHoSt uS? Section */}
        <div className="w-full md:row-span-2 md:col-span-4 flex flex-col items-center gap-8 relative rounded-lg overflow-clip py-16 px-4 md:px-12">
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
          <p className="font-anton text-accent text-3xl text-center">
            wiLL yOu gHoSt uS?
          </p>
          <div className="font-raleway">
            <p className="text-center md:text-start text-lg">
              Ask our <span>20+</span> previous clients — they&apos;ll tell you.
              😉
            </p>
            <p className="text-[#6F6F6F] text-end font-raleway text-sm mt-4">
              Hint : we believe in building real, lasting client relationships.
            </p>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="w-full md:row-span-2 md:col-span-8 flex flex-col items-center gap-8 relative rounded-lg overflow-clip py-16 px-8 md:px-12">
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
          <p className="font-anton text-accent text-7xl text-center uppercase">
            Pricing
          </p>
          <div className="font-raleway">
            <div>
              <p className="text-lg">
                First, we dive deep into your project to understand your needs
                and unique requirements. Then, we offer two flexible payment
                options:
              </p>
              <ol className="decoration list-decimal [&_span]:text-primary my-4">
                <li>
                  <span>Project-Based:</span> Pay 50% upfront and 50% upon
                  completion.
                </li>
                <li className="mt-2">
                  <span>Monthly Plan:</span> Spread the cost with steady monthly
                  payments until your project is complete.
                </li>
              </ol>
              <p className="text-lg">
                Book a call or mail us — we&apos;ll tailor a plan that fits you.
              </p>
            </div>
          </div>
        </div>

        {/* We are hiring! Section */}
        {/* <div className="w-full md:row-span-2 md:col-span-3 xl:col-span-5 flex flex-col items-center gap-8 relative rounded-lg overflow-clip py-16 px-4 md:px-12">
          <Image
            alt=""
            src="/faq/faq-bg-colors.webp"
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
          <p className="font-anton text-accent text-6xl text-center uppercase">
            We are hiring!
          </p>
          <div className="font-raleway flex-1 flex items-center justify-center flex-col">
            <p className="text-center md:text-start text-lg">
              Are you a talented freelancer with expertise in any of the
              Services mentioned above ? We have a constant influx of small gigs
              and tasks which could need your help . Email us your resume and we
              will add you into our network . Cheers !!
            </p>
          </div>
        </div> */}
        {/* Tech used Section */}
        {/* <div className="w-full md:row-span-2 md:col-span-6 xl:col-span-4 flex flex-col items-center gap-8 relative rounded-lg overflow-clip py-16 px-4 md:px-12">
          <Image
            alt=""
            src="/faq/faq-bg-tech.webp"
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
          <p className="font-anton text-accent text-7xl text-center uppercase">
            Tech used
          </p>
          <div className="font-raleway">
            <p className="text-center md:test-start text-lg">
              We are extremely flexible with any software technology .
              <span>Fullstack, DevOps, Scaling</span> - we excel at everything
              Ask our <span>20+</span> previous clients and you will know ;)
            </p>
            <p className="mt-8 text-[#aeaeae]">
              Prev Used Tech : React, SpringBoot, Django, Golang, Rust,
              Solidity, Tailwind, Next, Vue, Wordpress, Shopify, Flutter
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default FAQSection;
