import initTranslations from "@/app/i18n";
import { ScrollReveal } from "@/components/services/ScrollReveal";
import { PageWrapper } from "@/components/wrappers/PageWrapper";
import { Params } from "@/types/params";

export default async function Services({ params: { locale } }: Params) {
    const { t } = await initTranslations(locale, ["services"]);

    return (
        <PageWrapper>
            <ScrollReveal />
        </PageWrapper>
    );
}
