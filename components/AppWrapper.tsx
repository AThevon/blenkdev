"use client";

import { useEffect, useState } from "react";
import Header from "./Header";

type AppWrapperProps = {
    children: React.ReactNode;
    fonts: string;
};

export default function AppWrapper({ children, fonts }: AppWrapperProps) {
    const [isDark, setIsDark] = useState<boolean>(false);
    useEffect(() => {
        if (localStorage.getItem("theme") === "dark") {
            setIsDark(true);
        }
    }, []);

    useEffect(() => {
        if (isDark) {
            document.body.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDark]);

    return (
        <body className={`${fonts}`}>
            <Header isDark={isDark} setIsDark={setIsDark} />
            {children}
        </body>
    );
}