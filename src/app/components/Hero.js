"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function Hero() {
  const [isCopied, setIsCopied] = useState(false);

  async function CopyEmail () {
    try {
      navigator.clipboard.writeText("miracleabu07@gmail.com");
      return true;
    } catch(err) {
      console.error("Failed to Copy email : ", err)
      return false;
    }
  }

  const handleCopy = async() => {
    const success = await CopyEmail();
    if (success) {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); 
    }
  }
  
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
        <p className="mt-4 mb-5 text-[14px]">
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

          <button onClick={() => {handleCopy()}} className="bg-[#161616] border-2 border-[var(--light-gray)] w-32 h-10 rounded flex items-center hover:bg-[var(--background)] cursor-pointer transition-colors duration-500">
            <span className="py-1 text-sm flex-1 flex justify-center">
              {isCopied ? 
              "Copied!"
              :
              "Copy Email"
              }
            </span>
            <span className="border-l-2 border-[var(--light-gray)] h-full w-8 flex items-center justify-center">
              {isCopied? 
              <Check src="/ph_copy.svg" color={"#ffffff"} alt="copy" className="w-5 h-" />
              :
              <Copy src="/ph_copy.svg" color={"#c0c0c0"} alt="copy" className="w-5 h-5" /> 
              }
              
            </span>
          </button>
        </div>
      </div>

      <div className="hidden lg:flex flex-col  justify-center items-center h-full">
        <div className="bg-[#161616] w-fit text-[12px] px-4 py-1 rounded-full flex items-center">
          <div className="bg-[var(--orange)] w-2 h-2 rounded-full mr-2 animate-pulse"></div>
          AVAILABLE FOR JOB
        </div>
        <div className="bg-gray-600 hidden border-4 border-[var(--light-gray)] lg:flex  w-56 h-56 rounded-full mt-10"></div>
      </div>
    </div>
  );
}
