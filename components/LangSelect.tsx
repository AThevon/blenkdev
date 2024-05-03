
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import i18nConfig from "@/i18nConfig"
import { motion } from "framer-motion"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"
import { useTranslation } from "react-i18next"

export function LangSelect() {
    const { i18n } = useTranslation();
    const currentLocale = i18n.language;
    const router = useRouter();
    const currentPathname = usePathname();

    const handleChange = (e: any) => {
        const newLocale = e.target.value;

        // set cookie for next-i18n-router
        const days = 30;
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        const expires = date.toUTCString();
        document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

        if (
            currentLocale === i18nConfig.defaultLocale && currentPathname !== '/'
        ) {
            router.push('/' + newLocale + currentPathname);
            router.refresh();
        } else {
            router.push(
                currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
            );
            router.refresh();
        }
    };

    return (
        <>
            <select onChange={handleChange} value={currentLocale} name="lang" id="lang" className=" mr-auto z-50 ml-4 bg-transparent text-neutral-900 dark:text-neutral-100 dark:bg-neutral-900 border-none focus:ring-0 focus:outline-none">
                <option value="fr">French</option>
                <option value="en">English</option>
            </select>
            {/* <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <motion.div
                        className="w-14 h-14 z-50  ml-auto mr-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900 flex items-center justify-center cursor-pointer shadow-sm hover:shadow-md"
                        whileHover={{ scale: 1.06 }}
                        whileTap={{ scale: 1 }}
                    >
                        {langSelected === "fr" ? (
                            <Image src="/icons/fr-flag.svg" width={24} height={24} alt="French flag" className="w-8 h-5 rounded-[2px] object-cover" />
                        ) : (
                            <Image src="/icons/en-flag.svg" width={24} height={24} alt="English flag" className="w-8 h-5 rounded-[2px] object-cover" />
                        )}
                    </motion.div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-40" align="end">
                    <DropdownMenuLabel>Languages</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuItem onClick={() => setLangSelected("fr")}>
                            <Image src="/icons/fr-flag.svg" width={24} height={24} alt="French flag" className="w-8 h-5 mr-2 rounded-[2px] object-cover" />
                            <span>French</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setLangSelected("en")}>
                            <Image src="/icons/en-flag.svg" width={24} height={24} alt="English flag" className="w-8 h-5 mr-2 rounded-[2px] object-cover" />
                            <span>English</span>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu> */}
        </>
    )
}
