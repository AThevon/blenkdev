import initTranslations from "@/app/i18n";
import { ContactForm } from "@/components/contact/ContactForm";
import { SocialsCards } from "@/components/contact/SocialsCards";
import { PageWrapper } from "@/components/wrappers/PageWrapper";
import { Params } from "@/types/params";

export default async function Contact({ params: { locale } }: Params) {
    const { t } = await initTranslations(locale, ["contact", "common"]);

    return (
        <PageWrapper yAxis>
            <h1 className="title text-center pt-36">{t("common:Contact")}</h1>
            <section className="my-10 mx-auto max-w-[1500px] md:px-3 lg:px-12 grid grid-cols-1 lg:grid-cols-2">
                <ContactForm />
                <SocialsCards />
            </section>
        </PageWrapper>
    );
}
