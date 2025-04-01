"use client";
import SocialTab from "./SocialTab";
import { motion } from "framer-motion";
import Image from "next/image";

const experiences = [
  {
    company: "Nokia",
    role: "Infrastructure for Autonomous Networks",
    description: "Created infrastructure for Autonomous Networks",
    logo: "/logos/nokia.png",
  },
  {
    company: "WSIB",
    role: "ML Proof-of-Concepts",
    description: "Built ML proof-of-concepts to streamline workflows",
    logo: "/logos/wsib.jpg",
  },
  {
    company: "Dayforce",
    role: "UI/UX Improvements",
    description: "Made the UI/UX snappier and cleaner (previously Ceridian)",
    logo: "/logos/dayforce.png",
  },
  {
    company: "The Cooperators",
    role: "Automation Development",
    description: "Shipped speedy automations",
    logo: "/logos/cooperators.png",
  },
  {
    company: "Zogrox Group Inc.",
    role: "IoT Dashboard",
    description: "Created a dashboard for an IoT Smart Home",
    logo: "/logos/zogrox.png",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative w-full py-12">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-700 dark:text-gray-200 mb-8"
        >
          {" "}
          Experience
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative"
            >
              <div className="absolute -left-3 top-0 h-full w-0.5 bg-gray-200 dark:bg-gray-700" />
              <div className="absolute -left-4 top-0 h-3 w-3 rounded-full bg-blue-500 dark:bg-blue-400" />

              <div className="ml-4 p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-white dark:bg-gray-700">
                    <Image
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                      {exp.company}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      {exp.role}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12"
        >
          <SocialTab />
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
