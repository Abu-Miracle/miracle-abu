"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { motion } from "motion/react";
import { div } from "motion/react-m";

export default function Hero() {
  const [isCopied, setIsCopied] = useState(false);

  async function CopyEmail() {
    try {
      navigator.clipboard.writeText("miracleabu07@gmail.com");
      return true;
    } catch (err) {
      console.error("Failed to Copy email : ", err);
      return false;
    }
  }

  const handleCopy = async () => {
    const success = await CopyEmail();
    if (success) {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 3000);
    }
  };

  return (
    <motion.div
      className="w-full bg-[var(--dark-gray)] border-2 border-[var(--light-gray)] flex justify-between  items-center rounded-xl mb-3 px-7 lg:px-10 py-12 lg:py-[99px]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="lg:w-[40%] w-full">
        <div className="md:hidden bg-[#161616] w-fit text-[12px] px-4 py-1 rounded-full flex mb-4 items-center">
          <div className="bg-[var(--orange)] w-2 h-2 rounded-full mr-2 animate-pulse"></div>
          AVAILABLE FOR JOB
        </div>

        <h1 className="text-[var(--text-light)]">Frontend Developer</h1>

        <motion.div
          animate={{ x: [0, -10, 0], y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex lg:hidden items-center justify-center rounded-full w-[226px] h-[226px] p-[2px] bg-gradient-to-b from-[var(--light-gray)] from-50% to-[var(--dark-orange)] mt-12"
        >
         <div 
            className="bg-bottom bg-cover w-full h-full rounded-full"
            style={{ backgroundImage: `url('${process.env.NEXT_PUBLIC_IMAGE_LINK}')` }}
          >
            <div className="w-full h-full rounded-full bg-gradient-to-b from-black/5 from-55% to-[var(--dark-orange)]/50"></div>
          </div>
        </motion.div>

        <h1 className="text-white text-3xl font-bold mt-10">I'm MIracle Abu</h1>
        <p className="mt-4 mb-5 text-[14px]/6">
          I build responsive, user-friendly websites and web applications using
          modern technologies like React and Next.js. I focus on creating
          seamless user experiences and pixel-perfect designs that work
          beautifully across all devices
        </p>

        <div className="md:flex space-y-6 space-x-3 md:h-10 ">
          <button
            onClick={() => {
              const subject = encodeURIComponent("Portfolio Hire Request");
              const body = encodeURIComponent(
                "Hello, I would like to discuss hiring opportunities.",
              );
              window.open(
                `https://mail.google.com/mail/?view=cm&fs=1&to=miracleabu07@gmail.com&su=${subject}&body=${body}`,
                "_blank",
              );
            }}
            className="w-[126px] h-[38px] flex items-center shadow-lg shadow-[#f35034]/50 cursor-pointer rounded-md  transition-transform duration-300 group "
          >
            <span className="bg-[var(--dark-orange)] py-1 text-sm w-full h-full flex-1 justify-center rounded-l-md flex items-center inset-shadow-sm inset-shadow-black/60 group-hover:bg-[var(--darker-orange)] transition-colors duration-300">
              Hire Me
            </span>
            <span className="rounded-r-md bg-[var(--dark-orange)] ml-[1px] h-full w-8 flex items-center justify-center inset-shadow-sm inset-shadow-black/60 group-hover:bg-[var(--darker-orange)] transition-colors duration-300">
              <img src="/plus.svg" alt="plus" className="w-6 h-6" />
            </span>
          </button>

          <button
            onClick={() => {
              handleCopy();
            }}
            className="w-[126px] h-[38px] rounded-md flex items-center
          cursor-pointer  transition-transform duration-300 group shadow-lg shadow-gray-400/10"
          >
            <span className="bg-[#161616] h-full flex items-center py-1 text-sm flex-1 justify-center inset-shadow-sm inset-shadow-white/20 rounded-l-md group-hover:bg-[var(--background)] transition-colors duration-300">
              {isCopied ? "Copied!" : "Copy Email"}
            </span>
            <span className="bg-[#161616] ml-[2px] border-[var(--light-gray)] h-full my-[2px] w-8 flex items-center justify-center inset-shadow-sm inset-shadow-white/20 rounded-r-md group-hover:bg-[var(--background)] transition-colors duration-300">
              {isCopied ? (
                <Check
                  src="/ph_copy.svg"
                  color={"#ffffff"}
                  alt="copy"
                  className="w-5 h-"
                />
              ) : (
                <Copy
                  src="/ph_copy.svg"
                  color={"#c0c0c0"}
                  alt="copy"
                  className="w-5 h-5"
                />
              )}
            </span>
          </button>
        </div>
      </div>

      <div className="hidden lg:flex flex-col  justify-center items-center h-full">
        <div className="bg-[#161616] w-fit text-[12px] px-4 py-1 rounded-full flex items-center">
          <div className="bg-[var(--orange)] w-2 h-2 rounded-full mr-2 animate-pulse"></div>
          AVAILABLE FOR JOB
        </div>

        <motion.div
          animate={{ x: [0, -10, 0], y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex items-center justify-center rounded-full w-[226px] h-[226px] p-[2px] bg-gradient-to-b from-[var(--light-gray)] from-50% to-[var(--dark-orange)] mt-10"
        >
          <div 
            className="bg-bottom bg-cover w-full h-full rounded-full"
            style={{ backgroundImage: `url('${process.env.NEXT_PUBLIC_IMAGE_LINK}')` }}
          >
            <div className="w-full h-full rounded-full bg-gradient-to-b from-black/5 from-55% to-[var(--dark-orange)]/50"></div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
