"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/moving-border";
import dynamic from "next/dynamic";
import { useTranslation } from "react-i18next";
import { Suspense } from "react";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const { t } = useTranslation("home");
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "150%"]);
  const opacity = useTransform(scrollYProgress, [0.5, 0.55], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.55, 0.6], [1, 0]);

  const arrowOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
  const arrowWidth = useTransform(scrollYProgress, [0, 0.05], ["5rem", "1rem"]);

  const titleData = t("hero-title");
  const titleArray = titleData.split(" ");

  // Utiliser dynamic import pour lazy load le composant Spline 
  const Spline = dynamic(() => import("@splinetool/react-spline"), {
    ssr: false,
    loading: () => null,
  });

  return (
    <>
      <motion.div
        className="hidden md:block fixed h-screen w-full object-cover object-center top-0 -z-1"
        initial={{ opacity: 0, x: 800, y: 0, rotate: 0 }}
        animate={{ opacity: 1, x: 200, y: 50, rotate: -15 }}
        transition={{ delay: 1, duration: 3, type: "spring", damping: 15, stiffness: 100 }}
        style={{ opacity: opacity, scale: scale }}
      >
        <motion.img
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          style={{ x: x }}
          src="/waves-bg.svg"
          alt=""
          className="h-[130%] w-full object-cover"
        />
      </motion.div>
      <div className="flex text-center sm:text-start justify-center sm:justify-start mx-auto px-8 sm:px-40 max-w-[2000px] w-full h-screen">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.3,
            duration: 1.5,
            type: "spring",
            damping: 10,
            stiffness: 100,
          }}
          className="hidden lg:block relative w-[60%]"
        >
          <Suspense fallback={null}>
            <Spline
              className="relative w-full h-full"
              scene="https://prod.spline.design/paCAePhrCCbSnWIr/scene.splinecode"
            />
          </Suspense>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col items-start justify-center select-none"
        >
          {titleArray.map((text, index) => (
            <motion.h2
              className="text-4xl sm:text-6xl w-full font-bold"
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scaleX: 1.2, scale: 1 }}
              transition={{ type: "spring", damping: 10, stiffness: 300, mass: .8 }}
            >
              {text}
            </motion.h2>
          ))}
          <p className="py-4 w-full text-center sm:text-start text-lg">
            {t("hero-sentence")}
          </p>
          <Button
            className="bg-neutral-50/90 dark:bg-neutral-950/85 dark:text-white border border-ring/30
            font-semibold uppercase px-8 text-lg"
            containerClassName="w-full sm:w-auto h-16"
            onClick={() => {
              window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth",
              });
            }}
          >
            {t("hero-cta")}
          </Button>
        </motion.div>
      </div>

      <motion.div
        className="fixed bottom-4 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.5 }}
        style={{
          opacity: arrowOpacity,
          width: arrowWidth,
        }}
      >
        <motion.div
          className="w-full h-full flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1 }}
          transition={{ type: "spring", damping: 10, stiffness: 300, mass: .8 }}
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight,
              behavior: "smooth",
            });
          }}
        >
          <ChevronDown className="h-full w-full text-neutral-700 dark:text-neutral-200 scale-y-50 -skew-y-1" strokeWidth={1.2} />
        </motion.div>
      </motion.div>
    </>
  );
}
