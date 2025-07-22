import { Image, ScrollShadow } from "@heroui/react";

const Sambutan = () => {
  return (
    <div
      className="flex flex-col md:flex-row items-center justify-center md:gap-20 gap-2 pt-24"
      id="sambutan"
    >
      <div className="relative">
        <div className="md:w-80 w-64 md:h-80 h-64 bg-white rounded-full p-4 shadow-lg flex items-center justify-center">
          <Image
            src="/assets/kades.png"
            alt="Kepala Desa"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>
      <div className="md:w-1/2 w-full p-4">
        <h1 className="md:text-4xl text-2xl md:text-left text-center font-bold text-red-600">
          Sambutan Kepala Desa Ciptasari
        </h1>
        <h2 className="text-3xl font-bold text-center md:text-left">Marto</h2>
        <h3 className="text-lg  text-gray-600 text-center md:text-left">
          Kepala Desa Ciptasari
        </h3>
        <ScrollShadow className="h-[200] md:w-[800px] md:h-[200px] md:mt-4 mt-8">
          <p className="text-lg font-bold">
            Assalamu Alaikum Warohmatullahi Wabarakatu.
          </p>
          <p className="text-lg ">
            Website ini hadir sebagai wujud transformasi desa Ciptasari menjadi
            desa yang mampu memanfaatkan teknologi informasi dan komunikasi
            kedalam sistem online. Keterbukaan informasi publik, pelayanan
            publik dan kegiatan di desa, guna membuka potensi desa Ciptasari
            untuk berkelanjutan.
          </p>
          <p className="text-lg">
            Terima kasih kepada semua pihak yang telah banyak memberi dukungan
            dan kontribusi baik berupa tenaga, pikiran dan semangat sehingga
            website ini dapat terealisasi.
          </p>
          <p className="text-lg font-bold">Kepala Desa Ciptasari</p>
          <p className="text-lg font-bold">Marto</p>
        </ScrollShadow>
      </div>
    </div>
  );
};

export default Sambutan;
