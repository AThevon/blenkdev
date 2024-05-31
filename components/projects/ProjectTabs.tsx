"use client";

import Image from "next/image";
import { Tabs } from "@/components/ui/tabs";
import { projects } from "@/data/projects";

export function ProjectTabs() {
  return (
    <div className="h-[50rem] sm:h-[57rem] md:h-[62rem] lg:h-[68rem] xl:h-[78rem] [perspective:1000px] relative flex flex-col px-4 md:px-20 max-w-8xl mx-auto w-full items-start justify-start mb-10 pt-32">
      <Tabs tabs={projects} />
    </div>
  );
}

