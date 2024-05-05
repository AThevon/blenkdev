"use client";

import { createContext, useContext, useState } from 'react';

const SubmitContext = createContext(null as any);

export const SubmitContextProvider = ({ children }: any) => {
   const [isSubmit, setIsSubmit] = useState(false);

   return (
      <SubmitContext.Provider value={{ isSubmit, setIsSubmit }}>
         {children}
      </SubmitContext.Provider>
   );
};

export const useSubmitContext = () => useContext(SubmitContext);