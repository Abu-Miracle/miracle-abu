"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FaLocationDot } from "react-icons/fa6";
import { projects, experiences } from "../data";
import { motion } from "motion/react";
import { useRef } from "react";
import { useInView } from "motion/react";

export default function Work() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projectsRef = useRef(null);
  const experiencesRef = useRef(null);
  const stackRef = useRef(null);
  const availableRef = useRef(null);
  const skillsRef = useRef(null);

  const projectsInView = useInView(projectsRef, {
    once: true,
    margin: "-100px",
  });
  const experiencesInView = useInView(experiencesRef, {
    once: true,
    margin: "-100px",
  });
  const stackInView = useInView(stackRef, { once: true, margin: "-100px" });
  const availableInView = useInView(availableRef, {
    once: true,
    margin: "-100px",
  });
  const skillsInView = useInView(skillsRef, { once: true, margin: "-100px" });

  function truncateName(text, maxLength = 37) {
    if (!text) return "";
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  }

  function truncateDescription(text, maxLength = 100) {
    if (!text) return "";
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      <div className="gap-3 grid grid-cols-1 h-full">
        <motion.div
          ref={projectsRef}
          initial={{ opacity: 0, y: 30 }}
          animate={
            projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="px-2 pt-12 pb-7 bg-[var(--dark-gray)]  border-2 border-[var(--light-gray)] rounded-xl"
        >
          <div className="flex items-center px-6 mb-7">
            <div className="bg-[var(--text-light)] w-2 h-2  rounded-full mr-3"></div>
            <span className="text-[var(--text-light)] text-[16px] ">
              Recent Projects
            </span>
          </div>

          {projects.slice(0, 3).map((project, index) => (
            <Link
              key={index}
              href={`/projects/${project.slug}`}
              className="flex justify-between items-center mb-3 md:mb-5 hover:bg-white/10 cursor-pointer px-6 py-2 rounded-xl"
            >
              <div className="flex flex-col">
                <h1 className="text-white text-lg -mb-0.5">{project.title}</h1>
                <p className="text-[var(--text-light)] text-[14px]">
                  {project.role}
                </p>
              </div>
              <div className="text-sm text-[var(--text-light)]">
                {project.year}
              </div>
            </Link>
          ))}
          <div className="px-6 flex justify-end">
            <Link
              href="/projects"
              className="text-sm text-[var(--orange)] flex items-center hover:text-[var(--dark-orange)]"
            >
              <span>See More</span>
              <ArrowRight size={14} className="ml-1" />
            </Link>
          </div>
        </motion.div>

        <motion.div
          ref={experiencesRef}
          initial={{ opacity: 0, y: 30 }}
          animate={
            experiencesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="bg-[var(--dark-gray)] border-2 border-[var(--light-gray)] rounded-xl pt-10 px-3 md:px-6"
        >
          <div className="flex items-center mb-7 px-2">
            <div className="bg-[var(--text-light)] w-2 h-2 rounded-full mr-3"></div>
            <span className="text-[var(--text-light)] text-[16px] ">
              Work Experience
            </span>
          </div>

          {experiences.map((item, index) => (
            <Link
              key={index}
              href={`/experiences/${item.slug}`}
              className="w-full flex flex-col md:flex-row mb-5 md:mb-7 p-3 rounded-[14px] cursor-pointer transition-colors duration-300 hover:bg-[var(--light-gray)]"
            >
              <div className="w-full h-32 md:w-36 md:h-32 mb-3 md:mb-0 md:mr-3">
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full object-cover rounded-md"
                />
              </div>

              <div className="flex flex-col min-h-32 justify-between flex-1">
                <div>
                  <h1 className="font-semibold text-sm md:text-base">
                    {truncateName(item.name)}
                  </h1>
                  <div className="flex space-x-1 items-center text-[var(--text-light)] mt-1">
                    <span>
                      <FaLocationDot className="h-3" />
                    </span>
                    <span className="text-xs md:text-[12px]">
                      {item.location}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col text-xs md:text-[12px] mt-2 md:mt-0">
                  <div className="block md:hidden mb-2">
                    {truncateDescription(item.description)}
                  </div>
                  <div className="hidden md:block mb-2">
                    {truncateDescription(item.description)}
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0">
                    <span className="text-[var(--text-light)]">
                      {item.duration}
                    </span>
                    <span className="text-[var(--orange)] font-semibold">
                      {item.type}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>

      <div className="grid grid-cols-1 gap-3 grid-rows-[3fr_4.5fr_4.5fr]">
        <motion.div
          ref={skillsRef}
          initial={{ opacity: 0, y: 30 }}
          animate={skillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-3 h-full"
        >
          <div className="bg-[var(--dark-orange)] rounded-[14px] items-center w-full p-[2px] bg-gradient-to-r from-[var(--light-gray)] from-85% to-[var(--dark-orange)] flex-1">
            <div className="bg-linear-to-r from-[var(--dark-gray)] to-[#33130E] from-45% rounded-xl justify-center flex h-full items-center text-[var(--text-light)] text-sm md:text-[16px]">
              Frontend Developer
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 text-sm md:text-[16px] flex-1">
            <div className="bg-[var(--dark-orange)] rounded-[14px] items-center w-full p-[2px] bg-gradient-to-r from-[var(--light-gray)] from-85% to-[var(--dark-orange)] h-full">
              <div className="bg-linear-to-r from-[var(--dark-gray)] to-[#33130E] from-45% rounded-xl justify-center flex h-full items-center text-[var(--text-light)] text-center">
                Smart Contract Developer
              </div>
            </div>

            <div className="bg-[var(--dark-orange)] rounded-[14px] items-center w-full p-[2px] bg-gradient-to-l from-[var(--light-gray)] from-85% to-[var(--dark-orange)] h-full">
              <div className="bg-linear-to-l from-[var(--dark-gray)] to-[#33130E] rounded-xl from-45% justify-center flex h-full items-center text-[var(--text-light)]">
                Web3 Developer
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={stackRef}
          initial={{ opacity: 0, y: 30 }}
          animate={stackInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-[var(--dark-orange)] rounded-[14px] items-center w-full p-[2px] bg-gradient-to-b from-[var(--light-gray)] from-85% to-[var(--dark-orange)]"
        >
          <div className="rounded-xl bg-[var(--dark-gray)] w-full h-full bg-linear-to-b from-[var(--dark-gray)] to-[#33130E] from-45% flex flex-col">
            <div className="flex items-center mt-10 px-6 mb-5">
              <div className="bg-[var(--text-light)] w-2 h-2 rounded-full mr-3"></div>
              <span className="text-[var(--text-light)] text-[16px] ">
                Technology Stack
              </span>
            </div>

            <div className="flex justify-between  items-center pl-10 pr-20 mb-7 md:mb-0 text-sm md:text-[16px]">
              <div className="">
                <h1 className="text-sm text-white mb-3">Frontend</h1>
                <h1 className="text-[var(--text-light)] my-1 font-semibold">
                  HTML/CSS
                </h1>
                <h1 className="text-[var(--text-light)] my-1 font-semibold">
                  Tailwind CSS
                </h1>
                <h1 className="text-[var(--text-light)] my-1 font-semibold">
                  React
                </h1>
                <h1 className="text-[var(--text-light)] my-1 font-semibold">
                  Next.js
                </h1>
              </div>
              <div className="">
                <h1 className="text-sm text-white mb-3">Languages</h1>
                <h1 className="text-[var(--text-light)] my-1 font-semibold">
                  Rust
                </h1>
                <h1 className="text-[var(--text-light)] my-1 font-semibold">
                  Solidity
                </h1>
                <h1 className="text-[var(--text-light)] my-1 font-semibold">
                  JavaScript
                </h1>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={availableRef}
          initial={{ opacity: 0, y: 30 }}
          animate={
            availableInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="bg-[var(--dark-gray)] border-2 border-[var(--light-gray)] rounded-xl p-6 flex flex-col justify-center items-center text-center"
        >
          <div className="bg-green-500 w-3 h-3 rounded-full mb-4 animate-pulse"></div>
          <h3 className="text-white font-semibold mb-2">Available for Work</h3>
          <p className="text-[var(--text-light)] text-sm mb-4">
            Open to new opportunities and exciting projects
          </p>
          <button className="bg-[var(--dark-orange)] hover:bg-[var(--orange)]/80 text-white px-4 py-2 rounded-lg text-sm transition-colors cursor-pointer">
            Let's Connect
          </button>
        </motion.div>
      </div>
    </div>
  );
}
