"use client"

import { Image } from "@heroui/react";
import { InstagramLogoIcon, TiktokLogoIcon } from "@phosphor-icons/react";
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
                <h3 className="text-xl font-bold">Pemerintah Desa Ciptasari</h3>
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
                <span className="text-base">08123456789</span>
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
                  ciptasari@gmail.com
                </span>
              </div>
              <div className="flex gap-3 mt-6">
                <Link
                  href="https://www.tiktok.com/@desa_ciptasari?_t=ZS-8yEwfVLhpvW&_r=1"
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                 <TiktokLogoIcon weight="fill" size={24}/>
                </Link>
                <Link
                  href="https://www.instagram.com/pemdes.ciptasari?igsh=anF1MHVtbmJ6b2p1"
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <InstagramLogoIcon weight="fill" size={24}/>
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
                Marto/Kades Ciptasari
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
                href="https://kemendesa.go.id/"
                className="block text-base text-white hover:text-white/80 underline underline-offset-2"
              >
                Website Kemendesa
              </Link>
              <Link
                href="https://kemendagri.go.id/"
                className="block text-base text-white hover:text-white/80 underline underline-offset-2"
              >
                Website Kemendagri
              </Link>
              <Link
                href="https://karawangkab.go.id/"
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