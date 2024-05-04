"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { projects } from "@/data/projects";

export function Parallax() {
    function duplicateProjects(nb: number) {
        return Array.from({ length: nb }, (_, i) => projects[i % projects.length]);
    }
    return <HeroParallax products={duplicateProjects(21) as []} />;
}
