"use client";

import { CornerRightUp } from "lucide-react";
import { useState, useEffect } from "react";

const GoUp = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 2000) {
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
    <button
      className={`fixed right-4 z-50 flex justify-center items-center ml-auto mr-10 w-16 h-16 bg-neutral-800 dark:bg-neutral-200 rounded-full transition-all duration-300 ease-in-out hover:scale-110 ${show ? 'bottom-20' : '-bottom-20'}`}
      onClick={handleClick}
    >
      <CornerRightUp size={24} className="text-neutral-100 dark:text-neutral-800" />
    </button>

  );
}

export default GoUp;