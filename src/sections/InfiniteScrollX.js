import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import { cn } from "@/lib/utils";

const InfiniteScrollX = ({ className, images }) => {
  return (
    <div className={cn("h-full w-full", className)} dir="ltr">
      <Carousel
        opts={{
          align: "start",
          loop: true,
          // dragFree:true,
        }}
        className="w-full relative"
        plugins={[
          AutoScroll({
            stopOnInteraction: false,
            speed: 0.7,
            startDelay: 1000,
            // stopOnMouseEnter: true, فعلها لو عايز ال slider يقف لما تعمل hover
          }),
        ]}
        dir="ltr"
      >
        <div className="absolute left-0 h-full w-14 bg-gradient-to-l z-10 from-transparent to-gray-50" />
        <div className="absolute right-0 h-full w-14 bg-gradient-to-r z-10 from-transparent to-gray-50" />
        <CarouselContent className="-mt-1 h-full max-w-full">
          {images.map((item, index) => (
            <CarouselItem key={index} className="pt-1 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 2xl:lg:basis-1/6">
              <div className="p-1">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  width={60}
                  height={60}
                  className="max-w-full scale-[2] object-contain aspect-[3/2] active:cursor-grab filter grayscale"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default InfiniteScrollX;
