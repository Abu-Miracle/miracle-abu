"use client";

import { FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";
import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "motion/react";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      className="bg-linear-to-l from-[var(--light-gray)] from-95% to-[var(--dark-orange)] p-[2px] rounded-[14px] h-[66px] flex justify-center items-center mt-3"
    >
      <div className="bg-linear-to-l w-full rounded-xl h-full from-[var(--dark-gray)] from-60% to-[#33130E] justify-between flex items-center md:px-6 px-4">
        <div className="flex text-[var(--text-light)]">Portfolio 2025</div>

        <div className="flex space-x-4 md:space-x-6">
          <Link href="https://x.com/miracle_abu01" target="_blank">
            <FaXTwitter
              size={23}
              className="cursor-pointer hover:text-[var(--orange)] transition-colors duration-300"
            />
          </Link>
          <Link href="https://github.com/Abu-Miracle" target="_blank">
            <FaGithub
              size={23}
              className="cursor-pointer hover:text-[var(--orange)] transition-colors duration-300"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/miracle-abu-2018412b1/"
            target="_blank"
          >
            <FaLinkedin
              size={23}
              className="cursor-pointer hover:text-[var(--orange)] transition-colors duration-300"
            />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
