"use client";

import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const ContactRobot = () => {
  // Utiliser dynamic import pour lazy load le composant Spline 
  const Spline = dynamic(() => import("@splinetool/react-spline"), {
    ssr: false,
    loading: () => null,
  });
  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 1 }}
      className="relative w-full h-full p-0 z-20"
    >
      <Suspense fallback={null}>
        <Spline
          scene="https://prod.spline.design/5dmn1cFCC0otVcEH/scene.splinecode"
          className="w-full h-full z-50"
        />
      </Suspense>
    </motion.div>
  );
};

export default ContactRobot;
