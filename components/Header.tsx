import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/button";
import { FC } from "react";

type HeaderProps = {
    isDark: boolean;
    setIsDark: (isDark: boolean) => void;
};

export const Header: FC<HeaderProps> = ({ isDark, setIsDark }) => {
    return (
        <header className="absolute top-0 left-0 flex items-center justify-between w-full py-4 px-8">
            <motion.div className="flex items-center justify-center select-none"
                initial={{ opacity: 0, x: -80, scale: 0.5}}
                animate={{ opacity: 1, x: 0, scale: 1}}
                transition={{ type: "spring", damping: 10, stiffness: 100, mass: 0.6, delay: 0.5 }}
            >
                <Image src="/logo.png" alt="" width={100} height={100} property="logo" priority className="z-10" />
                <motion.h1 className="font-main -ml-4"
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type: "spring", damping: 10, stiffness: 100, mass: 1, delay: 0.8 }}
                >
                    BlenkTech
                </motion.h1>
            </motion.div>
            <nav className="flex items-center space-x-4">
            </nav>
            <Button
                asChild
                className="absolute top-4 right-4 w-20 h-10 z-10"
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
        </header>
    );
}

export default Header;