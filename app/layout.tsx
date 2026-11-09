import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Surafel Nigussie | Full Stack Developer",
    template: "%s | Surafel Nigussie",
  },
  description:
    "Explore the portfolio of Surafel Nigussie, a Full Stack Developer based in Addis Ababa, Ethiopia, passionate about building modern and scalable web applications.",
  keywords: [
    "Surafel Nigussie",
    "Full Stack Developer",
    "Software Engineer",
    "React Developer",
    "Next.js Developer",
    "Web Developer Ethiopia",
  ],
  authors: [{ name: "Surafel Nigussie" }],
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#0B0F19] text-white antialiased">{children}</body>
    </html>
  );
}
