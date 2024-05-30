import { PageWrapper } from "@/components/wrappers/PageWrapper";
import { Hero } from "@/components/home/Hero";
import { Parallax } from "@/components/home/Parallax";
import { Params } from "@/types/params";
import initTranslations from "@/app/i18n";
import { Comments } from "@/components/home/Comments";
import { LampCta } from "@/components/home/LampCta";
import ProjectsMobile from "@/components/home/ProjectsMobile";
import { CommentsMobile } from "@/components/home/CommentsMobile";
import Head from 'next/head';

export default async function Home({ params: { locale } }: Params) {
  const { t } = await initTranslations(locale, ["home"]);

  const pageTitle = "Adrien Thevon - Développeur Web Fullstack | BlenkDev";
  const pageDescription = "Bienvenue sur le portfolio de Adrien Thevon, développeur web fullstack et fondateur de BlenkDev. Découvrez mes projets et compétences en développement web.";
  const imageUrl = "/blenkdev-thumbnail.png";
  const pageUrl = "https://blenkdev.fr";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="Adrien Thevon, BlenkDev, développeur web, fullstack, portfolio, projets web, micro entreprise, France" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={pageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={imageUrl} />
      </Head>
      <PageWrapper>
        <Hero />
        <div className="hidden lg:block">
          <Parallax />
          <hr className="lg:-mt-6 mb-16 bg-neutral-800/20 dark:bg-neutral-50/20 h-[2px] w-[90%] max-w-[1500px] mx-auto rounded-xl" />
          <Comments />
        </div>
        <div className="block lg:hidden">
          <ProjectsMobile />
          <span className="block bg-neutral-900 w-full h-[5rem]" />
          <CommentsMobile />
        </div>
        <hr className="-mt-6 bg-neutral-800/20 dark:bg-neutral-50/20 h-[2px] w-[90%] max-w-[1500px] mx-auto rounded-xl" />
        <LampCta />
      </PageWrapper>
    </>
  );
}
