import { Outfit } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import NavbarComponent from "@/component/Navbar";
import Footer from "@/component/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Website Desa Ciptasari",
  description: "Website resmi Desa Ciptasari",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} antialiased`}>
        <Providers>
          <NavbarComponent />
          {children}
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}
