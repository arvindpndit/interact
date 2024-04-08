import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import RightSidebar from "@/components/layout/RightSidebar";
import LeftNavSidebar from "@/components/layout/LeftNavSidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Interact",
  description:
    "Social media application which connects people around the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container mx-auto">
          <div className="grid grid-cols-12 h-screen ">
            <div className=" sm:block col-span-2 md:col-span-1 lg:col-span-3">
              <LeftNavSidebar />
            </div>
            <div className="overflow-auto no-scrollbar col-span-10  md:col-span-7 lg:col-span-6">
              {children}
            </div>
            <div className=" hidden md:block md:col-span-4 lg:col-span-3">
              <RightSidebar />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
