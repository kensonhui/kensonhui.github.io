import Image from "next/image";
import Link from "next/link";
import {
  LinkedInLogoIcon,
  GitHubLogoIcon,
  EnvelopeClosedIcon,
} from "@radix-ui/react-icons";
import IconButton from "@/components/IconButton";
import SocialTab from "@/components/SocialTab";

export default function Home() {
  return (
    <main className="h-screen">
      <div className="w-full h-full grid place-items-center">
        <section
          className="
          relative
         flex place-items-center
         before:absolute before:h-[500px] before:w-full
         before:-translate-x-1/2 before:rounded-full
         before:bg-gradient-radial before:from-sky-800
         before:to-transparent before:blur-2xl
         before:content-['']
         before:dark:bg-gradient-to-br
         before:dark:from-transparent
         before:dark:to-blue-700
         before:dark:opacity-70
         before:lg:h-[360px]
         sm:before:w-[670px]
         before:animate-pulse
         after:-z-20
         sm:after:w-[640px]
         after:h-[480px]
         after:w-full
         after:translate-x-1/3
         after:bg-gradient-conic
         after:from-sky-400
         after:via-blue-700
         after:blur-3xl after:content-['']
         after:absolute
         after:dark:from-sky-900
         after:dark:via-[#0141ff]
         after:dark:opacity-40
         after:animate-pulse
         "
        >
          <div className="z-10 flex items-center flex-col-reverse md:flex-row">
            <div className="w-[30rem] mt-23 md:mr-10">
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
                  Built apps with ML to speed workflows at{" "}
                  <p className="font-semibold inline-block">WSIB</p>{" "}
                </li>
                <li>
                  Made the UI/UX more clean and snappy at{" "}
                  <p className="font-semibold inline-block"> Dayforce</p>{" "}
                  (previously Ceridian)
                </li>
                <li>
                  Created speedy automation software at{" "}
                  <p className="font-semibold inline-block">The Cooperators</p>
                </li>
              </ul>
              <SocialTab />
            </div>
            <Image
              alt="Kenson climbing a tree"
              className="rounded-full shadow-lg mb-5 md:mb-0"
              src="/KensonTree.jpeg"
              width="248"
              height="248"
              priority
            ></Image>
          </div>
        </section>
      </div>
      <div className="w-full flex sm:px-2 md:px-16 lg:px-32 2xl:px-96 pb-16 ">
        <div className="rounded-md shadow-md py-6 px-10">
          <p className="text-2xl">Recently, I've been...</p>
          <ul className="list-disc mt-2 space-y-2">
            <li>
              <Link href="https://ourslash.company/">
                working with friends to make reading research papers more social
                and interactive
              </Link>
            </li>
            <li>
              <Link href="https://ourslash.company/">
                contributing to data processing to tackle EEG image
                reconstruction. We submitted to NeurIPS 2024, check it out here!
              </Link>
            </li>
            <li>
              marketing for a dessert place opening soon in Waterloo, yum!
            </li>
          </ul>
        </div>
        <Image
          src="/SocraticaDemo.JPG"
          alt="Group of students smiling holding name tags, one student to the right is wearing an EEG headset"
          className="rounded-lg"
          width="400"
          height="400"
        ></Image>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left"></div>
    </main>
  );
}
