import { Image } from "@heroui/react"

const Peta = () => {
return (
    <div className="max-w-7xl mx-auto p-4 pt-24" id="peta">
      <div className="space-y-2 mb-8">
        <h1 className="text-5xl font-bold md:text-left text-center text-red-600">
          Peta Desa
        </h1>
        <h2 className="text-xl md:text-left text-center">
          Menampilkan Peta Desa Ciptasari secara spesifik        </h2>
      </div>
      <div>
        <Image
        src="/assets/peta.jpg"
        alt="Peta Desa"
        className="md:h-[900px] h-[300px]"
        />
      </div>
    </div>
)
}

export default Peta