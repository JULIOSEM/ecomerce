import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarComponent from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/cart";
import { UserProvider } from "@/context/user";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JCSHOP",
  description: "StartUp of E-commerce",
  icons: {
    icon: "/cart.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
          <CartProvider>
            <NavbarComponent />
            {children}
            <Footer />
          </CartProvider>
        
      </body>
    </html>
  );
}
