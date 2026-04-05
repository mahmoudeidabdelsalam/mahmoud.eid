import "./globals.css";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import { resume } from "@/data/resume";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = {
  title: `${resume.name} — Senior Front-End Developer`,
  description: resume.summary,
  openGraph: {
    title: `${resume.name} — Senior Front-End Developer`,
    description: resume.summary,
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
