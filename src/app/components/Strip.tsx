import React from "react";
import Marquee from "react-fast-marquee";

interface MarqueeBannerProps {
  words?: string[];
  speed?: number;
}

const MarqueeBanner: React.FC<MarqueeBannerProps> = ({
  words = [
    "DREAM.",
    "BUILD.",
    "LAUNCH.",
    "THINK.",
    "DESIGN.",
    "CODE.",
    "SHIP.",
    "HUSTLE.",
    "MVP.",
    "VISION.",
    "DREAM.",
    "BUILD.",
    "LAUNCH.",
    "THINK.",
    "DESIGN.",
    "CODE.",
    "SHIP.",
    "HUSTLE.",
    "MVP.",
    "VISION.",
  ],
  speed = 50,
}) => {
  // Create a single content string without gaps
  const marqueeContent = words.map((word, index) => (
    <span key={`${word}-${index}`} className="mx-1">
      {word}
    </span>
  ));

  return (
    <div className="relative z-30 -mt-10 w-full">
      <div className="absolute w-[100%] py-3 bg-accent text-black text-5xl font-monigue select-none -rotate-2 origin-center">
        <Marquee
          speed={speed}
          gradient={false}
          pauseOnHover={false}
          pauseOnClick={false}
          play={true}
        >
          {marqueeContent}
        </Marquee>
      </div>
    </div>
  );
};

export default MarqueeBanner;
