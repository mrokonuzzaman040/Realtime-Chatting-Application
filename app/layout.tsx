import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./(components)/Footer";
import Header from "./(components)/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Social Media App",
  description: "Connect with friends and the world around you. Join us on this journey and experience the future of social media. We are a passionate team dedicated to connecting people around the world. Our mission is to provide a seamless and secure platform for communication and sharing. Welcome to Social Media App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
