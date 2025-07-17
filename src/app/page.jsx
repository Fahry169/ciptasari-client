"use client";

import Berita from "@/component/Home/Berita";
import Hero from "@/component/Home/Hero";
import Penduduk from "@/component/Home/Penduduk";
import Peta from "@/component/Home/Peta";
import Sambutan from "@/component/Home/Sambutan";
import Struktur from "@/component/Home/Struktur";

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