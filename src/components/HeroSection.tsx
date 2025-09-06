import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import StackMarquee from "./StackMarquee";
import { ArrowDownToLine } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div>
      <section
        id="home"
        className=" flex flex-col flex-center text-center md:py-30 py-26 "
      >
        <div className="profilepic flex-center ">
          <Image
            src="/images/avatar.png"
            alt="profile pic logo"
            className="rounded-full"
            width={114}
            height={114}
          />
        </div>

        <div className="intros grid justify-center mt-2 text-black dark:text-gray-50 ">
          <h1 className="font-bold md:leading-14 leading-9 md:text-6xl text-4xl mt-6 ">
            Hi, I&apos;m <span className="text-purple-700">Gurung Bishwa.</span>
            <br /> Web Developer
          </h1>
          <h3 className="text-gray-700  dark:text-gray-400  mt-6 md:mx-24 mx-4">
            Passionate front-end developer focused on creating elegant and
            performant solutions using Next.js. Eager to contribute and grow as
            a developer.
          </h3>
        </div>

        <div className="buttonsForhire flex-center gap-4 mt-6 ">
          <Button className="cursor-pointer">
            <Link href="/#contact">Hire Me!</Link>
          </Button>
          <Button className="  bg-green-300 text-gray-700 hover:bg-green-400">
            <a
              download="Bishwa-Gurung-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              href="/Bishwa-Gurung-Resume.pdf"
            >
              <div className="flex justify-center items-center gap-2">
                <ArrowDownToLine className="size-6" />
                My Resume
              </div>
            </a>
          </Button>
        </div>

        <div className="flex gap-4 mt-6 text-gray-400 dark:text-gray-500 ">
          <div className="flex-center gap-2">
            <span className="h-2 w-2 bg-green-400 rounded-full"></span>
            <span>Available For Work</span>
          </div>

          <div className="flex-center gap-2">
            <span className="h-2 w-2 bg-yellow-400 rounded-full"></span>
            <span>Open to Collaboration</span>
          </div>
        </div>

        <div className="mt-20 md:mt-20 dark:bg-gray-300">
          <StackMarquee />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
