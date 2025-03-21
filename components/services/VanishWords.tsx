"use client";

import { FlipWords } from "@/components/ui/flip-words";
import { useTranslation } from "react-i18next";
import useIsMobile from "@/hooks/useIsMobile";

export function VanishWords() {
  const { t } = useTranslation("services");
  const words = [t("word-1"), t("word-2"), t("word-3"), t("word-4"), t("word-5")];

  const isMobile = useIsMobile();

  return (
    <div className="h-screen text-center sm:text-start flex justify-center items-center px-4">
      <div className="text-3xl md:text-5xl mx-auto font-sans text-neutral-600 dark:text-neutral-400">
        {t("main-title-1")} <br className=" block sm:hidden" />
        {isMobile ? (
          <>
            <div className="w-full h-[3rem] text-center flex flex-col justify-center items-center">
              <FlipWords
                className="font-sans font-bold text-myblue-500 dark:text-myblue-400"
                words={words}
              />
            </div>
          </>
        ) : (
          <>
            <FlipWords
              className="font-sans mb-4 font-bold min-w-[20rem] "
              words={words}
            />
            <br />
          </>
        )}
        {t("main-title-2")}
      </div>
    </div>
  );
}
