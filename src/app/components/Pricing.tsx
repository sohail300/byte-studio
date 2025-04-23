import React from "react";
import { CircleCheckBig } from "lucide-react";

const PricingPlans: React.FC = () => {
  return (
    <div className="md:mx-8">
      <div className="flex flex-col w-full h-full relative overflow-hidden justify-center items-center px-4 mt-20 mb-20 bg-[#161616] py-10 md:rounded-3xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#161616] bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        <div className="flex flex-col w-full max-w-5xl justify-center items-center">
          <h1 className="text-6xl md:text-8xl flex w-full flex-col text-center">
            <div className="relative flex flex-wrap text-primary justify-center items-center w-full font-monigue">
              The right <span className="text-accent">&nbsp;Plans&nbsp;</span>{" "}
              for your&nbsp;
              <span className="z-30 relative">Ideas</span>
            </div>
          </h1>
          <p className="text-center text-sm font-raleway text-primary font-light italic">
            &quot;Get The Quality and Speed of Big Agencies at
            <span className="font-semibold"> Best Prices</span>&quot;
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center lg:items-stretch items-center gap-6 w-full mt-8">
          {/* Launchpad Plan Card */}
          <div className="bg-neutral-900 border border-neutral-900 rounded-xl w-full max-w-md flex flex-col relative my-4 z-0 glow-on-hover">
            <div className="flex flex-col bg-neutral-950 h-full w-full p-6 z-40 rounded-xl">
              <div className="flex flex-col font-raleway font-bold w-full">
                <div className="flex gap-4 items-center">
                  <h1 className="text-xl font-black pb-2 font-raleway">
                    Launchpad Plan
                  </h1>
                  <div className="rounded-full whitespace-nowrap bg-accent text-xs text-black font-extrabold py-1 px-2 text-center">
                    20% OFF
                  </div>
                </div>
                <div className="flex items-end gap-3">
                  <h3 className="text-xl py-2 font-bold line-through text-neutral-500">
                    $2499
                  </h3>
                  <h3 className="text-4xl py-2 font-black">$1999</h3>
                </div>
              </div>

              <p className="flex font-raleway text-sm text-neutral-300 pb-3 pt-4">
                To Deliver a fast, functional, and impactful MVP to kickstart
                your product journey.
              </p>

              <div className="w-full flex flex-col gap-4 h-[1px] bg-neutral-800 my-3"></div>

              <div className="flex flex-col w-full flex-grow">
                <p className="text-lg font-raleway font-extrabold py-4">
                  DELIVERABLES INCLUDE:{" "}
                </p>
                <ul className="font-raleway flex flex-col gap-3 flex-grow">
                  {[
                    "Project ready within in 3-4 weeks.",
                    "Responsive design.",
                    "Pleasant Visual design matching your brand.",
                    "Essential Features Only",
                    "Basic SEO optimization.",
                    "30 days of support.",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex flex-row items-center gap-2 font-medium text-sm"
                    >
                      <CircleCheckBig className="text-accent w-5 h-5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-full flex justify-center pt-6">
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 w-full py-5 rounded-full text-sm font-raleway font-extrabold cursor-pointer">
                  Launch Your Site NOW!
                </button>
              </div>
            </div>
          </div>

          {/* Full Process Monthly Plan Card */}
          <div className="rounded-xl w-full max-w-md flex flex-col relative my-4 z-0 glow-on-hover">
            <div className="absolute -top-6 left-20 z-30 -rotate-12 -translate-x-1/2">
              <div className="bg-[#f97316] px-4 md:px-12 rounded-sm text-xl pb-4 border border-black items-center justify-center">
                <p className="uppercase leading-none translate-y-1 lg:translate-y-3 font-monigue">
                  MOST POPULAR
                </p>
              </div>
            </div>

            <div className="w-full h-full flex flex-col bg-accent p-6 rounded-xl relative">
              <div className="flex flex-col font-raleway font-bold w-full">
                <div className="flex gap-4 items-center">
                  <h1 className="text-xl font-black pb-2 font-raleway text-black">
                    Full Process Monthly Plan
                  </h1>
                  <div className="rounded-full whitespace-nowrap bg-black text-accent text-xs font-extrabold py-1 px-2 text-center">
                    33% OFF
                  </div>
                </div>
                <div className="flex items-end gap-3">
                  <h3 className="text-xl py-2 font-bold line-through text-neutral-800">
                    $4499
                  </h3>
                  <h3 className="text-4xl py-2 font-black text-black">$2999</h3>
                </div>
              </div>

              <p className="flex font-raleway text-sm text-neutral-800 font-bold pb-3 pt-4">
                End-to-end product development with an iterative approach to
                create a polished, feature-rich product.
              </p>

              <div className="w-full flex flex-col gap-4 h-[1px] bg-neutral-800 my-3"></div>

              <div className="flex flex-col w-full flex-grow">
                <p className="text-lg font-raleway font-extrabold py-4 text-black">
                  DELIVERABLES INCLUDE:
                </p>
                <ul className="font-raleway font-bold flex flex-col gap-3 flex-grow text-black">
                  {[
                    "1 Developer dedicated to your project.",
                    "One-of-a-kind crazy Lander design tailored to your brand.",
                    "High-quality, modern visuals.",
                    "Continuous Iterations",
                    "Attention to detail in every section.",
                    "Advanced SEO optimization.",
                    "Priority maintenance and updates.",
                    "Content management system.",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex flex-row items-center gap-2 text-sm"
                    >
                      <CircleCheckBig className="text-black w-5 h-5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="w-full flex justify-center pt-6">
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow hover:bg-primary/90 h-9 px-4 w-full py-5 rounded-full text-sm font-raleway font-extrabold bg-black text-accent cursor-pointer">
                    Book a call NOW!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
