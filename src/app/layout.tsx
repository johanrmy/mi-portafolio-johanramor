import type { Metadata } from "next";
import { josefin_sans } from "@/app/fonts";
import data from "@lib/data.json";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const { title, description, icon } = data.page.metadata;
export const metadata: Metadata = {
  title: title,
  description: description,
  icons: icon,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${josefin_sans.className}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
