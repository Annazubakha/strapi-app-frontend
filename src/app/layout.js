import { Geist_Mono } from "next/font/google";
import "./styles/globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Posts app",
  description: "Posts app which was built with Strapi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistMono.variable}`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
