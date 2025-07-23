// app/berita/[slug]/page.jsx
import { notFound } from "next/navigation";
import {
  FaUser,
  FaCalendarAlt,
  FaClock,
  FaEye,
  FaShare,
  FaArrowLeft,
  FaHome,
} from "react-icons/fa";
import Link from "next/link";
import NavbarSec from "@/component/NavbarSec";

const newsData = [
  {
    id: 1,
    title: "Sistem Bambu Lestari (Simbal): Inovasi KKN Unsika untuk Meningkatkan.......",
    excerpt:
      "Mahasiswa KKN Unsika menggelar kegiatan Fun Learning terakhir mereka di SDN 2 Ciptasari, dengan pendekatan visual berbasis gambar dan suara.",
    content: ``,
    image: "/assets/simbal.jpg",
    author: "Administrator",
    date: "23 Juli 2025",
    slug: "sistem-bambu-lestari-kkn-unsika",
  },
  {
    id: 2,
    title:
      "Mendorong Pemberdayaan Ekonomi Desa melalui Digitalisasi UMKM: Kolaborasi antara LUMAWI BUMDes Dengan Mahasiswa KKN UNSIKA",
    excerpt:
      "Pemberdayaan ekonomi masyarakat desa semakin menguat melalui sinergi antara BUMDes Ciptasari dan mahasiswa Kuliah Kerja Nyata (KKN) Universitas Singaperbangsa Karawang (UNSIKA). Melalui unit usaha LUMAWI (Lumbung Awi), BUMDes Ciptasari mendorong digitalisasi UMKM sebagai strategi untuk meningkatkan pemasaran, produktivitas, dan keberlanjutan usaha lokal.",
    content: `Desa Ciptasari, 22 Juli 2025 – Pemberdayaan ekonomi masyarakat desa semakin menguat melalui sinergi antara BUMDes Ciptasari dan mahasiswa Kuliah Kerja Nyata (KKN) Universitas Singaperbangsa Karawang (UNSIKA). Melalui unit usaha LUMAWI (Lumbung Awi), BUMDes Ciptasari mendorong digitalisasi UMKM sebagai strategi untuk meningkatkan pemasaran, produktivitas, dan keberlanjutan usaha lokal.

Mahasiswa KKN UNSIKA berperan aktif dalam mendampingi proses digitalisasi, mulai dari pelatihan penggunaan media sosial dan marketplace, hingga pembuatan konten promosi yang menarik untuk produk-produk kerajinan bambu khas Desa Ciptasari. Kolaborasi ini menjadi contoh nyata integrasi antara ilmu akademik dan praktik pemberdayaan masyarakat.

Produk LUMAWI yang berbasis bambu tidak hanya mencerminkan nilai estetika dan fungsionalitas, tetapi juga mengusung prinsip keberlanjutan dan pelestarian budaya lokal. Dalam rangkaian kegiatan desa, LUMAWI bersama mahasiswa KKN turut memamerkan produk unggulan mereka serta memperkenalkan sistem pemasaran berbasis digital kepada warga dan pengunjung.

Digitalisasi UMKM melalui kolaborasi ini diharapkan mampu menjangkau pasar yang lebih luas, baik di tingkat regional maupun nasional. Dengan dukungan generasi muda, khususnya mahasiswa, masyarakat Desa Ciptasari memiliki peluang besar untuk mengembangkan usaha secara mandiri dan berkelanjutan.

Melalui kolaborasi antara LUMAWI BUMDes dan mahasiswa KKN UNSIKA, semangat gotong royong, inovasi, dan pelestarian budaya bersatu dalam langkah nyata membangun ekonomi desa berbasis potensi lokal dan teknologi digital.`,
    image: "/assets/kades.png",
    author: "AD",
    date: "23 Juli 2025",
    slug: "lumawi-umkm-desa-ciptasari",
  },
  {
    id: 3,
    title: "Menjaga Kelestarian Adat: Desa Ciptasari Kembali Gelar Hajat Bumi",
    excerpt:
      "Desa Ciptasari kembali menggelar Hajat Bumi sebagai bentuk pelestarian adat istiadat dan rasa syukur atas panen.",
    content: `Desa Ciptasari, 22 Juli 2025 – Adat istiadat merupakan kebiasan turun-menurun yang sebaiknya dilestarikan oleh seluruh masyarakat. Desa Ciptasari merupakan salah satu desa yang terus menjaga adat istiadat yang ada di Desa tersebut.

Salah satu adat istiadat yang terus dilaksanakan adalah Hajat Bumi. Kegiatan ini merupakan wujud rasa syukur warga desa terhadap melimpahnya sumber daya alam dan hasil panen yang didapat. Kegiatan dilaksanakan melalui koordinasi antar seluruh perangkat dan warga agar dapat tercipta kolaborasi yang saling bekersinambungan.

Hajat Bumi pada tahun ini bertajuk: Kirab Budaya Hajat Bumi Desa Ciptasari, dilaksanakan di Kantor Desa Ciptasari. Kegiatan diawali dengan pembukaan dan sambutan-sambutan. Kemudian setiap dusun menampilkan dondang atau hasil bumi yang telah dihias sedemikian rupa untuk diperlombakan dan dinilai oleh dewan juri. Setiap dusun memiliki tema masing-masing untuk menjadi ciri khasnya.

Setelah penilaian, warga akan melakukan pawai berkeliling desa untuk memamerkan hasil karya dondangnya. Kemudian pada malam hari, kegiatan Hajat Bumi akan ditutup dengan penampilan wayang golek yang dapat disaksikan oleh seluruh warga Desa Ciptasari dan masyarakat sekitar.

Melalui kegiatan Hajat Bumi, warga Desa Ciptasari diharapkan dapat senantiasa meneruskan adat istiadat leluhurnya serta terus bersyukur akan kelimpahan berkah yang diberikan oleh Allah SWT.
`,
    image: "/assets/hajat.jpg",
    author: "AN",
    date: "22 Juli 2025",
    slug: "hajat-bumi-desa-ciptasari",
  },
  {
    id: 4,
    title:
      "KKN Unsika Permudah Akses Warga Desa Ciptasari lewat 7 Plang Jalan Strategis di Empat Dusun",
    excerpt:
      "Mahasiswa KKN Unsika memfasilitasi pembuatan dan pemasangan plang nama jalan strategis untuk mempermudah aksesibilitas warga Desa Ciptasari.",
    content: `Desa Ciptasari, 22 Juli 2025 — Mahasiswa Kuliah Kerja Nyata (KKN) Universitas Singaperbangsa Karawang (Unsika) terus menunjukkan kontribusinya dalam pembangunan desa melalui berbagai program nyata. Salah satu program kerja yang berhasil diwujudkan adalah pembuatan dan pemasangan plang jalan strategis di Desa Ciptasari, Kecamatan Pangkalan, Kabupaten Karawang.

Sebanyak 7 plang petunjuk jalan berhasil dipasang di 7 titik lokasi yang tersebar di empat dusun. Program ini bertujuan untuk mempermudah navigasi, meningkatkan keteraturan wilayah, serta memperkuat identitas dan citra desa. Keberadaan plang ini diharapkan dapat membantu warga lokal, pendatang, serta tamu desa dalam mengenali titik-titik penting dan arah jalan dengan lebih mudah. Adapun rincian lokasi pemasangan plang adalah sebagai berikut: Dusun 1 sebanyak 2 plang, Dusun 2 sebanyak 2 plang, Dusun 3 sebanyak 1 plang, dan Dusun 4 sebanyak 2 plang.

Plang-plang ini dipasang di lokasi-lokasi strategis seperti pertigaan jalan, perbatasan dusun, serta akses menuju fasilitas umum desa. Setiap plang dirancang dengan desain yang informatif dan mudah dibaca, mencantumkan nama dusun dan arah tujuan, serta menggunakan bahan yang kokoh agar tahan terhadap cuaca.

Koordinator program kerja dari tim KKN Unsika menyampaikan bahwa inisiatif ini muncul dari hasil observasi langsung di lapangan, di mana masih banyak warga dan pengunjung desa yang kebingungan mencari arah karena minimnya petunjuk jalan. Cesa selaku penanggung jawab program kerja plang jalan mengatakan, "Kami ingin memberikan sesuatu yang bermanfaat jangka panjang bagi Desa Ciptasari. Plang ini sederhana, tapi dampaknya besar untuk memudahkan mobilitas dan memperjelas identitas wilayah desa."

Kepala Desa Ciptasari turut mengapresiasi langkah ini dan berharap program seperti ini dapat dilanjutkan di titik-titik lainnya di masa mendatang. Beliau menambahkan bahwa plang petunjuk jalan juga mendukung pengembangan infrastruktur desa yang lebih tertata dan ramah bagi semua kalangan.

Melalui program ini, mahasiswa KKN Unsika tak hanya membantu secara fisik dalam pembangunan desa, tetapi juga membawa semangat perbaikan dan keteraturan dalam kehidupan sehari-hari warga. Program plang jalan ini menjadi salah satu bukti nyata bahwa pengabdian mahasiswa dapat memberikan dampak langsung dan berkelanjutan bagi masyarakat.`,
    image: "/assets/plang_jalan.PNG",
    author: "BC",
    date: "20 Juli 2025",
    slug: "plang-jalan-desa-ciptasari",
  },
  {
    id: 5,
    title:
      "Mahasiswa KKN Unsika Gelar Ciptasari Cup 2025 dengan Pertandingan Voli Antar RT di Desa Ciptasari",
    excerpt:
      "Mahasiswa KKN Unsika menyelenggarakan turnamen voli antar RT di Desa Ciptasari dengan antusiasme tinggi dari warga.",
    content: `Desa Ciptasari, 18-19 Juli 2025 – Mahasiswa KKN Unsika baru-baru ini menyelenggarakan turnamen voli bagi warga di Desa Ciptasari. Kegiatan ini merupakan salah satu program kerja yang dilatarbelakangi oleh tingginya minat olahraga voli di Desa Ciptasari. 

Pertandingan terdiri atas dua kategori, yakni tim putra dan tim putri. Terdapat 10 RT yang berpartisipasi mengirimkan tim putranya dan terdapat 4 tim putri yang turut mengikuti tunamen. 

Pada tim putri, sistem yang berlaku adalah sistem klasemen grup. Tim Gutik Putri berhasil meraih kemenangan sebagai juara pertama dengan 6 point, disusul oleh Tim Y4MS yang menjadi juara kedua dengan perolehan 4 point. 

Pada tim putra, persaingan sangat sengit. Sistem yang diberlakukan adalah sistem gugur. Pertandingan final mempertemukan RT 09 dan RT 10 dengan pertarungan yang sangat sengit. Setiap tim memberikan perlawanan terbaiknya. Partai final dimenangkan oleh RT 10 dengan 3-1. 

Kegiatan pertandingan ini diharapkan dapat memupuk rasa persatuan dan kesatuan di antara warga Desa Ciptasari. Melalui sportivitas yang tinggi, mahasiswa KKN berhadap seluruh warga mampu bersaing dengan baik pada pertandingan-pertandingan selanjutn`,
    image: "/assets/voli.jpg",
    author: "AN",
    date: "20 Juli 2025",
    slug: "ciptasari-cup-2025-turnamen-voli",
  },
  {
    id: 6,
    title:
      "Pemanfaatan Hutan Bambu Desa Ciptasari: KKN UNSIKA Gagas Produksi Celengan Bambu Kreatif di SDN III Ciptasari",
    excerpt:
      "Mahasiswa Kuliah Kerja Nyata (KKN) Universitas Singaperbangsa Karawang (UNSIKA) menggagas sebuah program kreatif bertajuk Bambu Menabung, sebagai bentuk pemanfaatan potensi alam lokal sekaligus sarana edukasi penting nya menabung bagi anak-anak.",
    content: `Ciptasari, 16 Juli 2025 – Mahasiswa Kuliah Kerja Nyata (KKN) Universitas Singaperbangsa Karawang (UNSIKA) menggagas sebuah program kreatif bertajuk Bambu Menabung, sebagai bentuk pemanfaatan potensi alam lokal sekaligus sarana edukasi penting nya menabung bagi anak-anak.

Kegiatan ini dilaksanakan di SDN Ciptasari 03 dengan melibatkan siswa kelas 4  sebagai peserta program. Uniknya, celengan yang digunakan berasal dari limbah bambu yang banyak sekali ditemukan di desa yang dimanfaatkan kembali oleh tim KKN. Selain mendukung pelestarian lingkungan, inisiatif ini juga mengajarkan pentingnya mengelola sampah alami menjadi produk yang bernilai guna.

Anak-anak tersebut tidak hanya menerima celengan yang sudah jadi, tetapi juga diajak untuk menghias dan melukis celengan bambu nya sendiri. Dengan cara ini, selain mereka belajar menabung, mereka juga dapat menyalurkan kreativitas, dan menumbuhkan pengetahuan mengolah limbah bambu sejak usia dini.

Pihak sekolah menyambut hangat program bambu menabung ini. Para guru menilai bahwa pendekatan yang digunakan sangat sesuai dengan usia siswa, karena menggabungkan unsur edukasi, seni, dan kepedulian lingkungan.

Ke depannya, tim KKN berharap kegiatan serupa dapat dikembangkan lebih luas ke sekolah-sekolah lain, sekaligus membuka peluang pelatihan pengolahan limbah bambu bagi warga desa Ciptasari. Dengan kolaborasi yang tepat, potensi lokal seperti bambu dapat diolah menjadi produk kreatif yang memiliki nilai ekonomi, edukatif, dan ramah lingkungan.
`,
    image: "/assets/bambu_menabung.JPG",
    author: "AI",
    date: "17 Juli 2025",
    slug: "celengan-bambu-kkn-unsika",
  },
  {
    id: 7,
    title: "Fun Learning: Belajar Seru, bersama Kelas Ceria SDN II Ciptasari",
    excerpt:
      "Pada tanggal 18 Juli 2025 Mahasiswa & Mahasiswi KKN Universitas Singaperbangsa Karawang melaksanakan kegiatan Fun Learning kedua dan terakhir mereka dalam rangka Pengabdian di Desa Ciptasari, Kecamatan Pangkalan Kabupaten Karawang. Selama satu hari di SDN 2 Ciptasari. Kegiatan ini bertujuan untuk menciptakan suasana belajar yang menyenangkan dan interaktif bagi anak-anak sekolah dasar, dengan pendekatan visual berbasis gambar dan suara.",
    content: `Pada tanggal 18 Juli 2025 Mahasiswa & Mahasiswi KKN Universitas Singaperbangsa Karawang melaksanakan kegiatan Fun Learning kedua dan terakhir mereka dalam rangka Pengabdian di Desa Ciptasari, Kecamatan Pangkalan Kabupaten Karawang. Selama satu hari di SDN 2 Ciptasari. Kegiatan ini bertujuan untuk menciptakan suasana belajar yang menyenangkan dan interaktif bagi anak-anak sekolah dasar, dengan pendekatan visual berbasis gambar dan suara.
Selama kegiatan Fun Learning berlangsung, anak-anak diajak untuk belajar melalui berbagai media visual yang menarik, seperti video edukatif, gambar interaktif, serta kuis suara yang memacu antusiasme belajar. Metode ini membantu meningkatkan pemahaman siswa terhadap materi secara lebih efektif dan menyenangkan.
Tidak hanya itu, kegiatan ini juga diawali dengan sesi senam bersama yang menggunakan iringan lagu-lagu daerah, sebagai upaya memperkenalkan budaya lokal kepada generasi muda sekaligus meningkatkan kesehatan dan semangat belajar mereka di pagi hari.
Kegiatan ini mendapat sambutan hangat dari para guru dan siswa SDN 2 Ciptasari. Diharapkan ke depannya, metode pembelajaran kreatif seperti ini dapat terus dilaksanakan secara berkelanjutan di Desa Ciptasari sebagai bagian dari upaya peningkatan kualitas pendidikan anak-anak di wilayah desa.
`,
    image: "/assets/fun_learning.JPG",
    author: "CB",
    date: "18 Juli 2025",
    slug: "fun-learning-sdn-2-ciptasari",
  },
  {
    id: 8,
    title:
      "Pojok Literasi: Program KKN Ciptasari untuk Menumbuhkan Budaya Membaca Anak Sejak Dini",
    excerpt:
      "Mahasiswa Kuliah Kerja Nyata (KKN) Universitas Singaperbangsa Karawang yang tergabung di Desa Ciptasari 2025 menghadirkan sebuah program inspiratif bertajuk “Pojok Literasi: Ruang Baca dan Edukasi Anak”. Program ini dilaksanakan di SDN Ciptasari I dan menjadi salah satu bentuk nyata kontribusi mahasiswa dalam mendukung gerakan literasi nasional, khususnya di lingkungan sekolah dasar yang berada di wilayah pedesaan.",
    content: `Ciptasari, 23 Juli 2025 — Mahasiswa Kuliah Kerja Nyata (KKN) Universitas Singaperbangsa Karawang yang tergabung di Desa Ciptasari 2025 menghadirkan sebuah program inspiratif bertajuk “Pojok Literasi: Ruang Baca dan Edukasi Anak”. Program ini dilaksanakan di SDN Ciptasari I dan menjadi salah satu bentuk nyata kontribusi mahasiswa dalam mendukung gerakan literasi nasional, khususnya di lingkungan sekolah dasar yang berada di wilayah pedesaan.

Melalui program ini, mahasiswa KKN berupaya menyediakan ruang baca yang nyaman, edukatif, dan ramah anak, dengan tujuan meningkatkan minat baca dan memperluas akses terhadap bahan bacaan berkualitas. Pojok baca didesain secara kreatif dengan pajangan origami, dan susunan buku cerita anak yang menarik perhatian. Tidak hanya mempercantik ruang kelas, pojok baca ini juga diharapkan menjadi magnet belajar yang menyenangkan bagi siswa.

“Kami ingin anak-anak di desa memiliki akses yang sama terhadap fasilitas baca seperti anak-anak di kota. Lewat pojok literasi ini, kami ingin menghadirkan dunia baru yang bisa mereka jelajahi lewat buku,” ujar Bintang Afi selaku penanggung jawab program kerja pojok baca.

Salah satu kegiatan utama dalam program ini adalah sesi sosialisasi literasi dan dongeng interaktif yang menghadirkan narasumber dari Yayasan Taman Cinta Peradaban, yaitu Bu Neneng Nurhasanah, S.Pd.I., M.Pd. Beliau memberikan edukasi ringan mengenai pentingnya membaca serta membawakan dongeng yang memikat perhatian anak-anak. Kegiatan ini berlangsung hangat, penuh tawa, dan menghidupkan semangat literasi dalam suasana yang menyenangkan.

Program Pojok Literasi dilaksanakan dalam dua tahap utama. Tahap pertama dilakukan pada 3–8 Juli 2025, yang meliputi koordinasi dengan sekolah, pembersihan ruang baca, penataan pojok baca dalam dan luar kelas, serta pengajuan donasi buku. Tahap kedua dilakukan pada 16 Juli 2025, berupa sosialisasi literasi yang ditujukan untuk siswa kelas I hingga III. Sosialisasi ini dihadiri oleh 16 siswa kelas II dan 17 siswa kelas III, sementara untuk kelas I belum sempat terlaksana karena keterbatasan waktu menjelang jam pulang sekolah.

Sebanyak 60 buku baru berhasil didonasikan dari Yayasan Taman Cinta Peradaban dan diserahkan secara simbolis kepada pihak sekolah. Buku-buku tersebut langsung digunakan siswa untuk membaca mandiri maupun bersama guru di sela-sela waktu belajar.

Program ini mencatat berbagai dampak positif yang dirasakan langsung oleh pihak sekolah dan siswa. Minat baca siswa terlihat meningkat selama kegiatan berlangsung. Pojok baca kini menjadi salah satu tempat favorit siswa di sekolah. Selain itu, guru juga semakin termotivasi untuk menjadikan kegiatan membaca sebagai bagian dari proses belajar di kelas.

Secara tidak langsung, kegiatan ini juga membangkitkan kesadaran orang tua siswa tentang pentingnya mendukung budaya membaca anak di rumah. Beberapa guru menyampaikan bahwa siswa mulai menceritakan kembali isi buku yang mereka baca saat di rumah — sebuah indikator bahwa program ini memberikan pengaruh positif yang berkelanjutan.

Pojok Literasi bukan hanya proyek sementara, tapi menjadi warisan literasi yang akan terus hidup di SDN Ciptasari I. Program ini membuktikan bahwa kolaborasi antara mahasiswa, sekolah, yayasan, dan pemerintah desa dapat menghasilkan dampak positif yang nyata. Diharapkan, kehadiran pojok baca ini menjadi awal dari gerakan literasi yang lebih luas, menciptakan generasi pembelajar yang tumbuh bersama buku dan pengetahuan.
`,
    image: "/assets/pojok_literasi.PNG",
    author: "BA",
    date: "16 Juli 2025",
    slug: "pojok-literasi-sdn-1-ciptasari",
  },
  {
    id: 9,
    title:
      "Kolaborasi dengan KKN Unsika, Posyandu Desa Ciptasari Gelar Sosialisasi Stunting dan Cek Kesehatan Gratis",
    excerpt:
      "Kedatangan mahasiswa KKN dari Universitas Singaperbangsa Karawang menambah sinergi baru bagi Desa Ciptasari. Berakar pada permasalahan desa akan tingginya akan stunting, mahasiswa KKN dar Unsika merancang program kerja sosialisasi stunting untuk ibu hamil dan balita.",
    content: `Desa Ciptasari, 05 Juli 2025 – Kedatangan mahasiswa KKN dari Universitas Singaperbangsa Karawang menambah sinergi baru bagi Desa Ciptasari. Berakar pada permasalahan desa akan tingginya akan stunting, mahasiswa KKN dar Unsika merancang program kerja sosialisasi stunting untuk ibu hamil dan balita.

Kegiatan sosialisasi berisi pemaparan mengenai pentingnya peran ibu dalam menjaga kondisi anak-anaknya serta kiat-kiat untuk mengetahui dan menghindari gejala stunting. Pemaparan materi dilakukan oleh Bidan Pury Lestari, S.Keb., selaku perwakilan bidan dari posyandu Desa Ciptasari.

Pada hari yang sama, terdapat kegiatan Cek Kesehatan Gratis (CKG) yang dapat diikuti oleh seluruh warga Desa Ciptasari. Mahasiswa KKN Unsika dan pihak posyandu saling bahu-membahu melayani warga desa untuk melakukan tes kesehatan.

Serangkaian tes yang dilakukan seperti berat dan tinggi badan, cek tensi, cek gula darah, cek mata, serta cek kesehatan mental. Melalui kegiatan ini diharapkan warga desa dapat mengetahui kondisi kesehatannya, sehingga dapat dilakukan mitigasi jika terdapat gejala penyakit yang menkhawatirk`,
    image: "/assets/stunting.jpg",
    author: "AN",
    date: "05 Juli 2025",
    slug: "kolaborasi-kkn-unsika-sosialisasi-stunting",
  },
];

