"use client";

import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

const ContactRobot = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 1 }} // Ajoute un délai de 2 secondes et une durée d'animation de 1 seconde
      className="relative w-full h-full p-0"
    >
      <Spline
        scene="https://prod.spline.design/5dmn1cFCC0otVcEH/scene.splinecode"
        className="w-full h-full"
      />
    </motion.div>
  );
};

export default ContactRobot;
