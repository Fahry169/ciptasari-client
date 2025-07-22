import { Button, Link } from "@heroui/react";
import React from "react";
import { FaUser, FaCalendarAlt } from "react-icons/fa";

const Berita = () => {
  const newsData = [
    {
      id: 1,
      title: "Minggon Rutinan Desa Ciptasari",
      description:
        "Pemerintah Desa Ciptasari melaksanakan Minggon rutin setiap hari Rabu sebagai forum diskusi dan pemaparan kegiatan pembangunan desa.",
      image: "/assets/minggon.jpg",
      author: "AN",
      date: "25 Juni 2025",
      slug: "minggon-rutinan-desa-ciptasari",
    },
    {
      id: 2,
      title: "Menjaga Kelestarian Adat: Desa Ciptasari Kembali Gelar Hajat Bumi",
      description:
        "Adat istiadat merupakan kebiasan turun-menurun yang sebaiknya dilestarikan oleh seluruh masyarakat. Desa Ciptasari merupakan salah satu desa yang terus menjaga adat istiadat yang ada di Desa tersebut.",
      image: "/assets/hajat.jpg",
      author: "AN",
      date: "22 Juli 2025",
      slug: "hajat-bumi-desa-ciptasari",
    },
    {
      id: 3,
      title: "Kolaborasi dengan KKN Unsika, Posyandu Desa Ciptasari Gelar Sosialisasi Stunting dan Cek Kesehatan Gratis",
      description:
        "Kedatangan mahasiswa KKN dari Universitas Singaperbangsa Karawang menambah sinergi baru bagi Desa Ciptasari. Berakar pada permasalahan desa akan tingginya akan stunting, mahasiswa KKN dar Unsika merancang program kerja sosialisasi stunting untuk ibu hamil dan balita.",
      image: "/assets/stunting.jpg",
      author: "AN",
      date: "05 Juli 2025",
      slug: "kolaborasi-kkn-unsika-sosialisasi-stunting",
    },
    {
      id: 4,
      title: "Mahasiswa KKN Unsika Gelar Ciptasari Cup 2025 dengan Pertandingan Voli Antar RT di Desa Ciptasari",
      description:
        "Desa Ciptasari, 19-20 Juli 2025 – Mahasiswa KKN Unsika baru-baru ini menyelenggarakan turnamen voli bagi warga di Desa Ciptasari. Kegiatan ini merupakan salah satu program kerja yang dilatarbelakangi oleh tingginya minat olahraga voli di Desa Ciptasari.",
      image: "/assets/voli.jpg",
      author: "AN",
      date: "20 Juli 2025",
      slug: "ciptasari-cup-2025-turnamen-voli",
    },
    {
      id: 5,
      title: "Gotong Royong Pembersihan Lingkungan",
      description:
        "Warga Desa Kersik bergotong royong membersihkan lingkungan desa dalam rangka menyambut hari besar nasional.",
      image: "/assets/home.jpg",
      author: "Administrator",
      date: "15 Aug 2024",
      slug: "gotong-royong-bersih-desa",
    },
    {
      id: 6,
      title: "Peningkatan Infrastruktur Jalan Desa",
      description:
        "Pemerintah Desa Kersik meningkatkan infrastruktur jalan untuk memperlancar aktivitas warga dan mendukung ekonomi desa.",
      image: "/assets/home.jpg",
      author: "Administrator",
      date: "10 Jul 2024",
      slug: "peningkatan-infrastruktur-jalan",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-4 pt-24" id="berita">
      <div className="space-y-2 mb-8">
        <h1 className="text-5xl font-bold md:text-left text-center text-red-600">
          Berita Desa
        </h1>
        <h2 className="text-xl md:text-left text-center text-gray-600">
          Menyajikan informasi terbaru tentang peristiwa, berita terkini, dan
          artikel-artikel jurnalistik dari Desa Ciptasari.
        </h2>
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsData.map((article) => (
          <div
            key={article.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
          >
            <div className="h-48 bg-gray-200 relative overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold mb-2 text-gray-800 hover:text-red-600 transition-colors cursor-pointer line-clamp-2">
                {article.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                {article.description}
              </p>

              <div className="flex flex-col space-y-2 text-xs text-gray-500">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <FaUser size={14} />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FaCalendarAlt size={14} />
                    <span>{article.date}</span>
                  </div>
                </div>
              </div>

              <Button as={Link} href={`/berita/${article.slug}`} className="mt-4 w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors duration-200 text-sm font-medium">
                Baca Selengkapnya
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Berita;
