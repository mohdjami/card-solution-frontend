import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { Toaster } from "@/components/ui/toaster";
import { SessionProvider } from "next-auth/react";

import { ourFileRouter } from "@/app/api/uploadthing/core";
import Provider from "@/components/Provider";
import About from "@/components/About";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mohd Jami",
  description: "Digi lab assignment",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
          <Nav />
          <main>{children}</main>

          <Toaster />
        </Provider>
      </body>
    </html>
  );
}
