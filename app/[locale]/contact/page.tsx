import initTranslations from "@/app/i18n";
import ContactContainer from "@/components/contact/ContactContainer";
import { ContactForm } from "@/components/contact/ContactForm";
import ContactRobot from "@/components/contact/ContactRobot";
import { SocialsCards } from "@/components/contact/SocialsCards";
import { SubmitContextProvider } from "@/components/contact/SubmitContext";
import { PageWrapper } from "@/components/wrappers/PageWrapper";
import { Params } from "@/types/params";

export default async function Contact({ params: { locale } }: Params) {
  const { t } = await initTranslations(locale, ["contact", "common"]);

  return (
    <PageWrapper yAxis>
      <h1 className="title text-center pt-36">{t("common:Contact")}</h1>
      <SubmitContextProvider>
        <section className="mt-10 overflow-hidden mx-auto max-w-[1500px] md:px-3 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-x-6">
          <ContactForm />
          <ContactContainer>
            <SocialsCards />
            <ContactRobot />
          </ContactContainer>
        </section>
      </SubmitContextProvider>
    </PageWrapper>
  );
}
