import type { Metadata } from "next";
import { Kodchasan, Montserrat } from "next/font/google";
import "./globals.css";
import AppWrapper from "@/components/AppWrapper";

const mainFont = Kodchasan({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    style: ["normal"],
    display: "swap",
    variable: "--main-font",
});

const secondFont = Montserrat({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    style: ["normal"],
    display: "swap",
    variable: "--second-font",
});

const fontVariables = `${mainFont.variable} ${secondFont.variable}`;


export const metadata: Metadata = {
    title: "BlenkTech",
    description: "BlenkTech is a software development company.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <AppWrapper fonts={fontVariables}>
                {children}
            </AppWrapper>
        </html>
    );
}
