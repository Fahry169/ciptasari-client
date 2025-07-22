"use client";

import Berita from "@/component/LandingPage/Berita";
import Hero from "@/component/LandingPage/Hero";
import Penduduk from "@/component/LandingPage/Penduduk";
import Peta from "@/component/LandingPage/Peta";
import Sambutan from "@/component/LandingPage/Sambutan";
import Struktur from "@/component/LandingPage/Struktur";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Sambutan/>
      <Peta/>
      <Struktur/>
      <Penduduk/>
      <Berita/>
    </div>
  );
}