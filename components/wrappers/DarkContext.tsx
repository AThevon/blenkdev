"use client";

import { createContext, useContext, useState } from 'react';

const DarkContext = createContext(null as any);

export const DarkContextProvider = ({ children }: any) => {
   const [isDark, setIsDark] = useState(false);

   return (
      <DarkContext.Provider value={{ isDark, setIsDark }}>
         {children}
      </DarkContext.Provider>
   );
};

export const useDarkContext = () => useContext(DarkContext);