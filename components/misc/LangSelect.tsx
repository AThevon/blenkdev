"use client";

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
   SelectTrigger
} from "@/components/ui/select"

export function LangSelect() {
   const { t, i18n } = useTranslation();
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
            <div className="w-full">
               <SelectTrigger>
                  <Image src={`/icons/flags/${currentLocale}-flag.svg`} width={24} height={24} alt="" className="w-8 h-5 rounded-[2px] object-cover" />
               </SelectTrigger>
            </div>
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
      </>
   )
}
