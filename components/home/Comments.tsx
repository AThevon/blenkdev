"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { motion } from "framer-motion";
import { use, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

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
                        className="text-4xl font-medium text-start ml-28 mb-10"
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


const testimonials = [
    {
        quote:
            "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
        name: "Charles Dickens",
        title: "A Tale of Two Cities",
    },
    {
        quote:
            "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
        name: "William Shakespeare",
        title: "Hamlet",
    },
    {
        quote: "All that we see or seem is but a dream within a dream.",
        name: "Edgar Allan Poe",
        title: "A Dream Within a Dream",
    },
    {
        quote:
            "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
        name: "Jane Austen",
        title: "Pride and Prejudice",
    },
    {
        quote:
            "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
        name: "Herman Melville",
        title: "Moby-Dick",
    },
];
