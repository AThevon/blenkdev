"use client";

import { useState } from "react";
import Header from "./Header";

type AppWrapperProps = {
    children: React.ReactNode;
    fonts: string;
};

export default function AppWrapper({ children, fonts }: AppWrapperProps) {
    const [isDark, setIsDark] = useState<boolean>(false);

    return (
        <body className={`${fonts} ${isDark ? "dark" : ""}`}>
            <Header isDark={isDark} setIsDark={setIsDark} />
            {children}
        </body>
    );
}