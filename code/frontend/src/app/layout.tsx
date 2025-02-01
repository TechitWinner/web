import type { Metadata } from "next";
import "./globals.css";
import Footer from "../components/footer";
import Topbar from "../components/topbar";

export const metadata: Metadata = {
  title: "Techit's Home",
  description: "Just another personal website, Created by Techit Thawiang",
  referrer: "strict-origin-when-cross-origin",
  robots: "index,follow",
  authors: [{ name: "Techit Thawiang" }],
  applicationName: "Techit Thawiang",
  metadataBase: new URL("https://techit.dailitation.xyz/"),
  openGraph: {
    title: "Techit's Home by Techit Thawiang",
    description: "Just another personal website, Created by Techit Thawiang",
    url: "https://techit.dailitation.xyz/",
    siteName: "techit.dailitation.xyz",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    creator: "@techitwinner",
    site: "@techitwinner",
    card: "summary",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black",
    title: "Techit Thawiang",
  },
  icons: {
    icon: "/favicon.svg",
  },
  alternates: {
    canonical: "https://techit.dailitation.xyz/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
          <div className={`w-full flex flex-col`}>
            <Topbar/>
            {children}
            <Footer/>
          </div>
      </body>
    </html>
  );
}
