import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

export function LangSelect() {
    const [langSelected, setLangSelected] = useState("fr")
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <motion.div
                    className="w-14 h-14 z-50  ml-auto mr-4
                        bg-neutral-50 dark:bg-neutral-900 flex items-center justify-center cursor-pointer shadow-sm hover:shadow-md"
                    whileHover={{ scale: 1.06 }}
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
        </DropdownMenu>
    )
}
