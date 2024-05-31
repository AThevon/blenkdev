"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Project } from "@/types/projects";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/moving-border";
import Link from "next/link";
import useIsMobile from "@/hooks/useIsMobile";

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: Project[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [active, setActive] = useState<Project>(propTabs[0]);
  const [tabs, setTabs] = useState<Project[]>(propTabs);

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  const [hovering, setHovering] = useState(false);

  return (
    <>
      <div
        className={cn(
          "pb-10 flex flex-row flex-wrap gap-2 items-center justify-center [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full",
          containerClassName
        )}
      >
        {propTabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => {
              moveSelectedTabToTop(idx);
            }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={cn("relative px-4 py-2 rounded-full font-medimum", tabClassName)}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {active.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                  "absolute inset-0 bg-neutral-50 dark:bg-neutral-800 shadow-md rounded-lg ",
                  activeTabClassName
                )}
              />
            )}

            <span className={`relative flex flex-col gap-2 h-full w-full justify-center items-center ${active.value === tab.value ? "" : "opacity-60 hover:opacity-100"}`}>
              <Image src={tab.icon} alt={tab.title} width="100" height="100" priority className="object-contain h-10 w-10 z-30" />
              {tab.title}
            </span>
          </button>
        ))}
      </div>
      <FadeInDiv
        tabs={tabs}
        active={active}
        key={active.value}
        hovering={hovering}
        className={cn("mt-16 md:mt-8", contentClassName)}
      />
    </>
  );
};

export const FadeInDiv = ({
  className,
  tabs,
  hovering,
}: {
  className?: string;
  key?: string;
  tabs: Project[];
  active: Project;
  hovering?: boolean;
}) => {
  const { t } = useTranslation("common");
  const isMobile = useIsMobile();
  const isActive = (tab: Project) => {
    return tab.value === tabs[0].value;
  };
  return (
    <div className="relative w-full h-full">
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            scale: 1 - idx * 0.1,
            top: hovering ? idx * (isMobile ? -40 : -70) : 0,
            zIndex: -idx,
            opacity: idx < 3 ? 1 - idx * 0.1 : 0,
          }}
          animate={{
            y: isActive(tab) ? [0, 40, 0] : 0,
          }}
          className={cn("w-full h-full absolute top-0 left-0", className)}
        >
          <div className="w-full overflow-hidden relative h-full rounded-2xl py-4 md:py-10 px-4 md:px-16 bg-neutral-50 dark:bg-neutral-800 shadow-xl">
            <div className="flex flex-col gap-3 lg:gap-0 lg:flex-row text-center lg:text-start items-center lg:items-end justify-between mb-6 ">
              <div>
                <h3 className="font-semibold text-2xl mb-4 md:text-4xl"
                >{tab.title}
                </h3>
                <p className="text-lg !text-neutral-400 max-w-[35rem]">{t(tab.description)}</p>
              </div>
              {tab.link && (
                <Link href={tab.link} target="_blank" rel="noopener noreferrer" className="h-fit mx-auto lg:mx-0">
                  <Button
                    className="bg-neutral-50/90 dark:bg-neutral-950/85 shadow-xl border border-ring/30 dark:text-white font-semibold uppercase px-8 text-lg"
                    containerClassName="w-full sm:w-auto h-16"
                  >{t("view-project")}</Button>
                </Link>
              )}
            </div>
            <div className="overflow-hidden mx-auto w-full rounded-lg shadow-xl">
              <Image
                src={tab.thumbnail}
                alt={tab.title}
                width="1000"
                height="1000"
                className="object-contain h-full w-full mx-auto"
                priority
              />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
