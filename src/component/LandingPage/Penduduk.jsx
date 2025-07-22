import React from "react";
import { SlPeople } from "react-icons/sl";
import { FaUsers, FaUserFriends, FaMale, FaFemale } from "react-icons/fa";
import { MdSwapHoriz, MdHome, MdGroup } from "react-icons/md";

const Penduduk = () => {
  const statistikData = [
    {
      label: "Penduduk",
      value: "3424",
      icon: <SlPeople className="text-5xl" />,
    },
    // {
    //   label: "Kepala Keluarga",
    //   value: "1006",
    //   bgColor: "bg-red-500",
    //   icon: <FaUsers className="text-5xl" />,
    // },
    // {
    //   label: "Penduduk Sementara",
    //   value: "-",
    //   bgColor: "bg-red-500",
    //   icon: <FaUserFriends className="text-5xl" />,
    // },
    {
      label: "Laki-Laki",
      value: "1673",
      icon: <FaMale className="text-5xl" />,
    },
    {
      label: "Perempuan",
      value: "1751",
      icon: <FaFemale className="text-5xl" />,
    },
    // {
    //   label: "Mutasi Penduduk",
    //   value: "-",
    //   bgColor: "bg-red-500",
    //   icon: <MdSwapHoriz className="text-5xl" />,
    // },
  ];

  const detailData = [
    {
      label: "Jumlah total penduduk",
      value: "3424",
      icon: <SlPeople className="text-xl" />,
    },
    {
      label: "Jumlah Penduduk laki-laki",
      value: "1608",
      icon: <FaMale className="text-xl" />,
    },
    {
      label: "Jumlah Penduduk perempuan",
      value: "1751",
      icon: <FaFemale className="text-xl" />,
    },
    {
      label: "Jumlah total KK",
      value: "1005",
      icon: <FaUsers className="text-xl" />,
    },
    {
      label: "Jumlah total KK perempuan",
      value: "135",
      icon: <FaFemale className="text-xl" />,
    },
    {
      label: "Jumlah rumah yang di huni",
      value: "1052",
      icon: <MdHome className="text-xl" />,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-4 pt-24" id="penduduk">
      <div className="space-y-2 mb-12">
        <h1 className="text-5xl font-bold md:text-left text-center text-red-600">
          Statistik Penduduk
        </h1>
        <p className="text-xl md:text-left text-center">
          Menyajikan Data dan Informasi Penduduk Desa Ciptasari
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {statistikData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div
              className={`bg-gradient-to-r from-red-500 to-red-700 text-white p-6 flex items-center justify-between`}
            >
              <div>
                <div className="text-4xl font-bold mb-2">{item.value}</div>
                <div className="text-lg font-medium">{item.label}</div>
              </div>
              <div className="opacity-80">{item.icon}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-lg flex items-center justify-between">
          <div>
            <div className="text-3xl font-bold">3.424</div>
            <div className="text-lg">Total Penduduk</div>
          </div>
          <SlPeople className="text-4xl opacity-80" />
        </div>
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-lg flex items-center justify-between">
          <div>
            <div className="text-3xl font-bold">1.005</div>
            <div className="text-lg">Total Kepala Keluarga</div>
          </div>
          <FaUsers className="text-4xl opacity-80" />
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-lg flex items-center justify-between">
          <div>
            <div className="text-3xl font-bold">1.052</div>
            <div className="text-lg">Rumah yang Dihuni</div>
          </div>
          <MdHome className="text-4xl opacity-80" />
        </div>
      </div>

      {/* Gender Distribution */}
      <div className="mt-8 bg-zinc-100 rounded-lg shadow-lg p-6">
        <h3 className="text-2xl font-bold mb-6 text-center">
          Distribusi Penduduk Berdasarkan Jenis Kelamin
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center">
            <div className="bg-blue-500 text-white rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-4">
              <div>
                <FaMale className="text-3xl mb-2 mx-auto" />
                <div className="text-xl font-bold">1.608</div>
              </div>
            </div>
            <div className="text-lg font-semibold">47% Laki-laki</div>
          </div>
          <div className="text-center">
            <div className="bg-pink-500 text-white rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-4">
              <div>
                <FaFemale className="text-3xl mb-2 mx-auto" />
                <div className="text-xl font-bold">1.751</div>
              </div>
            </div>
            <div className="text-lg font-semibold">53% Perempuan</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Penduduk;
