export default function Hero() {
  return (
    <div className="w-full bg-[var(--dark-gray)] border-2 border-[var(--light-gray)] flex justify-between  items-center rounded-xl mb-3 px-7 lg:px-10 py-12 lg:py-16">
      <div className="lg:w-[40%] w-full">
        <div className="md:hidden bg-[#161616] w-fit text-[12px] px-4 py-1 rounded-full flex mb-4 items-center">
          <div className="bg-[var(--orange)] w-2 h-2 rounded-full mr-2"></div>
          AVAILABLE FOR JOB
        </div>
        <h1 className="text-[var(--text-light)]">Frontend Developer</h1>

        <div className="bg-gray-600 flex border-4 border-[var(--light-gray)] lg:hidden  w-56 h-56 rounded-full mt-10"></div>

        <h1 className="text-white text-3xl font-bold mt-10">I'm MIracle Abu</h1>
        <p className="mt-4 mb-5 text-[15px]">
          I build responsive, user-friendly websites and web applications using
          modern technologies like React and Next.js. I focus on creating
          seamless user experiences and pixel-perfect designs that work
          beautifully across all devices
        </p>

        <div className="md:flex space-y-3 space-x-3 md:h-10 ">
          <button className="bg-[var(--orange)] border-2 border-[var(--dark-gray)] w-32 h-10 rounded flex items-center hover:bg-[var(--dark-orange)] cursor-pointer transition-colors duration-500">
            <span className="py-1 text-sm  flex-1 flex justify-center">
              Hire Me
            </span>
            <span className="border-l-2 border-[var(--dark-gray)] h-full w-8 flex items-center justify-center">
              <img src="/plus.svg" alt="plus" className="w-6 h-6" />
            </span>
          </button>

          <button className="bg-[#161616] border-2 border-[var(--light-gray)] w-32 h-10 rounded flex items-center hover:bg-[var(--background)] cursor-pointer transition-colors duration-500">
            <span className="py-1 text-sm flex-1 flex justify-center">
              Copy Email
            </span>
            <span className="border-l-2 border-[var(--light-gray)] h-full w-8 flex items-center justify-center">
              <img src="/ph_copy.svg" alt="copy" className="w-6 h-6" />
            </span>
          </button>
        </div>
      </div>

      <div className="hidden lg:flex flex-col justify-start h-full">
        <div className="bg-[#161616] text-[12px] px-4 py-1 rounded-full flex items-center">
          <div className="bg-[var(--orange)] w-2 h-2 rounded-full mr-2"></div>
          AVAILABLE FOR JOB
        </div>
                <div className="bg-gray-600 hidden border-4 border-[var(--light-gray)] lg:flex  w-56 h-56 rounded-full mt-10"></div>

      </div>
    </div>
  );
}
