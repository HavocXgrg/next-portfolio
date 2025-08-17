"use client";

import React from "react";
import { techStackHoverEffect } from "@/Data/data";
import { HoverEffect } from "./ui/card-hover-effect";
import ScrollReveal from "./ScrollReveal";
import ScrollAnimationAbout from "./ScrollAnimationAbout";

const About = () => {
  return (
    <>
      <div id="About" className="min-h-screen">
        <div className="md:p-8 md:px-12 p-4 grid items-center justify-center text-justify text-wrap">
          <ScrollReveal>
            <h1 className="font-bold  text-4xl text-primary ">About Me:</h1>
            <p className="mt-6 leading-7  dark:text-gray-400 ">
              I&apos;m Bishwa Gurung, I hold a Bachelor&apos;s degree in{" "}
              <span className=" text-orange-400">
                BSc (Hons) Computer System Engineering (IT){" "}
              </span>
              and am deeply passionate to create innovative and user-centric
              solutions.{" "}
              <span className="md:inline block md:mt-0 mt-2">
                My expertise lies in front-end development, where I focus on
                crafting responsive and visually appealing web interfaces.
              </span>
            </p>
            <p className="mt-2 leading-7 dark:text-gray-400">
              Currently, I am expanding my skill set into back-end development,
              with the goal of becoming a proficient full-stack developer.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="grid mt-10">
              <h1 className="text-blue-700 dark:text-blue-500 text-2xl font-bold flex justify-center items-center">
                Technical SKills
              </h1>

              {/* Card-hover-effect from aceternity UI */}
              <ScrollReveal>
                <div className="">
                  <HoverEffect items={techStackHoverEffect} className="px-4 " />
                </div>
              </ScrollReveal>

              {/* A animated component that shows my hobbies */}
              <ScrollAnimationAbout />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </>
  );
};

export default About;
