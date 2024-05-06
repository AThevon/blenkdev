"use client";

import { motion } from "framer-motion"
import { FC } from "react";

type ContactContainerProps = {
   children: React.ReactNode;
};

const ContactContainer: FC<ContactContainerProps> = ({ children }) => {
   return (
      <motion.div
         className="h-full flex flex-col justify-between items-center"
         initial={{ opacity: 0, y: 200}}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.3, delay: 0.6 }}
      >
         {children}
      </motion.div>
   );
};

export default ContactContainer;