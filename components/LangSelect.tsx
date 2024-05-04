
import i18nConfig from "@/i18nConfig"
import { motion } from "framer-motion"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { useTranslation } from "react-i18next"
import langs from "@/data/langs"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select"

export function LangSelect() {
    const { i18n } = useTranslation();
    const currentLocale = i18n.language;
    const router = useRouter();
    const currentPathname = usePathname();

    const handleChange = (newLocale: string) => {
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
            <Select onValueChange={handleChange} defaultValue={currentLocale}>
                <motion.div
                    className="w-[80px] ml-auto mr-4 z-50"
                    whileHover={{ rotate: [0, 5, 0, -2, 0] }}
                    transition={{ duration: 0.25 }}
                >
                    <SelectTrigger>
                        <Image src={`/icons/flags/${currentLocale}-flag.svg`} width={24} height={24} alt="" className="w-8 h-5 rounded-[2px] object-cover" />
                    </SelectTrigger>
                </motion.div>
                <SelectContent align="end" className="w-[200px]">
                    <SelectGroup>
                        <SelectLabel>Choose a language</SelectLabel>
                        {langs.map((lang) => (
                            <SelectItem key={lang.code} value={lang.code} className="!flex items-center">
                                <div className="group flex items-center">
                                    <Image src={`/icons/flags/${lang.code}-flag.svg`} width={24} height={24} alt={`${lang.name} flag`} className="w-8 h-5 mr-3 rounded-[2px] object-cover" />
                                    <span className="group-hover:translate-x-2 transition-all ease-in duration-100">{lang.name}</span>
                                </div>
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select >
            {/* <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-40" align="end">
                    <DropdownMenuLabel>Languages</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuItem onClick={() => setLangSelected("fr")}>
                           
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setLangSelected("en")}>
                            
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu> */}
        </>
    )
}
