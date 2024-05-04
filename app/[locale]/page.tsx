import { PageWrapper } from "@/components/wrappers/PageWrapper";
import { Hero } from "@/components/home/Hero";
import { Parallax } from "@/components/home/Parallax";
import { Params } from "@/types/params";
import initTranslations from "@/app/i18n";


export default async function Home({ params: { locale } }: Params) {
    const { t } = await initTranslations(locale, ["home"]);

    return (
        <PageWrapper>
            <Hero />
            <Parallax />
        </PageWrapper>
    );
}
