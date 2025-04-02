"use client";
import { motion } from "framer-motion";

export const TypewriterEffect = ({ words }: { words: { text: string }[] }) => {
  return (
    <div className="flex space-x-1 my-6">
      {words.map((word, idx) => (
        <motion.div
          key={word.text + idx}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.2,
            delay: idx * 0.1,
          }}
          className="text-4xl font-bold text-gray-800 dark:text-gray-100"
        >
          {word.text}
        </motion.div>
      ))}
    </div>
  );
};
