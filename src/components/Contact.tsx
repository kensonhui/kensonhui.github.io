"use client";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, Heart } from "lucide-react";
import SocialTab from "./SocialTab";

export default function Contact() {
  return (
    <section id="contact" className="my-8 mb-32 w-full">
      <div className="sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-left mb-8"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Contact
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Got an interesting project or just want to say hi? Feel free to
            reach out to me!
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 md:p-10 border border-gray-100 dark:border-gray-700"
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-8">
            Connect With Me
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center space-x-4">
              <div className="w-6 flex justify-center">
                <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <a
                href="mailto:kenson.hui22@gmail.com"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                kenson.hui22@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-6 flex justify-center">
                <Github className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <a
                href="https://github.com/kensonhui"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                github.com/kensonhui
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-6 flex justify-center">
                <Linkedin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <a
                href="https://linkedin.com/in/kensonhui"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                linkedin.com/in/kensonhui
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-6 flex justify-center">
                <Twitter className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <a
                href="https://twitter.com/kenson_hui"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                twitter.com/kenson_hui
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center space-x-4">
            Made with
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="mx-1"
            >
              <Heart className="h-5 w-5 text-red-500" />
            </motion.span>
            by Kenson Hui
          </p>
        </motion.div>
      </div>
    </section>
  );
}
