"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { motion } from "framer-motion";
import { use, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { testimonials } from "@/data/testimonials";

export function Comments() {
  const { t } = useTranslation("home");
  // if this isn't in the viewport, don't show it
  const [isInView, setIsInView] = useState(false);

  return (
    <motion.div
      onViewportEnter={() => setIsInView(true)}
      onViewportLeave={() => setIsInView(false)}
    >
      {isInView && (
        <div className="w-full bg-gradient-to-b
        from-transparent to-neutral-100 dark:from-transparent dark:to-neutral-900">
          <motion.h3
            className="text-2xl lg:text-4xl font-medium text-start px-6 sm:px-0 sm:ml-12 lg:ml-28 mb-4 sm:mb-10"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 140, damping: 10, bounce: 0.3 }}
          >
            {t("comments-title")}
          </motion.h3>
          <motion.div
            className="pb-[10rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.3 }}
          >
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
            />
          </motion.div>
        </div>
      )}
    </motion.div>
  );
}