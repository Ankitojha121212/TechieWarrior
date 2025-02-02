import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from './components/Header';
import Footer from './components/Footer';
import "animate.css";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Techie Warriors",
  description: "Techie Warriors provides innovative and reliable software solutions, helping businesses streamline operations and enhance digital experiences.",
  // icons: "/favicon.ico", // Path to your favicon
};

export default function RootLayout({ children }) {
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
  return (
    <html lang="en">
           <head>
        {/* Add the animate.css CDN link here */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </head>


      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
