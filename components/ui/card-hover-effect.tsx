import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { useTranslation } from "react-i18next";
import Image from "next/image";

export const HoverEffect = ({
    items,
    className,
}: {
    items: {
        title: string;
        link: string;
        logo?: string;
    }[];
    className?: string;
}) => {
    const { t } = useTranslation();
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
                "grid grid-cols-1 sm:grid-cols-socials-cards self-center",
                className
            )}
        >
            {items.map((item, idx) => (
                <motion.div
                    key={idx}
                    variants={socialsCard}
                    className="relative group"
                >
                    <Link
                        href={item?.link}
                        key={item?.link}
                        className={`relative group block p-2 h-full w-full`}
                        onMouseEnter={() => setHoveredIndex(idx)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        onClick={() => {
                            if (item?.link === "") {
                                toast({ title: t("common:no-link-title"), description: t("common:no-link-description"), })
                            }
                        }}
                    >
                        <AnimatePresence>
                            {hoveredIndex === idx && (
                                <motion.span
                                    className="absolute inset-0 h-full w-full bg-myyellow-400 block  rounded-3xl"
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
                        <Card img={item.logo}>
                            <CardTitle>{item.title}</CardTitle>
                            {/* <CardDescription>{item.description}</CardDescription> */}
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
    children: React.ReactNode;
    img?: string;
}) => {
    return (
        <motion.div
            whileTap={{ scale: 1.03 }}
            className={cn(
                "rounded-2xl h-full w-full p-8 overflow-hidden bg-neutral-50 dark:bg-neutral-900 border border-black/[0.2] dark:border-white/[0.2] relative z-20",
                className
            )}
        >
            <div className="relative z-50">
                <Image src={`/icons/socials/${img}`} width={160} height={160} alt="" className="object-contain mx-auto" />
                <div className="p-4">{children}</div>
            </div>
        </motion.div>
    );
};
export const CardTitle = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <h4 className={cn("text-neutral-800 dark:text-neutral-200 font-bold tracking-wide mt-4", className)}>
            {children}
        </h4>
    );
};
export const CardDescription = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <p
            className={cn(
                "mt-8 text-neutral-500 dark:text-neutral-400 tracking-wide leading-relaxed text-sm",
                className
            )}
        >
            {children}
        </p>
    );
};
