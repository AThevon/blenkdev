"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";

const services = [
    {
        title: "title-1",
        description:
            "text-1",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="/waves-bg.svg"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>

        ),
    },
    {
        title: "title-2",
        description:
            "text-2",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="/waves-bg.svg"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "title-3",
        description:
            "text-3",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="/waves-bg.svg"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>

        ),
    },
    {
        title: "title-4",
        description:
            "text-4",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="/waves-bg.svg"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>

        ),
    },
    {
        title: "title-5",
        description:
            "text-5",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="/waves-bg.svg"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>

        ),
    },
    {
        title: "title-6",
        description:
            "text-6",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="/waves-bg.svg"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>

        ),
    },
];
export function ScrollReveal() {
    return (
        <div className="h-screen">
            <StickyScroll content={services} />
        </div>
    );
}
