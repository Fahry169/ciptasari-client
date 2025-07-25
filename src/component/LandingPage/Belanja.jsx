import { Button, Image, Link } from "@heroui/react";
import { ShoppingCartIcon } from "@phosphor-icons/react";

const Belanja = () => {
  const products = [
    {
      id: 1,
      name: "Kotak Tisu",
      price: "Rp25.000",
      image: "/assets/tisu.jpg",
      url: "https://shopee.co.id/Kotak-Tisu-Bambu-Estetik-%E2%80%93-EcoTisu-i.1575267975.41609394590"
    },
    {
      id: 2,
      name: "Asbak dari Bambu",
      price: "Rp15.000",
      image: "/assets/asbak.jpg",
      url: ""
    },
    {
      id: 3,
      name: "Tempat Peralatan Mandi",
      price: "Rp15.000",
      image: "/assets/alat_mandi.jpg",
      url: "https://shopee.co.id/Bambath-Tempat-Peralatan-Mandi-Dari-Bambu-i.1575267975.26939003117"
    },
    {
      id: 4,
      name: "Eco-Tumbler (Tumbler Bambu)",
      price: "Rp27.000",
      image: "/assets/tumbler.jpg",
      url: "https://shopee.co.id/lumawiid?uls_trackid=539hl1tp0084&utm_content=4PLZAKSjHscfjPVWLAFPw8GeVp7y"
    },
    {
      id: 5,
      name: "Eco-Mug (Gelas Bambu)",
      price: "Rp17.000",
      image: "/assets/gelas.jpg",
      url: "https://shopee.co.id/lumawiid?uls_trackid=539hl1tp0084&utm_content=4PLZAKSjHscfjPVWLAFPw8GeVp7y"
    },
    {
      id: 6,
      name: "Aroma Bumb (Lilin Aroma Terapi)",  
      price: "Rp22.000",
      image: "/assets/lilin.jpg",
      url: "https://shopee.co.id/lumawiid?uls_trackid=539hl1tp0084&utm_content=4PLZAKSjHscfjPVWLAFPw8GeVp7y"
    },
    {
      id: 7,
      name: "Lampu Hias",
      price: "Rp30.000", 
      image: "/assets/lampu.jpg",
      url: "https://shopee.co.id/lumawiid?uls_trackid=539hl1tp0084&utm_content=4PLZAKSjHscfjPVWLAFPw8GeVp7y"
    },
    {
      id: 8,
      name: "Topi Caping",
      price: "Rp15.000", 
      image: "/assets/topi.jpg",
      url: "https://shopee.co.id/Topi-Caping-Bambu-Tradisional-Anyaman-i.1575267975.27189028752"
    },
    {
      id: 9,
      name: "Pengi dari Bambu",
      price: "Rp12.000", 
      image: "/assets/pengki.jpg",
      url: "https://shopee.co.id/Pengki-dari-Bambu-Anyaman-%E2%80%93-Alat-Angkut-Tradisional-Serbaguna-i.1575267975.44009845260"
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
          <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <div className="relative w-full h-64 bg-white">
              <Image
                src={product.image} 
                alt={product.name}
                className="hover:scale-105 transition-transform duration-300 w-full h-full object-contain p-2"
                width={400}
                height={256}
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