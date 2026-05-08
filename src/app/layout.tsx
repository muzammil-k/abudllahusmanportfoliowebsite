import type { Metadata } from "next";
import { Inter, Outfit, Mrs_Saint_Delafield } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const script = Mrs_Saint_Delafield({ 
  weight: "400",
  subsets: ["latin"], 
  variable: "--font-script" 
});

export const metadata: Metadata = {
  title: "Abdullah Usman | Premium Video Editor",
  description: "Cinematic video editing and high-impact visual storytelling.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${outfit.variable} ${script.variable} font-sans`}>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
