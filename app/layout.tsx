import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Patinhas na Rua — Adoção e proteção animal em Benjamin Constant, AM",
  description:
    "Plataforma de bem-estar animal para Benjamin Constant, Amazonas. Adote um pet, denuncie maus-tratos e apoie vaquinhas solidárias para animais resgatados.",
  openGraph: {
    title: "Patinhas na Rua — Adoção e proteção animal",
    description:
      "Adote, denuncie maus-tratos e apoie vaquinhas de animais em Benjamin Constant, AM.",
    locale: "pt_BR",
    type: "website",
  },
};

// Hardcoded inline script to prevent dark mode flash — no user input, safe from XSS
const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme:dark)").matches)){document.documentElement.classList.add("dark")}}catch(e){}})()`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: themeScript }}
        />
      </head>
      <body className={`${nunito.variable} antialiased`}>
        <ThemeProvider>
          <a
            href="#inicio"
            className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
          >
            Pular para o conteúdo
          </a>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
