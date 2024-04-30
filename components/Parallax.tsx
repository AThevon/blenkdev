"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

export function Parallax() {
    function duplicateProjects(nb: number) {
        return Array.from({ length: nb }, (_, i) => products[i % products.length]);
    }
    return <HeroParallax products={duplicateProjects(17) as []} />;
}
export const products = [
    {
        title: "Artkansia",
        link: "https://theo-perrin-portfolio.vercel.app",
        thumbnail:
            "/projects/background-artkansia.png",
        icon: "/projects/icon-artkansia.png",
    },
    {
        title: "Coque En Bois",
        link: "https://coque-en-bois.fr",
        thumbnail:
            "/projects/background-coque-en-bois.jpg",
        icon: "/projects/icon-coque-en-bois.png",
    },
    {
        title: "Portfolio AThevon",
        link: "https://adrienthevon.fr",
        thumbnail:
            "/projects/background-athevon.png",
        icon: "/projects/icon-athevon.png",
    },
];
