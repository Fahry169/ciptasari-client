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

const newsData = [
  {
    id: 1,
    title: "Minggon Rutinan Desa Ciptasari",
    excerpt:
      "Pemerintah Desa Ciptasari melaksanakan Minggon rutin setiap hari Rabu sebagai forum diskusi dan pemaparan kegiatan pembangunan desa.",
    content: `Desa Ciptasari, 25 Juni 2025 – Pemerintah Desa Ciptasari secara rutin melaksanakan Minggon Desa setiap minggunya pada hari Rabu. Kegiatan Minggon merupakan rangkaian acara yang berisi pemaparan kegiatan dan diskusi keberlanjutan desa.

Kegiatan Minggon dipimpin oleh Kepala Desa Ciptasari dan dihadiri oleh seluruh perangkat desa, perangkat dusun, perwakilan PKK dan Pos KB, serta perwakilan dari sektor pertanian.

Kegiatan diawali dengan pembukaan dari Kepala Desa, lalu dilanjut dengan arahan dari sektor pertanian. Mengingat salah satu potensi Desa Ciptasari adalah sektor pertanian, arahan berfokus pada permasalahan basrek unggas yang mengganggu lahan pertanian. Dalam arahannya, Bapak Marto selaku kepala desa mengatakan bahwa, "Pencegahan harus dilakukan dari awal, jangan sampai dampaknya meluas baru diatasi" ujarnya.

Pengarahan selanjutnya dari Ibu Dedeh selaku perwakilan PKK dan Pos KB. Permasalahan yang disoroti adalah himbauan untuk menciptakan desa ramah anak P2TP2A di tingkat desa, pencegahan kekerasan rumah tangga dan kekerasan seksual terhadap anak, serta target untuk segera membentuk ketua posyandu.

Melalui kegiatan minggon ini, diharapkan seluruh perangkat desa, perangkat dusun, dan seluruh warga Desa Ciptasari dapat bersinergi untuk menyelesaikan permasalahan yang dihadapi guna keberlangsungan kondisi desa yang lebih baik dan saling bersinergi bersama.`,
    image: "/assets/minggon.jpg",
    author: "AN",
    date: "25 Juni 2025",
    slug: "minggon-rutinan-desa-ciptasari",
    readTime: "3 min read",
    category: "Pemerintahan",
    views: 120,
  },
  {
    id: 2,
    title: "Menjaga Kelestarian Adat: Desa Ciptasari Kembali Gelar Hajat Bumi",
    excerpt:
      "Desa Ciptasari kembali menggelar Hajat Bumi sebagai bentuk pelestarian adat istiadat dan rasa syukur atas panen.",
    content: `Desa Ciptasari, 22 Juli 2025 – Adat istiadat merupakan kebiasaan turun-menurun yang sebaiknya dilestarikan oleh seluruh masyarakat. Desa Ciptasari merupakan salah satu desa yang terus menjaga adat istiadat yang ada di Desa tersebut.

Salah satu adat istiadat yang terus dilaksanakan adalah Hajat Bumi. Kegiatan ini merupakan wujud rasa syukur warga desa terhadap melimpahnya sumber daya alam dan hasil panen yang didapat. Kegiatan dilaksanakan melalui koordinasi antar seluruh perangkat dan warga agar dapat tercipta kolaborasi yang saling bekersinambungan.

Hajat Bumi pada tahun ini bertajuk: Kirab Budaya Hajat Bumi Desa Ciptasari, dilaksanakan di Kantor Desa Ciptasari. Kegiatan diawali dengan pembukaan dan sambutan-sambutan. Kemudian setiap dusun menampilkan dondang atau hasil bumi yang telah dihias sedemikian rupa untuk diperlombakan dan dinilai oleh dewan juri. Setiap dusun memiliki tema masing-masing untuk menjadi ciri khasnya.

Setelah penilaian, warga akan melakukan pawai berkeliling desa untuk memamerkan hasil karya dondangnya. Kemudian pada malam hari, kegiatan Hajat Bumi akan ditutup dengan penampilan wayang golek yang dapat disaksikan oleh seluruh warga Desa Ciptasari dan masyarakat sekitar.

Melalui kegiatan Hajat Bumi, warga Desa Ciptasari diharapkan dapat senantiasa meneruskan adat istiadat leluhurnya serta terus bersyukur akan kelimpahan berkah yang diberikan oleh Allah SWT.`,
    image: "/assets/hajat.jpg",
    author: "AN",
    date: "22 Juli 2025",
    slug: "hajat-bumi-desa-ciptasari",
    readTime: "3 min read",
    category: "Budaya",
    views: 97,
  },
  {
    id: 3,
    title:
      "Kolaborasi KKN Unsika, Sosialisasi Stunting dan Cek Kesehatan Gratis",
    excerpt:
      "Mahasiswa KKN Unsika bersama Posyandu Desa Ciptasari gelar sosialisasi stunting dan cek kesehatan gratis untuk warga.",
    content: `Desa Ciptasari, 05 Juli 2025 – Kedatangan mahasiswa KKN dari Universitas Singaperbangsa Karawang menambah sinergi baru bagi Desa Ciptasari. Berakar pada permasalahan desa akan tingginya akan stunting, mahasiswa KKN dar Unsika merancang program kerja sosialisasi stunting untuk ibu hamil dan balita.

Kegiatan sosialisasi berisi pemaparan mengenai pentingnya peran ibu dalam menjaga kondisi anak-anaknya serta kiat-kiat untuk mengetahui dan menghindari gejala stunting. Pemaparan materi dilakukan oleh Bidan Pury Lestari, S.Keb., selaku perwakilan bidan dari posyandu Desa Ciptasari.

Pada hari yang sama, terdapat kegiatan Cek Kesehatan Gratis (CKG) yang dapat diikuti oleh seluruh warga Desa Ciptasari. Mahasiswa KKN Unsika dan pihak posyandu saling bahu-membahu melayani warga desa untuk melakukan tes kesehatan.

Serangkaian tes yang dilakukan seperti berat dan tinggi badan, cek tensi, cek gula darah, cek mata, serta cek kesehatan mental. Melalui kegiatan ini diharapkan warga desa dapat mengetahui kondisi kesehatannya, sehingga dapat dilakukan mitigasi jika terdapat gejala penyakit yang menkhawatirkan.`,
    image: "/assets/stunting.jpg",
    author: "AN",
    date: "05 Juli 2025",
    slug: "kolaborasi-kkn-unsika-sosialisasi-stunting",
    readTime: "3 min read",
    category: "Kesehatan",
    views: 312,
  },
  {
    id: 4,
    title: "Ciptasari Cup 2025: Turnamen Voli Antar RT",
    excerpt:
      "Mahasiswa KKN Unsika menyelenggarakan turnamen voli antar RT di Desa Ciptasari dengan antusiasme tinggi dari warga.",
    content: `Desa Ciptasari, 18-19 Juli 2025 – Mahasiswa KKN Unsika baru-baru ini menyelenggarakan turnamen voli bagi warga di Desa Ciptasari. Kegiatan ini merupakan salah satu program kerja yang dilatarbelakangi oleh tingginya minat olahraga voli di Desa Ciptasari.

Pertandingan terdiri atas dua kategori, yakni tim putra dan tim putri. Terdapat 10 RT yang berpartisipasi mengirimkan tim putranya dan terdapat 4 tim putri yang turut mengikuti tunamen.

Pada tim putri, sistem yang berlaku adalah sistem klasemen grup. Tim Gutik Putri berhasil meraih kemenangan sebagai juara pertama dengan 6 point, disusul oleh Tim Y4MS yang menjadi juara kedua dengan perolehan 4 point.

Pada tim putra, persaingan sangat sengit. Sistem yang diberlakukan adalah sistem gugur. Pertandingan final mempertemukan RT 09 dan RT 10 dengan pertarungan yang sangat sengit. Setiap tim memberikan perlawanan terbaiknya. Partai final dimenangkan oleh RT 10 dengan 3-1.

Kegiatan pertandingan ini diharapkan dapat memupuk rasa persatuan dan kesatuan di antara warga Desa Ciptasari. Melalui sportivitas yang tinggi, mahasiswa KKN berhadap seluruh warga mampu bersaing dengan baik pada pertandingan-pertandingan selanjutnya.`,
    image: "/assets/voli.jpg",
    author: "AN",
    date: "19 Juli 2025",
    slug: "ciptasari-cup-2025-turnamen-voli",
    readTime: "2 min read",
    category: "Olahraga",
    views: 156,
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
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-4 pt-20">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link href="/" className="flex items-center hover:text-gray-900">
            <FaHome className="w-4 h-4" />
          </Link>
          <span>/</span>
          <Link href="/berita" className="hover:text-gray-900">
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
                    <span>Ditulis oleh</span>
                    <FaUser className="w-4 h-4" />
                    <span className="font-medium">{berita.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FaEye className="w-4 h-4" />
                    <span>Dilihat {berita.views} kali</span>
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
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Berita Terbaru
              </h2>

              <div className="space-y-4">
                {otherNews.map((article, index) => (
                  <Link key={article.id} href={`/berita/${article.slug}`}>
                    <div className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-semibold text-gray-900 mb-1 line-clamp-2 hover:text-red-600 transition-colors">
                          {article.title}
                        </h3>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <FaCalendarAlt className="w-3 h-3" />
                          <span>{article.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                          <FaEye className="w-3 h-3" />
                          <span>Dilihat {article.views} kali</span>
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
