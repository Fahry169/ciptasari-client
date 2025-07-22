"use client";

import Berita from "@/component/LandingPage/Berita";
import Hero from "@/component/LandingPage/Hero";
import Penduduk from "@/component/LandingPage/Penduduk";
import PetaDigital from "@/component/LandingPage/PetaDigital";
import Peta from "@/component/LandingPage/Peta";
import Sambutan from "@/component/LandingPage/Sambutan";
import Struktur from "@/component/LandingPage/Struktur";
import Belanja from "@/component/LandingPage/Belanja";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Sambutan/>
      <PetaDigital/>
      <Peta/>
      <Struktur/>
      <Penduduk/>
      <Berita/>
      <Belanja/>
    </div>
  );
}