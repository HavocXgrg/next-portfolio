import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import NavBar from "@/components/NavBar";
import ThemeContextProvider from "@/components/ThemeContextProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark" // Matches your form's theme
            />
          </ThemeContextProvider>
        </main>
      </body>
    </html>
  );
}
