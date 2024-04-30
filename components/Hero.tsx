"use client";

import { animate, motion, MotionValue, useAnimation, useScroll, useTransform, useViewportScroll } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Button } from "./ui/moving-border";
import Spline from "@splinetool/react-spline";
import Image from "next/image";
import { BackgroundBeams } from "./ui/background-beams";
import { useEffect, useRef, useState } from "react";

export function Hero() {
    const { scrollYProgress } = useScroll();
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "150%"]);

    const title = ["Embrace", "New", "Web", "Development"];

    return (
        <>
            <motion.div
                className="fixed h-screen w-full object-cover object-center top-0 -z-10"
                initial={{ opacity: 0, x: 800, y: 0, rotate: 0 }}
                animate={{ opacity: 1, x: 200, y: 50, rotate: -15 }}
                transition={{ delay: 1, duration: 3, type: "spring", damping: 15, stiffness: 100 }}
            >
                <motion.img
                    transition={{ type: "spring", damping: 15, stiffness: 100 }}
                    style={{ x: x }}
                    src="/waves-bg.svg"
                    alt=""
                    className="h-[130%] w-full object-cover"
                />
            </motion.div>
            <div className="flex justify-start mx-auto px-40 max-w-[2000px] w-full h-screen">
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
                    className="relative w-[60%]"
                >
                    <Spline
                        className="relative w-full h-full"
                        scene="https://prod.spline.design/paCAePhrCCbSnWIr/scene.splinecode"
                    />
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
                    {title.map((text, index) => (
                    <motion.h2 
                        className="text-6xl font-bold"
                        key={index}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scaleX: 1.2, scale: 1 }}
                        transition={{ type: "spring", damping: 10, stiffness: 300, mass: .8 }}
                    >
                        {text}
                    </motion.h2>
                    ))}
                    <p className="py-4 text-lg">
                        Make the impossible possible
                    </p>
                    <Button
                        className="bg-neutral-50/90 dark:bg-neutral-950/85 dark:text-white font-semibold uppercase text-lg"
                        containerClassName="w-60 h-16"
                        onClick={() => {
                            window.scrollTo({
                                top: window.innerHeight,
                                behavior: "smooth",
                            });
                        }}
                    >
                        Discover Now
                    </Button>
                </motion.div>

            </div>
        </>
    );
}
