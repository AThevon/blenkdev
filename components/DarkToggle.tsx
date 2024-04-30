import { AnimatePresence, motion } from "framer-motion";
import { FC } from "react";

type DarkToggleProps = {
    isDark: boolean;
    setIsDark: (isDark: boolean) => void;
};


const DarkToggle: FC<DarkToggleProps> = ({ isDark, setIsDark }) => {
    return (
        <AnimatePresence>
            <motion.div
                className="w-14 h-14 z-100 bg-neutral-50 dark:bg-neutral-900 rounded-full flex items-center justify-center cursor-pointer"
                onClick={() => setIsDark(!isDark)}
                key={isDark.toString()}
                initial={{ scale: 0, rotate: 0 }}
                animate={{ scale: 1, rotate: -360 }}
                whileTap={{ scale: 0.9, rotate: 0 }}
                whileHover={{ scale: 1.1 }}
            >
                <motion.div className="w-full h-full flex justify-center items-center">
                    {!isDark ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#191919" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a7 7 0 1 0 10 10" /></svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FDBB00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></svg>
                    )}
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}

export default DarkToggle;