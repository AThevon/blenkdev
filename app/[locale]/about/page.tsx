import { Hero } from "@/components/home/Hero";
import { PageWrapper } from "@/components/wrappers/PageWrapper";
import { Parallax } from "@/components/home/Parallax";
import TranslationsProvider from "@/components/TranslationsProvider";
import { Params } from "@/types/params";
import initTranslations from "@/app/i18n";
import { useTranslation } from "react-i18next";


export default async function About({ params: { locale } }: Params) {
    const { t } = await initTranslations(locale, ["about"]);


    return (
        <PageWrapper>
            <h2 className="text-center pt-36" >{t("title")}</h2>
            {/* <h2 className="text-center pt-36" >{t("hero-sentence")}</h2> */}
        </PageWrapper>
    );
}
