import type { Metadata } from "next";
import { Kodchasan, Montserrat } from "next/font/google";
import "./globals.css";
import { AppWrapper } from "@/components/AppWrapper";
import { dir } from "i18next";
import i18nConfig from "@/i18nConfig";
import TranslationsProvider from "@/components/TranslationsProvider";
import initTranslations from "../i18n";

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

export function generateStaticParams() {
    return i18nConfig.locales.map(locale => ({ locale }));
}


const i18nNamespaces = ["home", "about", "common"];


export default async function RootLayout({
    children,
    params: { locale },
}: Readonly<{
    children: React.ReactNode;
    params: { locale: string };
}>) {

    const { t, resources } = await initTranslations(locale, i18nNamespaces);

    return (
        <html lang={locale} dir={dir(locale)}>
            <TranslationsProvider
                namespaces={i18nNamespaces}
                locale={locale}
                resources={resources}
            >
                <AppWrapper fonts={fontVariables}>
                    {children}
                </AppWrapper>
            </TranslationsProvider>
        </html>
    );
}
