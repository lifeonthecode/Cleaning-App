import type { Metadata } from "next";
import{Be_Vietnam_Pro, Outfit} from "next/font/google"
import "./globals.css";

// BE VIETNAM FONT 
const beVietnam = Be_Vietnam_Pro({
  subsets:["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-be-vietnam"
});

// OUTFIT FONT 
const outfit = Outfit({
  subsets:["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit"
});


export const metadata: Metadata = {
  title: "Cleaner WB",
  description: "Book professional home and office cleaning services instantly with Cleaner WB. Experience fast, reliable, and affordable cleaning solutions delivered right to your doorstep.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${beVietnam.variable} ${outfit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}


