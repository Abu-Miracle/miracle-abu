"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import { FaGithub, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import NavBar from "../components/NavBar";
import Link from "next/link";
import { motion } from "motion/react";
import { useRef } from "react";
import { useInView } from "motion/react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    const subject = `Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=miracleabu07@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
    );
  };

  return (
    <div className="px-10 lg:px-20 my-16">
      <NavBar />
      <div className="min-h-screen text-white py-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.5,
                  duration: 1,
                  ease: "easeInOut",
                },
              },
            }}
            className="grid md:grid-cols-2 pt-5 gap-12"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 1,
                    ease: "easeInOut",
                  },
                },
              }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-semibold mb-6">
                  Contact Information
                </h2>

                <div className="space-y-4 text-[var(--text-light)]">
                  <div className="flex items-center space-x-3">
                    <Mail className="text-[var(--orange)]" size={20} />
                    <Link
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=miracleabu07@gmail.com"
                      target="_blank"
                      className="hover:text-white "
                    >
                      miracleabu07@gmail.com
                    </Link>
                  </div>

                  <div className="flex items-center space-x-3">
                    <FaGithub className="text-[var(--orange)]" size={20} />
                    <Link
                      href="https://github.com/Abu-Miracle"
                      className="hover:text-white "
                    >
                      Abu_Miracle
                    </Link>
                  </div>

                  <div className="flex items-center space-x-3">
                    <FaXTwitter className="text-[var(--orange)]" size={20} />
                    <Link
                      href="https://x.com/miracle_abu01"
                      className="hover:text-white "
                    >
                      miracle_abu01
                    </Link>
                  </div>

                  <div className="flex items-center space-x-3">
                    <FaLinkedinIn className="text-[var(--orange)]" size={20} />
                    <Link
                      href="https://www.linkedin.com/in/miracle-abu-2018412b1/"
                      className="hover:text-white "
                    >
                      MIracle Abu
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Availability</h3>
                <div className="text-[var(--text-light)] space-y-4">
                  <p>✅ Open for new projects</p>
                  <p>🕒 Usually respond within 24 hours</p>
                  <p>🌍 Available for remote work</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              ref={ref}
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 1,
                    ease: "easeInOut",
                  },
                },
              }}
              className="border-2 border-[var(--light-gray)] rounded-lg p-8"
            >
              <h1 className="text-2xl font-semibold pb-4">Send a message</h1>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[var(--light-gray)] outline-none rounded-lg  focus:ring-2 focus:ring-[var(--orange)]"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[var(--light-gray)] outline-none rounded-lg  focus:ring-2 focus:ring-[var(--orange)]"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-[var(--light-gray)] outline-none rounded-lg  focus:ring-2 focus:ring-[var(--orange)] resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-[var(--dark-orange)] hover:bg-[var(--darker-orange)] cursor-pointer text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
