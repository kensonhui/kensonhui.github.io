import Image from "next/image";
import SocialTab from "@/components/SocialTab";
import getConfig from "next/config";

const basePath = process.env.BASE_PATH || "";

export default function Home() {
  return (
    <main className="h-screen w-full">
      <div className="relative w-full h-full min-h-[42rem] grid place-items-center ">
        <section
          className="
          relative
          h-full
         flex place-items-center
         before:absolute before:h-[500px] before:w-full
         before:-translate-x-1/3 before:rounded-full
         before:bg-gradient-radial before:from-sky-700
         before:to-transparent before:blur-3xl
         before:content-['']  
         before:dark:bg-gradient-to-br
         before:dark:from-transparent
         before:dark:to-blue-600
         before:dark:opacity-70
         before:light:opacity-60
         before:lg:h-[360px]
         sm:before:w-[670px]
         before:animate-pulse
         after:-z-20
         after:h-[480px]
         after:w-2/3
         after:translate-x-1/3
         after:bg-gradient-conic
       after:from-sky-400
       after:via-blue-400
         after:blur-3xl after:content-['']
         after:absolute
         after:dark:from-sky-900
         after:dark:via-[#0141ff]
         after:dark:opacity-40
         after:animate-pulse
         "
        >
          <div className="z-10 flex items-center flex-col-reverse md:flex-row">
            <div className="w-full max-w-[30rem] p-4 mt-23 md:mr-10">
              <p className="text-3xl font-semibold text-center md:mr-8">
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
                  Built ML proof-of-concepts to speed workflows at{" "}
                  <p className="font-semibold inline-block">WSIB</p>{" "}
                </li>
                <li>
                  Made the UI/UX snappier and cleaner at{" "}
                  <p className="font-semibold inline-block"> Dayforce</p>{" "}
                  (previously Ceridian)
                </li>
                <li>
                  Shipped speedy automations at{" "}
                  <p className="font-semibold inline-block">The Cooperators</p>
                </li>
                <li>
                  Created a dashboard for an IoT Smart Home at{" "}
                  <p className="font-semibold inline-block">
                    Zogrox Group Inc.
                  </p>
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
      <div className="w-full flex flex-col items-center lg:flex-row sm:px-4 lg:px-32 2xl:px-96 pb-16 ">
        <div className="rounded-md py-6 px-4 sm:px-10">
          <p className="text-xl sm:text-2xl">Recently, I've been...</p>
          <ul className="list-disc mt-4 ml-5 space-y-2">
            <li>
              <a
                href="https://ourslash.company/"
                rel="noopener noreferrer"
                target="_blank"
              >
                working with friends to make reading papers social and
                interactive
              </a>
            </li>
            <li>
              <a
                href="https://arxiv.org/abs/2404.05553"
                rel="noopener noreferrer"
                target="_blank"
              >
                contributing to data preprocessing tackling EEG image
                reconstruction
              </a>
            </li>
            <li>
              marketing for a dessert place opening soon in Waterloo, yum!
            </li>
          </ul>
        </div>
        <Image
          src={`${basePath}/SocraticaDemo.JPG`}
          alt="Group of students smiling holding name tags, one student to the right is wearing an EEG headset"
          className="rounded-lg shadow-md m-2"
          width="400"
          height="400"
        ></Image>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left"></div>
    </main>
  );
}
