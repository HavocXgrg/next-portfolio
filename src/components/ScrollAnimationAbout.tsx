"use client";

import React from "react";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { images } from "@/Data/data";
import Image from "next/image";

const ScrollAnimationAbout = () => {
  const { ref, inView } = useInView({
    threshold: 0.6,
  });

  const imageVariants = {
    initial: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      scale: 1,
    },
  };
  return (
    <div ref={ref} className="relative h-[80vh] sm:h-screen w-full  ">
      {images.map((img, index) => (
        <motion.div
          key={index}
          className="absolute"
          initial="initial"
          animate={inView ? img.animate : {}}
          variants={imageVariants}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <Image
            src={img.src}
            alt={img.alt}
            width={350}
            height={300}
            className="rounded-2xl w-44 h-36 sm:h-56 sm:w-80"
          />
        </motion.div>
      ))}

      {/* H1 Text */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  p-4 w-full "
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        <h1 className="text-4xl  font-bold text-blue-700 flex justify-center">
          Beyond Coding !!!
        </h1>
        <p className="text-xs  mt-2 font-bold text-slate-400 flex justify-center">
          There is also a world behind coding and these are what i love
        </p>
      </motion.div>
    </div>
  );
};

export default ScrollAnimationAbout;
