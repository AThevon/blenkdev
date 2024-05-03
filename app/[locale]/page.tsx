import { Hero } from "@/components/Hero";
import { PageWrapper } from "@/components/PageWrapper";
import { Parallax } from "@/components/Parallax";
import TranslationsProvider from "@/components/TranslationsProvider";
import { Params } from "@/types/params";
import initTranslations from "../i18n";
import { useTranslation } from "react-i18next";


export default async function Home({ params: { locale } }: Params) {
    const { t } = await initTranslations(locale, ["home"]);

    return (
            <PageWrapper>
                <Hero />
                <Parallax />
            </PageWrapper>
    );
}
