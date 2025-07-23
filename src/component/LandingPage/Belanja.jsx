import { Button, Image, Link } from "@heroui/react";
import { ShoppingCartIcon } from "@phosphor-icons/react";

const Belanja = () => {
  const products = [
    {
      id: 1,
      name: "Kotak Tisu",
      price: "Rp25.000",
      image: "/assets/tisu.jpg",
      url: "https://www.tokopedia.com/"
    },
    {
      id: 2,
      name: "Asbak dari Bambu",
      price: "Rp15.000",
      image: "/assets/asbak.jpg",
      url: "https://www.tokopedia.com/"
    },
    {
      id: 3,
      name: "Tempat Peralatan Mandi",
      price: "Rp15.000",
      image: "/assets/alat_mandi.jpg",
      url: "https://www.tokopedia.com/"
    },
    {
      id: 4,
      name: "Eco-Tumbler (Tumbler Bambu)",
      price: "Rp27.000",
      image: "/assets/tumbler.jpg",
      url: "https://www.tokopedia.com/"
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-4 pt-24" id="belanja">
      <div className="space-y-2 mb-8">
        <h1 className="text-5xl font-bold md:text-left text-center text-red-600">
          Beli dari Desa
        </h1>
        <h2 className="text-xl md:text-left text-center text-gray-600">
          Layanan promosi produk UMKM desa sehingga mampu meningkatkan perekonomian masyarakat desa
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <div className="overflow-hidden h-96">
              <Image
                src={product.image} 
                alt={product.name}
                width={400}
                className="hover:scale-[102%] transition-transform duration-300 w-full h-full object-cover"
              />
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between">
              <h3 className="text-lg font-semibold text-gray-800 mb-2 min-h-[3.5rem] flex items-center">
                {product.name}
              </h3>
              <div className="flex justify-between items-center mt-auto">
                <span className="text-xl font-bold text-black">
                  {product.price}
                </span>
                <Button as={Link}
                  href={product.url}
                  rel="noopener noreferrer"
                  className="bg-red-600 hover:bg-red-700 text-base text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors duration-200"
                >
                  <ShoppingCartIcon size={16} />
                  Beli
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Belanja;