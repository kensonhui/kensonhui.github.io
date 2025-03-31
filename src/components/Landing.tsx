import Image from "next/image";
import SocialTab from "@/components/SocialTab";

const Landing = () => (
  <div className="w-full z-10 flex items-center flex-col-reverse md:flex-row animate-fade-in">
    <div className="flex-1 mt-10">
      <p className="text-4xl font-extrabold text-gray-800 dark:text-gray-100">
        Hi, I'm Kenson! 👋
      </p>
      <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed text-xl">
        A scrappy, hard-working developer who thrives on tackling tough problems
        and learning quickly.
      </p>
      <p className="mt-4 text-gray-600 dark:text-gray-300">
        Currently a{" "}
        <span className="font-bold text-blue-600 dark:text-blue-400">
          Machine Learning Engineering Intern
        </span>{" "}
        at Nokia on:
      </p>
      <ul className="mt-4 space-y-2 text-gray-500 dark:text-gray-300 text-md">
        <li className="flex items-center">
          <span className="mr-2">📊</span>
          <span>Model Evaluation Services with ROUGE, BLEU, Perplexity</span>
        </li>
        <li className="flex items-center">
          <span className="mr-2">🎯</span>
          <span>Hallucination Management Services with NeMo Guardrails</span>
        </li>
        <li className="flex items-center">
          <span className="mr-2">🔄</span>
          <span>Infrastructure for Model Training and Deployment Loops</span>
        </li>
      </ul>
      <div className="mt-6">
        <SocialTab />
      </div>
    </div>
    <div
      className="flex flex-1
    "
    >
      <Image
        alt="Kenson climbing a tree"
        className="rounded-full shadow-lg  mt-5 mb-2 md:my-0 transform hover:scale-105 transition-transform duration-300"
        src="/headshot.jpeg"
        width="345"
        height="345"
        priority
      />
    </div>
  </div>
);

export default Landing;
