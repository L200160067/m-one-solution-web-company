import type { Metadata } from "next";
import {
  BookOpen,
  Users,
  LayoutDashboard,
  MonitorSmartphone,
  CheckCircle2,
  MessageCircle,
  ArrowRight,
  GraduationCap,
} from "lucide-react";
import { Breadcrumb } from "@/components/Breadcrumb";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { BlobBackground } from "@/components/ui/BlobBackground";
import Script from "next/script";

export const metadata: Metadata = {
  title:
    "Jasa Pembuatan Website Sekolah & Sistem PPDB | M-One Solution Sukoharjo Solo",
  description:
    "Jasa pembuatan website sekolah di Sukoharjo & Solo. Sistem PPDB online, domain .sch.id, dan support 1 tahun. Mulai Rp 1,5 Juta! Untuk SD, SMP, SMA/SMK. Terima beres, garansi 100%.",
  keywords: [
    "jasa pembuatan website sekolah",
    "website ppdb online",
    "aplikasi sekolah",
    "e-learning sekolah",
    "siakad sekolah",
    "pembuatan website sekolah sukoharjo",
    "jasa website sekolah solo",
  ],
  alternates: {
    canonical: `${siteConfig.baseUrl}/layanan/jasa-pembuatan-website-sekolah`,
  },
  openGraph: {
    title: "Jasa Pembuatan Website Sekolah & PPDB Online | M-One Solution",
    description:
      "Website sekolah profesional dengan sistem PPDB online, domain .sch.id, dan support 1 tahun. Mulai Rp 1,5 Juta.",
    url: `${siteConfig.baseUrl}/layanan/jasa-pembuatan-website-sekolah`,
    type: "website",
    images: ["/og-website-sekolah.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jasa Website Sekolah & PPDB Online | M-One Solution",
    description:
      "Website sekolah profesional di Sukoharjo & Solo. Mulai Rp 1,5 Juta.",
    images: ["/og-website-sekolah.png"],
  },
};

export default function WebsiteSekolahPage() {
  const waMessage = encodeURIComponent(
    "Halo M-One, saya tertarik dengan Jasa Pembuatan Website Sekolah. Bisa info lebih lanjut?",
  );
  const waLink = `https://wa.me/${siteConfig.whatsapp.number}?text=${waMessage}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Jasa Pembuatan Website Sekolah & PPDB Online",
    description:
      "Jasa pembuatan website sekolah di Sukoharjo & Solo. Sistem PPDB online, domain .sch.id, dan support 1 tahun. Mulai Rp 1,5 Juta.",
    brand: {
      "@type": "Brand",
      name: "M-One Solution",
    },
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.baseUrl,
      telephone: "+62 812-2666-2812",
      email: "monesolutionsoftwarehouse@gmail.com",
    },
    offers: [
      {
        "@type": "Offer",
        name: "Paket Basic Profil",
        price: "1500000",
        priceCurrency: "IDR",
        description:
          "Website profil sekolah dengan domain .sch.id, hosting, desain responsif, dan fitur berita.",
        availability: "https://schema.org/InStock",
        url: `${siteConfig.baseUrl}/layanan/jasa-pembuatan-website-sekolah#harga`,
      },
      {
        "@type": "Offer",
        name: "Paket Standar + PPDB",
        price: "3500000",
        priceCurrency: "IDR",
        description:
          "Website lengkap dengan sistem PPDB online, formulir pendaftaran, dashboard admin, dan ekspor data.",
        availability: "https://schema.org/InStock",
        url: `${siteConfig.baseUrl}/layanan/jasa-pembuatan-website-sekolah#harga`,
      },
      {
        "@type": "Offer",
        name: "Paket Premium SIAKAD",
        price: "7500000",
        priceCurrency: "IDR",
        description:
          "Sistem SIAKAD lengkap dengan ujian online (CBT), e-rapor, manajemen guru, jadwal, dan absensi digital.",
        availability: "https://schema.org/InStock",
        url: `${siteConfig.baseUrl}/layanan/jasa-pembuatan-website-sekolah#harga`,
      },
    ],
  };

  return (
    <main className="pt-20 min-h-screen bg-slate-50">
      <div className="bg-white border-b border-slate-100">
        <Container className="py-3">
          <Breadcrumb
            items={[
              { label: "Layanan", href: "/services" },
              { label: "Jasa Website Sekolah" },
            ]}
            className="bg-transparent! p-0! border-none! shadow-none!"
          />
        </Container>
      </div>

      <Script
        id="json-ld-website-sekolah"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <Section className="bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-emerald-900/20 mix-blend-multiply" />
        <BlobBackground
          colorClass="bg-emerald-500/20"
          positionClass="top-[-20%] right-[-10%]"
          sizeClass="w-[50%] h-[50%]"
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm font-semibold mb-6">
            🚀 Solusi Digital Pendidikan Indonesia
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight max-w-4xl mx-auto">
            Terima Beres! <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-teal-400">
              Website Sekolah & PPDB Online — Mulai Rp 1,5 Juta
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 text-center">
            Khusus sekolah di Sukoharjo & Solo. Tidak perlu pusing mikir server
            atau coding. Kami bangunkan website profil sekolah Anda lengkap
            dengan sistem pendaftaran siswa baru. Harga transparan, support
            penuh 1 tahun.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-500/30"
            >
              <MessageCircle className="w-5 h-5" />
              Pesan Sekarang via WhatsApp
            </a>
            <a
              href="#harga"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl transition-all border border-white/10 flex items-center justify-center gap-2"
            >
              Lihat Paket Harga <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </Section>

      {/* Stats/Social Proof */}
      <section className="py-8 bg-white border-b border-slate-100">
        <Container>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-75">
            <div className="text-center">
              <p className="text-2xl font-bold text-slate-800">10+</p>
              <p className="text-sm font-medium text-slate-500">
                Sekolah Percaya Kami
              </p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-slate-800">7-14</p>
              <p className="text-sm font-medium text-slate-500">
                Hari Kerja Pengerjaan
              </p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-slate-800">100%</p>
              <p className="text-sm font-medium text-slate-500">
                Gratis Maintenance 1 Thn
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <Section className="bg-slate-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Kenapa Sekolah Anda Wajib Punya Website Sendiri?
            </h2>
            <p className="text-slate-600 text-lg">
              Meningkatkan kredibilitas sekolah di mata wali murid dan
              memudahkan proses administrasi secara drastis.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Profil & Berita Otomatis",
                desc: "Tingkatkan image sekolah dengan galeri kegiatan dan pengumuman yang mudah diupdate sendiri.",
                bg: "bg-blue-50",
                color: "text-blue-600",
              },
              {
                icon: Users,
                title: "Sistem PPDB Online",
                desc: "Penerimaan siswa baru tanpa kertas. Wali murid bisa daftar dan upload berkas langsung dari HP.",
                bg: "bg-emerald-50",
                color: "text-emerald-600",
              },
              {
                icon: LayoutDashboard,
                title: "Domain Resmi .sch.id",
                desc: "Kami bantu urus perizinan domain resmi sekolah (.sch.id) agar sekolah terlihat profesional.",
                bg: "bg-indigo-50",
                color: "text-indigo-600",
              },
              {
                icon: MonitorSmartphone,
                title: "Mobile Friendly",
                desc: "Tampilan rapi dan menarik baik dibuka dari Laptop, Tablet, maupun Smartphone.",
                bg: "bg-purple-50",
                color: "text-purple-600",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="group bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:border-emerald-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${feature.bg} ${feature.color}`}
                >
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Why Choose Us Section */}
      <Section className="bg-white border-y border-slate-100">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Kenapa Memilih M-One Solution?
            </h2>
            <p className="text-slate-600 text-lg">
              Kami memahami kebutuhan sekolah di era digital. Website bukan
              sekadar tampilan, tapi alat komunikasi dan administrasi yang harus
              mudah, aman, dan terjangkau.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "📍",
                title: "Tim Lokal Sukoharjo & Solo",
                desc: "Paham kebutuhan sekolah di wilayah ini dan bisa meeting langsung jika diperlukan.",
              },
              {
                icon: "⚡",
                title: "Siap Pakai 7-14 Hari",
                desc: "Proses pengerjaan cepat tanpa mengorbankan kualitas sistem.",
              },
              {
                icon: "💰",
                title: "Tanpa Biaya Bulanan",
                desc: "Bayar sekali untuk tahun pertama. Hanya perpanjang domain & hosting tahunan.",
              },
              {
                icon: "🛠️",
                title: "Training & Support",
                desc: "Diajari cara update konten sekolah dan kelola PPDB lengkap dengan panduan.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-center hover:border-emerald-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Pricing Section */}
      <Section id="harga" className="bg-slate-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Paket Harga Transparan
            </h2>
            <p className="text-slate-600 text-lg">
              Pilih paket sesuai kebutuhan dan anggaran sekolah Anda. Sekali
              bayar untuk tahun pertama, perpanjangan sangat terjangkau.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
            {/* Paket Basic */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl border border-slate-100 hover:border-blue-200 transition-all duration-300 flex flex-col hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform" />
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                    <span className="text-xl">📄</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Basic Profil
                  </h3>
                </div>
                <p className="text-slate-500 text-sm">
                  Cocok untuk sekolah yang baru ingin tampil online.
                </p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-slate-900">
                  Rp 1.5 JT
                </span>
                <p className="text-slate-500 text-xs mt-1">
                  Pembayaran tahun pertama
                </p>
              </div>
              <div className="mb-8 flex-1">
                <ul className="space-y-3 text-slate-600 text-sm">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />{" "}
                    Free Domain .sch.id & Hosting 1 Thn
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />{" "}
                    Desain Responsif & Modern
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />{" "}
                    Profil, Visi Misi, Fasilitas
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />{" "}
                    Berita / Blog / Pengumuman
                  </li>
                  <li className="flex items-start gap-3 text-slate-400">
                    <CheckCircle2 className="w-5 h-5 shrink-0" /> (Tanpa Sistem
                    PPDB)
                  </li>
                </ul>
              </div>
              <a
                href={`${waLink}&text=Halo+saya+ingin+pesan+Paket+Basic+Profil+Sekolah`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center py-4 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-semibold transition-all duration-300"
              >
                Pesan Paket Basic
              </a>
            </div>

            {/* Paket Standar (Best Seller) */}
            <div className="group relative bg-linear-to-br from-emerald-500 to-teal-600 rounded-3xl p-8 border-2 border-emerald-300 md:-translate-y-4 shadow-xl shadow-emerald-900/30 flex flex-col overflow-visible">
              <div className="absolute top-0 right-8 z-10 -translate-y-1/2 bg-white text-emerald-600 font-bold px-4 py-1 rounded-full text-sm shadow-lg">
                ⭐ PALING LARIS
              </div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-bl-full z-0" />
              <div className="relative mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-10 h-10 bg-white/20 text-white rounded-xl flex items-center justify-center">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Standar + PPDB
                  </h3>
                </div>
                <p className="text-emerald-100 text-sm">
                  Solusi lengkap untuk penerimaan siswa baru digital.
                </p>
              </div>
              <div className="relative mb-6">
                <span className="text-4xl font-extrabold text-white">
                  Rp 3.5 JT
                </span>
                <p className="text-emerald-100 text-xs mt-1">
                  Pembayaran tahun pertama
                </p>
              </div>
              <div className="relative mb-8 flex-1">
                <ul className="space-y-3 text-white text-sm">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-200 shrink-0" />{" "}
                    Semua Fitur Paket Basic
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-200 shrink-0" />{" "}
                    <b>Sistem PPDB Online Lengkap</b>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-200 shrink-0" />{" "}
                    Formulir Pendaftaran & Upload Berkas
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-200 shrink-0" />{" "}
                    Dashboard Admin & Verifikasi
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-200 shrink-0" />{" "}
                    Ekspor Data Siswa ke Excel
                  </li>
                </ul>
              </div>
              <a
                href={`${waLink}&text=Halo+saya+ingin+pesan+Paket+Standar+PPDB+Sekolah`}
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full block text-center py-4 rounded-xl bg-white text-emerald-600 hover:bg-emerald-50 font-bold transition-all duration-300 shadow-lg"
              >
                Pesan Paket Standar
              </a>
            </div>

            {/* Paket Premium */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl border border-slate-100 hover:border-purple-200 transition-all duration-300 flex flex-col hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform" />
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center">
                    <span className="text-xl">🏫</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Premium SIAKAD
                  </h3>
                </div>
                <p className="text-slate-500 text-sm">
                  Untuk sekolah yang butuh sistem ujian online & absensi.
                </p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-slate-900">
                  Rp 7.5 JT
                </span>
                <p className="text-slate-500 text-xs mt-1">
                  Pembayaran tahun pertama
                </p>
              </div>
              <div className="mb-8 flex-1">
                <ul className="space-y-3 text-slate-600 text-sm">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0" />{" "}
                    Semua Fitur Paket Standar
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0" />{" "}
                    Manajemen Guru & Jadwal
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0" />{" "}
                    Ujian Online (CBT) Terintegrasi
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0" />{" "}
                    Sistem E-Rapor & Nilai
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0" />{" "}
                    Integrasi Absensi Digital
                  </li>
                </ul>
              </div>
              <a
                href={`${waLink}&text=Halo+saya+ingin+pesan+Paket+Premium+SIAKAD+Sekolah`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center py-4 rounded-xl bg-slate-900 hover:bg-purple-600 text-white font-semibold transition-all duration-300"
              >
                Pesan Paket Premium
              </a>
            </div>
          </div>

          <div className="mt-12 text-center text-slate-500 text-sm">
            *Perpanjangan tahun berikutnya mulai dari Rp 1.000.000,- per tahun
            (termasuk server, domain, dan maintenance dasar).
          </div>
        </Container>
      </Section>

      {/* Testimonials Section */}
      <Section className="bg-emerald-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Apa Kata Sekolah yang Sudah Bertransformasi?
            </h2>
            <p className="text-slate-600 text-lg">
              Bergabung bersama sekolah-sekolah yang kini memiliki kanal
              informasi resmi dan administrasi digital yang lebih rapi.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Pak Sutrisno",
                role: "Kepala Sekolah SD Islam",
                quote:
                  "Website sekolah kami kini menjadi rujukan wali murid. Pengumuman dan PPDB jadi lebih terorganisir tanpa antre panjang.",
              },
              {
                name: "Bu Yuni",
                role: "Operator SMP Negeri",
                quote:
                  "Sistem PPDB online dari M-One sangat membantu. Wali murid bisa daftar dari rumah, kami tinggal verifikasi datanya.",
              },
              {
                name: "Pak Bambang",
                role: "Admin SMA Swasta",
                quote:
                  "Tampilan website profesional dan mudah diupdate. Support timnya cepat dan sabar mengajari cara mengelola konten.",
              },
            ].map((testi, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100"
              >
                <p className="text-slate-600 leading-relaxed mb-6 italic">
                  &ldquo;{testi.quote}&rdquo;
                </p>
                <div>
                  <h4 className="font-bold text-slate-900">{testi.name}</h4>
                  <p className="text-sm text-emerald-600">{testi.role}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              FAQ: Pertanyaan yang Sering Diajukan
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                Q: "Apakah dibantu kalau tidak bisa pakai aplikasinya?",
                A: "Tentu! Kami berikan buku panduan dan sesi online training secara gratis untuk admin/guru yang ditunjuk sekolah. Kami sangat responsif membalas WhatsApp jika ada kendala.",
              },
              {
                Q: "Berapa lama proses pembuatannya?",
                A: "Untuk Paket Basic dan Standar (PPDB), website siap digunakan dalam 7-14 hari kerja setelah materi dan dokumen persyaratan domain diserahkan.",
              },
              {
                Q: "Apakah harga perpanjangannya akan naik drastis?",
                A: "Tidak. Harga perpanjangan di M-One Solution transparan sejak awal. Anda hanya membayar biaya server, domain, dan maintenance dasar untuk tahun-tahun berikutnya.",
              },
              {
                Q: "Apakah kami bisa request fitur tambahan?",
                A: "Bisa. Jika fitur yang Anda butuhkan di luar paket, kami bisa diskusikan estimasi tambahan biayanya secara transparan.",
              },
              {
                Q: "Apakah domain .sch.id sudah termasuk?",
                A: "Ya, kami bantu proses domain resmi .sch.id sesuai persyaratan Kemendikbud. Prosesnya kami bantu step-by-step.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100"
              >
                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  {faq.Q}
                </h4>
                <p className="text-slate-600 leading-relaxed">{faq.A}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Final CTA Section */}
      <Section className="bg-slate-900 text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Siap Miliki Website Sekolah Profesional?
            </h2>
            <p className="text-slate-400 text-lg mb-10">
              Jangan biarkan informasi sekolah tertinggal di era digital.
              Konsultasikan kebutuhan sekolah Anda secara GRATIS.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-500/30"
              >
                <MessageCircle className="w-5 h-5" />
                Konsultasi Gratis via WhatsApp
              </a>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
              <Link
                href="/pricing"
                className="hover:text-white transition-colors flex items-center gap-2"
              >
                <ArrowRight className="w-4 h-4" /> Lihat Daftar Harga UMKM
              </Link>
              <Link
                href="/portfolio"
                className="hover:text-white transition-colors flex items-center gap-2"
              >
                <ArrowRight className="w-4 h-4" /> Portofolio Proyek Kami
              </Link>
              <Link
                href="/contact"
                className="hover:text-white transition-colors flex items-center gap-2"
              >
                <ArrowRight className="w-4 h-4" /> Hubungi Tim Kami
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
