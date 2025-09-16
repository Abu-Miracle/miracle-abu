import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FaLocationDot } from "react-icons/fa6";
import { projects, experiences } from "../data";

export default function Work() {
  const lorem =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus nulla exercitationem dolorum assumenda debitis asperiores corporis vero reiciendis minima similique qui magnam vel possimus eligendi ea unde molestias ipsam sit, hic error facere enim praesentium? Distinctio nesciunt neque sunt culpa!";

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
        <div className="px-2 pt-12 pb-7 bg-[var(--dark-gray)]  border-2 border-[var(--light-gray)] rounded-xl">
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
        </div>

        <div className="bg-[var(--dark-gray)] border-2 border-[var(--light-gray)] rounded-xl pt-10 px-3 md:px-6">
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
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 grid-rows-[1.5fr_1.5fr_4.5fr_4.5fr]">
        <div className="bg-[var(--dark-orange)] rounded-[14px] items-center w-full p-[2px] bg-gradient-to-r from-[var(--light-gray)] from-85% to-[var(--dark-orange)]">
          <div className="bg-linear-to-r from-[var(--dark-gray)] to-[#33130E] from-45% rounded-xl justify-center flex h-full items-center text-[var(--text-light)] text-sm md:text-[16px]">
            Frontend Developer
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 text-sm md:text-[16px]">
          <div className="bg-[var(--dark-orange)] rounded-[14px] items-center w-full p-[2px] bg-gradient-to-r from-[var(--light-gray)] from-85% to-[var(--dark-orange)]">
            <div className="bg-linear-to-r from-[var(--dark-gray)] to-[#33130E] from-45% rounded-xl justify-center flex h-full items-center text-[var(--text-light)] text-center">
              Smart Contract Developer
            </div>
          </div>

          <div className="bg-[var(--dark-orange)] rounded-[14px] items-center w-full p-[2px] bg-gradient-to-l from-[var(--light-gray)] from-85% to-[var(--dark-orange)]">
            <div className="bg-linear-to-l from-[var(--dark-gray)] to-[#33130E] rounded-xl from-45% justify-center flex h-full items-center text-[var(--text-light)]">
              Web3 Developer
            </div>
          </div>
        </div>

        <div className="bg-[var(--dark-orange)] rounded-[14px] items-center w-full p-[2px] bg-gradient-to-b from-[var(--light-gray)] from-85% to-[var(--dark-orange)]">
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
        </div>

        <div className="bg-[var(--dark-gray)] border-2 border-[var(--light-gray)] rounded-xl p-6 flex flex-col justify-center items-center text-center">
          <div className="bg-green-500 w-3 h-3 rounded-full mb-4 animate-pulse"></div>
          <h3 className="text-white font-semibold mb-2">Available for Work</h3>
          <p className="text-[var(--text-light)] text-sm mb-4">
            Open to new opportunities and exciting projects
          </p>
          <button className="bg-[var(--dark-orange)] hover:bg-[var(--orange)]/80 text-white px-4 py-2 rounded-lg text-sm transition-colors">
            Let's Connect
          </button>
        </div>
      </div>
    </div>
  );
}
