"use client";

import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "motion/react";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = ["ABOUT", "PROJECTS", "CONTACT"];

  const isActive = (href) => {
    if (href === "/") return pathname === href;
    return pathname.startsWith(href);
  };

  const getCurrentPageName = () => {
    const currentItem = navLinks.find((item) => {
      const href =
        item === "ABOUT" ? "/" : `/${item.toLowerCase().replace(/\s/g, "")}`;
      return isActive(href);
    });
    return currentItem || "HOME";
  };

  return (
    <motion.div
      className="w-full flex md:justify-center justify-between mb-3 bg-[var(--dark-gray)] md:bg-transparent border-2 md:border-none border-[var(--light-gray)] rounded-full pl-1 md:pl-0 pr-5 md:pr-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex items-center justify-center">
        <div className="md:bg-[var(--dark-gray)] md:border-2 border-[var(--light-gray)] rounded-full flex justify-center items-center w-16 h-16 ">
          <Image
            src="/logo.svg"
            width={40}
            height={40}
            alt="Logo"
            className="mr-2 md:mr-0"
          />
        </div>
        <span className="flex md:hidden text-xl text-[var(--orange)] whitespace-nowrap">
          {getCurrentPageName()}
        </span>
      </div>

      <div className="bg-[#1B1B1B] border-[var(--light-gray)] hidden md:flex justify-between items-center border-2 w-full rounded-full px-14">
        {navLinks.map((item, index) => {
          const href =
            item === "ABOUT"
              ? "/"
              : `/${item.toLowerCase().replace(/\s/g, "")}`;
          return (
            <Link
              key={index}
              href={href}
              className={` ${
                isActive(href)
                  ? "text-[var(--orange)] hover:text-[var(--dark-orange)]"
                  : "text-white hover:text-[var(--text-light)]"
              }`}
            >
              {item}
            </Link>
          );
        })}
      </div>

      <div className="md:hidden flex items-center">
        <button
          className="text-white focus:outline-none cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {menuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setMenuOpen(false)}
          ></div>

          {/* Menu */}
          <div className="fixed top-16 left-0 w-full bg-[var(--dark-gray)] z-50 py-6 flex flex-col items-center gap-6">
            {navLinks.map((item, index) => {
              const href =
                item === "ABOUT"
                  ? "/"
                  : `/${item.toLowerCase().replace(/\s/g, "")}`;
              return (
                <Link
                  key={index}
                  href={href}
                  className={`text-sm ${
                    isActive(href)
                      ? "text-[var(--orange)] hover:text-[var(--dark-orange)]"
                      : "text-white hover:text-[var(--text-light)]"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </Link>
              );
            })}
          </div>
        </>
      )}
    </motion.div>
  );
}
