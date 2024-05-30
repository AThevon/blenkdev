"use client";

import { PageWrapper } from "@/components/wrappers/PageWrapper";
import { useTranslation } from "react-i18next";

export default function PrivacyPolicy() {
  const { t } = useTranslation("privacy-policy");

  const email = "athevon.pro@gmail.com";
  const lastUpdate = "05/05/2024";

  return (
    <PageWrapper container>
      <div className="mx-auto px-0 sm:px-4 pt-44 pb-8 text-black dark:text-white">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{t("main-title")}</h1>
            <hr className="w-60 h-1 bg-neutral-400 dark:bg-neutral-500 mb-4" />
            <p className="text-sm text-gray-500">{`${t("updated")} ${lastUpdate}`}</p>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">{t("introduction")}</h2>
            <p>{t("introduction-text")}</p>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">{t("first-title")}</h2>
            <div className="mb-4">
              <p>{t("first-text-1")}</p>
            </div>
            <div className="mb-4">
              <p>{t("first-text-2")}</p>
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">{t("second-title")}</h2>
            <p>{t("second-text")}</p>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">{t("third-title")}</h2>
            <p>{t("third-text")}</p>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">{t("fourth-title")}</h2>
            <p>{t("fourth-text")}</p>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">{t("contact-title")}</h2>
            <div>
              {t("contact-text-1")}
              <ul className="list-disc ml-4">
                <li>
                  <a href={`mailto:${email}`} className="!text-blue-700 dark:!text-blue-300 hover:underline" target="_blank" rel="noopener noreferrer">
                    {email}
                  </a>
                </li>
              </ul>
              {t("contact-text-2")}
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

