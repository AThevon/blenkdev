import initTranslations from "@/app/i18n";
import ContactContainer from "@/components/contact/ContactContainer";
import { ContactForm } from "@/components/contact/ContactForm";
import ContactRobot from "@/components/contact/ContactRobot";
import { SocialsCards } from "@/components/contact/SocialsCards";
import { SubmitContextProvider } from "@/components/contact/SubmitContext";
import { PageWrapper } from "@/components/wrappers/PageWrapper";
import { Params } from "@/types/params";
import Head from 'next/head';

export default async function Contact({ params: { locale } }: Params) {
  const { t } = await initTranslations(locale, ["contact", "common"]);

  const pageTitle = "Contactez Adrien Thevon - BlenkDev";
  const pageDescription = "Contactez Adrien Thevon, développeur web fullstack et fondateur de BlenkDev. Utilisez le formulaire de contact ou connectez-vous via LinkedIn, Fiverr ou Malt.";
  const imageUrl = "/blenkdev-thumbnail.png";
  const pageUrl = "https://blenkdev.fr/contact";


  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="Contact, Adrien Thevon, BlenkDev, développeur web, fullstack, LinkedIn, Fiverr, Malt" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={pageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={imageUrl} />
      </Head>
      <PageWrapper yAxis>
        <h1 className="title text-center pt-36">{t("common:Contact")}</h1>
        <SubmitContextProvider>
          <section className="mt-10 overflow-hidden mx-auto max-w-[1500px] md:px-3 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-x-6">
            <ContactForm />
            <ContactContainer>
              <SocialsCards />
              <div className="hidden md:block">
                <ContactRobot />
              </div>
            </ContactContainer>
          </section>
        </SubmitContextProvider>
      </PageWrapper>
    </>
  );
}
