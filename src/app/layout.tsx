import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import GradualBlur from "@/components/GradualBlur";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BU-Ugnayan",
  description: "Unified Organization Management for Bicol University",
  icons: {
    icon: "/bu-ugnayan logo.svg",
  },
};
export default function RootLayout({
children,
}: Readonly<{ children: React.ReactNode; }>) {
    return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${robotoMono.variable}`}>
    <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
            <Navbar />
            <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
              <div style={{ height: '100%', overflowY: 'auto' }}>
                {children}
              </div>
              <GradualBlur
                target="page"
                position="bottom"
                height="6rem"
                strength={8}
                divCount={3}
                curve="bezier"
                exponential={true}
                opacity={1}
              />
            </div>
        </ThemeProvider>
    </body>

    </html>
    );
    };
    
