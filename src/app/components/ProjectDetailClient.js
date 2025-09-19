"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";
import { useRef } from "react";
import { useInView } from "motion/react";

export default function ProjectDetailClient({ project }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="min-h-screen bg-[var(--bg)] p-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Link
            href="/projects"
            className="inline-flex items-center text-[var(--orange)] hover:text-[var(--orange)]/80 mb-8 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Projects
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-gradient-to-b from-[var(--light-gray)] from-90% to-[var(--dark-orange)] p-[1px] rounded-[13px]"
        >
          <div className="bg-gradient-to-b from-[var(--dark-gray)] from-65% to-[#33130E] rounded-xl">
            {project.image && (
              <div className="">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-t-xl"
                />
              </div>
            )}

            <div className="p-8">
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-white mb-2">
                  {project.title}
                </h1>
                <p className="text-[var(--dark-orange)] text-lg">
                  {project.role}
                </p>
                <p className="text-[var(--text-light)] text-sm">
                  {project.year}
                </p>
              </div>

              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="prose prose-invert max-w-none"
              >
                <h2 className="text-xl font-semibold text-white mb-4">
                  Project Overview
                </h2>
                <p className="text-[var(--text-light)] mb-6">
                  {project.description ||
                    "Detailed description of the project..."}
                </p>

                {project.technologies && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-[var(--light-gray)] text-white px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {project.liveUrl && (
                  <div className="flex gap-4 mt-8">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[var(--dark-orange)] hover:bg-[var(--orange)]/80 text-white px-4 md:px-6 py-2 rounded-lg transition-colors"
                    >
                      View Live Project
                    </a>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[var(--dark-gray)] text-white px-4 md:px-6 py-2 rounded-lg hover:bg-[var(--light-gray)] transition-colors"
                      >
                        View Code
                      </a>
                    )}
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
