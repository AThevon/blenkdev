"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { toast } from "@/components/ui/use-toast";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
    icon: string;
  }[];
}) => {
  const firstRow = products.slice(0, 7);
  const secondRow = products.slice(6, 14);
  const thirdRow = products.slice(14, 21);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[300vh] pt-60 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div
          className="flex flex-row-reverse space-x-reverse space-x-6 mb-10 z-50 select-none"
        >
          {firstRow.map((product, index) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={index}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-10 space-x-6">
          {secondRow.map((product, index) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={index}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-6">
          {thirdRow.map((product, index) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={index}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  const { t } = useTranslation("home");
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["-800px start", "end start"],
  });

  const springConfig = { stiffness: 500, damping: 40, bounce: 0 };

  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 400]), springConfig);

  return (
    <motion.div ref={ref} className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0"
      style={{ y: translateY }}
    >
      <motion.h2 className="text-2xl md:text-7xl font-bold dark:text-white"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0, }}
        transition={{ duration: .6, delay: 0.4, type: "spring", bounce: 0.3 }}
      >
        {t("parallax-title")}
      </motion.h2>
      <motion.p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: .6, delay: 0.6, type: "spring", bounce: 0.3 }}
      >
        {t("parallax-description")}
      </motion.p>
    </motion.div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
    icon: string;
  };
  translate: MotionValue<number>;
}) => {
  const { t } = useTranslation("common");
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      whileTap={{
        y: 0,
      }}
      key={product.title}
      className="group/product h-96 w-[35rem] relative flex-shrink-0 select-none"
    >
      <Link
        href={product.link}
        target="_blank"
        className={`block group-hover/product:shadow-2xl${product.link ? " cursor-pointer" : " cursor-default"}`}
        onClick={(e) => {
          if (!product.link) {
            e.preventDefault();
            toast({ title: t("no-link-title"), description: t("no-link-description"), })
          }
        }
        }
      >
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0 rounded-2xl select-none"
          alt={product.title}
        />
      </Link>
      <div
        className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none select-none rounded-2xl"></div>
      <Image
        src={product.icon}
        height="300"
        width="300"
        className="object-contain absolute mx-auto h-full py-16 inset-0 rounded-2xl scale-0 group-hover/product:scale-100 opacity-0 group-hover/product:opacity-100 transition-all duration-300 ease-in-out pointer-events-none select-none delay-75"
        alt={product.title}
      />
      <h2 className="absolute text-lg bottom-4 left-4 opacity-0 translate-y-10 group-hover/product:opacity-100 group-hover/product:translate-y-0 text-white transition-all duration-300 ease-in-out delay-100">
        {product.title}
      </h2>
    </motion.div>
  );
};
