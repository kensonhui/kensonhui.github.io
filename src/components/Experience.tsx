"use client";
import SocialTab from "./SocialTab";
import { motion } from "framer-motion";
import Image from "next/image";

const experiences = [
  {
    company: "Nokia",
    role: "Machine Learning Engineering Intern",
    description:
      "Model evaluation services with ROUGE, BLEU, Perplexity. Hallucination Manadgement.",
    logo: "/logos/nokia.png",
    dates: "January 2025 - Present",
  },
  {
    company: "Nokia",
    role: "AI/ML Automation Engineering Intern",
    description: "Created infrastructure for Autonomous Networks",
    logo: "/logos/nokia.png",
    dates: "September 2024 - December 2024",
  },
  {
    company: "WSIB",
    role: "Full-stack Developer",
    description: "Built ML proof-of-concepts to streamline workflows",
    logo: "/logos/wsib.jpg",
    dates: "2020 - 2021",
  },
  {
    company: "Dayforce",
    role: "Software Developer",
    description: "Made the UI/UX snappier and cleaner (previously Ceridian)",
    logo: "/logos/dayforce.png",
    dates: "2019 - 2020",
  },
  {
    company: "The Cooperators",
    role: "Automation Development",
    description: "Shipped speedy automations",
    logo: "/logos/cooperators.png",
    dates: "2018 - 2019",
  },
  {
    company: "Zogrox Group Inc.",
    role: "IoT Dashboard",
    description: "Created a dashboard for an IoT Smart Home",
    logo: "/logos/zogrox.png",
    dates: "2017 - 2018",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative w-full py-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-700 dark:text-gray-200 mb-4"
        >
          {" "}
          Experience
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 dark:text-gray-300 mb-8"
        >
          Over the years, I have had the opportunity to work with several
          amazing companies, contributing to various projects and gaining
          valuable experience. Here are some of the roles and responsibilities I
          have undertaken:
        </motion.p>

        <div className="space-y-8 px-4">
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
                    <p className="text-gray-500 dark:text-gray-400">
                      {exp.dates}
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
      </div>
    </section>
  );
};

export default Experience;
