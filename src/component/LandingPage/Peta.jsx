const Peta = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 pt-24" id="peta">
      <div className="space-y-2 mb-8">
        <h1 className="text-5xl font-bold md:text-left text-center text-red-600">
          PETA DESA
        </h1>
        <h2 className="text-xl md:text-left text-center">
          Menampilkan Peta Desa Ciptasari berdasarkan Maps Digital
        </h2>
      </div>
      <div className="w-full h-[500px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31715.477253287347!2d107.2076103264668!3d-6.466491992647704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69a1c6f80b1f11%3A0xd4f932352cda53f7!2sCiptasari%2C%20Kec.%20Pangkalan%2C%20Karawang%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1752484782290!5m2!1sid!2sid"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Peta;
