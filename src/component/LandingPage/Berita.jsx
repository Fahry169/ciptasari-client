import React from "react";
import { FaUser, FaEye, FaCalendarAlt } from "react-icons/fa";

const Berita = () => {
  const newsData = [
    {
      id: 1,
      title: "MUSDES PERTANGGUNGJAWABAN BUMDESA",
      description:
        "Kersik, 21 Mei 2025 – Pemerintah Desa Kersik menggelar Musyawarah Desa (Musdes) untuk membahas laporan pertanggungjawaban Badan Usaha Milik Desa...",
      image: "/assets/home.jpg",
      author: "Administrator",
      date: "22 May 2025",
      views: "479 kali",
      category: "Pemerintahan",
    },
    {
      id: 2,
      title: "Makkela Kela, Pererat hubungan antar warga",
      description:
        '"Makkela Kela" adalah sebuah tradisi makan bersama yang dilakukan oleh masyarakat Desa Kersik. Acara ini merupakan bentuk perayaan kebersamaan...',
      image: "/assets/home.jpg",
      author: "Administrator",
      date: "05 Sep 2024",
      views: "1.891 kali",
      category: "Budaya",
    },
    {
      id: 3,
      title: "Pemerintah Desa Kersik Gelar Pelatihan untuk Anggota Linmas",
      description:
        "Kersik – Pemerintah Desa Kersik baru-baru ini menyelenggarakan pelatihan intensif bagi anggota Perlindungan Masyarakat (Linmas) desa. Kegiatan ini...",
      image: "/assets/home.jpg",
      author: "Administrator",
      date: "05 Sep 2024",
      views: "1.173 kali",
      category: "Keamanan",
    },
    {
      id: 4,
      title: "Gotong Royong Pembersihan Lingkungan",
      description:
        "Warga Desa Kersik bergotong royong membersihkan lingkungan desa dalam rangka menyambut hari besar nasional. Kegiatan ini melibatkan seluruh lapisan masyarakat...",
      image: "/assets/home.jpg",
      author: "Administrator",
      date: "15 Aug 2024",
      views: "856 kali",
      category: "Lingkungan",
    },
    {
      id: 5,
      title: "Peningkatan Infrastruktur Jalan Desa",
      description:
        "Pemerintah Desa Kersik melakukan perbaikan dan peningkatan infrastruktur jalan untuk memperlancar aktivitas warga dan mendukung perekonomian desa...",
      image: "/assets/home.jpg",
      author: "Administrator",
      date: "10 Jul 2024",
      views: "1.245 kali",
      category: "Infrastruktur",
    },
    {
      id: 6,
      title: "Program Bantuan Sosial untuk Warga Kurang Mampu",
      description:
        "Desa Kersik mengimplementasikan program bantuan sosial untuk membantu warga kurang mampu melalui berbagai skema bantuan yang telah disiapkan...",
      image: "/assets/home.jpg",
      author: "Administrator",
      date: "28 Jun 2024",
      views: "967 kali",
      category: "Sosial",
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
            {/* Article Image */}
            <div className="h-48 bg-gray-200 relative overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Article Content */}
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold mb-2 text-gray-800 hover:text-red-600 transition-colors cursor-pointer line-clamp-2">
                {article.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                {article.description}
              </p>

              {/* Article Meta */}
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

              {/* Read More Button */}
              <button className="mt-4 w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors duration-200 text-sm font-medium">
                Baca Selengkapnya
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Berita;
