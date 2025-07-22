import { Button, Link } from "@heroui/react";
import { ShoppingCartIcon } from "@phosphor-icons/react";

const Belanja = () => {
  const products = [
    {
      id: 1,
      name: "Roti tawar",
      price: "Rp10.000",
      image: "/api/placeholder/300/200",
      url: "https://www.tokopedia.com/contoh-toko/roti-tawar"
    },
    {
      id: 2,
      name: "Konektor masker",
      price: "Rp10.000",
      image: "/api/placeholder/300/200",
      url: "https://www.tokopedia.com/contoh-toko/konektor-masker"
    },
    {
      id: 3,
      name: "Untuk snack box",
      price: "Rp123",
      image: "/api/placeholder/300/200",
      url: "https://www.tokopedia.com/contoh-toko/snack-box"
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-4 pt-24" id="peta">
      <div className="space-y-2 mb-8">
        <h1 className="text-5xl font-bold md:text-left text-center text-red-600">
          BELI DARI DESA
        </h1>
        <h2 className="text-xl md:text-left text-center text-gray-600">
          Layanan yang disediakan promosi produk UMKM desa sehingga mampu meningkatkan perekonomian masyarakat desa
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 bg-gray-200 overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {product.name}
              </h3>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-green-600">
                  {product.price}
                </span>
                <Button as={Link}
                  href={product.url}
                  rel="noopener noreferrer"
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors duration-200"
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
