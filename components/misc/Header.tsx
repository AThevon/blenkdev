import { motion } from "framer-motion";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import Logo from "@/components/misc/Logo";
import DarkToggle from "./DarkToggle";
import { LangSelect } from "./LangSelect";



export const Header = () => {
   return (
      <header className="absolute top-0 left-0 flex items-center justify-between w-full">
         <div className="w-full flex items-center justify-between px-8 py-4">
            <Logo />
            <motion.div
               className="w-[80px] ml-auto mr-4 z-50"
               initial={{ y: -1000 }}
               animate={{ y: 0 }}
               transition={{ duration: 1, delay: 0.4 }}
            >
               <LangSelect />
            </motion.div>
            <motion.div
               className=" z-50"
               initial={{ x: 1000 }}
               animate={{ x: 0 }}
               transition={{ duration: 1, delay: 0.8 }}
            >
               <DarkToggle />
            </motion.div>
         </div>
         <motion.nav
            className="mx-auto w-full absolute top-8 flex justify-center items-center gap-3 z-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
         >
            <AnimatedTooltip />
         </motion.nav>
      </header >
   );
}

export default Header;