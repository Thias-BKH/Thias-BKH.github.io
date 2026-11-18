import type { Metadata, Viewport } from "next";
import { Schibsted_Grotesk } from "next/font/google";
import "./globals.css";

const schibsted = Schibsted_Grotesk({
  variable: "--font-schibsted",
  subsets: ["latin"],
});

export const viewport: Viewport = { themeColor: "#eef1ef" };

export const metadata: Metadata = {
  title: "Thias B. Kochen — Portfolio",
  description: "Portfolio and CV of Thias B. Kochen: interaction design, immersive media and physical computing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${schibsted.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
