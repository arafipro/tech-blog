import AppBar from "@/components/AppBar";
import AuthProvider from "@/providers/AuthProvider";
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Tech Blog",
  description: "My Developer Blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <AuthProvider>
        <body className={notoSansJp.className}>
          <AppBar />
          {children}
        </body>
      </AuthProvider>
    </html>
  );
}
