import Image from "next/image";
import Link from "next/link";
import SocialTab from "@/components/SocialTab";
import Projects from "@/components/Projects";
import { projects } from "@/components/data/projects";
import Gallery from "@/components/Gallery";
import Navbar from "@/components/Navbar";

const basePath = process.env.BASE_PATH || "";

export default function Home() {
  return (
    <main className="relative min-h-screen h-full grid place-items-center bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
      <Navbar />
      <section
        id="intro"
        className="
          relative
          min-h-[80vh]
          pb-8
          flex 
          place-items-center
          px-4
          mx-4
        "
      >
        <div className="z-10 flex items-center flex-col-reverse md:flex-row animate-fade-in">
          <div className="w-full max-w-[36rem] p-4 mt-10 md:mr-10">
            <p className="text-4xl font-extrabold text-center md:text-left text-gray-800 dark:text-gray-100">
              Hi, I'm Kenson! 👋
            </p>
            <p className="mt-4 text-center md:text-left text-gray-600 dark:text-gray-300 leading-relaxed text-xl">
              A scrappy, hard-working developer who thrives on tough problems,
              learning quickly, and delivering practical solutions
            </p>
            <p className="text-center md:text-left mt-4 text-gray-600 dark:text-gray-300">
              Currently a{" "}
              <span className="font-bold text-blue-600 dark:text-blue-400">
                Machine Learning Engineering Intern
              </span>{" "}
              at Nokia building:
            </p>
            <ul className="mt-4 space-y-2 text-gray-500 dark:text-gray-300 text-md">
              <li className="flex items-center">
                <span className="mr-2">📊</span>
                <span>
                  Model Evaluation Services with ROUGE, BLEU, Perplexity
                </span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">🎯</span>
                <span>Hallucination Management Services</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">🔄</span>
                <span>
                  Infrastructure for Model Training and Deployment Loops
                </span>
              </li>
            </ul>
          </div>
          <Image
            alt="Kenson climbing a tree"
            className="rounded-full shadow-lg w-[248px] h-[248px] md:w-[348px] md:h-[348px] mt-5 mb-2 md:my-0 transform hover:scale-105 transition-transform duration-300"
            src="/headshot.jpeg"
            width="348"
            height="348"
            priority
          ></Image>
        </div>
      </section>
      <section
        id="gallery"
        className="
          w-full
          relative
          pb-8
          px-4
          mx-4
        "
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100">
          What I've Been Doing
        </h2>
        <Gallery
          images={[
            {
              src: "/socratica3.jpg",
              alt: "Socratica Symposium 3",
              caption: "Socratica Symposium - Moment 3",
              gridSpan: "md:col-span-2 md:row-span-2", // 2x2 span
            },
            {
              src: "/bracketbot.jpg",
              alt: "BracketBot Project",
              caption: "Built a bass-playing robot in 36 hours",
              gridSpan: "md:col-span-1 md:row-span-2", // 1x2 span
            },
            {
              src: "/socratica5.jpg",
              alt: "Socratica Symposium 5",
              caption: "Socratica Symposium - Moment 5",
            },
            {
              src: "/demo.gif",
              alt: "Demo of Bracketbot Bass",
              caption: "Socratica Symposium - Moment 4",
            },
            {
              src: "/socratica_walking1.jpg",
              alt: "Socratica Symposium",
              caption: "Helped organize the Socratica Symposium",
              gridSpan: "md:col-span-1 md:row-span-2", // 1x2 span
            },
            {
              src: "/jam_night.jpg",
              alt: "Jam Night",
              caption: "Jam Night with friends",
              gridSpan: "md:col-span-2 md:row-span-2", // 2x2 span
            },
            {
              src: "/booth.jpg",
              alt: "Socratica Symposium Demo Booth for EEG Image Reconstruction",
              caption: "Image reconstruction",
            },
          ]}
        />
      </section>
      <Projects
        title="Projects"
        subtitle="These are highlights of my favourite projects. Hope you enjoy!"
        projects={projects}
        projectWidth="350px"
        className="animate-fade-in"
      />
      <section
        id="experience"
        className="
          relative
          pb-8
          px-4
          mx-4
        "
      >
        <div className="w-full max-w-[36rem] p-4 mt-10">
          <p className="mt-5 text-lg font-semibold text-gray-700 dark:text-gray-200">
            Previously, I...
          </p>
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
