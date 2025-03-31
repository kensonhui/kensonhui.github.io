"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

interface HoverEffectProps {
  items: {
    title: string;
    description: string;
    link: string;
    image: string;
    artist?: string;
    tags?: string[];
  }[];
}

export const HoverEffect = ({ items }: HoverEffectProps) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-2 gap-4">
      {items.map((item, idx) => (
        <Link
          href={item.link}
          key={item.link}
          className="relative group block w-full p-2 h-[280px]"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200/80 dark:bg-slate-800/[0.8] block rounded-lg"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              ></motion.span>
            )}
          </AnimatePresence>
          <div className="relative h-full w-full overflow-hidden rounded-lg">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="relative z-10 p-5 flex flex-col h-full justify-end">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                {item.artist && (
                  <p className="text-sm text-gray-300 italic">{item.artist}</p>
                )}
                <p className="text-sm text-gray-200 line-clamp-3">
                  {item.description}
                </p>
                {item.tags && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-full bg-white/20 text-white backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
