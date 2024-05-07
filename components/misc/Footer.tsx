"use client";

import Link from "next/link";
import { navlinks } from "@/data/navlinks";
import { useTranslation } from "react-i18next";
import { usePathname } from "next/navigation";
import { getFirstPath } from "@/utils/getFirstPath";

const Footer = () => {
    const { t } = useTranslation("common");
    const pathname = usePathname();
    return (
        <footer className={`relative flex items-end justify-center w-full h-24 px-4 p-2 ${getFirstPath(pathname, "/") || getFirstPath(pathname, "/services") ? "bg-neutral-100 dark:bg-neutral-900" : ""}`}>
            <div className="w-full flex flex-col absolute left-1/2 -translate-x-1/2">
                <div className="flex items-center justify-center gap-4">
                    <Link
                        href="/privacy-policy"
                        className="text-md font-normal text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-300"
                    >
                        {t("privacy-policy")}
                    </Link>
                </div>
                <hr className="w-[10%] h-[2px] bg-neutral-500 dark:bg-neutral-400 mx-auto my-1" />
                <nav className=" flex items-center justify-center gap-4">
                    {navlinks.map((link, idx) => (
                        <Link
                            key={idx}
                            href={link.path}
                            className="text-md font-normal text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-300"
                        >
                            {t(link.title)}
                        </Link>
                    ))}
                </nav>
            </div>
            <div className="ml-auto">
                <p className="text-sm text-neutral-500 dark:text-neutral-400">© 2024 BlenkTech</p>
            </div>
        </footer>
    );
}

export default Footer;