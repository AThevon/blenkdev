import { PageWrapper } from "@/components/wrappers/PageWrapper";
import { Hero } from "@/components/home/Hero";
import { Parallax } from "@/components/home/Parallax";
import { Params } from "@/types/params";
import initTranslations from "@/app/i18n";
import { Comments } from "@/components/home/Comments";
import { LampCta } from "@/components/home/LampCta";
import ProjectsMobile from "@/components/home/ProjectsMobile";
import { CommentsMobile } from "@/components/home/CommentsMobile";


export default async function Home({ params: { locale } }: Params) {
  const { t } = await initTranslations(locale, ["home"]);

  return (
    <PageWrapper>
      <Hero />
      <div className="hidden lg:block">
        <Parallax />
      </div>
      <div className="block lg:hidden">
        <ProjectsMobile />
      </div>
      <hr className="hidden md:block lg:-mt-6 mb-16 bg-neutral-800/20 dark:bg-neutral-50/20 h-[2px] w-[90%] max-w-[1500px] mx-auto rounded-xl" />
      <div className="hidden md:block">
        <Comments />
      </div>
      <div className="block md:hidden">
        <CommentsMobile />
      </div>
      <hr className="-mt-6 bg-neutral-800/20 dark:bg-neutral-50/20 h-[2px] w-[90%] max-w-[1500px] mx-auto rounded-xl" />
      <LampCta />
    </PageWrapper>
  );
}
