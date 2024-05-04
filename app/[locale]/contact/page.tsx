import initTranslations from "@/app/i18n";
import { ContactForm } from "@/components/ContactForm";
import { PageWrapper } from "@/components/PageWrapper";
import { Params } from "@/types/params";

export default async function Contact({ params: { locale } }: Params) {
    const { t } = await initTranslations(locale, ["contact", "common"]);

    return (
        <PageWrapper yAxis>
            <h1 className="title text-center pt-36">{t("common:Contact")}</h1>
            <section className="my-10">
                <ContactForm />
            </section>
        </PageWrapper>
    );
}
