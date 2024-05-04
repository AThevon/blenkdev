"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { TextArea } from "./ui/textarea";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export function ContactForm() {
    const { t } = useTranslation("contact");
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted");
    };
    return (
        <div className="max-w-2xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 md:pb-4 shadow-input bg-neutral-50 dark:bg-neutral-900">
            <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
                {t("title")}
            </h2>
            <p className="text-neutral-600 text-sm max-w-md mt-2 dark:text-neutral-300">
                {t("subtitle")}
            </p>

            <form className="my-8" onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                    <LabelInputContainer>
                        <Label htmlFor="firstname">{t("firstname")}</Label>
                        <Input id="firstname" placeholder={t("firstname-placeholder")} type="text" />
                    </LabelInputContainer>
                    <LabelInputContainer>
                        <Label htmlFor="lastname">{t("lastname")}</Label>
                        <Input id="lastname" placeholder={t("lastname-placeholder")} type="text" />
                    </LabelInputContainer>
                </div>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">{t("email-address")}</Label>
                    <Input id="email" placeholder="example@gmail.com" type="email" />
                </LabelInputContainer>
                <LabelInputContainer className="mb-8">
                    <Label htmlFor="request">{t("your-request")}</Label>
                    <TextArea id="request" placeholder={t("textarea-placeholder")} type="text" className="h-48 block w-full min-h-50 p-4 border border-gray-300 resize-none font-inherit line-height-3" />
                </LabelInputContainer>

                <motion.button
                    className="bg-gradient-to-br relative group/btn from-black dark:from-neutral-50 dark:to-neutral-200 to-neutral-600 block dark:bg-zinc-800 w-[80%] mx-auto text-white dark:text-black rounded-md h-14 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                    type="submit"
                    whileHover={{ scale: 1.015 }}
                    whileTap={{ scale: 0.99 }}
                    transition={{ type: "spring", damping: 12, stiffness: 220 }}
                >
                    {t("contact-me")} &rarr;
                    <BottomGradient />
                </motion.button>
            </form>
        </div>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-myyellow-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-myyellow-300 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};
