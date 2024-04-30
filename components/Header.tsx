import { motion } from "framer-motion";
import { Button } from "./ui/button";
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
            <nav className="mx-auto absolute top-8 left-1/2 -translate-x-1/2 flex justify-center items-center gap-3 z-10">
                <AnimatedTooltip />
            </nav>

        </header>
    );
}

export default Header;