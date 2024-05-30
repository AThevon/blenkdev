import initTranslations from "@/app/i18n";
import GoUp from "@/components/misc/GoUp";
import { BeamContainer } from "@/components/services/BeamContainer";
import { VanishWords } from "@/components/services/VanishWords";
import { PageWrapper } from "@/components/wrappers/PageWrapper";
import { Params } from "@/types/params";

export default async function Services({ params: { locale } }: Params) {
  const { t } = await initTranslations(locale, ["services", "home"]);

  return (
    <PageWrapper>
      <VanishWords />
      <BeamContainer />
      <div className="hidden sm:block">
        <GoUp />
      </div>
    </PageWrapper>
  );
}
