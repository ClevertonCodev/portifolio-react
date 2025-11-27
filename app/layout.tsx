import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import AppNavbar from "@/components/AppNavbar";
import AppFooter from "@/components/AppFooter";
import { LanguageProvider } from "@/contexts/LanguageContext";

const poppins = Poppins({
  weight: ['400', '600', '700', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "Portfolio - Cleverton Santos",
  description: "Portfolio built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body className={poppins.variable}>
        <LanguageProvider>
          <AppNavbar />
          {children}
          <AppFooter />
        </LanguageProvider>
      </body>
    </html>
  );
}
