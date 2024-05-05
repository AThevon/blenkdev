import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { useDarkContext } from "@/components/wrappers/DarkContext";

export const HoverEffect = ({
   items,
   className,
}: {
   items: {
      title: string;
      description: string;
      link: string;
      logo?: string;
      logoDark?: string;
   }[];
   className?: string;
}) => {
   const { t } = useTranslation(["contact", "common"]);
   const { isDark } = useDarkContext();
   let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

   const socialsContainer = {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { delay: 0.3, delayChildren: 0.5, staggerChildren: 0.3 } },
   };

   const socialsCard = {
      hidden: { scale: 0 },
      visible: { scale: 1 },
   };

   return (
      <motion.div
         variants={socialsContainer}
         initial="hidden"
         animate="visible"
         className={cn(
            "w-full grid grid-cols-1 sm:grid-cols-socials-cards self-center",
            className
         )}
      >
         {items.map((item, idx) => (
            <motion.div
               key={idx}
               variants={socialsCard}
               className={`relative group ${idx === 0 ? "sm:col-span-2" : ""}`}
            >
               <Link
                  href={item?.link}
                  key={item?.link}
                  className={`relative group block p-1 h-[10rem] w-full`}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  target={item?.link === "" ? "_self" : "_blank"}
                  onClick={() => {
                     if (item?.link === "") {
                        toast({ title: t("no-link-title"), description: t("no-link-description"), })
                     }
                  }}
               >
                  <AnimatePresence>
                     {hoveredIndex === idx && (
                        <motion.span
                           className="absolute inset-0 h-full w-full bg-gradient-to-br from-myyellow-500 to-myyellow-400 block rounded-2xl"
                           layoutId="hoverBackground"
                           initial={{ opacity: 0 }}
                           animate={{
                              opacity: 1,
                              transition: { duration: 0.15 },
                           }}
                           exit={{
                              opacity: 0,
                              transition: { duration: 0.15, delay: 0.2 },
                           }}
                        />
                     )}
                  </AnimatePresence>
                  <Card img={item.logoDark && isDark ? item.logoDark : item.logo}>
                     <CardText>{t(item.description)}</CardText>
                  </Card>
               </Link>
            </motion.div>
         ))}
      </motion.div>
   );
};

export const Card = ({
   className,
   children,
   img,
}: {
   className?: string;
   children?: React.ReactNode;
   img?: string;
}) => {
   return (
      <motion.div
         whileTap={{ scale: 0.97 }}
         transition={{ duration: 0.3, type: "spring", stiffness: 600, damping: 15, mass: 1.5, bounce: 0.5 }}
         className={cn(
            "rounded-2xl h-full w-full px-8 overflow-hidden bg-neutral-50 dark:bg-neutral-900 border border-black/[0.2] dark:border-white/[0.2] relative z-20",
            className
         )}
      >
         <div className="relative z-50 h-full flex flex-col gap-4 justify-center items-center">
            <Image src={`/icons/socials/${img}`} width={140} height={140} alt="" className="object-contain mx-auto" />
            {children}
         </div>
      </motion.div>
   );
};

export const CardText = ({
   className,
   children,
}: {
   className?: string;
   children: React.ReactNode;
}) => {
   return (
      <h4 className={cn("text-neutral-800 dark:text-neutral-200 text-center font-medium mt-1 hidden lg:block", className)}>
         {children}
      </h4>
   );
};