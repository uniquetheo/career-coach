import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Career Coach",
  description: "Your AI Assistant Career Coach",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-background ${inter.className}`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
