"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { PhotoItem } from "@/types";

interface PhotoCarouselProps {
  photos: PhotoItem[];
  title?: string;
}

export function PhotoCarousel({ photos, title }: PhotoCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [current, setCurrent] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", () => setCurrent(emblaApi.selectedScrollSnap()));
  }, [emblaApi]);

  if (!photos || photos.length === 0) return null;

  return (
    <div className="relative rounded-2xl overflow-hidden bg-[#0D0D0D] group">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {photos.map((photo, idx) => (
            <div key={idx} className="embla__slide relative">
              <div className="relative w-full h-56 md:h-72">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {photo.caption && (
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white text-xs font-medium">{photo.caption}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      {photos.length > 1 && (
        <>
          <button
            onClick={scrollPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 hover:bg-[#4169E1] flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 shadow-md"
            aria-label="Anterior"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 hover:bg-[#4169E1] flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 shadow-md"
            aria-label="Siguiente"
          >
            <ChevronRight size={16} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-3 right-3 flex gap-1">
            {photos.map((_, idx) => (
              <button
                key={idx}
                onClick={() => emblaApi?.scrollTo(idx)}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  idx === current ? "bg-[#4169E1] w-4" : "bg-white/60"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
