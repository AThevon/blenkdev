"use client";

import { FC } from "react";

type ContactContainerProps = {
  children: React.ReactNode;
};

const ContactContainer: FC<ContactContainerProps> = ({ children }) => {
  return (
    <div
      className="h-full flex flex-col justify-between items-center"
    >
      {children}
    </div>
  );
};

export default ContactContainer;