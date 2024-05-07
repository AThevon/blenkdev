"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
   items,
   direction = "left",
   speed = "fast",
   pauseOnHover = true,
   className,
}: {
   items: {
      quote: string;
      name: string;
      title: string;
   }[];
   direction?: "left" | "right";
   speed?: "fast" | "normal" | "slow";
   pauseOnHover?: boolean;
   className?: string;
}) => {
   const containerRef = React.useRef<HTMLDivElement>(null);
   const scrollerRef = React.useRef<HTMLUListElement>(null);

   useEffect(() => {
      addAnimation();
   }, []);
   const [start, setStart] = useState(false);
   function addAnimation() {
      if (containerRef.current && scrollerRef.current) {
         const scrollerContent = Array.from(scrollerRef.current.children);

         scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            if (scrollerRef.current) {
               scrollerRef.current.appendChild(duplicatedItem);
            }
         });

         getDirection();
         getSpeed();
         setStart(true);
      }
   }
   const getDirection = () => {
      if (containerRef.current) {
         if (direction === "left") {
            containerRef.current.style.setProperty(
               "--animation-direction",
               "forwards"
            );
         } else {
            containerRef.current.style.setProperty(
               "--animation-direction",
               "reverse"
            );
         }
      }
   };
   const getSpeed = () => {
      if (containerRef.current) {
         if (speed === "fast") {
            containerRef.current.style.setProperty("--animation-duration", "20s");
         } else if (speed === "normal") {
            containerRef.current.style.setProperty("--animation-duration", "40s");
         } else {
            containerRef.current.style.setProperty("--animation-duration", "80s");
         }
      }
   };
   return (
      <div
         ref={containerRef}
         className={cn(
            "scroller relative z-20 w-full overflow-hidden",
            className
         )}
      >
         <ul
            ref={scrollerRef}
            className={cn(
               " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
               start && "animate-scroll ",
               pauseOnHover && "hover:[animation-play-state:paused]"
            )}
         >
            {items.map((item, idx) => (
               <li
                  className="w-[350px] max-w-full relative flex flex-col justify-between rounded-2xl bg-gradient-to-br from-neutral-100 to-neutral-300 dark:from-neutral-800 dark:to-neutral-900 border flex-shrink-0 border-neutral-400 dark:border-neutral-700 px-8 py-6 md:w-[450px]"
                  key={item.name}
               >
                  <div
                     aria-hidden="true"
                     className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                  ></div>
                  <span className=" relative z-20 text-sm leading-[1.6] font-normal text-black dark:text-white">
                     {item.quote}
                  </span>
                  <div className="relative z-20 flex flex-row items-center justify-end">
                     <span className="flex flex-col gap-1">
                        <span className="text-sm leading-[1.6] text-neutral-500 font-bold ml-auto text-end">
                           {item.name}
                        </span>
                        <span className=" text-sm leading-[1.6] text-neutral-500 font-bold text-end">
                           {item.title}
                        </span>
                     </span>
                  </div>
               </li>
            ))}
         </ul>
      </div>
   );
};
