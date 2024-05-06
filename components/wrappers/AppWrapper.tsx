"use client";

import { useEffect } from "react";
import Header from "@/components/misc/Header";
import Footer from "../misc/Footer";
import { useDarkContext } from "./DarkContext";

type AppWrapperProps = {
   children: React.ReactNode;
   fonts: string;
};

export function AppWrapper({ children, fonts }: AppWrapperProps) {
   const { isDark, setIsDark } = useDarkContext();

   useEffect(() => {
      if (localStorage.getItem("theme") === "dark") {
         setIsDark(true);
      }
   }, []);

   useEffect(() => {
      if (isDark) {
         document.documentElement.style.backgroundColor = "#191919";
         document.body.classList.add("dark");
         localStorage.setItem("theme", "dark");
      } else {
         document.documentElement.style.backgroundColor = "#FAFAFA";
         document.body.classList.remove("dark");
         localStorage.setItem("theme", "light");
      }
   }, [isDark]);

   useEffect(() => {
      if (navigator.userAgent.indexOf("Windows") !== -1 && navigator.userAgent.indexOf("Chrome") !== -1) {
         document.body.classList.add("no-scrollbar");
      }
   }, []);

   return (
      <body className={`${fonts} min-h-screen`}>
         <Header />
         {children}
         <Footer />
      </body>
   );
}