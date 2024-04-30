"use client";

import { motion } from "framer-motion";

const xAxisVariants = {
    initial: {
        opacity: 0,
        x: 20,
    },
    animate: {
        opacity: 1,
        x: 0,
    },
    exit: {
        opacity: 0,
        x: 20,
    },
};

const yAxisVariants = {
    initial: {
        opacity: 0,
        y: 20,
    },
    animate: {
        opacity: 1,
        y: 0,
    },
    exit: {
        opacity: 0,
        y: 20,
    },
};

const opacityVariants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
    },
    exit: {
        opacity: 0,
    },
};

export const PageWrapper = ({
    children,
    xAxis,
    yAxis,
    container,
}: {
    children: React.ReactNode;
    className?: string;
    xAxis?: boolean;
    yAxis?: boolean;
    container?: boolean;
}) => (
    <motion.main
        variants={yAxis ? yAxisVariants : xAxis ? xAxisVariants : opacityVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.6 }}
        className={`${container ? "container" : ""} min-h-screen`}
    >
        {children}
    </motion.main>
);
