// components/BurgerMenu.js
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { navlinks } from "@/data/navlinks";
import { LangSelect } from "./LangSelect";
import DarkToggle from "./DarkToggle";
import Image from "next/image";
import { MenuIcon, XIcon } from "lucide-react";

const menuVariants = {
  open: {
    opacity: 1,
    x: "10%",
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
  closed: {
    opacity: 1,
    x: "100%",
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
};

export function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AnimatePresence>
      <div className="absolute right-0 top-0">
        <MenuIcon
          onClick={toggleMenu}
          className="size-10 z-20 absolute top-10 right-5 text-neutral-800 dark:text-neutral-200 rounded-md focus:outline-none"
        />
        <motion.nav
          initial={false}
          animate={isOpen ? "open" : "closed"}
          whileDrag={{ scale: 0.9 }}
          variants={menuVariants}
          className="fixed top-0 right-0 z-40 w-[90%] h-full p-8 bg-neutral-200 dark:bg-neutral-900 shadow-lg"
        >
          <div className="w-full pr-8 flex justify-between items-center">
            <LangSelect />
            <DarkToggle />
            <XIcon onClick={toggleMenu} className="w-8 h-8 text-neutral-800 dark:text-neutral-200 cursor-pointer" />
          </div>
          <ul className="absolute top-1/2 -translate-y-1/2 left-10 space-y-10">
            {navlinks.map((link) => (
              <motion.li key={link.path} whileTap={{ scale: .9 }}>
                <Link
                  href={link.path}
                  className="flex items-center text-3xl gap-4 font-semibold text-neutral-800 dark:text-neutral-200"
                  onClick={toggleMenu}

                >
                  <Image src={link.icon} alt={link.title} width={30} height={30} className="dark:invert" />
                  {link.title}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.nav>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleMenu}
            className="fixed top-0 left-0 w-full h-full backdrop-blur-lg bg-neutral-950 opacity-80 z-30"
          ></motion.div>
        )}
      </div>
    </AnimatePresence>
  );
};

export default BurgerMenu;
