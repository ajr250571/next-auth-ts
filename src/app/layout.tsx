import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import GlobalContext from "@/context/GlobalContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextAuth-TS",
  description: "App NextAuth con TS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="business">
      <body className={inter.className}>
        <div className="container mx-auto px-4">
          <GlobalContext>
            <Navbar />
            {children}
          </GlobalContext>
        </div>
      </body>
    </html>
  );
}
