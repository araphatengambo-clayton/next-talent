import "./globals.css";import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next Talent",
  description: "La plateforme qui révèle les talents du football amateur.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
