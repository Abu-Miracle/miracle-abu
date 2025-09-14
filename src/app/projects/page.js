import NavBar from "../components/NavBar";
import { projects } from "../data";
import Link from "next/link";

export default function Projects() {
  function truncateName(text, maxLength = 37) {
    if (!text) return "";
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  }

  function truncateDescription(text, maxLength = 150) {
    if (!text) return "";
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  }
  return (
    <div className="px-10 lg:px-20 my-16">
      <NavBar />

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-10">
        {projects.map((item, index) => (
          <Link
            key={index}
            href={`/projects/${item.slug}`}
            className="w-full flex md:flex-col flex-row mb-5 md:mb-7 bg-[#1a1a1a] hover:bg-[var(--light-gray)] rounded-xl cursor-pointer transition-colors duration-500"
          >
            <div className="md:w-full w-[40%] h-48  md:mb-3 mb-0 md:mr-3">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover md:rounded-t-xl md:rounded-bl-none rounded-l-xl"
              />
            </div>

            <div className="flex flex-col justify-between px-3 py-3 flex-1 mt-0 md:rounded-b-xl ml-2 md:ml-0">
              <div>
                <h1 className="font-semibold text-lg">
                  {truncateName(item.title)}
                </h1>
                <span className="text-xs items-center text-[var(--orange)] mt-1">
                  {item.role}
                </span>
              </div>

              <div className="flex flex-col text-xs md:text-[12px] md:mt-2 mt-0">
                <div className="block md:hidden mb-2">
                  {truncateDescription(item.description)}
                </div>
                <div className="hidden md:block mb-2">
                  {truncateDescription(item.description)}
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0">
                  <span className="text-[var(--text-light)]">{item.year}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
