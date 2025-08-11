"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number; //optional as it is for staggered animations
}
const ScrollReveal = ({
  children,
  className = "",
  delay = 0,
}: ScrollRevealProps) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeInOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
