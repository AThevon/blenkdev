"use client";
import React from "react";
import Image from "next/image";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { useTranslation } from "react-i18next";

export function BeamContainer() {
  const { t } = useTranslation("services");

  // function formatListItem(text: string) {
  //   const [boldText, normalText] = text.split(/:(.+)/);
  //   return (<> <span className="font-bold">{boldText}:</span>{normalText} </>);
  // }

  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {content.map((item, index) => (
          <div key={`content-${index}`} className="mb-20">
            <h2 className="bg-neutral-800 mx-auto md:mx-0  dark:bg-neutral-200 text-neutral-100 dark:text-neutral-800 rounded-full capitalize text-lg w-fit px-7 py-3 mb-4">
              {t(`${item.title}`)}
            </h2>

            <div className="text-lg dark:text-neutral-100">
              {item?.image && (
                <Image
                  src={item.image}
                  alt=""
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description && t(`${item.description}`)}
              {item.list && (
                <ul className="list-disc pl-6 flex flex-col gap-4 dark:text-neutral-100 text-neutral-800">
                  {item.list.map((listItem, index) => (
                    <li key={`list-item-${index}`}>{t(`${listItem}`)}</li>
                  ))}
                </ul>
              )}
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
    image:
      "/services/services-1.webp",
  },
  {
    title: "title-2",
    list: ["text-2.1", "text-2.2", "text-2.3"],
    image:
      "/services/services-2.webp",
  },
  {
    title: "title-3",
    list: ["text-3.1", "text-3.2", "text-3.3"],
    image:
      "/services/services-3.webp",
  },
  {
    title: "title-4",
    list: ["text-4.1", "text-4.2", "text-4.3"],
    image:
      "/services/services-4.webp",
  },
  {
    title: "title-5",
    list: ["text-5.1", "text-5.2", "text-5.3"],
    image:
      "/services/services-5.webp",
  },
];
