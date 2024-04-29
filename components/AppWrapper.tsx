"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

type AppWrapperProps = {
    children: React.ReactNode;
    fonts: string;
};

export default function AppWrapper({ children, fonts }: AppWrapperProps) {
    const [isDark, setIsDark] = useState(false);

    return (
        <body className={`${fonts} ${isDark ? "dark" : ""}`}>
            <Button
                asChild
                className="absolute top-4 right-4 w-20 h-10 z-10"
                onClick={() => setIsDark(!isDark)}
            >
                <motion.span className="text-lg" 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", damping: 10, stiffness: 100 }}
                    layout
                >
                    {isDark ? "Light" : "Dark"}
                </motion.span>
            </Button>
            {children}
        </body>
    );
}