import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import SideNav from "@/components/sidenav/SideNav";
import SettingsBar from "@/components/SettingsBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "IRD",
  description: "the dua app",
  icons: "/logo.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#E2E2E2] flex`}
      >
        <NavBar />
        <div>
          <Header />
          <main className="flex">
            <SideNav />
            <div className="h-screen overflow-y-auto">{children}</div>
            <SettingsBar />
          </main>
        </div>
      </body>
    </html>
  );
}
