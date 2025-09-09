export default function Hero() {
  return (
    <div className="w-full bg-[var(--dark-gray)] border-2 border-[var(--light-gray)] flex justify-between items-center rounded-xl mb-3 px-7 lg:px-10 py-12 lg:py-16">
      <div className="lg:w-[40%] w-[50%]">
        <h1 className="text-[var(--text-light)]">Frontend Developer</h1>

        <h1 className="text-white text-3xl font-bold mt-10">I'm MIracle Abu</h1>
        <p className="my-4">
          I build responsive and user-friendly websites and web application
        </p>

        <div className="flex space-x-3">
          <button className="bg-[var(--dark-orange)] border-[var(--dark-gray)] px-3 rounded flex items-center hover:bg-[var(--orange)] cursor-pointer">
            <span className="">Hire me</span>
            <span className="border-l-2 border-[var(--dark-gray)] ml-3 pl-2 items-center flex h-full">
              <img src="/plus.svg" alt="plus" className=" w-6 h-6" />
            </span>
          </button>

          <button className="bg-[#161616] border-2  border-[var(--light-gray)] px-3 rounded flex items-center hover:bg-[var(--background)] cursor-pointer">
            <span className="py-1">Copy Email</span>
            <span className="border-l-2 border-[var(--light-gray)] ml-3 pl-2 py-1 h-full flex items-center">
              <img src="/ph_copy.svg" alt="copy" className=" w-6 h-6" />
            </span>
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-start h-full">
        <div className="bg-[#161616] text-[12px] px-4 py-1 rounded-full flex items-center">
          <div className="bg-[var(--orange)] w-2 h-2 rounded-full mr-2"></div>
          AVAILABLE FOR JOB
        </div>
        <div></div>
      </div>
    </div>
  );
}
