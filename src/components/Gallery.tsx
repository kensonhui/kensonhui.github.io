import Image from "next/image";

interface GalleryProps {
  images: {
    src: string;
    alt: string;
    caption: string;
    gridSpan?: string; // Optional property to define grid span
    url?: string;
  }[];
}

export default function Gallery({ images }: GalleryProps) {
  return (
    <div className="w-full max-w-7xl mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
      {images.map((image, index) => (
        <a
          key={index}
          href={image.url || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className={`relative transform hover:scale-[102%] transition-transform duration-300 ${
            image.gridSpan || ""
          } group`}
        >
          <div className="relative w-full h-full pb-[60%]">
            {" "}
            {/* Aspect ratio container */}
            <Image
              alt={image.alt}
              src={image.src}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            ></Image>
            <div className="absolute bottom-0 left-0 w-full p-1 bg-black bg-opacity-50 text-white text-center opacity-0 group-hover:opacity-100 z-10 flex items-end">
              <div className="w-full">{image.caption}</div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
