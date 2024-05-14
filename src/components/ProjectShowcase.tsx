import Image from "next/image";
import { PlusCircledIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";

import { Project } from "./data/projects";

interface AlbumArtworkProps extends React.HTMLAttributes<HTMLDivElement> {
  album: Project;
  aspectRatio?: "portrait" | "square";
  width?: number;
  height?: number;
}

export function ProjectShowcase({
  album,
  aspectRatio = "portrait",
  width,
  height,
  className,
  ...props
}: AlbumArtworkProps) {
  return (
    <div className={cn("space-y-3", className)} {...props}>
      <a
        className="overflow-hidden rounded-md grid place-content-center"
        href={album.url}
        target="_blank"
      >
        <Image
          src={album.imagePath}
          alt={album.name}
          width={width}
          height={height}
          className={cn(
            "object-cover transition-all hover:scale-110",
            aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
          )}
        />
      </a>
      <div className="space-y-1 text-sm">
        <h3 className="font-medium leading-none">{album.name}</h3>
        <p className="text-sm text-muted-foreground min-h-24">
          {album.description}
        </p>
        <p className="text-xs text-muted-foreground">{album.artist}</p>
      </div>
    </div>
  );
}
