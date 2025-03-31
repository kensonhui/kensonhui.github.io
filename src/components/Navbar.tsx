export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-50/70 dark:bg-gray-800/70 backdrop-blur-md z-50">
      <div className="w-full mx-auto py-2 flex justify-between items-center sm:px-2 md:px-12 lg:px-16">
        <a
          href="#intro"
          className="text-lg font-bold text-gray-800 dark:text-gray-100"
        >
          KensonHui
        </a>
        <div className="space-x-4">
          <a
            href="#gallery"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            Things I've Been Up To
          </a>
          <a
            href="#projects"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            Projects
          </a>
          <a
            href="#experience"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            Experience
          </a>
        </div>
      </div>
    </nav>
  );
}
