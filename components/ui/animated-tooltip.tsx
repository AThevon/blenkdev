"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
    motion,
    useTransform,
    AnimatePresence,
    useMotionValue,
    useSpring,
} from "framer-motion";
import { navlinks } from "@/data/navlinks";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const AnimatedTooltip = () => {
    const pathname = usePathname();

    function getFirstPath(path: string) {
        const pathName = pathname.split("/")[1];
        const actualPath = path.split("/")[1];
        return pathName === actualPath ? true : false;
    }

    const activeLink = navlinks.find((link) => link.path === pathname);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const springConfig = { stiffness: 100, damping: 5 };
    const x = useMotionValue(0); // going to set this value on mouse move
    // rotate the tooltip
    const rotate = useSpring(
        useTransform(x, [100, -100], [-45, 45]),
        springConfig
    );
    // translate the tooltip
    const translateX = useSpring(
        useTransform(x, [100, -100], [50, -50]),
        springConfig
    );
    const handleMouseMove = (event: any) => {
        const halfWidth = event.target.offsetWidth / 1;
        x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
    };

    return (
        <>
            {navlinks.map((item, idx) => (
                <Link
                    className="relative group active:scale-95 transition duration-200"
                    key={item.title}
                    href={item.path}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    {hoveredIndex === idx && (
                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.6 }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                                transition: {
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 10,
                                },
                            }}
                            exit={{ opacity: 0, y: -20, scale: 0.6 }}
                            style={{
                                translateX: translateX,
                                rotate: rotate,
                                whiteSpace: "nowrap",
                            }}
                            className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex text-xs flex-col items-center justify-center rounded-md bg-black dark:bg-white text-white dark:text-black
                            z-50 shadow-xl px-4 py-2"
                        >
                            <div className="font-bold relative z-30 text-base">
                                {item.title}
                            </div>
                        </motion.div>
                    )}
                    <Image
                        onMouseMove={handleMouseMove}
                        height={100}
                        width={100}
                        src={item.icon}
                        alt={item.title}
                        className={`object-contain bg-neutral-50 !dark:bg-neutral-800 p-3 object-center filter dark:invert
                        hover:shadow-md rounded-2xl h-14 w-14 border-2 ${!getFirstPath(item.path) ? "group-hover:scale-110" : ""} z-10 group-hover:z-30 border-neutral-200 !dark:border-neutral-700 relative transition duration-200`}
                    />
                    {getFirstPath(item.path) ? (
                        <motion.span
                            layoutId="overline"
                            transition={{ type: "spring", damping: 20, stiffness: 200, duration: 0.5 }}

                            className="absolute top-0 -left-[3px] bg-myyellow-500 rounded-2xl w-[105%] h-[105%] -z-50
                            "
                        ></motion.span>
                    ) : (
                        <div className="absolute top-0 left-0 w-full h-full rounded-2xl overflow-hidden group-hover:scale-110 group-hover:z-30  pointer-events-none transition duration-200">
                            <motion.span
                                className={`absolute top-0 left-1/2 -translate-x-1/2 w-full -z-1 -translate-y-2 group-hover:translate-y-0 $
                                    transition duration-200`}
                                style={{ boxShadow: `0 0px 3px 2px #fdbb00` }}
                            ></motion.span>
                        </div>
                    )}
                </Link>
            ))}
        </>
    );
};
