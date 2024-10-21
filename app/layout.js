import { Roboto_Mono } from "next/font/google";
import "./globals.css";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "Nafis Abrar",
  description: "I am Nafis Abrar Ahmed Adaan. This is my personal Portfolio.",
  openGraph: {
    title: "Nafis Abrar - Front-End Developer",
    description:
      "Welcome to my portfolio showcasing my frontend development skills.",
    url: "https://nafis-abrar.netlify.app",
    siteName: "Portfolio",
    images: [
      {
        url: "https://nafis-abrar.netlify.app/api/og",
        width: 800,
        height: 400,
        alt: "Nafis Abrar - Frontend Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nafis Abrar - Front-End Developer",
    description:
      "Welcome to my portfolio showcasing my frontend development skills.",
    images: ["https://nafis-abrar.netlify.app/api/og"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <body className={robotoMono.className}>{children}</body>
    </html>
  );
}
