import type { Metadata, Viewport } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({ variable: "--font-display", subsets: ["latin"] });
const code = JetBrains_Mono({ variable: "--font-code", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Devang Parekh — Senior Front-End / Full-Stack Engineer",
  description:
    "Front-End Team Lead and full-stack engineer with 14 years in fintech — React, Next.js, Node.js, PHP; payments, e-KYC, digital banking, crypto exchanges and DeFi.",
  openGraph: {
    title: "Devang Parekh — Senior Front-End / Full-Stack Engineer",
    description: "Fintech · Payments & KYC · Web3 · Full-stack · AI-augmented engineering",
    images: ["/images/devang.jpg"],
  },
  applicationName: "Devang Parekh",
  appleWebApp: { capable: true, title: "Devang", statusBarStyle: "black-translucent" },
  icons: { apple: "/icons/apple-touch-icon.png" },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#05070d",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${code.variable} antialiased`}>{children}</body>
    </html>
  );
}
