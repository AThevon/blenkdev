"use client";

import { FlipWords } from "@/components/ui/flip-words";
import { useTranslation } from "react-i18next";

export function VanishWords() {
  const { t } = useTranslation("services");
  const words = [t("word-1"), t("word-2"), t("word-3"), t("word-4"), t("word-5")];

  return (
    <div className="h-screen text-center sm:text-start flex justify-center items-center px-4">
      <div className="text-3xl md:text-5xl mx-auto font-sans text-neutral-600 dark:text-neutral-400">
        {t("main-title-1")}
        <FlipWords
          className="mt-4 sm:mt-0 font-sans pl-4 mb-4 font-bold text-myblue-500 dark:text-myblue-400"
          words={words}
        /> <br />
        {t("main-title-2")}
      </div>
    </div>
  );
}
