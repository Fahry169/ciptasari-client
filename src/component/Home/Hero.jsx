"use client";
import { Button } from "@heroui/react";
import { InfoIcon } from "@phosphor-icons/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url(/assets/home.jpg)`,
      }}
      className="w-full h-screen bg-cover bg-center bg-no-repeat flex items-center"
    >
      <div data-aos="fade-up" className="space-y-2 px-4 md:text-left md:mt-20 md:ml-24 ml-0 text-center">
        <h1 className="text-5xl font-bold text-white">Selamat Datang di</h1>
        <h1 className="text-5xl font-bold text-white">Desa Ciptasari</h1>
        <h2 className="text-xl  text-white">
          Desa yang asri dengan potensi alam melimpah dan potensi wisata yang
          menarik.
        </h2>
        <div className="pt-4">
          <Button
            className="text-lg text-red-700 font-semibold bg-white"
            size="lg"
            href="/berita"
          >
            <InfoIcon size={28} weight="bold" />
            Profile Desa
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
