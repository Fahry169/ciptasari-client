"use client"

import { Image } from "@heroui/react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-red-700 text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Address Section */}
          <div className="flex flex-col">
            <div className="flex items-center mb-4 gap-3">
              <div className="rounded-full flex items-center justify-center">
                <Image
                  alt="Logo"
                  src="/logo/logo.png"
                  className="w-12 h-14 sm:w-14 sm:h-16"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">Pemerintah Desa Ciptsari</h3>
              </div>
            </div>
            <div className="text-sm text-white leading-relaxed">
              <p>Desa Ciptasari, Kecamatan Pangkalan, Kabupaten Karawang</p>
              <p>Provinsi Jawa Barat, 41362</p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-6">Hubungi Kami</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-base">082150208664</span>
              </div>
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-base leading-relaxed">
                  kersik.marangkayu@kukarkab.go.id
                </span>
              </div>
              <div className="flex gap-3 mt-6">
                <Link
                  href="#"
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.141.889 2.739.099.120.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378 0 0-.599 2.282-.744 2.840-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24.001 12.017 24.001c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Important Phone Numbers */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-6">Nomor Telepon Penting</h3>
            <div className="space-y-3">
              <Link
                href="#"
                className="block text-base text-white hover:text-white/80 underline underline-offset-2"
              >
                Marto/Kades Kersik
              </Link>
              <Link
                href="#"
                className="block text-base text-white hover:text-white/80 underline underline-offset-2"
              >
                -/Ambulan Ciptasari
              </Link>
            </div>
          </div>

          {/* Explore Section */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-6">Jelajahi</h3>
            <div className="space-y-3">
              <Link
                href="#"
                className="block text-base text-white hover:text-white/80 underline underline-offset-2"
              >
                Website Kemendesa
              </Link>
              <Link
                href="#"
                className="block text-base text-white hover:text-white/80 underline underline-offset-2"
              >
                Website Kemendagri
              </Link>
              <Link
                href="#"
                className="block text-base text-white hover:text-white/80 underline underline-offset-2"
              >
                Website Kabupaten Karawang
              </Link>
              <Link
                href="https://cekdptonline.kpu.go.id/"
                className="block text-base text-white hover:text-white/80 underline underline-offset-2"
              >
                Cek DPT Online
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/20 mt-10 pt-6">
          <div className="text-center">
            <p className="text-white text-base">
              © 2025 KKN UNSIKA. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;