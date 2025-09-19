"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { motion } from "motion/react";
import { useRef } from "react";
import { useInView } from "motion/react";

export default function ColabInternshipDetails({ experience }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const outcomesRef = useRef(null);

  const skillsInView = useInView(skillsRef, { once: true, margin: "-100px" });
  const projectsInView = useInView(projectsRef, {
    once: true,
    margin: "-100px",
  });
  const outcomesInView = useInView(outcomesRef, {
    once: true,
    margin: "-100px",
  });

  const technicalLearning = [
    {
      title: "Blockchain Fundamentals",
      items: [
        "Blockchain architecture, consensus mechanisms (PoS), cryptographic hashing",
        "Ethereum ecosystem, transactions, gas mechanics",
        "Blockchain trilemma and Layer 2 solutions",
      ],
    },
    {
      title: "Solidity Programming",
      items: [
        "Data types, contract components, visibility modifiers",
        "State variables, functions, events, modifiers",
        "Inheritance, interfaces, global variables",
      ],
    },
    {
      title: "Token Standards Implementation",
      items: [
        "ERC-20 (Fungible tokens) - functions and events",
        "ERC-721 (NFTs) - ownership and transfer mechanics",
        "ERC-1155 (Hybrid tokens) - multi-token standard",
      ],
    },
    {
      title: "Testing & Security",
      items: [
        "Hardhat testing with JavaScript (Mocha/Chai)",
        "Foundry testing with Solidity",
        "Test suites, test cases, and unit tests",
        "Reentrancy guards, proper visibility modifiers",
        "Common vulnerabilities and mitigation strategies",
      ],
    },
    {
      title: "Frontend Development",
      items: [
        "Web3 Integration Stack: Next.js, Tailwind CSS, Wagmi, RainbowKit",
        "Connecting frontend to smart contracts",
        "Calculator dApp example implementation",
      ],
    },
    {
      title: "Professional & Industry Skills",
      items: [
        "Professional conduct and workplace etiquette",
        "Teamwork and collaborative problem-solving",
        "Technical project management and deadlines",
        "Quality assurance and testing practices",
      ],
    },
  ];

  const keyOutcomes = [
    "Duration: 3 months (July-September 2024)",
    "Technical depth gained in blockchain development",
    "Practical experience with full dApp development cycle",
    "Understanding of enterprise-level Web3 concepts",
  ];

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] p-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Link
            href="/"
            className="inline-flex items-center text-[var(--orange)] hover:text-[var(--orange)]/80 mb-6 mt-2 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Projects
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-[var(--dark-gray)] border-2 border-[var(--light-gray)] rounded-xl p-8 mb-6"
        >
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-white mb-2">
              {experience.name}
            </h1>
            <div className="flex items-center text-[var(--text-light)] mb-4">
              <div className="w-2 h-2 bg-[var(--orange)] rounded-full mr-2"></div>
              <span>{experience.location}</span>
            </div>
            <p className="text-[var(--orange)] text-lg font-semibold mb-1">
              Blockchain Development Internship
            </p>
            <p className="text-[var(--text-light)] text-sm">
              {experience.duration}
            </p>
          </div>

          <div className="bg-[var(--dark-gray)] border-2 border-[var(--light-gray)] rounded-xl p-6">
            <p className="text-[var(--text-light)] leading-relaxed">
              {experience.description}
            </p>
          </div>
        </motion.div>

        <motion.div
          ref={skillsRef}
          initial={{ opacity: 0, y: 30 }}
          animate={skillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="bg-[var(--dark-gray)] border-2 border-[var(--light-gray)] rounded-xl p-8 mb-6"
        >
          <div className="flex items-center mb-8">
            <div className="bg-[var(--text-light)] w-2 h-2 rounded-full mr-3"></div>
            <span className="text-[var(--text-light)] text-xl font-semibold">
              Skills and Technical Learning
            </span>
          </div>

          <div className="grid gap-6">
            {technicalLearning.map((section, index) => (
              <div
                key={index}
                className="bg-[var(--light-gray)] from-60% rounded-xl p-6"
              >
                <h3 className="text-white text-lg font-semibold mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="text-[var(--text-light)] text-sm flex items-start"
                    >
                      <div className="w-1.5 h-1.5 bg-[var(--orange)] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          ref={projectsRef}
          initial={{ opacity: 0, y: 30 }}
          animate={
            projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="bg-gradient-to-b from-[var(--light-gray)] from-90% to-[var(--dark-orange)] p-[2px] rounded-[14px] mb-6"
        >
          <div className="bg-gradient-to-b from-[var(--dark-gray)] from-45% to-[#33130E] rounded-xl p-8">
            <div className="flex items-center mb-6">
              <div className="bg-[var(--orange)] w-2 h-2 rounded-full mr-3"></div>
              <span className="text-white text-xl font-semibold">
                Project Highlight: Student Registry Contract
              </span>
            </div>

            <div className="mb-6">
              <p className="text-[var(--text-light)] mb-4">
                Developed a comprehensive smart contract system featuring
                advanced Solidity concepts including structs, mappings, and
                sophisticated access control mechanisms.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-[var(--light-gray)] rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">
                    Key Features
                  </h4>
                  <ul className="text-[var(--text-light)] text-sm space-y-1">
                    <li>• Complex struct implementations</li>
                    <li>• Advanced mapping patterns</li>
                    <li>• Role-based access control</li>
                    <li>• Payable fee collection system</li>
                    <li>• Smart contract Testing</li>
                  </ul>
                </div>
                <div className="bg-[var(--light-gray)] rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-[var(--dark-gray)] text-[var(--orange)] px-2 py-1 rounded text-xs">
                      Solidity
                    </span>
                    <span className="bg-[var(--dark-gray)] text-[var(--orange)] px-2 py-1 rounded text-xs">
                      Hardhat
                    </span>
                    <span className="bg-[var(--dark-gray)] text-[var(--orange)] px-2 py-1 rounded text-xs">
                      Foundry
                    </span>
                    <span className="bg-[var(--dark-gray)] text-[var(--orange)] px-2 py-1 rounded text-xs">
                      JavaScript
                    </span>
                  </div>
                </div>
              </div>

              <Link
                href="https://github.com/Abu-Miracle/cohort-5-2024/tree/main"
                className="bg-[var(--dark-orange)] hover:bg-[var(--dark-orange)] w-fit text-white px-6 py-3 rounded-lg transition-colors duration-300 flex items-center cursor-pointer"
              >
                <FaGithub size={18} className="mr-2" />
                View Repository
                <ExternalLink size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={outcomesRef}
          initial={{ opacity: 0, y: 30 }}
          animate={
            outcomesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="bg-[var(--dark-gray)] border-2 border-[var(--light-gray)] rounded-xl p-8"
        >
          <div className="flex items-center mb-6">
            <div className="bg-[var(--text-light)] w-2 h-2 rounded-full mr-3"></div>
            <span className="text-[var(--text-light)] text-xl font-semibold">
              Key Outcomes
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-2 pb-4">
            {keyOutcomes.map((outcome, index) => (
              <div key={index}>
                <div className="flex items-start">
                  <div className="w-[6px] h-[6px] bg-[var(--orange)] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <p className="text-[var(--text-light)] text-sm">{outcome}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[var(--light-gray)] rounded-xl p-6 text-center mt-5">
            <div className="bg-green-500 w-3 h-3 rounded-full mb-4 animate-pulse mx-auto"></div>
            <h3 className="text-white font-semibold mb-2">
              Program Completed Successfully
            </h3>
            <p className="text-[var(--text-light)] text-sm">
              Gained comprehensive blockchain development skills and practical
              Web3 experience
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