export async function generateStaticParams() {
  return newsData.map((item) => ({ slug: item.slug }));
}

export default function DetailBerita({ params }) {
  const berita = newsData.find((item) => item.slug === params.slug);

  if (!berita) return notFound();

  const formatContent = (content) => {
    return content.split("\n").map((paragraph, index) => {
      if (paragraph.trim() === "") return null;
      return (
        <p key={index} className="text-base leading-relaxed text-gray-700 mb-4">
          {paragraph.trim()}
        </p>
      );
    });
  };

  const otherNews = newsData.filter((item) => item.id !== berita.id);

  return (
    <div className="min-h-screen bg-gray-100 pt-10">
      <NavbarSec />
      <div className="max-w-7xl mx-auto p-4 pt-20">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link href="/" className="flex items-center hover:text-gray-900">
            <FaHome className="w-4 h-4" />
          </Link>
          <span>/</span>
          <Link href="/#berita" className="hover:text-gray-900">
            Berita Desa Ciptasari
          </Link>
        </nav>

        {/* Main Layout - Desktop: Content + Sidebar */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <article className="bg-white rounded-lg shadow-sm">
              {/* Article Header */}
              <div className="p-6 border-b border-gray-200">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  {berita.title}
                </h1>

                {/* Meta Information */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <FaCalendarAlt className="w-4 h-4" />
                    <span>{berita.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FaUser className="w-4 h-4" />
                    <span>Ditulis oleh</span>
                    <span className="font-medium">{berita.author}</span>
                  </div>
                </div>
              </div>

              {/* Featured Image */}
              <div className="p-6">
                <img
                  src={berita.image}
                  alt={berita.title}
                  className="w-full h-64 md:h-96 object-cover rounded-lg"
                />
              </div>

              {/* Article Content */}
              <div className="p-6">
                <div className="prose prose-lg max-w-none">
                  {formatContent(berita.content)}
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar - Berita Terbaru */}
          <aside className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Berita Lainnya
              </h2>

              <div className="space-y-4">
                {otherNews.map((article, index) => (
                  <Link key={article.id} href={`/berita/${article.slug}`}>
                    <div className="flex gap-3 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                      />
                      <div className="flex flex-col justify-between flex-1 min-w-0">
                        <h3 className="text-sm font-semibold text-gray-900 mb-1 line-clamp-2 hover:text-red-600 transition-colors">
                          {article.title}
                        </h3>
                        <div className="flex items-center gap-2 text-gray-500">
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <FaCalendarAlt className="w-3 h-3" />
                            <span>{article.date}</span>
                          </div>
                          <div className="flex items-center gap-1 text-xs text-gray-500">
                            <FaUser size={13} />
                            <span className="font-medium">
                              {article.author}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
