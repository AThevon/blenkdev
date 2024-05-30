"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CornerRightUp } from "lucide-react";
import { useState, useEffect } from "react";

const GoUp = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          className={`fixed bottom-20 right-4 z-50 flex justify-center items-center ml-auto mr-10 w-16 h-16 bg-neutral-800 dark:bg-neutral-200 rounded-full $`}
          onClick={handleClick}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0, transition: { duration: 0.2 } }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2, type: 'spring', stiffness: 460, damping: 14 }}
        >
          <CornerRightUp size={24} className="text-neutral-100 dark:text-neutral-800" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default GoUp;