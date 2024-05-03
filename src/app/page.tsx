import Image from "next/image";
import Link from "next/link";
import SocialTab from "@/components/SocialTab";

const basePath = process.env.BASE_PATH || "";

export default function Home() {
  return (
    <main className="h-screen w-full">
      <div className="relative w-full h-full grid place-items-center ">
        <section
          className="
          relative
          h-full
         flex place-items-center
         before:absolute before:h-[500px] before:w-full
         before:-translate-x-1/4
         before:translate-y-1/4
         before:md:translate-y-0
         before:rounded-full
         before:bg-gradient-radial
         before:from-purple-800
         before:via-purple-400
         before:to-transparent
         before:opacity-50
        before:blur-3xl
         before:content-['']  
         before:dark:bg-gradient-to-br
         before:dark:from-transparent
         before:dark:to-blue-500
         before:dark:opacity-70
         before:lg:h-[460px]
         sm:before:w-[680px]
         before:animate-pulse-slow
         after:opacity-70
         after:-z-20
         after:h-[600px]
         after:sm:h-[480px]
         after:w-2/3
         after:md:w-4/5
         after:translate-x-1/2
         after:translate-y-1/4
         after:md:translate-x-0
         after:md:translate-y-0
         after:bg-gradient-conic
       after:from-sky-500
       after:to-blue-400
         after:blur-3xl after:content-['']
         after:absolute
         after:dark:from-sky-400
         after:dark:via-[#0a2988]
         after:dark:opacity-40
         after:animate-pulse-slow
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
              <p className="mt-3 text-lg mb-1">Previously, I...</p>
              <ul className="list-disc ml-5 space-y-2">
                <li>
                  Built ML proof-of-concepts to streamline workflows at{" "}
                  <p className="font-bold inline-block">WSIB</p>{" "}
                </li>
                <li>
                  Made the UI/UX snappier and cleaner at{" "}
                  <p className="font-bold inline-block"> Dayforce</p>{" "}
                  (previously Ceridian)
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
              className="rounded-full shadow-lg mb-5 md:mb-0"
              src={`${basePath}/KensonTree.jpeg`}
              width="248"
              height="248"
              priority
            ></Image>
          </div>
        </section>
      </div>
    </main>
  );
}
