import initTranslations from "@/app/i18n";
import { BeamContainer } from "@/components/services/BeamContainer";
import { ScrollReveal } from "@/components/services/ScrollReveal";
import { VanishWords } from "@/components/services/VanishWords";
import { Button } from "@/components/ui/moving-border";
import { PageWrapper } from "@/components/wrappers/PageWrapper";
import { Params } from "@/types/params";
import Link from "next/link";

export default async function Services({ params: { locale } }: Params) {
  const { t } = await initTranslations(locale, ["services", "home"]);

  return (
    <PageWrapper>
      <VanishWords />
      {/* <ScrollReveal /> */}
      <BeamContainer />
      <div className="w-full flex justify-center items-center h-[30rem]">
        <Link href="/contact">
          <Button
            className="bg-neutral-950/85 text-white/80 font-semibold uppercase px-8 text-lg"
            containerClassName="w-[20rem] h-16"
          >
            {t("home:contact-us")}
          </Button>
        </Link>
      </div>

    </PageWrapper>
  );
}
