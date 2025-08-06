"use client";

import React from "react";
import Image from "next/image";
import { ThemeToggleBtn } from "./ThemeToggleBtn";

function NavBar() {
  return (
    <header className="py-4">
      <nav className="max-w-2xl h-14 mx-auto flex flex-wrap items-center justify-between rounded-full bg-[#262626] dark:bg-white ">
        <div className="logo rounded-full relative w-28 h-10 ml-4">
          <Image
            src="/logos/logo-light.svg"
            alt="Company Logo Light"
            fill
            priority
            className="dark:opacity-0 transition-opacity duration-300"
          />
          <Image
            src="/logos/logo-dark.svg"
            alt="Company Logo Dark"
            fill
            priority
            className="opacity-0 dark:opacity-100 transition-opacity duration-300"
          />
        </div>
        <div className="menu"></div>
        <div className="toggleBtn">
          <ThemeToggleBtn />
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
