import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Natural oils",
  description: "Natural oils is a company that provides natural oils for sexual empowerness.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
