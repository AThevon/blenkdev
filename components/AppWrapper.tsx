"use client";

import { useState } from "react";
import { Button } from "./ui/button";

type AppWrapperProps = {
    children: React.ReactNode;
    fonts: string;
};

export default function AppWrapper({ children, fonts }: AppWrapperProps) {
    const [isDark, setIsDark] = useState(false);

    return (
        <body className={`${fonts} ${isDark ? "dark" : ""}`}>
            <Button
                className="absolute top-4 right-4 w-20 h-10 z-10"
                onClick={() => setIsDark(!isDark)}
            >
                {isDark ? "Light" : "Dark"}
            </Button>
            {children}
        </body>
    );
}