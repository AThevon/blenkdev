import { motion } from "framer-motion";
import { FC } from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import Logo from "@/components/Logo";
import DarkToggle from "./DarkToggle";

type HeaderProps = {
    isDark: boolean;
    setIsDark: (isDark: boolean) => void;
};

export const Header: FC<HeaderProps> = ({ isDark, setIsDark }) => {

    return (
        <header className="absolute top-0 left-0 flex items-center justify-between w-full">
            <div className="w-full flex items-center justify-between px-8 py-4">
                <Logo />
                <DarkToggle isDark={isDark} setIsDark={setIsDark} />
            </div>
            <motion.nav 
                className="mx-auto w-full absolute top-8 flex justify-center items-center gap-3 z-10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
            >
                <AnimatedTooltip />
            </motion.nav>

        </header>
    );
}

export default Header;