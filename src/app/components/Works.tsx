import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  href: string;
  tags: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageSrc,
  href,
  tags,
}) => {
  return (
    <div className="flex flex-col items-center hover:scale-105 transition-all col-span-1 w-full">
      <div className="relative w-[80vw] sm:w-full h-72 md:h-96 rounded-lg cursor-pointer group">
        <Image
          alt={title}
          src={imageSrc}
          fill
          className="rounded-md select-none object-cover md:object-contain"
          sizes="100vw"
        />
        <div className="absolute inset-0 group-hover:backdrop-blur-sm group-hover:bg-[#00000040] transition-all duration-300 rounded-md"></div>
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end font-raleway">
          <div className="flex flex-wrap gap-2 mb-3 select-none">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-orange-600 text-black px-3 py-1 rounded-full text-xs font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-primary md:text-lg font-bold w-[80%]">
            {description}
          </p>
        </div>
      </div>
      <Link
        href={href}
        className="font-raleway bg-[#95959516] hover:bg-[#c2c2c26c] backdrop-blur-lg rounded-lg py-4 text-primary w-full mt-4 flex items-center justify-between px-8 transition-colors"
      >
        <p>{title}</p>
        <svg
          width="24"
          height="24"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      </Link>
    </div>
  );
};

const Works: React.FC = () => {
  const projects = [
    {
      title: "SkillSetMaster Course",
      description:
        "Modern Landing Pages for Famous Influencer Aryan Singh Course website",
      imageSrc: "/projects/more/skillsetmaster.png",
      href: "/work/skillsetmaster",
      tags: ["Vite React", "Figma", "Modern"],
    },
    {
      title: "Refer It",
      description:
        "A fully comhrehensive application that helps to get the best deals and offers on the gaming community",
      imageSrc: "/projects/more/referit.png",
      href: "/work/referit",
      tags: ["NextJS", "Supabase", "Stripe"],
    },
    {
      title: "Oktogram",
      description:
        "A decentralised social media and giveaway platoform build for solana and polygon with tokenized awards system and like based automated giveaways",
      imageSrc: "/projects/oktogramnew.png",
      href: "/work/oktogram",
      tags: ["Next.js", "Smart Contracts", "Polygon"],
    },
    {
      title: "MAMC Attendance Portal",
      description:
        "A web attendance portal ported into a PWA for multi-purpose use by the students of Indian Medical College MAMC",
      imageSrc: "/projects/mamc.png",
      href: "/work/mamc",
      tags: ["Vite React", "Trpc", "PWA"],
    },
    {
      title: "Telegram Bots",
      description:
        "Collection of automated Telegram bots for various utilities and tasks including AI automataion, crypto trading, and more",
      imageSrc: "/projects/tg-bots.png",
      href: "/work/tg-bots",
      tags: ["Python", "Telegram API", "Docker"],
    },
    {
      title: "Crokto",
      description:
        "Crokto is a decentralized Web3 platform revolutionizing online learning. Built on Next.js and Polygon, Crokto allows educators to create, sell, and manage courses on a secure, blockchain-powered marketplace",
      imageSrc: "/projects/crokto.png",
      href: "/work/crokto",
      tags: ["Vue.js", "IPFS", "Okto Auth"],
    },
  ];

  return (
    <section
      id="work"
      className="relative py-8 w-full flex flex-col items-center pb-20 scroll-mt-16"
    >
      <div className="absolute -z-[1000] inset-0 grain-background"></div>
      <div className="max-w-screen-2xl w-full px-4 sm:px-12 flex flex-col items-center relative mx-auto overflow-clip">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-y-3 text-center">
          <div className="text-primary text-7xl lg:text-8xl uppercase font-monigue">
            <p className="inline-block">Our&nbsp;</p>
            <div className="relative inline-block">
              <p className="inline-block">Work</p>
            </div>
          </div>
          <p className="font-raleway font-regular text-[#d2d2d2] italic">
            `&quot;Our projects aren&apos;t just cool, they are{" "}
            <span className="font-semibold">freezing-cold`&quot;</span>
          </p>
        </div>
        <div className="w-full grid md:grid-cols-2 items-center justify-center gap-8 mt-6 mb-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
              href={project.href}
              tags={project.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
