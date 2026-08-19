import type { Metadata } from "next";
import { headers } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const h = await headers();
  const host = h.get("host") || "localhost:3000";
  const origin = `${h.get("x-forwarded-proto") || (host.startsWith("localhost") ? "http" : "https")}://${host}`;
  const title = "定時ダッシュ極｜部長にバレずに帰れ";
  const description = "帰るだけなのに命がけ。60秒のオフィス脱出ステルスゲーム。";
  return { title, description, icons: { icon: "/favicon.svg" }, openGraph: { title, description, images: [`${origin}/og.png`] }, twitter: { card: "summary_large_image", title, description, images: [`${origin}/og.png`] } };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
