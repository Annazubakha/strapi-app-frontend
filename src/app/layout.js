import { Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import ClientApolloProvider from "@/components/ClientApolloPrivider";

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
        <ClientApolloProvider>
          <main>{children}</main>
        </ClientApolloProvider>
      </body>
    </html>
  );
}
