import { Button, Link } from "@heroui/react";
import React from "react";
import { FaUser, FaCalendarAlt } from "react-icons/fa";

const Berita = () => {
  const newsData = [
  {
    id: 1,
    title: "Sistem Bambu Lestari (Simbal): Inovasi KKN Unsika untuk Meningkatkan.......",
    description:
      "Pada tanggal 18 Juli 2025 Mahasiswa & Mahasiswi KKN Universitas Singaperbangsa Karawang melaksanakan kegiatan Fun Learning kedua dan terakhir mereka dalam rangka Pengabdian di Desa Ciptasari, Kecamatan Pangkalan Kabupaten Karawang. Selama satu hari di SDN 2 Ciptasari. Kegiatan ini bertujuan untuk menciptakan suasana belajar yang menyenangkan dan interaktif bagi anak-anak sekolah dasar, dengan pendekatan visual berbasis gambar dan suara.",
    image: "/assets/simbal.jpg",
    author: "Administrator",
    date: "23 Juli 2025",
    slug: "sistem-bambu-lestari-kkn-unsika",
  },
  {
    id: 2,
    title: "Mendorong Pemberdayaan Ekonomi Desa melalui Digitalisasi UMKM: Kolaborasi antara LUMAWI BUMDes Dengan Mahasiswa KKN UNSIKA",
    description:
      "Pemberdayaan ekonomi masyarakat desa semakin menguat melalui sinergi antara BUMDes Ciptasari dan mahasiswa Kuliah Kerja Nyata (KKN) Universitas Singaperbangsa Karawang (UNSIKA). Melalui unit usaha LUMAWI (Lumbung Awi), BUMDes Ciptasari mendorong digitalisasi UMKM sebagai strategi untuk meningkatkan pemasaran, produktivitas, dan keberlanjutan usaha lokal.",
    image: "/assets/kades.png",
    author: "AD",
    date: "23 Juli 2025",
    slug: "lumawi-umkm-desa-ciptasari",
  },
  {
    id: 3,
    title: "Menjaga Kelestarian Adat: Desa Ciptasari Kembali Gelar Hajat Bumi",
    description:
      "Adat istiadat merupakan kebiasan turun-menurun yang sebaiknya dilestarikan oleh seluruh masyarakat. Desa Ciptasari merupakan salah satu desa yang terus menjaga adat istiadat yang ada di Desa tersebut.",
    image: "/assets/hajat.jpg",
    author: "AN",
    date: "22 Juli 2025",
    slug: "hajat-bumi-desa-ciptasari",
  },
  {
    id: 4,
    title: "KKN Unsika Permudah Akses Warga Desa Ciptasari lewat 7 Plang Jalan Strategis di Empat Dusun",
    description:
      "Desa Ciptasari, 22 Juli 2025 — Mahasiswa Kuliah Kerja Nyata (KKN) Universitas Singaperbangsa Karawang (Unsika) terus menunjukkan kontribusinya dalam pembangunan desa melalui berbagai program nyata. Salah satu program kerja yang berhasil diwujudkan adalah pembuatan dan pemasangan plang jalan strategis di Desa Ciptasari, Kecamatan Pangkalan, Kabupaten Karawang.",
    image: "/assets/plang_jalan.PNG",
    author: "BC",
    date: "20 Juli 2025",
    slug: "plang-jalan-desa-ciptasari",
  },
  {
    id: 5,
    title: "Mahasiswa KKN Unsika Gelar Ciptasari Cup 2025 dengan Pertandingan Voli Antar RT di Desa Ciptasari",
    description:
      "Desa Ciptasari, 19-20 Juli 2025 – Mahasiswa KKN Unsika baru-baru ini menyelenggarakan turnamen voli bagi warga di Desa Ciptasari. Kegiatan ini merupakan salah satu program kerja yang dilatarbelakangi oleh tingginya minat olahraga voli di Desa Ciptasari.",
    image: "/assets/voli.jpg",
    author: "AN",
    date: "20 Juli 2025",
    slug: "ciptasari-cup-2025-turnamen-voli",
  },
  {
    id: 6,
    title: "Fun Learning: Belajar Seru, bersama Kelas Ceria SDN II Ciptasari",
    description:
      "Pada tanggal 18 Juli 2025 Mahasiswa & Mahasiswi KKN Universitas Singaperbangsa Karawang melaksanakan kegiatan Fun Learning kedua dan terakhir mereka dalam rangka Pengabdian di Desa Ciptasari, Kecamatan Pangkalan Kabupaten Karawang. Selama satu hari di SDN 2 Ciptasari. Kegiatan ini bertujuan untuk menciptakan suasana belajar yang menyenangkan dan interaktif bagi anak-anak sekolah dasar, dengan pendekatan visual berbasis gambar dan suara.",
    image: "/assets/fun_learning.JPG",
    author: "CB",
    date: "18 Juli 2025",
    slug: "fun-learning-sdn-2-ciptasari",
  },
  {
    id: 7,
    title: "Mahasiswa KKN UNSIKA Sulap Limbah Bambu Jadi Celengan Edukatif di SDN Ciptasari III",
    description:
      "Mahasiswa Kuliah Kerja Nyata (KKN) Universitas Singaperbangsa Karawang (UNSIKA) menggagas sebuah program kreatif bertajuk Bambu Menabung, sebagai bentuk pemanfaatan potensi alam lokal sekaligus sarana edukasi penting nya menabung bagi anak-anak.",
    image: "/assets/bambu_menabung.JPG",
    author: "AI",
    date: "17 Juli 2025",
    slug: "celengan-bambu-kkn-unsika",
  },
  {
    id: 8,
    title: "Pojok Literasi: Program KKN Ciptasari untuk Menumbuhkan Budaya Membaca Anak Sejak Dini",
    description:
      "Mahasiswa Kuliah Kerja Nyata (KKN) Universitas Singaperbangsa Karawang yang tergabung di Desa Ciptasari 2025 menghadirkan sebuah program inspiratif bertajuk “Pojok Literasi: Ruang Baca dan Edukasi Anak”. Program ini dilaksanakan di SDN Ciptasari I dan menjadi salah satu bentuk nyata kontribusi mahasiswa dalam mendukung gerakan literasi nasional, khususnya di lingkungan sekolah dasar yang berada di wilayah pedesaan.",
    image: "/assets/pojok_literasi.PNG",
    author: "BA",
    date: "16 Juli 2025",
    slug: "pojok-literasi-sdn-1-ciptasari",
  },
  {
    id: 9,
    title: "Kolaborasi dengan KKN Unsika, Posyandu Desa Ciptasari Gelar Sosialisasi Stunting dan Cek Kesehatan Gratis",
    description:
      "Kedatangan mahasiswa KKN dari Universitas Singaperbangsa Karawang menambah sinergi baru bagi Desa Ciptasari. Berakar pada permasalahan desa akan tingginya akan stunting, mahasiswa KKN dar Unsika merancang program kerja sosialisasi stunting untuk ibu hamil dan balita.",
    image: "/assets/stunting.jpg",
    author: "AN",
    date: "05 Juli 2025",
    slug: "kolaborasi-kkn-unsika-sosialisasi-stunting",
  },
]
;

  return (
    <div className="max-w-7xl mx-auto p-4 pt-24" id="berita">
      <div className="space-y-2 mb-8">
        <h1 className="text-5xl font-bold md:text-left text-center text-red-600">
          Berita Desa
        </h1>
        <h2 className="text-xl md:text-left text-center text-gray-600">
          Menyajikan informasi terbaru tentang peristiwa, berita terkini, dan
          artikel-artikel jurnalistik dari Desa Ciptasari
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
                className="w-full h-full object-cover hover:scale-[102%]  transition-transform duration-300"
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

              <Button
                as={Link}
                href={`/berita/${article.slug}`}
                className="mt-4 w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors duration-200 text-sm font-medium"
              >
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
