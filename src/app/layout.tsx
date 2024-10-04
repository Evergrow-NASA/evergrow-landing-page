import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "@/styles/global.css";
import Navbar from "@/components/ui/Navbar";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Evergrow",
  description: "Tackle water scarcity with Evergrow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
