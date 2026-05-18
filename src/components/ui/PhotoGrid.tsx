import Image from "next/image";
import type { PhotoItem } from "@/types";

interface PhotoGridProps {
  photos: PhotoItem[];
}

export function PhotoGrid({ photos }: PhotoGridProps) {
  const display = photos.slice(0, 3);
  if (display.length === 0) return null;

  return (
    <div
      className={`grid gap-2 ${
        display.length === 1
          ? "grid-cols-1"
          : display.length === 2
          ? "grid-cols-2"
          : "grid-cols-3"
      }`}
    >
      {display.map((photo, idx) => (
        <div key={idx} className="relative rounded-xl overflow-hidden group aspect-video">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, 33vw"
          />
          {photo.caption && (
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
              <p className="text-white text-xs">{photo.caption}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
