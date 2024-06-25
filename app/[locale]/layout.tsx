import type { Metadata } from "next";
import { Kodchasan, Montserrat } from "next/font/google";
import "@/app/globals.css";
import { AppWrapper } from "@/components/wrappers/AppWrapper";
import { dir } from "i18next";
import i18nConfig from "@/i18nConfig";
import TranslationsProvider from "@/components/wrappers/TranslationsProvider";
import initTranslations from "@/app/i18n";
import { Toaster } from "@/components/ui/toaster";
import { DarkContextProvider } from "@/components/wrappers/DarkContext";
import Head from 'next/head';

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

export function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({ locale }));
}

const i18nNamespaces = ["home", "about", "services", "contact", "common", "privacy-policy"];

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
      <Head>
        <title>BlenkDev - Software Development Company</title>
        <meta name="description" content="BlenkDev is a software development company owned by Adrien Thevon, a fullstack web developer." />
        <meta name="keywords" content="Adrien Thevon, BlenkDev, développeur web, fullstack, portfolio, projets web, micro entreprise, France" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://blenkdev.fr" />
        <meta property="og:title" content="BlenkDev - Software Development Company" />
        <meta property="og:description" content="BlenkDev is a software development company owned by Adrien Thevon, a fullstack web developer." />
        <meta property="og:image" content="https://postimg.cc/1gS4dYZF" />
        <meta property="og:image:width" content="3000" />
        <meta property="og:image:height" content="1800" />
        <meta property="og:image:alt" content="BlenkDev - Software Development Company" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="BlenkDev - Software Development Company" />
        <meta name="twitter:description" content="BlenkDev is a software development company owned by Adrien Thevon, a fullstack web developer." />
        <meta name="twitter:image" content="https://postimg.cc/1gS4dYZF" />
      </Head>
      <TranslationsProvider namespaces={i18nNamespaces} locale={locale} resources={resources}>
        <DarkContextProvider>
          <AppWrapper fonts={fontVariables}>
            <Toaster />
            {children}
          </AppWrapper>
        </DarkContextProvider>
      </TranslationsProvider>
    </html>
  );
}
