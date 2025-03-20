import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";
import "@/styles/_app_variables.scss";
import "@/styles/app.scss";
import "@/styles/home.scss";
import "@/styles/Homepage.scss";
import "bootstrap/dist/css/bootstrap.min.css"
import "./app.scss"
 
const futuraBold = localFont({ src: "../styles/fonts/Futura/Futura-Bold-03.ttf" })
const futuraMedium = localFont({ src: "../styles/fonts/Futura/Futura-Medium-01.ttf" })

export const metadata: Metadata = {
  title: "DOM - Digital Online Media GmbH - Agency for digital products and services",
  description: "WE PRODUCE seit 1995 im Herzen von Köln. Strategie & Beratung - Projektmanagement - Design - Programmierung: Backend & Frontend - Hosting - Content - Marketing - Support",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body
        className={`${futuraMedium.className} ${futuraBold.className}`}
      >
        {/* <div className="container">
        </div> */}
          {children}
      </body>
    </html>
  );
}
