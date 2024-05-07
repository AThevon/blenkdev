"use client";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { Button } from "@/components/ui/moving-border";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export function LampCta() {
    const { t } = useTranslation("home");
    return (
        <LampContainer>
            <motion.h1
                initial={{ opacity: 0.5, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="max-w-[46rem] bg-gradient-to-br from-neutral-300 to-neutral-500 py-8 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
            >
                {t("lamp-text")}
            </motion.h1>
            <motion.div
                initial={{ opacity: 0.5, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="text-center text-lg text-neutral-500 dark:text-neutral-400"
            >
                <Link href="/contact">
                    <Button
                        className="bg-neutral-950/85 text-white/80 font-semibold uppercase px-8 text-lg"
                        containerClassName="w-[20rem] h-16"
                    >
                        {t("contact-us")}
                    </Button>
                </Link>
            </motion.div>
        </LampContainer>
    );
}
