"use client";

import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { TextArea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useSubmitContext } from "./SubmitContext";
import { toast } from "@/components/ui/use-toast";
import { LoaderCircleIcon, MoveRightIcon } from "lucide-react";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  content: string;
};

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    content: "",
  });
  const { t } = useTranslation("contact");
  const { setIsSubmit } = useSubmitContext();

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value, });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (isSubmitting) return;
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.content) {
      toast({ title: t("toast-empty-title"), description: t("toast-empty-description") });
      return;
    }
    try {
      setIsSubmitting(true);
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setIsSubmitting(false);
      console.log(data);

      if (response.ok) {
        toast({ title: t("toast-submitted-title"), description: t("toast-submitted-description") });
        setIsSubmit(true);
        setFormData({ firstName: "", lastName: "", email: "", content: "" });
      } else {
        toast({ title: t("toast-error-title"), description: t("toast-error-description"), variant: "destructive" });
      }

    } catch (error) {
      setIsSubmitting(false);
      toast({ title: t("toast-error-title"), description: t("toast-error-description"), variant: "destructive" });
      console.error(error);
    }
  };


  return (
    <div className="max-w-2xl mt-1 w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 md:pb-4 shadow-input bg-neutral-50 dark:bg-neutral-900 border border-black/[0.2] dark:border-white/[0.2]">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        {t("title")}
      </h2>
      <p className="text-neutral-600 text-sm max-w-md mt-2 dark:text-neutral-300">
        {t("subtitle")}
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstName">{t("firstname")}</Label>
            <Input
              id="firstName"
              placeholder={t("firstname-placeholder")}
              type="text"
              value={formData.firstName}
              onChange={handleChange}
              disabled={isSubmitting}
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastName">{t("lastname")}</Label>
            <Input
              id="lastName"
              placeholder={t("lastname-placeholder")}
              type="text"
              value={formData.lastName}
              onChange={handleChange}
              disabled={isSubmitting}
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">{t("email-address")}</Label>
          <Input
            id="email"
            placeholder="example@gmail.com"
            type="email"
            value={formData.email}
            onChange={handleChange}
            disabled={isSubmitting}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="content">{t("your-request")}</Label>
          <TextArea
            className="h-48 block w-full min-h-50 p-4 border border-gray-300 resize-none font-inherit line-height-3"
            id="content"
            placeholder={t("textarea-placeholder")}
            type="text"
            value={formData.content}
            onChange={handleChange}
            disabled={isSubmitting}
          />
        </LabelInputContainer>

        <motion.button
          className={`relative group/btn bg-neutral-800  block w-[80%] mx-auto text-white rounded-md h-14 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--neutral-800)_inset,0px_-1px_0px_0px_var(--neutral-800)_inset] ${isSubmitting ? "cursor-not-allowed opacity-70" : "cursor-pointer"}`}
          type="submit"
          whileHover={{ scale: isSubmitting ? 1 : 1.015 }}
          whileTap={{ scale: isSubmitting ? 1 : 0.99 }}
          transition={{ type: "spring", damping: 12, stiffness: 220 }}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <LoaderCircleIcon className="transition-all animate-spin mx-auto h-6 w-6 text-neutral-500" />
          ) : (
            <span className="flex items-center gap-3 justify-center text-neutral-200">
              {t("contact-me")}
              <MoveRightIcon className="h-5 w-5 text-neutral-200 transition-all duration-300 group-hover/btn:translate-x-3" />
            </span>
          )}
          {!isSubmitting && <BottomGradient />}
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
