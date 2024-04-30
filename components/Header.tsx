import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/button";
import { FC } from "react";
import Link from "next/link";
import { AnimatedTooltip } from "./ui/animated-tooltip";

type HeaderProps = {
    isDark: boolean;
    setIsDark: (isDark: boolean) => void;
};

export const Header: FC<HeaderProps> = ({ isDark, setIsDark }) => {
    return (
        <header className="absolute top-0 left-0 flex items-center justify-between w-full">
            <div className="w-full flex items-center justify-between px-8 py-4">
                <motion.div className="flex items-center justify-center select-none"
                    initial={{ opacity: 0, x: -60, scale: 0.5 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ type: "spring", damping: 17, stiffness: 400, mass: 0.6, delay: 0.7, duration: .3 }}
                >
                    <motion.div
                        className="w-24 h-24 z-10"
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 360 }}
                        transition={{ rotate: { type: "spring", damping: 10, stiffness: 100, mass: 1, delay: 1, duration: 3 } }}
                    >
                        <Image src="/logo.png" alt="" width={100} height={100} property="logo" priority className="w-full h-full" />
                    </motion.div>
                    <motion.h1 className="font-main -ml-4"
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ type: "spring", damping: 10, stiffness: 100, mass: 1, delay: 1 }}
                    >
                        BlenkTech
                    </motion.h1>
                </motion.div>
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
                {/* <Button asChild className="text-lg">
                    <Link href="/">Home</Link>
                </Button>
                <Button asChild className="text-lg">
                    <Link href="/services">Services</Link>
                </Button> */}
            </nav>

        </header>
    );
}

export default Header;