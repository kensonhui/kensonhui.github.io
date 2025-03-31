import Image from "next/image";
import Link from "next/link";
import SocialTab from "@/components/SocialTab";
import Projects from "@/components/Projects";
import { projects } from "@/components/data/projects";
import Gallery from "@/components/Gallery";
import Navbar from "@/components/Navbar";
import Landing from "@/components/Landing";

const basePath = process.env.BASE_PATH || "";

export default function Home() {
  return (
    <main className="relative min-h-screen h-full grid place-items-center bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 sm:px-2 md:px-12 lg:px-16">
      <Navbar />
      <section
        id="intro"
        className="
          relative
          h-screen
          flex 
          place-items-center
          w-full
        "
      >
        <Landing />
      </section>
      <section
        id="gallery"
        className="
          w-full
          relative
          pb-8
        "
      >
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
          Building Together
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          Whether it's organizing events, mentoring peers, or jamming on
          projects, I believe in bringing the right people together! Recently,
          I've been investing time into:
        </p>
        <ul className="mt-4 space-y-1 text-gray-500 dark:text-gray-300 text-md">
          <li className="flex items-center">
            <span className="mr-2">🎨</span>
            <span>
              Hosting for{" "}
              <a
                href="https://www.socratica.info"
                className="text-blue-600 dark:text-blue-400"
                target="_blank"
              >
                Socratica
              </a>
              , an open-collective of designers, engineers, artists, and
              everything in-between
            </span>
          </li>
          <li className="flex items-center">
            <span className="mr-2">🤖</span>
            <span>
              Hackathons! For example,{" "}
              <a
                href="https://www.youtube.com/watch?v=-6a8DRBq_QU"
                className="text-blue-600 dark:text-blue-400"
                target="_blank"
              >
                building a bass-playing robot in 36 hours.{" "}
              </a>{" "}
            </span>
          </li>
        </ul>

        <Gallery
          images={[
            {
              src: "/socratica3.jpg",
              alt: "Socratica Symposium 3",
              caption: "Socratica Symposium 2025",
              gridSpan: "md:col-span-2 md:row-span-2", // 2x2 span
              url: "https://www.socratica.info/",
            },
            {
              src: "/bracketbot.jpg",
              alt: "BracketBot Project",
              caption: "Built a bass-playing robot in 36 hours",
              gridSpan: "md:col-span-1 md:row-span-2", // 1x2 span
              url: "https://www.youtube.com/watch?v=-6a8DRBq_QU",
            },
            {
              src: "/socratica5.jpg",
              alt: "Socratica Symposium 5",
              caption: "Socratica Symposium - Moment 5",
              url: "https://www.socratica.info/",
            },
            {
              src: "/demo.gif",
              alt: "Demo of Bracketbot Bass",
              caption: "Bass-playing Robot on Action",
              url: "https://www.youtube.com/watch?v=-6a8DRBq_QU",
            },
            {
              src: "/jam_night.jpg",
              alt: "Jam Night",
              caption: "Jam Night with friends",
              url: "https://partiful.com/e/STPtSjwy3lCAGeqegl1c",
            },
          ]}
        />
      </section>
      <Projects
        title="Projects"
        subtitle="These are highlights of my favourite projects. Hope you enjoy!"
        projects={projects}
        className="animate-fade-in"
      />
      <section
        id="experience"
        className="
          relative
          w-full
        "
      >
        <div className="w-full mt-10">
          <h2 className="mt-5 text-3xl font-bold text-gray-700 dark:text-gray-200">
            Previously, I...
          </h2>
          <ul className="list-disc ml-5 space-y-3 text-gray-600 dark:text-gray-300">
            <li>
              Created infrastructure for Autonomous Networks at{" "}
              <span className="font-bold text-blue-600 dark:text-blue-400">
                Nokia
              </span>
            </li>
            <li>
              Built ML proof-of-concepts to streamline workflows at{" "}
              <span className="font-bold text-blue-600 dark:text-blue-400">
                WSIB
              </span>
            </li>
            <li>
              Made the UI/UX snappier and cleaner at{" "}
              <span className="font-bold text-blue-600 dark:text-blue-400">
                Dayforce
              </span>{" "}
              (previously Ceridian)
            </li>
            <li>
              Shipped speedy automations at{" "}
              <span className="font-bold text-blue-600 dark:text-blue-400">
                The Cooperators
              </span>
            </li>
            <li>
              Created a dashboard for an IoT Smart Home at{" "}
              <span className="font-bold text-blue-600 dark:text-blue-400">
                Zogrox Group Inc.
              </span>
            </li>
          </ul>
          <div className="mt-6">
            <SocialTab />
          </div>
        </div>
      </section>
    </main>
  );
}
