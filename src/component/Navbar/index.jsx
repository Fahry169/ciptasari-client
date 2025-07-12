"use client"

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
} from "@heroui/react";
import { useState } from "react";

const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
      className="py-2 sm:py-3 bg-red-800"
      
    >
      <NavbarContent justify="start" className="flex items-center flex-1">
        <NavbarBrand className="pl-0 pr-0 md:pl-2"> 
          <div className="flex items-center gap-2 sm:gap-4 text-white"> 
            <div className="flex-shrink-0">
              <Image
                alt="Logo"
                src="../logo/logo.png"
                className="w-10 h-12 sm:w-12 sm:h-14 md:w-14 md:h-16"
              />
            </div>
            <div className="min-w-0 flex-1">
              <h1 className="font-bold text-xs sm:text-sm md:text-lg">
                Desa Ciptasari
              </h1>
              <h1 className="text-xs sm:text-sm md:text-base leading-tight opacity-90">
                Kecamatan Pangkalan
              </h1>
            </div>
          </div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex gap-4 md:gap-6 lg:gap-8 font-semibold mr-3"
        justify="end"
      >
        <NavbarItem>
          <Link
            color="foreground"
            href="#"
            className="text-white text-sm md:text-base lg:text-lg font-bold hover:text-red-200 transition-colors"
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="#"
            className="text-white text-sm md:text-base lg:text-lg font-bold hover:text-red-200 transition-colors"
          >
            Profile Desa
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="#"
            className="text-white text-sm md:text-base lg:text-lg font-bold hover:text-red-200 transition-colors"
          >
            Berita
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end" className="sm:hidden w-auto">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="flex items-center text-white hover:text-red-200 transition-colors"
        />
      </NavbarContent>

      {/* Mobile menu */}
      <NavbarMenu className="py-8 px-6 left-0 space-y-4 bg-white/95 backdrop-blur-sm">
        <NavbarMenuItem>
          <Link
            className="text-gray-800 w-full flex items-center text-lg font-medium hover:text-red-700 transition-colors py-2"
            href="#"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className="text-gray-800 w-full text-lg font-medium hover:text-red-700 transition-colors py-2"
            href="#"
            onClick={() => setIsMenuOpen(false)}
          >
            Profile Desa
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className="text-gray-800 w-full text-lg font-medium hover:text-red-700 transition-colors py-2"
            href="#"
            onClick={() => setIsMenuOpen(false)}
          >
            Berita
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default NavbarComponent;