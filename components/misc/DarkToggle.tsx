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
                className="w-14 h-14 bg-neutral-50 dark:bg-neutral-900 flex items-center justify-center cursor-pointer shadow-sm hover:shadow-md"
                onClick={() => setIsDark(!isDark)}
                key={isDark.toString()}
                initial={{ scale: 0, rotate: 360, borderRadius: "50%" }}
                animate={{ scale: 1, rotate: 0, borderRadius: "16px" }}
                whileTap={{ scale: 1, rotate: 90, borderRadius: "50%" }}
                whileHover={{ scale: 1.06}}
                transition={{ duration: 0.2 }}
            >
                <motion.div
                    initial={{ scale: 0, rotate: -360 }}
                    animate={{ scale: 1.2, rotate: 0 }}
                    whileTap={{ scale: 1, rotate: -90 }}
                    className="w-full h-full flex justify-center items-center">
                    {!isDark ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#191919" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a7 7 0 1 0 10 10" /></svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FDBB00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></svg>
                    )}
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}

export default DarkToggle;