"use client";

import { animate, motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Button } from "./ui/moving-border";
import Spline from "@splinetool/react-spline";
import Image from "next/image";

export function Hero() {
    return (
        <>
            {/* <AuroraBackground className="absolute top-0 left-0 h-screen w-screen" /> */}
            <div className="flex justify-between mx-auto px-40 max-w-[2000px] w-full h-screen">
                <motion.div
                    initial={{ opacity: 0.0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="relative flex flex-col items-start justify-center select-none"
                >
                    <p className="font-sans md:text-4xl py-4">
                        Make the impossible possible
                    </p>
                    <Button
                        className="negative bg-primary/70 font-semibold uppercase text-lg"
                        containerClassName="w-60 h-16"
                    >
                        Discover Now
                    </Button>
                </motion.div>
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
                    className="relative w-[50%]"
                >
                    <Spline
                        className="relative w-full h-full"
                        scene="https://prod.spline.design/paCAePhrCCbSnWIr/scene.splinecode"
                    />
                </motion.div>
            </div>
        </>
    );
}
