import initTranslations from "@/app/i18n";
import { PageWrapper } from "@/components/wrappers/PageWrapper";
import { Params } from "@/types/params";

export default async function Services({ params: { locale } }: Params) {
    const { t } = await initTranslations(locale, ["services"]);

    return (
        <PageWrapper container>
            <h1 className="title text-start pt-36">OMGOFMLEJFELMK</h1>
        </PageWrapper>
    );
}
