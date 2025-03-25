import Image from "next/image";

interface GalleryProps {
  images: {
    src: string;
    alt: string;
    caption: string;
    gridSpan?: string; // Optional property to define grid span
  }[];
}

export default function Gallery({ images }: GalleryProps) {
  return (
    <div className="w-full max-w-7xl p-4 mt-10 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
      {images.map((image, index) => (
        <div
          key={index}
          className={`transform hover:scale-105 transition-transform duration-300 ${
            image.gridSpan || ""
          }`}
        >
          <div className="relative w-full h-full pb-[60%]">
            {" "}
            {/* Aspect ratio container */}
            <Image
              alt={image.alt}
              src={image.src}
              layout="fill"
              objectFit="cover"
              className="rounded-lg transform group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
