import { PageWrapper } from "@/components/wrappers/PageWrapper";
import { Params } from "@/types/params";
import initTranslations from "@/app/i18n";


export default async function About({ params: { locale } }: Params) {
    const { t } = await initTranslations(locale, ["about"]);

    return (
        <PageWrapper>
            <h2 className="text-center pt-36" >{t("title")}</h2>
            {/* <ImgSlider /> */}
            
        </PageWrapper>
    );
}
