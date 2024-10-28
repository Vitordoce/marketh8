import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";

//components
import Header from "@/components/Header";

import { AuthProvider } from "@/hooks/myContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="bg-[#f5e6cb]">
        <AuthProvider>
          <Header />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
