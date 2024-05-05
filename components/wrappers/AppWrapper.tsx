"use client";

import { useEffect, useState } from "react";
import Header from "@/components/misc/Header";

type AppWrapperProps = {
    children: React.ReactNode;
    fonts: string;
};

export function AppWrapper({ children, fonts }: AppWrapperProps) {
    const [isDark, setIsDark] = useState<boolean>(false);

    useEffect(() => {
        if (localStorage.getItem("theme") === "dark") {
            setIsDark(true);
        }
    }, []);

    useEffect(() => {
        if (isDark) {
            document.documentElement.style.backgroundColor = "#191919";
            document.body.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.style.backgroundColor = "#FAFAFA";
            document.body.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDark]);

    return (
        <body className={`${fonts} min-h-screen`}>
            <Header isDark={isDark} setIsDark={setIsDark} />
            {children}
        </body>
    );
}