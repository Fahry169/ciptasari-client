"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Image,
  Button,
} from "@heroui/react";
import { ArrowUpLeftIcon, ArrowUUpLeftIcon } from "@phosphor-icons/react";
import { useRouter } from "next/navigation"; // Ganti ini - untuk App Router
import { useState, useEffect } from "react";

const NavbarSec = () => {
  const router = useRouter();

  const handleBackClick = () => {
    router.push('/#berita'); // Ini akan bekerja dengan benar sekarang
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <Navbar
        maxWidth="full"
        isBordered={false}
        className={`py-2 sm:py-3 bg-red-800`}
      >
        <NavbarContent justify="start" className="flex items-center flex-1 ">
          <NavbarBrand className="pl-2 pr-0 md:pl-2">
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4 text-white">
              <div className="flex-shrink-0">
                <Image
                  alt="Logo Desa Ciptasari"
                  src="../logo/logo.png"
                  className="w-9 h-11 sm:w-12 sm:h-14 md:w-14 md:h-16"
                />
              </div>
              <div className="min-w-0 flex-1">
                <h1 className="font-bold text-sm sm:text-base md:text-lg leading-tight">
                  Desa Ciptasari
                </h1>
                <h2 className="text-xs sm:text-sm md:text-base leading-tight opacity-90">
                  Kecamatan Pangkalan
                </h2>
              </div>
            </div>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent
          className="flex gap-4 md:gap-6 lg:gap-8 font-semibold mr-3"
          justify="end"
        >
          <Button onPress={handleBackClick} className="bg-red-900 font-bold text-white text-base py-6">
            <ArrowUUpLeftIcon size={20} weight="bold"/>
            Kembali
          </Button>
        </NavbarContent>
      </Navbar>
    </div>
  );
};

export default NavbarSec;