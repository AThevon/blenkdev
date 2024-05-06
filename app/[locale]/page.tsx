import { PageWrapper } from "@/components/wrappers/PageWrapper";
import { Hero } from "@/components/home/Hero";
import { Parallax } from "@/components/home/Parallax";
import { Params } from "@/types/params";
import initTranslations from "@/app/i18n";
import { Comments } from "@/components/home/Comments";


export default async function Home({ params: { locale } }: Params) {
    const { t } = await initTranslations(locale, ["home"]);

    return (
        <PageWrapper>
            <Hero />
            <Parallax />
            <hr className="-mt-6 mb-16 bg-neutral-800/20 dark:bg-neutral-50/20 h-[2px] w-[90%] max-w-[1500px] mx-auto rounded-xl" />
            <Comments />
            
        </PageWrapper>
    );
}
