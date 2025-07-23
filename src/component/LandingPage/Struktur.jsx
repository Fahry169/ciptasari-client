import React, { useRef } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react";
import { Button } from "@heroui/react";

const Struktur = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  // Data untuk card berdasarkan struktur organisasi yang sebenarnya
  const teamMembers = [
    { name: "Marto", position: "Kepala Desa", image: "/assets/kades.png" },
    {
      name: "Oyan Sedjana",
      position: "Sekretaris Desa",
      image: "/assets/kades.png",
    },
    {
      name: "Ahmad Sutrisno",
      position: "Kasi Pemerintahan",
      image: "/assets/kades.png",
    },
    {
      name: "Oyim Sumardi",
      position: "Kasi Kesejahteraan",
      image: "/assets/kades.png",
    },
    {
      name: "Rifki Aprilian Sukmara",
      position: "Kasi Pelayanan",
      image: "/assets/kades.png",
    },
    {
      name: "Rian Aprianto",
      position: "Kaur Keuangan",
      image: "/assets/kades.png",
    },
    {
      name: "Novi Arianti",
      position: "Kaur Umum & Perencanaan",
      image: "/assets/kades.png",
    },
    {
      name: "Herdiana Yusup",
      position: "Kepala Dusun 1",
      image: "/assets/kades.png",
    },
    {
      name: "Nana Suryana",
      position: "Kepala Dusun 2",
      image: "/assets/kades.png",
    },
    {
      name: "Sobar Sopian Sobur",
      position: "Kepala Dusun 3",
      image: "/assets/kades.png",
    },
    {
      name: "Eksa Hidayat",
      position: "Kepala Dusun 4",
      image: "/assets/kades.png",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-4 pt-24" id="struktur">
      <div className="space-y-2 mb-8">
        <h1 className="text-5xl font-bold md:text-left text-center text-red-600">
          SOTK
        </h1>
        <h2 className="text-xl md:text-left text-center">
          Struktur Organisasi dan Tata Kerja Desa Ciptasari
        </h2>
        <div className="flex justify-between items-center mt-4">
          <button onClick={scrollLeft} className="" aria-label="Scroll left">
            <ArrowLeftIcon weight="bold" size={26} />
          </button>
          <button onClick={scrollRight} className=" " aria-label="Scroll right">
            <ArrowRightIcon weight="bold" size={26} />
          </button>
        </div>
      </div>
      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide "
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitScrollbar: { display: "none" },
          }}
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-64 h-72 bg-white rounded-lg shadow-lg overflow-hidden hover:scale-[102%] transition-transform duration-300 cursor-pointer"
            >
              <div className="h-52 bg-gray-100 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.src =
                      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjgwIiByPSIzMCIgZmlsbD0iI0Q1RDlERCIvPgo8cGF0aCBkPSJNNTAgMTUwQzUwIDEyNS4xNDcgNzEuNzYgMTA1IDEwMCAxMDVTMTUwIDEyNS4xNDcgMTUwIDE1MEg1MFoiIGZpbGw9IiNENUQ5REQiLz4KPC9zdmc+";
                  }}
                />
              </div>
              <div className="h-20 bg-red-700 p-3 flex flex-col justify-center">
                <p className="text-white font-bold text-sm leading-tight">
                  {member.position}
                </p>
                <p className="text-white font-semibold text-lg">
                  {member.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Struktur;