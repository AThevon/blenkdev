import { Hero } from "@/components/Hero";
import { PageWrapper } from "@/components/PageWrapper";
import { Parallax } from "@/components/Parallax";
import { Params } from "@/types/params";
import initTranslations from "@/app/i18n";


export default async function Home({ params: { locale } }: Params) {
    const { t } = await initTranslations(locale, ["home"]);

    return (
            <PageWrapper>
                <Hero />
                <Parallax />
                <section className="h-screen w-full bg-red-500">
                    {/* TODO Faire 3 composant pour amener vers les pages*/}

                </section>
            </PageWrapper>
    );
}
