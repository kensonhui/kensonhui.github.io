"use client";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import SocialTab from "./SocialTab";

export default function Contact() {
  return (
    <section id="contact" className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Contact
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-5 md:p-4"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Open to new opportunities and collaborations!{" "}
          </p>
          <div className="flex justify-center">
            <SocialTab />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
