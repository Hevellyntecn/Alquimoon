import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Alquimoon — Incensos naturais artesanais",
  description:
    "Incensos naturais, terapêuticos e ritualísticos feitos à mão. Artesanato consciente com ervas, resinas e essências vegetais.",
  keywords: [
    "incenso natural",
    "incensária",
    "artesanal",
    "ritual",
    "terapêutico",
    "lavanda",
    "Alquimoon",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${ubuntu.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body">{children}</body>
    </html>
  );
}
