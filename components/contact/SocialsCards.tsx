"use client";

import socials from "@/data/socials";
import { HoverEffect } from "@/components/ui/card-hover-effect";

export const SocialsCards = () => {
    return (
        <HoverEffect items={socials} />
    );
}
