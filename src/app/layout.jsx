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
  title: "Website Resmi Desa Ciptasari | Karawang",
  description: "Selamat datang di website resmi Desa Ciptasari, Kecamatan Pangkalan, Kabupaten Karawang. Dapatkan informasi terkini seputar pemerintahan, berita desa, dan potensi lokal.",
  keywords: [
    "Desa Ciptasari",
    "Desa Ciptasari Karawang",
    "Pemerintahan Desa",
    "Website Desa",
    "Desa Digital",
    "Karawang",
    "Pangkalan",
    "Loji",
    "Profil Desa Ciptasari",
    "Berita Desa Ciptasari",
    "Layanan Desa Ciptasari"
  ],
  authors: [{ name: "Pemerintah Desa Ciptasari", url: "https://desaciptasari.my.id" }],
  creator: "Tim Pengembang Website Desa Ciptasari",
  metadataBase: new URL("https://desaciptasari.my.id"),
  openGraph: {
    title: "Website Resmi Desa Ciptasari | Karawang",
    description: "Informasi resmi Desa Ciptasari, Telagasari, Karawang. Cek profil desa, layanan publik, berita, dan potensi lokal.",
    url: "https://desaciptasari.my.id",
    siteName: "Desa Ciptasari",
    images: [
      {
        url: "https://desaciptasari.my.id/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Desa Ciptasari Karawang",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} antialiased`}>
        <Providers>
          {children}
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}
