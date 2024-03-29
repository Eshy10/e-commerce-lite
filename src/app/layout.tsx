import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer, Navbar } from "@/components";
import StoreProvider from "./StoreProvider";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Product List",
  description: "List of Products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
        <Navbar/>
        <ToastContainer/>
        {children}
        <Footer/>
        </StoreProvider>
        </body>
    </html>
  );
}
