import initTranslations from "@/app/i18n";
import GoUp from "@/components/misc/GoUp";
import { BeamContainer } from "@/components/services/BeamContainer";
import { ScrollReveal } from "@/components/services/ScrollReveal";
import { VanishWords } from "@/components/services/VanishWords";
import { Button } from "@/components/ui/button";
import { PageWrapper } from "@/components/wrappers/PageWrapper";
import { Params } from "@/types/params";
import { CornerRightUp } from "lucide-react";

export default async function Services({ params: { locale } }: Params) {
  const { t } = await initTranslations(locale, ["services", "home"]);

  return (
    <PageWrapper>
      <VanishWords />
      {/* <ScrollReveal /> */}
      <BeamContainer />
      <div className="hidden sm:block">
        <GoUp />
      </div>
    </PageWrapper>
  );
}
