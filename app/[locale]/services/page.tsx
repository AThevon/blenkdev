import initTranslations from "@/app/i18n";
import GoUp from "@/components/misc/GoUp";
import { BeamContainer } from "@/components/services/BeamContainer";
import { VanishWords } from "@/components/services/VanishWords";
import { PageWrapper } from "@/components/wrappers/PageWrapper";
import { Params } from "@/types/params";
import Head from 'next/head';

export default async function Services({ params: { locale } }: Params) {
  const { t } = await initTranslations(locale, ["services", "home"]);

  const pageTitle = "Services de Développement Web - BlenkDev";
  const pageDescription = "Découvrez les services de développement web proposés par Adrien Thevon chez BlenkDev. Développement fullstack, applications web, design UX/UI, et plus encore.";
  const imageUrl = "https://postimg.cc/1gS4dYZF";
  const pageUrl = "https://blenkdev.fr";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="services, développement web, Adrien Thevon, BlenkDev, fullstack, applications web, design UX/UI" />
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
        <VanishWords />
        <BeamContainer />
        <div className="hidden sm:block">
          <GoUp />
        </div>
      </PageWrapper>
    </>
  );
}
