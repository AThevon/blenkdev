import { AnimatePresence, motion, useAnimationControls } from "framer-motion"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react";


const Logo = () => {
  const pathname = usePathname();
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    setFirstLoad(false);
  }, []);

  const rotateVariant = {
    initial: {
      rotate: 0,
    },
    animate: {
      rotate: 360,
    },
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 100,
      mass: 1,
      delay: 1,
      duration: 3,
    },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div className="flex items-center justify-center select-none z-30"
        initial={{ opacity: 0, x: -60, scale: 0.5 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ type: "spring", damping: 17, stiffness: 400, mass: 0.6, delay: 0.7, duration: .3 }}
      >
        <motion.div
          className="w-20 h-20 sm:w-24 sm:h-24"
          variants={rotateVariant}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ type: "spring", damping: 10, stiffness: 100, mass: 1, delay: firstLoad ? 1 : 0.1, duration: 3 }}
          whileTap={{ scale: 0.9 }}
          key={pathname}
        >
          <Image src="/logo.png" alt="" width={100} height={100} property="logo" priority className="w-full h-full" />
        </motion.div>
        <motion.h1 className="hidden sm:block font-main -ml-4"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", damping: 10, stiffness: 100, mass: 1, delay: 1 }}
        >
          BlenkDev
        </motion.h1>
      </motion.div>
    </AnimatePresence >
  )
}

export default Logo;