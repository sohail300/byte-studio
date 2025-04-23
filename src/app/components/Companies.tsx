import React from "react";
import Image from "next/image";

const Companies: React.FC = () => {
  return (
    <div className="w-full flex items-center flex-col py-8 bg-background mt-0 border-y border-[#1e1e1e]">
      <div className="max-w-screen-2xl w-full px-4 sm:px-12 flex flex-col items-center relative mx-auto overflow-clip">
        <p
          aria-label="Trusted by Top teams & Orgs in the world"
          className="font-anton text-[#aaaaaa] text-xl text-center"
          style={{ opacity: 1, transform: "none" }}
        >
          Trusted by Top Companies and Startups
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 my-8 md:my-8 w-full gap-x-4 gap-y-6 md:gap-y-0 select-none">
          <div className="flex items-center justify-center">
            <Image
              alt="Sociolinq"
              loading="lazy"
              width={200}
              height={40}
              src="/companies/sociolinq.png"
              className=" grayscale"
            />
          </div>

          <div className="flex items-center justify-center">
            <Image
              alt="Glocybs"
              loading="lazy"
              width={200}
              height={40}
              src="/companies/glocybs.png"
              className=" grayscale"
            />
          </div>

          <div className="flex items-center justify-center">
            <Image
              alt="Streeya"
              loading="lazy"
              width={200}
              height={40}
              src="/companies/streeya.png"
              className=" grayscale"
            />
          </div>

          <div className="flex items-center justify-center">
            <Image
              alt="Webyapar"
              loading="lazy"
              width={200}
              height={40}
              src="/companies/webyapar.png"
              className=" grayscale"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
