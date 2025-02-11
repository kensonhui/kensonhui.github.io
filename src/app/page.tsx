import Image from "next/image";
import Link from "next/link";
import SocialTab from "@/components/SocialTab";
import Projects from "@/components/Projects";
import { projects } from "@/components/data/projects";

const basePath = process.env.BASE_PATH || "";

export default function Home() {
  return (
    <main className="relative min-h-screen h-full grid place-items-center ">
      <section
        className="
          relative
          min-h-[80vh]
          pb-8
          flex 
          place-items-center
          glowing
         "
      >
        <div className="z-10 flex items-center flex-col-reverse md:flex-row">
          <div className="w-full max-w-[36rem] p-4 mt-23 md:mr-10">
            <p className="text-3xl font-bold text-center md:mr-8">
              Hi, I'm Kenson! 👋
            </p>
            <p className="mt-3 text-center ">
              {" "}
              I'm studying Computer Science and Business Administration at
              UWaterloo and Wilfrid Laurier University.
            </p>
            <p className="text-center mt-1">
              Currently a Machine Learning Engineering Intern at{" "}
              <p className="font-bold inline-block">Nokia</p>!{" "}
            </p>
            <p className="mt-3 text-lg mb-1">Previously, I...</p>
            <ul className="list-disc ml-5 space-y-2">
              <li>
                Created infrastructure for Autonomous Networks at{" "}               
                <p className="font-bold inline-block">Nokia</p>{" "}
              </li>
              <li>
                Built ML proof-of-concepts to streamline workflows at{" "}
                <p className="font-bold inline-block">WSIB</p>{" "}
              </li>
              <li>
                Made the UI/UX snappier and cleaner at{" "}
                <p className="font-bold inline-block"> Dayforce</p> (previously
                Ceridian)
              </li>
              <li>
                Shipped speedy automations at{" "}
                <p className="font-bold inline-block">The Cooperators</p>
              </li>
              <li>
                Created a dashboard for an IoT Smart Home at{" "}
                <p className="font-bold inline-block">Zogrox Group Inc.</p>
              </li>
            </ul>
            <SocialTab />
          </div>
          <Image
            alt="Kenson climbing a tree"
            className="rounded-full shadow-lg w-[248px] h-[248px] md:w-[348px] md:h-[348px] mt-5 mb-2 md:my-0"
            src="/headshot.jpeg"
            width="348"
            height="348"
            priority
          ></Image>
        </div>
      </section>
      <Projects
        title="Projects"
        subtitle="These are highlights of my favourite projects. Hope you enjoy!"
        projects={projects}
        projectWidth="350px"
      />
    </main>
  );
}
