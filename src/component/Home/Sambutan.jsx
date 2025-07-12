import { Image, ScrollShadow } from "@heroui/react";

const Sambutan = () => {
  return (
    <div className="flex items-center justify-center gap-16">
      <div>
        <Image src="/assets/kades.png" alt="Kepala Desa" />
      </div>
      <div className="w-1/2">
        <h1 className="text-4xl font-bold text-red-600">Sambutan Kepala Desa Ciptasari</h1>
        <h2 className="text-3xl font-bold">Marto</h2>
        <h3 className="text-lg  text-gray-500">Kepala Desa Ciptasari</h3>
        <ScrollShadow className="w-[800px] h-[180px]">
          <p className="text-lg font-bold">
            Assalamu Alaikum Warohmatullahi Wabarakatu. 
          </p>
          <p className="text-lg">Website ini hadir
            sebagai wujud transformasi desa Kersik menjadi desa yang mampu
            memanfaatkan teknologi informasi dan komunikasi, terintegrasi
            kedalam sistem online. Keterbukaan informasi publik, pelayanan
            publik dan kegiatan perekonomian di desa, guna mewujudkan desa
            Kersik sebagai desa wisata yang berkelanjutan, adaptasi dan mitigasi
            terhadap perubahan iklim serta menjadi desa yang mandiri.</p>
          <p className="text-lg">
            Terima kasih kepada semua pihak yang telah banyak memberi dukungan
            dan kontribusi baik berupa tenaga, pikiran dan semangat sehingga website ini dapat terealisasi.
          </p>
          <p className="text-lg font-bold">Kepala Desa Ciptasari</p>
          <p className="text-lg font-bold">Marto</p>

        </ScrollShadow>
      </div>
    </div>
  );
};

export default Sambutan;
