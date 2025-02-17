import type { Metadata } from "next";
import { Geist, Geist_Mono, Nunito_Sans } from "next/font/google";
import "./globals.css";
import { AppHeader } from "@/components/app-header";

const nunitoSans = Nunito_Sans({
  variable: '--font-nunito-sans',
  subsets: ['latin']
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Países do mundo",
  description: "App de países do mundo para codante.io",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunitoSans.variable} antialiased h-screen w-full bg-neutral-100`}
      >
        <main className="pt-16">

          <AppHeader />
          {children}
        </main>
      </body>
    </html>
  );
}
