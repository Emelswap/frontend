import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "emelSwap | Ultra-Premium DEX",
  description: "High-performance decentralized exchange on Arc Network",
  icons: {
    icon: "/emelverse.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </head>
      <body
        className={`${ibmPlexSans.variable} font-ibm-plex antialiased min-h-screen flex flex-col bg-black text-white text-sm selection:bg-primary selection:text-black radial-glow`}
      >
        <Providers>
          {/* Ambient Background Effects */}
          <div className="fixed top-[-10%] left-[-10%] w-[60%] h-[60%] bg-primary/10 rounded-full blur-[160px] pointer-events-none -z-10"></div>
          <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#222]/40 rounded-full blur-[140px] pointer-events-none -z-10"></div>
          <div className="fixed top-[20%] right-[10%] w-[30%] h-[30%] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>

          <div className="flex flex-col min-h-screen relative z-10">
            <Navbar />
            <main className="flex-1 pt-24">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
