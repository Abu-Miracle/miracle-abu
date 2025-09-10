import { FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-linear-to-l from-[var(--light-gray)] from-95% to-[var(--dark-orange)] p-[2px] rounded-[14px] h-[66px] lex justify-center items-center mt-3">
      <div className="bg-linear-to-l w-full rounded-xl h-full from-[var(--dark-gray)] from-60% to-[#33130E] justify-between flex items-center md:px-6 px-4">
        <div className="hidden md:flex text-[var(--text-light)]">
          Portfolio 2025
        </div>

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

        <div className="bg-[#161616] w-fit text-[8px] md:text-[10px] px-4 py-1 rounded-full flex items-center">
          <div className="bg-[var(--orange)] w-2 h-2 rounded-full mr-2"></div>
          AVAILABLE FOR JOB
        </div>
      </div>
    </div>
  );
}
