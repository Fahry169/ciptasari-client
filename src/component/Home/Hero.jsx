"use client";
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
        backgroundImage: `url(/logo/logo.png)`,
      }}
      data-aos=""
      className="space-y-2 w-full h-screen bg-cover bg-center bg-no-repeat"
    >
      <div className="absolute left-10 md:left-16 lg:left-24 top-1/2 -translate-y-1/2 md:translate-y-0 space-y-2">

      <h1 className="text-5xl font-bold">Selamat Datang</h1>
      <h1 className="text-5xl font-bold">Website Resmi Desa Ciptasari</h1>
      <h2 className="text-2xl font-semibold">
        Sumber Informasi terbaru tentang Desa Ciptasari
      </h2>
      </div>
    </div>
  );
};

export default Hero;
