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
} from "@heroui/react";
import { useState, useEffect } from "react";

const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleSmoothScroll = (e, sectionId) => {
    e.preventDefault();
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
    
    // Close mobile menu if open
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation items configuration
  const navItems = [
    { href: "#hero", label: "Home" },
    { href: "#sambutan", label: "Sambutan" },
    { href: "#peta", label: "Peta" },
    { href: "#struktur", label: "STOK" },
    { href: "#penduduk", label: "Penduduk" },
    { href: "#berita", label: "Berita" },
  ];

  const mobileNavItems = [
    { href: "#hero", label: "Home" },
    { href: "#sambutan", label: "Profile Desa" },
    { href: "#berita", label: "Berita" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <Navbar
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        maxWidth="full"
        isBordered={false}
        className={`py-2 sm:py-3 transition-all duration-500 !border-none !shadow-none ${
          isScrolled
            ? "backdrop-blur-md !shadow-md !bg-red-800/80"
            : "!bg-transparent"
        }`}
        style={{
          backgroundColor: isScrolled
            ? "rgba(153, 27, 27, 0.8)"
            : "transparent",
          backdropFilter: isScrolled ? "blur(12px)" : "none",
          border: "none",
          borderBottom: "none",
          boxShadow: isScrolled
            ? "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
            : "none",
        }}
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

        {/* Desktop Navigation */}
        <NavbarContent
          className="hidden sm:flex gap-4 md:gap-6 lg:gap-8 font-semibold mr-3"
          justify="end"
        >
          {navItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link
                color="foreground"
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href.substring(1))}
                className="text-white text-sm md:text-base lg:text-lg font-bold hover:text-gray-200 transition-colors cursor-pointer"
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        {/* Mobile Menu Toggle */}
        <NavbarContent justify="end" className="sm:hidden w-auto">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="flex items-center text-white hover:text-gray-200 transition-colors"
          />
        </NavbarContent>

        {/* Mobile Navigation Menu */}
        <NavbarMenu className="py-8 px-6 left-0 space-y-4 bg-white/95 backdrop-blur-sm">
          {mobileNavItems.map((item) => (
            <NavbarMenuItem key={item.href}>
              <Link
                className="text-gray-800 w-full flex items-center text-lg font-medium hover:text-red-700 transition-colors py-2 cursor-pointer"
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href.substring(1))}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;