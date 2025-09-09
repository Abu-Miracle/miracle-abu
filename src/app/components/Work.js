export default function Work() {
  const projects = [
    {
      title: "BlockFund",
      role: "Lead Developer",
      year: "2025",
    },
    {
      title: "BlockDegrees",
      role: "Smart Contract Developer",
      year: "2025",
    },
    {
      title: "Lilies Food",
      role: "Frontend Developer",
      year: "2025",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-2 gap-3">
      <div className="gap-3 grid grid-cols-1 grid-rows-[6fr_6fr] h-full">

        <div className="px-2 pt-12 pb-7 bg-[var(--dark-gray)]   border-2 border-[var(--light-gray)] rounded-xl">
          <div className="flex items-center px-6 mb-7">
            <div className="bg-[var(--text-light)] w-2 h-2  rounded-full mr-2"></div>
            <span className="text-[var(--text-light)] text-[16px] ">
              Recent Projects
            </span>
          </div>

          {projects.map((project, index) => (
            <div
              key={index}
              className="flex justify-between items-center mb-5 hover:bg-white/10 cursor-pointer px-6 py-2 rounded-xl"
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
            </div>
          ))}
        </div>

        <div className="bg-[var(--dark-gray)] border-2 border-[var(--light-gray)] rounded-xl"></div>
      </div>

      <div className="grid grid-cols-1 gap-3 grid-rows-[1.5fr_1.5fr_4.5fr_4.5fr]">
        <div className="bg-[var(--dark-orange)] rounded-[14px] items-center w-full p-[2px] bg-gradient-to-r from-[var(--light-gray)] from-85% to-[var(--dark-orange)]">
          <div className="bg-linear-to-r from-[var(--dark-gray)] via-[#33130E] to-[var(--dark-orange)] from-45% via-100% rounded-xl justify-center flex h-full items-center text-[var(--text-light)]">
            Frontend Developer
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="bg-[var(--dark-orange)] rounded-[14px] items-center w-full p-[2px] bg-gradient-to-r from-[var(--light-gray)] from-85% to-[var(--dark-orange)]">
            <div className="bg-linear-to-r from-[var(--dark-gray)] via-[#33130E] to-[var(--dark-orange)] from-45% via-100% rounded-xl justify-center flex h-full items-center text-[var(--text-light)]">
              Smart Contract Developer
            </div>
          </div>

          <div className="bg-[var(--dark-orange)] rounded-[14px] items-center w-full p-[2px] bg-gradient-to-l from-[var(--light-gray)] from-85% to-[var(--dark-orange)]">
            <div className="bg-linear-to-l from-[var(--dark-gray)] via-[#33130E] to-[var(--dark-orange)] from-45% via-100% rounded-xl justify-center flex h-full items-center text-[var(--text-light)]">
              Product Designer
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-[var(--dark-gray)] border-2 border-[var(--light-gray)]">
            <div className="flex items-center mt-10 px-6 mb-5">
                <div className="bg-[var(--orange)] w-2 h-2 rounded-full mr-2"></div>
                <span className="text-[var(--orange)] text-[16px] ">
                Technology Stack
                </span>
            </div>

            <div className="flex justify-between items-center pl-10 pr-20">
                <div className="">
                    <h1 className="text-sm text-white mb-3">Frontend</h1>
                    <h1 className="text-[var(--text-light)] my-1 font-semibold">HTML/CSS</h1>
                    <h1 className="text-[var(--text-light)] my-1 font-semibold">Tailwind CSS</h1>
                    <h1 className="text-[var(--text-light)] my-1 font-semibold">React</h1>
                    <h1 className="text-[var(--text-light)] my-1 font-semibold">Next.js</h1>
                </div>
                <div className="">
                    <h1 className="text-sm text-white mb-3">Languages</h1>
                    <h1 className="text-[var(--text-light)] my-1 font-semibold">Rust</h1>
                    <h1 className="text-[var(--text-light)] my-1 font-semibold">Solidity</h1>
                    <h1 className="text-[var(--text-light)] my-1 font-semibold">JavaScript</h1>
                </div>
            </div>
        </div>

        <div className="bg-[var(--dark-gray)] border-2 border-[var(--light-gray)]">

        </div>
        
      </div>
    </div>
  );
}
