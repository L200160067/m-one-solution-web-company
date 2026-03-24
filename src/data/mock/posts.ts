import type { Post } from '@/types/api';
import { PH } from './utils';

export const mockPosts: Post[] = [
  {
    id: 1,
    title: 'Cara Memilih Software House yang Tepat untuk Bisnis Anda di Solo',
    slug: 'cara-memilih-software-house-solo',
    excerpt: 'Memilih mitra IT lokal di Solo Raya bisa menjadi tantangan. Simak 5 kriteria utama memilih software house terpercaya untuk proyek website dan aplikasi Anda.',
    content: `<p>Di era digitalisasi masa kini, memiliki mitra teknologi yang handal adalah keharusan, bukan lagi pilihan. Khususnya bagi pelaku bisnis di Kota Solo, Sukoharjo, dan sekitarnya, menemukan <strong>software house di Solo</strong> yang bisa diandalkan seringkali menjadi tantangan tersendiri.</p>

<h2>Mengapa Memilih Software House Lokal?</h2>
<p>Banyak perusahaan yang tergiur menggunakan jasa freelance lepas dari luar negeri atau kota lain karena harga miring. Namun, memilih agensi lokal seperti M-One Solution di Sukoharjo memberikan keuntungan komunikasi yang jauh lebih lancar. Anda bisa mengadakan pertemuan tatap muka (*offline meeting*) untuk membahas detail spesifikasi dan desain tanpa takut miskomunikasi.</p>

<h2>5 Kriteria Penting Saat Memilih Jasa IT</h2>
<ul>
  <li><strong>Portofolio Nyata:</strong> Jangan hanya melihat desain web mereka sendiri, tapi lihat proyek klien yang pernah mereka kerjakan. Apakah responsif? Apakah UI/UX-nya rapi?</li>
  <li><strong>Layanan After-Sales:</strong> Software house yang baik tidak hanya mengumpulkan kode dan pergi. Mereka menawarkan maintenance server, perbaikan bug, dan garansi.</li>
  <li><strong>Penguasaan Teknologi Terkini:</strong> Pastikan mereka menggunakan stack modern seperti Next.js, React, atau framework unggulan seperti Laravel. Ini menjamin sistem Anda bisa di-scale di masa depan.</li>
  <li><strong>Kejelasan Kontrak dan Biaya:</strong> Jangan tertipu harga murah di awal namun ditarik biaya tambahan di tengah jalan. Kontrak harus transparan.</li>
  <li><strong>Pemahaman Ekosistem Bisnis:</strong> Pengembang yang baik akan bertanya tentang proses bisnis Anda, bukan hanya soal teknis kode.</li>
</ul>

<h3>Kesimpulan</h3>
<p>Jika Anda mencari jasa pembuatan website profesional atau pengembangan aplikasi custom di wilayah Surakarta dan sekitarnya, pastikan Anda menyeleksi mitra yang tepat. Tim M-One Solution selalu siap diajak berdiskusi gratis untuk membedah masalah digitalisasi Anda.</p>`,
    category: { id: 1, name: 'Tips Digital', slug: 'tips-digital' },
    author: 'Tim M-One Solution',
    cover_url: PH(800, 450, 'Software+House+Solo'),
    cover_thumb: PH(400, 225, 'Software+House+Solo'),
    published_at: new Date().toISOString(),
  },
  {
    id: 2,
    title: 'Apa itu Sistem ERP dan Kapan UMKM Mulai Membutuhkannya?',
    slug: 'sistem-erp-untuk-umkm',
    excerpt: 'Sering kewalahan mengurus stok gudang, pembukuan, dan kasir secara terpisah? Inilah tanda UMKM Anda butuh Sistem ERP terintegrasi.',
    content: `<p>Mungkin Anda sering mendengar istilah <em>Enterprise Resource Planning</em> (ERP) dari perusahaan-perusahaan skala besar. Namun faktanya, saat ini <strong>sistem ERP untuk UMKM</strong> telah menjadi kunci utama bagi bisnis menengah untuk bisa  scale-up  (naik kelas).</p>

<h2>Apa Itu ERP Sebenarnya?</h2>
<p>Secara sederhana, ERP adalah software yang menggabungkan berbagai divisi dalam bisnis Anda (seperti HRD, Kasir/POS, Gudang, dan Akuntansi) menjadi satu database pusat. Bayangkan jika biasanya kasir Anda mencatat penjualan di Excel, lalu admin gudang mencatat stok di buku terpisah. ERP menghubungkan sistem tersebut, sehingga ketika kasir menginput penjualan, stok di gudang otomatis berkurang dan laporan laba/rugi di sistem akuntansi langsung terupdate <em>real-time</em>.</p>

<h2>Kapan UMKM Anda Butuh ERP?</h2>
<ul>
  <li><strong>Data yang Terpecah:</strong> Anda menghabiskan banyak waktu tiap akhir bulan hanya untuk merekap data dari berbagai aplikasi yang berbeda.</li>
  <li><strong>Kesulitan Melacak Stok:</strong> Sering terjadi kebocoran stok atau barang habis tapi sistem kasir tidak tahu.</li>
  <li><strong>Ketergantungan pada Karyawan Tertentu:</strong> Jika satu orang resign, sistem operasional lumpuh karena hanya dia yang tahu cara mengoperasikan "Excel" perusahaan.</li>
</ul>

<h3>Solusi ERP Custom</h3>
<p>Memakai ERP berlangganan memang mudah, tapi seringkali fitur bawaannya tidak cocok dengan SOP (Standar Operasional Prosedur) bisnis lokal kita. M-One Solution menyediakan <strong>jasa pembuatan sistem ERP custom</strong> yang fungsinya bisa diatur 100% mengikuti cara kerja karyawan Anda, tanpa biaya langganan bulanan yang mencekik.</p>`,
    category: { id: 2, name: 'Sistem Informasi', slug: 'sistem-informasi' },
    author: 'Tim M-One Solution',
    cover_url: PH(800, 450, 'ERP+UMKM'),
    cover_thumb: PH(400, 225, 'ERP+UMKM'),
    published_at: new Date(Date.now() - 86400000).toISOString(),
  },
  {
    id: 3,
    title: 'Pentingnya Website Sekolah dengan Sistem PPDB Online',
    slug: 'manfaat-website-sekolah-ppdb-online',
    excerpt: 'Dari meningkatkan kredibilitas hingga mempermudah panitia penerimaan siswa baru, ini alasan sekolah wajib memiliki portal digital mandiri.',
    content: `<p>Zaman sekarang, orang tua murid mencari referensi sekolah pertama kali melalui Google. Jika sekolah Anda tidak muncul atau hanya numpang di media sosial, kredibilitas instansi pendidikan tersebut bisa dipandang sebelah mata. Itulah mengapa memiliki <strong>website sekolah profesional</strong> sangat krusial.</p>

<h2>Lebih dari Sekadar Profil Sekolah</h2>
<p>Website sekolah modern bukan cuma brosur digital. Saat ini, fungsionalitasnya sudah jauh melompat ke arah automasi administrasi, salah satu yang terpenting adalah <strong>Sistem PPDB Online</strong> (Penerimaan Peserta Didik Baru). Mengapa ini penting?</p>

<h3>Manfaat Sistem PPDB Online Sendiri:</h3>
<ul>
  <li><strong>Efisiensi Panitia:</strong> Guru dan staf tidak perlu lagi menyortir ratusan map berkas kertas pendaftar. Sistem dapat memfilter usia, nilai rata-rata, dan kuota secara otomatis.</li>
  <li><strong>Aksesibilitas Wali Murid:</strong> Orang tua bisa mendaftarkan anaknya kapan saja, mengunggah dokumen dari HP, dan mengecek status kelulusan tanpa harus berdesakan datang ke sekolah.</li>
  <li><strong>Kredibilitas & Profesionalisme:</strong> Pengalaman pendaftaran yang mulus akan memberikan kesan pertama yang sangat luar biasa bagi calon wali murid terhadap mutu tata kelola sekolah.</li>
</ul>

<p>Jika sekolah Anda berencana beralih ke era digital, M-One Solution menawarkan <strong>jasa pembuatan website sekolah dan PPDB</strong> terintegrasi yang mudah digunakan oleh guru, dan dijamin aman dari serangan siber.</p>`,
    category: { id: 3, name: 'Edukasi IT', slug: 'edukasi-it' },
    author: 'Tim M-One Solution',
    cover_url: PH(800, 450, 'Website+Sekolah'),
    cover_thumb: PH(400, 225, 'Website+Sekolah'),
    published_at: new Date(Date.now() - 86400000 * 2).toISOString(),
  },
  {
    id: 4,
    title: 'Aplikasi Mobile vs Web App: Mana yang Lebih Baik untuk Starup Anda?',
    slug: 'aplikasi-mobile-vs-web-app',
    excerpt: 'Dilema membuat aplikasi pertama untuk startup? Pahami perbedaan biaya, waktu rilis, dan kemudahan akses antara Web App dan Native Mobile App.',
    content: `<p>Ketika pertama kali membangun sebuah produk digital, pertanyaan klasik yang sering ditanyakan kepada kami sebagai agensi adalah: <em>"Sebaiknya kita bikin aplikasi Android di Play Store atau cukup Website saja dulu?"</em></p>

<h2>Memahami Web App</h2>
<p>Web App (Aplikasi Web) adalah sistem yang diakses melalui browser (Chrome, Safari) tanpa perlu di-download. Sistem informasi modern kini banyak dibangun sebagai Web App yang progresif.</p>
<ul>
  <li><strong>Kelebihan:</strong> Pembuatannya jauh lebih murah dan cepat. Tidak perlu persetujuan (review) dari Apple atau Google. Langsung jalan di semua device (PC, Tablet, iPhone, Android).</li>
  <li><strong>Kekurangan:</strong> Fitur akses hardware (seperti kamera, bluetooth, atau background location) cukup terbatas dan tidak ada ikon aplikasi murni di layar utama pengguna, kecuali melalui shortcut.</li>
</ul>

<h2>Memahami Aplikasi Mobile (Native/Hybrid)</h2>
<p>Aplikasi yang kita unduh di toko aplikasi. Dibuat spesifik menggunakan framework seperti React Native atau Flutter.</p>
<ul>
  <li><strong>Kelebihan:</strong> Akses penuh ke hardware HP, bisa bekerja *offline*, dan memiliki retensi user lebih baik karena push notifikasi.</li>
  <li><strong>Kekurangan:</strong> Biaya developmen lebih mahal dan proses *maintenance* (update OS) lebih kompleks.</li>
</ul>

<h3>Jadi, Mana yang Dipilih?</h3>
<p>Jika aplikasi Anda digunakan untuk fungsi internal kasir (POS), atau sistem di mana orang duduk di depan laptop (Sistem ERP, LMS), buatlah <strong>Web App</strong>. Namun, jika produk Anda ditargetkan seperti e-commerce, ojek online, atau aplikasi habit-tracker yang digunakan tiap jam di kasur, buatlah <strong>Aplikasi Mobile Android/iOS</strong>. Jangan ragu berkonsultasi dengan tim M-One Solution untuk memutuskan arsitektur mana yang paling menguntungkan (*cost-effective*) untuk Anda.</p>`,
    category: { id: 1, name: 'Tips Digital', slug: 'tips-digital' },
    author: 'Tim M-One Solution',
    cover_url: PH(800, 450, 'Mobile+vs+Web'),
    cover_thumb: PH(400, 225, 'Mobile+vs+Web'),
    published_at: new Date(Date.now() - 86400000 * 3).toISOString(),
  },
  {
    id: 5,
    title: 'Berapa Estimasi Biaya Pembuatan Website Profesional di Tahun Ini?',
    slug: 'biaya-pembuatan-website-profesional',
    excerpt: 'Mengapa ada website seharga 500 ribu dan ada yang bernilai ratusan juta? Kupas tuntas komponen harga jasa pembuatan website.',
    content: `<p>Harga <strong>jasa pembuatan website profesional</strong> sangatlah bervariasi. Seringkali pengusaha bingung saat melihat satu agensi menawarkan harga Rp 1.000.000, sementara agensi lain meminta Rp 50.000.000 untuk nama yang sama: "Website". Mengapa rentangnya begitu jauh?</p>

<h2>3 Komponen Utama Penentu Biaya Website</h2>
<p>Biaya pembuatan web tidak dihitung berdasarkan seberapa luas halamannya saja, tetapi seberapa cerdas sistem di baliknya:</p>

<h3>1. Template vs Custom Design (UI/UX)</h3>
<p>Website seharga di bawah 2 juta biasanya menggunakan <em>template</em> instan bajakan. Anda hanya mengganti teks dan foto, namun tidak ada personalisasi merek. Sebaliknya, website profesional custom dibangun *from scratch* (dari nol). Layout dirancang oleh UI/UX desainer sehingga *flow* pengunjung (seperti tombol WhatsApp) benar-benar dioptimasi untuk mengumpulkan klik.</p>

<h3>2. Infrastruktur dan Hosting</h3>
<p>Hosting ibarat tanah tempat rumah (website) Anda berdiri. Pembelian server yang murah bisa menyebabkan website mati tiba-tiba saat diakses 50 pengunjung barengan. Software house profesional seperti M-One Solution selalu menawarkan <em>cloud server architecture</em> yang menjamin performa ngebut namun tetap stabil 99.9% uptime.</p>

<h3>3. Fitur Spesifik (API, Sistem Integrasi)</h3>
<p>Jika web hanya untuk dibaca (*Company Profile*), biayanya relatif rendah. Namun, jika Anda meminta fitur seperti kalkulator *ongkos kirim otomatis*, reservasi kamar hotel, atau *payment gateway* (transfer otomatis bank), maka logika pemrograman memakan banyak jam kerja developer ahli.</p>

<p><strong>Kesimpulan:</strong> Jangan tergiur harga di bawah standar yang mengorbankan kualitas keamanan dan kecepatan. Jadikan website sebagai "karyawan marketing 24 jam" terbaik Anda. Silakan hubungi kami untuk mendapatkan kuotasi harga transparan tanpa *hidden fee*.</p>`,
    category: { id: 1, name: 'Tips Digital', slug: 'tips-digital' },
    author: 'Tim M-One Solution',
    cover_url: PH(800, 450, 'Biaya+Website'),
    cover_thumb: PH(400, 225, 'Biaya+Website'),
    published_at: new Date(Date.now() - 86400000 * 4).toISOString(),
  },
];
