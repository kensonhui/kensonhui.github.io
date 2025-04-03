"use client";
import { motion } from "framer-motion";
import { ThreeBackground } from "./ui/3d-background";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { SparklesCore } from "./ui/sparkles";
import Image from "next/image";
import SocialTab from "./SocialTab";

const Landing = () => {
  const words = [
    {
      text: "Hi,",
    },
    {
      text: "I'm",
    },
    {
      text: "Kenson",
    },
    {
      text: "👋",
    },
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <ThreeBackground />
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 space-y-6">
            <div className="space-y-2">
              <TypewriterEffect words={words} />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-xl text-gray-600 dark:text-gray-300"
              >
                A scrappy, hard-working developer who thrives on tackling tough
                problems and learning quickly.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="space-y-4"
            >
              <p className="text-gray-600 dark:text-gray-300">
                Currently a{" "}
                <span className="font-bold text-blue-600 dark:text-blue-400">
                  Machine Learning Engineering Intern
                </span>{" "}
                at Nokia on:
              </p>
              <ul className="space-y-2 text-gray-500 dark:text-gray-300 text-md">
                <li className="flex items-center">
                  <span className="mr-2">📊</span>
                  <span>
                    Model Evaluation Services with ROUGE, BLEU, Perplexity
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">🎯</span>
                  <span>
                    Hallucination Management Services with NeMo Guardrails
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">🔄</span>
                  <span>
                    Infrastructure for Model Training and Deployment Loops
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <SocialTab />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative flex-1 flex justify-center"
          >
            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
              <SparklesCore
                background="transparent"
                minSize={0.4}
                maxSize={1}
                particleDensity={100}
                particleColor="#4f46e5"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="relative 
                mb-8
                w-[348px] h-[300px] md:w-[348px] md:h-[348px] lg:w-[400px] lg:h-[400px]
                rounded-full overflow-hidden shadow-lg"
                >
                  <motion.div
                    whileHover={{ scale: 1.05, rotateY: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative w-full h-full rounded-full overflow-hidden shadow-lg"
                    style={{
                      transformStyle: "preserve-3d",
                      perspective: "1000px",
                    }}
                  >
                    <img
                      src="/headshot.jpeg"
                      alt="Photo of Kenson"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
