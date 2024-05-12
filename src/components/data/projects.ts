export interface Project {
  name: string;
  artist: string;
  imagePath: string;
  url: string;
}

export const projects: Project[] = [
  {
    name: "Real-time Speech-to-Speech Translation",
    artist: "Built with Emma Song",
    imagePath: "/realtime-translation.gif",
    url: "https://github.com/kensonhui/Realtime-Speech-to-Speech-Translation",
  },
  {
    name: "wiki3",
    artist: "Winner of Best Use of Polygon ID at Ethglobal NYC 2023",
    imagePath: "/ETHGlobal2023.JPG",
    url: "https://github.com/ETHGlobalNewYork2023-wiki3/wiki3",
  },
  {
    name: "React Three.js Demo",
    artist: "Individual project",
    imagePath: "/react-three-fiber.gif",
    url: "https://kensonhui.github.io/react-three-fiber/",
  },
  {
    name: "Treeline - Interactive and Social Research Paper Reader",
    artist: "Built with Eden Chan and Charles Liu",
    imagePath: "/Treeline.png",
    url: "https://treeline.vercel.app",
  },
  {
    name: "Canadian Children's Book Centre",
    artist: "UW Blueprint",
    imagePath: "/ccbc.png",
    url: "https://github.com/uwblueprint/ccbc",
  },
  {
    name: "Speaker Diarization and Sentiment Analysis",
    artist: "Finalist at the WSIB 2023 Hackathon",
    imagePath: "/realtime-speech-translation.png",
    url: "https://github.com/kensonhui/Speaker-Diarization-Sentiment-Analysis",
  },
];
