import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins" 
});

export const metadata: Metadata = {
  title: "Tech Capital Managed Services - IT Solutions & Consulting",
  description: "Leading IT solutions provider offering managed services, cloud infrastructure, cybersecurity, and digital transformation consulting.",
  keywords: ["IT services", "managed services", "cloud solutions", "cybersecurity", "IT consulting"],
  authors: [{ name: "Tech Capital Managed Services" }],
  openGraph: {
    title: "Tech Capital Managed Services",
    description: "Leading IT solutions provider offering comprehensive managed services",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
