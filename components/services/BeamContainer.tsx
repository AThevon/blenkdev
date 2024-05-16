"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { useTranslation } from "react-i18next";

export function BeamContainer() {
  const { t } = useTranslation("services");
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {content.map((item, index) => (
          <div key={`content-${index}`} className="mb-20">
            <h2 className="bg-black capitalize dark:bg-white text-white dark:text-black rounded-full text-sm w-fit px-4 py-1 mb-4">
              {t(`${item.badge}`)}
            </h2>

            <p className={twMerge("text-xl mb-4")}>
              {t(`${item.title}`)}
            </p>

            <div className="text-lg dark:text-neutral-100">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {t(`${item.description}`)}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const content = [
  {
    title: "title-1",
    description: "text-1",
    badge: "word-1",
    image:
      "/services-1.png",
  },
  {
    title: "title-2",
    description: "text-2",
    badge: "word-2",
    image:
      "/services-2.png",
  },
  {
    title: "title-3",
    description: "text-3",
    badge: "word-3",
    image:
      "/services-2.png",
  },
  {
    title: "title-4",
    description: "text-4",
    badge: "word-4",
    image:
      "/services-2.png",
  },
  {
    title: "title-5",
    description: "text-5",
    badge: "word-5",
    image:
      "/services-2.png",
  },
    
];
