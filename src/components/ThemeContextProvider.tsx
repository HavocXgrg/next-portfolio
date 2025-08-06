"use client";

import React from "react";
import { ThemeProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes";

const ThemeContextProvider = ({ children, ...props }: ThemeProviderProps) => {
  return <ThemeProvider {...props}>{children} </ThemeProvider>;
};

export default ThemeContextProvider;
