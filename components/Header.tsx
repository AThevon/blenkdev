import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { FC } from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import Logo from "@/components/Logo";

type HeaderProps = {
    isDark: boolean;
    setIsDark: (isDark: boolean) => void;
};

export const Header: FC<HeaderProps> = ({ isDark, setIsDark }) => {

    return (
        <header className="absolute top-0 left-0 flex items-center justify-between w-full">
            <div className="w-full flex items-center justify-between px-8 py-4">
                <Logo />
                <Button
                    asChild
                    className="w-20 h-10 z-100"
                    onClick={() => setIsDark(!isDark)}
                >
                    <motion.span className="text-lg cursor-pointer select-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", damping: 10, stiffness: 100 }}
                        layout
                    >
                        {isDark ? "Light" : "Dark"}
                    </motion.span>
                </Button>
            </div>
            <nav className="mx-auto absolute top-8 left-1/2 -translate-x-1/2 flex justify-center items-center gap-2 z-10">
                <AnimatedTooltip />
            </nav>

        </header>
    );
}

export default Header;