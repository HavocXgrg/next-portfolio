import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import NavBar from "@/components/NavBar";
import ThemeContextProvider from "@/components/ThemeContextProvider";

export const metadata: Metadata = {
  title: "Gurung Bishwa | Web Dev",
  description: "portfolio website build in next js and shadcn UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    //to fix hydration error suppressHydrationWarning is used
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning={true}>
        <main className="border-b border-l border-r max-w-4xl  mx-auto">
          <ThemeContextProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <NavBar />

            {children}
          </ThemeContextProvider>
        </main>
      </body>
    </html>
  );
}
