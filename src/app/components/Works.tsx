import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageSrc,
  tags,
  index,
}) => {
  const cardRef = useRef(null);
  const isCardInView = useInView(cardRef, { once: true, amount: 0.3 });

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.2,
        ease: "easeOut",
      },
    },
  };

  const tagVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        delay: i * 0.1,
        type: "spring",
        stiffness: 200,
      },
    }),
  };

  return (
    <motion.div
      ref={cardRef}
      className="flex flex-col items-center transition-all col-span-1 w-full"
      variants={cardVariants}
      initial="hidden"
      animate={isCardInView ? "visible" : "hidden"}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.3 },
      }}
    >
      <motion.div
        className="relative w-[80vw] sm:w-full h-72 md:h-96 rounded-lg cursor-pointer group overflow-hidden"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <motion.img
          alt={title}
          src={imageSrc}
          className="w-full h-full rounded-md select-none object-cover md:object-contain"
          initial={{ scale: 1.1 }}
          animate={isCardInView ? { scale: 1 } : { scale: 1.1 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
        />

        <motion.div
          className="absolute inset-0 group-hover:backdrop-blur-sm group-hover:bg-[#00000040] transition-all duration-300 rounded-md"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        />

        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end font-raleway"
          initial={{ y: 20, opacity: 0 }}
          whileHover={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="flex flex-wrap gap-2 mb-3 select-none"
            initial="hidden"
            whileHover="visible"
          >
            {tags.map((tag, idx) => (
              <motion.span
                key={idx}
                className="bg-orange-600 text-black px-3 py-1 rounded-full text-xs font-semibold"
                variants={tagVariants}
                custom={idx}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
          <motion.p
            className="text-primary md:text-lg font-bold w-[80%]"
            initial={{ opacity: 0, y: 10 }}
            whileHover={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            {description}
          </motion.p>
        </motion.div>
      </motion.div>

      <motion.a
        className="font-raleway bg-[#95959516] hover:bg-[#c2c2c26c] backdrop-blur-lg rounded-lg py-4 text-primary w-full mt-4 flex items-center justify-between px-8 transition-colors"
        whileHover={{
          scale: 1.02,
          backgroundColor: "#c2c2c26c",
        }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 20 }}
        animate={isCardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
      >
        <motion.p
          initial={{ x: -10, opacity: 0 }}
          animate={isCardInView ? { x: 0, opacity: 1 } : { x: -10, opacity: 0 }}
          transition={{ duration: 0.4, delay: index * 0.2 + 0.4 }}
        >
          {title}
        </motion.p>
        <motion.svg
          width="24"
          height="24"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial={{ x: -10, opacity: 0 }}
          animate={isCardInView ? { x: 0, opacity: 1 } : { x: -10, opacity: 0 }}
          transition={{ duration: 0.4, delay: index * 0.2 + 0.5 }}
          whileHover={{ x: 5 }}
        >
          <path
            d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </motion.svg>
      </motion.a>
    </motion.div>
  );
};

const Works: React.FC = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, amount: 0.5 });
  const isSubtitleInView = useInView(subtitleRef, { once: true, amount: 0.5 });

  const titleVariants = {
    hidden: { opacity: 0, y: 80 },
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

  const projects = [
    {
      title: "HRMS Platform for Sociolinq",
      description:
        "Modern HRMS platform with a responsive React frontend, FastAPI backend and PostgreSQL database, covering employee profiles, attendance, and leave management.",
      imageSrc: "/works/sociolinq.png",
      tags: ["React", "TailwindCSS", "FastAPI", "PostgreSQL", "MUI"],
    },
    {
      title: "Career Charcha Website",
      description:
        "Career Charcha's website with React and Express, improving performance and integrating Google Sheets for form data capture.",
      imageSrc: "/works/careercharcha.png",
      tags: ["React", "Express", "Google Sheets API"],
    },
    {
      title: "Streeya Website UI/UX Design",
      description:
        "Designed 50+ web pages with a strong brand identity and a responsive layout for seamless multi-device user experience.",
      imageSrc: "/works/streeya.png",
      tags: ["UI/UX", "Figma", "Responsive Design"],
    },
    {
      title: "Webyapar Website",
      description:
        "Delivered a static, responsive website using HTML5, CSS3, JavaScript, and Bootstrap tailored to client needs.",
      imageSrc: "/works/webyapar.png",
      tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    },
  ];

  return (
    <motion.section
      id="work"
      className="relative py-8 w-full flex flex-col items-center pb-20 scroll-mt-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute -z-[1000] inset-0 grain-background"></div>
      <div className="max-w-screen-2xl w-full px-4 sm:px-12 flex flex-col items-center relative mx-auto overflow-clip">
        <motion.div
          className="w-full flex flex-col lg:flex-row items-center justify-between gap-y-3 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            ref={titleRef}
            className="text-primary text-7xl lg:text-8xl uppercase font-monigue"
            variants={titleVariants}
            initial="hidden"
            animate={isTitleInView ? "visible" : "hidden"}
          >
            <motion.p
              className="inline-block"
              initial={{ opacity: 0, x: -50 }}
              animate={
                isTitleInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
              }
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our&nbsp;
            </motion.p>
            <motion.div
              className="relative inline-block"
              initial={{ opacity: 0, x: 50 }}
              animate={
                isTitleInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
              }
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.p
                className="inline-block"
                initial={{ rotateY: 90 }}
                animate={isTitleInView ? { rotateY: 0 } : { rotateY: 90 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Work
              </motion.p>
            </motion.div>
          </motion.div>

          <motion.p
            ref={subtitleRef}
            className="font-raleway font-regular text-[#d2d2d2] italic"
            variants={subtitleVariants}
            initial="hidden"
            animate={isSubtitleInView ? "visible" : "hidden"}
          >
            `&quot;Our projects aren&apos;t just cool, they are{" "}
            <motion.span
              className="font-semibold"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isSubtitleInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              freezing-cold`&quot;
            </motion.span>
          </motion.p>
        </motion.div>

        <motion.div
          className="w-full grid md:grid-cols-2 items-center justify-center gap-8 mt-6 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
              tags={project.tags}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Works;
