import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <div className="w-full pb-16 grid place-items-center ">
      <div className="flex flex-col items-center justify-center md:flex-row w-full max-w-[60rem] space-x-4 p-8">
        <div className="max-w-[36rem]">
          <p className="text-xl sm:text-2xl">Recently, I've been...</p>
          <ul className="list-disc mt-4 space-y-2 ml-2">
            <li>
              <a
                href="https://ourslash.company/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Working to make reading academic papers social and interactive
              </a>
            </li>
            <li>
              <a
                href="https://arxiv.org/abs/2404.05553"
                rel="noopener noreferrer"
                target="_blank"
              >
                Tackling data preprocessing for research in EEG image
                reconstruction
              </a>
            </li>
            <li>
              Marketing for a dessert place opening soon in Waterloo, yum!
            </li>
          </ul>
        </div>
        <Image
          src={`/SocraticaDemo.JPG`}
          alt="Group of students smiling holding name tags, one student to the right is wearing an EEG headset"
          className="rounded-lg shadow-md m-2 mt-8 md:mt-0"
          width="400"
          height="400"
        ></Image>
      </div>
    </div>
  );
};

export default Page;
