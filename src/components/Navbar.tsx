"use client";
import { useState } from "react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-50/70 dark:bg-gray-800/70 backdrop-blur-md z-50">
      <div className="w-full mx-auto py-2 flex justify-between items-center px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20">
        <a
          href="#intro"
          className="text-lg font-bold text-gray-800 dark:text-gray-100"
        >
          KensonHui
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4 items-center">
          <a
            href="#passions"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            Passions
          </a>
          <a
            href="#experience"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            Projects
          </a>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center space-x-4">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-blue-50/70 dark:bg-gray-800/70 backdrop-blur-md py-2">
          <div className="flex flex-col space-y-2 px-4">
            <a
              href="#gallery"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Things I've Been Up To
            </a>
            <a
              href="#projects"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#experience"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Experience
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
