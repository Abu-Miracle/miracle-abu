import React from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

export default function KhemsafeInternshipDetails({ experience }) {
  const learningAreas = {
    webDevelopment: {
      title: "Web Development Fundamentals",
      skills: [
        "HTML markup language & document structure",
        "HTML elements, tags, and attributes (class, id, href, src)",
        "CSS styling, selectors, and declaration blocks",
        "CSS Box Model (margin, padding, border, content)",
        "Flexbox layout system & responsive design principles",
        "CSS units (absolute & relative) and integration methods",
      ],
    },
    cssAdvanced: {
      title: "Advanced CSS & Layout",
      skills: [
        "CSS Selectors: Simple, pseudo-class, pseudo-element, attribute",
        "Combination selectors (descendant, child, sibling)",
        "Inline, internal, and external CSS integration",
        "CSS positioning and advanced layout techniques",
        "Flexbox container and item properties",
        "Responsive web design implementation",
        "CSS debugging and optimization practices",
      ],
    },
    graphicDesign: {
      title: "Graphic Design & Visual Communication",
      skills: [
        "CorelDraw X7 interface and professional tools",
        "Logo design principles and brand identity",
        "Business card design and layout composition",
        "Flyer design and marketing material creation",
        "Visual hierarchy and design aesthetics",
        "Professional design workflow and processes",
        "Brand consistency and visual communication",
      ],
    },
    industrySkills: {
      title: "Professional & Industry Skills",
      skills: [
        "Industrial work environment adaptation",
        "Teamwork and collaborative problem-solving",
        "Attention to detail in development work",
        "Technical project management and deadlines",
      ],
    },
  };

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] p-6">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center text-[var(--orange)] hover:text-[var(--dark-orange)] mb-8 transition-colors"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Portfolio
        </Link>

        <div className="bg-[var(--dark-gray)] border-2 border-[var(--light-gray)] rounded-xl p-8 mb-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-white mb-2">
              {experience.name}
            </h1>
            <div className="flex items-center text-[var(--text-light)] mb-4">
              <div className="w-2 h-2 bg-[var(--orange)] rounded-full mr-2"></div>
              <span>{experience.location}</span>
            </div>
            <p className="text-[var(--orange)] text-lg font-semibold mb-1">
              Frontend Development abd Graphic Design
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
        </div>

        <div className="bg-[var(--dark-gray)] border-2 border-[var(--light-gray)] rounded-xl p-8 mb-6">
          <div className="flex items-center mb-8">
            <div className="bg-[var(--text-light)] w-2 h-2 rounded-full mr-3"></div>
            <span className="text-[var(--text-light)] text-xl font-semibold">
              Skills & Technical Learning
            </span>
          </div>

          <div className="grid gap-6">
            {Object.values(learningAreas).map((area, index) => (
              <div
                key={index}
                className="rounded-xl bg-[var(--light-gray)] p-6"
              >
                <h3 className="text-white text-lg font-semibold mb-4">
                  {area.title}
                </h3>
                <div className="space-y-2">
                  {area.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-start text-[var(--text-light)] text-sm"
                    >
                      <div className="w-1.5 h-1.5 bg-[var(--orange)] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-b from-[var(--light-gray)] from-90% to-[var(--dark-orange)] p-[1px] rounded-[14px] mb-6">
          <div className="bg-gradient-to-b from-[var(--dark-gray)] from-45% to-[#33130E] rounded-xl p-8">
            <div className="flex items-center mb-6">
              <div className="bg-[var(--orange)] w-2 h-2 rounded-full mr-3"></div>
              <span className="text-white text-xl font-semibold">
                Training Achievements & Portfolio Development
              </span>
            </div>

            <div className="mb-6">
              <p className="text-[var(--text-light)] mb-4">
                Developed comprehensive web development skills through hands-on
                projects and practical exercises. Created responsive web layouts
                using modern HTML5 and CSS3 techniques, while also producing
                professional graphic design materials using industry-standard
                software.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-[var(--light-gray)] rounded-xl p-4">
                  <h4 className="text-white font-semibold mb-2">
                    Web Development Projects
                  </h4>
                  <ul className="text-[var(--text-light)] text-sm space-y-1">
                    <li>• Responsive website layouts</li>
                    <li>• CSS Flexbox implementations</li>
                    <li>• Interactive web components</li>
                    <li>• Cross-browser compatibility</li>
                    <li>• Mobile-first design approach</li>
                  </ul>
                </div>
                <div className="bg-[var(--light-gray)] rounded-xl p-4">
                  <h4 className="text-white font-semibold mb-2">
                    Design Portfolio
                  </h4>
                  <ul className="text-[var(--text-light)] text-sm space-y-1">
                    <li>• Professional logo designs</li>
                    <li>• Business card layouts</li>
                    <li>• Marketing flyers and materials</li>
                    <li>• Brand identity development</li>
                    <li>• Visual communication projects</li>
                  </ul>
                </div>
              </div>

              <div className="bg-[var(--light-gray)] rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">
                  Technologies & Tools Mastered
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[var(--dark-gray)] text-[var(--orange)] px-3 py-1 rounded text-xs">
                    HTML5
                  </span>
                  <span className="bg-[var(--dark-gray)] text-[var(--orange)] px-3 py-1 rounded text-xs">
                    CSS3
                  </span>
                  <span className="bg-[var(--dark-gray)] text-[var(--orange)] px-3 py-1 rounded text-xs">
                    Responsive Design
                  </span>
                  <span className="bg-[var(--dark-gray)] text-[var(--orange)] px-3 py-1 rounded text-xs">
                    CorelDraw X7
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[var(--dark-gray)] border-2 border-[var(--light-gray)] rounded-xl p-8">
          <div className="flex items-center mb-5">
            <div className="bg-[var(--text-light)] w-2 h-2 rounded-full mr-3"></div>
            <span className="text-[var(--text-light)] text-xl font-semibold">
              Key Outcomes
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-2 mb-8">
            <div className="bg-[var(--dark-gray)] py-4">
              <h4 className="text-white font-semibold mb-3">
                Technical Growth
              </h4>
              <div className="space-y-2">
                <div className="flex items-start text-[var(--text-light)] text-sm">
                  <div className="w-1.5 h-1.5 bg-[var(--orange)] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  Mastered HTML/CSS fundamentals and responsive design
                </div>
                <div className="flex items-start text-[var(--text-light)] text-sm">
                  <div className="w-1.5 h-1.5 bg-[var(--orange)] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  Developed proficiency in graphic design tools and principles
                </div>
                <div className="flex items-start text-[var(--text-light)] text-sm">
                  <div className="w-1.5 h-1.5 bg-[var(--orange)] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  Built practical web development portfolio projects
                </div>
              </div>
            </div>

            <div className="bg-[var(--dark-gray)] py-4">
              <h4 className="text-white font-semibold mb-3">
                Professional Development
              </h4>
              <div className="space-y-2">
                <div className="flex items-start text-[var(--text-light)] text-sm">
                  <div className="w-1.5 h-1.5 bg-[var(--orange)] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  Enhanced workplace professionalism and time management
                </div>
                <div className="flex items-start text-[var(--text-light)] text-sm">
                  <div className="w-1.5 h-1.5 bg-[var(--orange)] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  Improved teamwork and collaborative problem-solving
                </div>
                <div className="flex items-start text-[var(--text-light)] text-sm">
                  <div className="w-1.5 h-1.5 bg-[var(--orange)] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  Gained industry exposure and practical work experience
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[var(--light-gray)] rounded-xl p-6 text-center">
            <div className="bg-green-500 w-3 h-3 rounded-full mb-4 animate-pulse mx-auto"></div>
            <h3 className="text-white font-semibold mb-2">
              SIWES Program Completed Successfully
            </h3>
            <p className="text-[var(--text-light)] text-sm">
              Foundation established for advanced web development and design
              career path
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
