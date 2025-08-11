"use client";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import { techStack } from "@/Data/data";

const StackMarquee = () => {
  return (
    <div className="rounded-xs overflow-hidden py-1 md:max-w-[460px] max-w-[360px] mx-auto ">
      <Marquee loop={0} speed={55}>
        <div className="flex-center gap-6">
          {techStack.map((tech, index) => (
            <div key={index} className="">
              <Image
                src={tech.src}
                alt={tech.name}
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default StackMarquee;
