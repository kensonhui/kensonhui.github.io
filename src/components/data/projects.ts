export interface Project {
  name: string;
  artist: string;
  description?: string;
  imagePath: string;
  url: string;
}

export const projects: Project[] = [
  {
    name: "Real-time Speech-to-Speech Translation",
    artist: "Built with Emma Song",
    imagePath: "/realtime-translation.gif",
    url: "https://github.com/kensonhui/Realtime-Speech-to-Speech-Translation",
    description:
      "Using  Whisper v3 and MS SpeechT5, we created a program that can translate a conversation across 96 languages to English. This can be used for any video conferencing software with the help of virtual microphones.",
  },
  {
    name: "wiki3",
    artist: "Winner of Best Use of Polygon ID at Ethglobal NYC 2023",
    imagePath: "/ETHGlobal2023.JPG",
    url: "https://github.com/ETHGlobalNewYork2023-wiki3/wiki3",
    description:
      "The goal of this project is to bring true information to Web3 through transparent and decentralized voting of veracity with Decentralized Identification (DIDs).",
  },

  {
    name: "Treeline - Supercharged Paper Reading",
    artist: "Built with Eden Chan and Charles Liu",
    imagePath: "/Treeline.png",
    url: "https://treeline.vercel.app",
    description:
      "The goal of Treeline is to allow users to build their own tree of prequisite knowledge so they can dive into any paper and understand it at a depp level in a fraction of the time.",
  },
  {
    name: "Canadian Children's Book Centre",
    artist: "UW Blueprint",
    imagePath: "/ccbc.png",
    url: "https://github.com/uwblueprint/ccbc",
    description:
      "Working as part of UWBlueprint, we partnered with CCBC, a non-profit organization, to develop a streamlined application to allow authors to signup for book readings at schools and community centres.",
  },
  {
    name: "React Three.js Demo",
    artist: "Individual project",
    imagePath: "/react-three-fiber.gif",
    url: "https://kensonhui.github.io/react-three-fiber/",
    description:
      "This project was to learn how to handle 3D graphics, assets and animations within the browser using Three.js.",
  },
  {
    name: "Speaker Diarization and Sentiment Analysis",
    artist: "Finalist at the WSIB 2023 Hackathon",
    imagePath: "/realtime-speech-translation.png",
    url: "https://github.com/kensonhui/Speaker-Diarization-Sentiment-Analysis",
    description:
      "The goal of this project is to speed up the process of reviewing call quality of customer service representives and companies. We implemented speaker diarization and sentiment analysis to perform these quality checks faster.",
  },
];
