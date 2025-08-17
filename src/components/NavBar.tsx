"use client";

import React from "react";
import Image from "next/image";
import { ThemeToggleBtn } from "./ThemeToggleBtn";
import Link from "next/link";
import { Button } from "./ui/button";
import { FiGithub } from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function NavBar() {
  return (
    <header className="py-4 ">
      <nav className=" fixed left-0 right-0 max-w-2xl h-14 mx-auto flex flex-wrap items-center justify-between rounded-full bg-black/80 dark:bg-white/90 backdrop-blur-3xl z-50 ">
        {/* Logo visibility according to theme adjusted */}
        <div className="logo rounded-full relative w-30 h-10 ml-4">
          <Link href="/">
            <Image //logo for light theme
              src="/logos/logo-light.svg"
              alt="Company Logo Light"
              fill
              priority
              className="dark:opacity-0 transition-opacity duration-300"
            />
            <Image //logo for dark theme
              src="/logos/logo-dark.svg"
              alt="Company Logo Dark"
              fill
              priority
              className="opacity-0 dark:opacity-100 transition-opacity duration-300"
            />
          </Link>
        </div>
        {/* NavBar menu items */}
        <div className="menu ">
          <ul className="flex-center flex-wrap mt-1 ">
            <li className="">
              <Button
                variant="link"
                className="dark:text-black text-white text-md md:text-sm md:ml-0 ml-6 "
              >
                <Link href="/#home">Home</Link>
              </Button>
            </li>
            <li className="sm:block hidden">
              <Button variant="link" className="dark:text-black text-white">
                <Link href="/#About">About</Link>
              </Button>
            </li>
            <li className="sm:block hidden">
              <Button variant="link" className="dark:text-black text-white">
                <Link href="/#projects">Projects</Link>
              </Button>
            </li>
          </ul>
        </div>

        <div className=" hidden md:flex md:gap-4 gap-2  p-2 ">
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="https://github.com/HavocXgrg"
                target="_blank"
                rel="noreferrer"
              >
                <FiGithub className="  text-white dark:text-black size-6 mt-1 flex-center hover:opacity-80 transition-all " />
              </Link>
            </TooltipTrigger>
            <TooltipContent className="dark:bg-black dark:text-white mt-1">
              Github
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <a
                download
                target="_blank"
                rel="noopener noreferrer"
                href="/ResumeBishwa.pdf"
              >
                <IoDocumentTextOutline className="size-6 mt-1   md:inline dark:text-black text-white hover:opacity-80 transition-all" />
              </a>
            </TooltipTrigger>
            <TooltipContent className="dark:bg-black dark:text-white mt-1 ">
              Resume
            </TooltipContent>
          </Tooltip>
        </div>

        <div className="ml-8">
          <Button className="bg-white text-black dark:bg-black dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 text-xs px-2 md:px-4">
            <Link href="/#contact">Contact</Link>
          </Button>
        </div>

        {/* Theme toggle button */}
        <div className="toggleBtn mr-1 ">
          <ThemeToggleBtn />
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
