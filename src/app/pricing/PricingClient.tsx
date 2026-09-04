"use client";

import { useState } from 'react';
import { 
  CheckCircle2, 
  MessageCircle, 
  ArrowRight, 
  Store, 
  PackageSearch, 
  TrendingUp, 
  Workflow, 
  CreditCard,
  ShieldCheck,
  Phone,
  Mail,
  Globe,
  Sparkles
} from 'lucide-react';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { BlobBackground } from '@/components/ui/BlobBackground';
import { siteConfig } from '@/config/site';

export default function PricingClient() {
  const [billingCycle, setBillingCycle] = useState<'bulanan' | 'tahunan'>('bulanan');

  const waNumber = "6281226662812";
  const displayPhone = "+62 812-2666-2812";
  const email = "monesolutionsoftwarehouse@gmail.com";
  const website = "mone.mutudev.com";

  const getWaUrl = (packageName: string, price: string) => {
    const periodText = billingCycle === 'tahunan' ? 'Tahunan' : 'Bulanan';
    const message = `Halo M-One Solution, saya tertarik pesan paket *${packageName}* (${price} - ${periodText}). Mohon info dan konsultasi lebih lanjut.`;
    return `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
  };

  const defaultWaHero = `https://wa.me/${waNumber}?text=${encodeURIComponent('Halo M-One Solution, saya tertarik dengan layanan pembuatan website UMKM. Bisa diskusi singkat?')}`;

  const packages = [
    {
      id: 'starter',
      name: 'STARTER',
      tagline: 'Untuk usaha yang butuh kartu nama digital & media promosi online.',
      monthlyOriginalPrice: 'Rp 149.000',
      monthlyPrice: 'Rp 99.000',
      monthlyPeriod: '/bln',
      monthlyDiscount: 'Hemat 34%',
      yearlyOriginalPrice: 'Rp 1.188.000',
      yearlyPrice: 'Rp 799.000',
      yearlyPeriod: '/thn',
      yearlyEquivalent: '~Rp 66.600 / bln',
      yearlyDiscount: 'Hemat 33%',
      isPopular: false,
      features: [
        '1 landing page profesional',
        'Responsive HP & desktop',
        'Domain & hosting siap pakai',
        'Sertifikat SSL / HTTPS',
        'Integrasi WhatsApp & Google Maps',
        'Profil usaha, produk/jasa & galeri',
        'Basic SEO on-page Google',
        'Maintenance dasar & bantuan teknis'
      ]
    },
    {
      id: 'business',
      name: 'BUSINESS',
      tagline: 'Sistem website komplit siap tingkatkan kredibilitas & penjualan.',
      monthlyOriginalPrice: 'Rp 199.000',
      monthlyPrice: 'Rp 149.000',
      monthlyPeriod: '/bln',
      monthlyDiscount: 'Hemat 25%',
      yearlyOriginalPrice: 'Rp 1.788.000',
      yearlyPrice: 'Rp 1.190.000',
      yearlyPeriod: '/thn',
      yearlyEquivalent: '~Rp 99.200 / bln',
      yearlyDiscount: 'Hemat 33%',
      badge: 'PALING LARIS',
      isPopular: true,
      features: [
        'Semua fitur Starter',
        'Hingga 5 halaman website',
        'Desain menyesuaikan identitas brand',
        'Katalog produk / layanan lengkap',
        'Form kontak & WhatsApp CTA interaktif',
        'Bagian testimoni pelanggan',
        'Google Analytics & Search Console',
        'Update konten ringan & backup',
        'Prioritas technical support'
      ]
    },
    {
      id: 'pro',
      name: 'PRO',
      tagline: 'Performa maksimal dengan optimasi konversi & SEO lokal mendalam.',
      monthlyOriginalPrice: 'Rp 349.000',
      monthlyPrice: 'Rp 249.000',
      monthlyPeriod: '/bln',
      monthlyDiscount: 'Hemat 29%',
      yearlyOriginalPrice: 'Rp 2.988.000',
      yearlyPrice: 'Rp 1.990.000',
      yearlyPeriod: '/thn',
      yearlyEquivalent: '~Rp 165.800 / bln',
      yearlyDiscount: 'Hemat 33%',
      isPopular: false,
      features: [
        'Semua fitur Business',
        'Hingga 10 halaman website',
        'Desain eksklusif & custom layout',
        'Optimasi SEO lokal tingkat lanjut',
        'Tracking konversi & analytics',
        'Meta Pixel & Google Tag Manager',
        'Optimasi kecepatan loading kilat',
        'Lead & form database management',
        'Priority maintenance garansi'
      ]
    }
  ];

  return (
    <main className="pt-20 min-h-screen bg-slate-50">
      {/* Top Breadcrumb */}
      <div className="bg-white border-b border-slate-100">
        <Container className="py-3">
          <Breadcrumb 
            items={[
              { label: 'Layanan', href: '/services' }, 
              { label: 'Landing Page & Website UMKM' }
            ]} 
            className="!bg-transparent !p-0 !border-none !shadow-none" 
          />
        </Container>
      </div>

      {/* Hero Section */}
      <Section className="bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-indigo-900/20 mix-blend-multiply" />
        <BlobBackground colorClass="bg-indigo-500/20" positionClass="top-[-20%] right-[-10%]" sizeClass="w-[50%] h-[50%]" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-semibold mb-6">
            🚀 Solusi Digitalisasi UMKM Indonesia
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight max-w-4xl mx-auto">
            Bawa Usaha Anda Naik Kelas! <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">
              Terima Beres Tanpa Ribet
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 text-center">
            Website profesional untuk membantu UMKM tampil lebih terpercaya, mudah ditemukan di Google, dan siap menerima pelanggan dari internet.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={defaultWaHero} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full sm:w-auto px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-500/30"
            >
              <MessageCircle className="w-5 h-5" />
              Diskusi via WhatsApp
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
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-80">
            <div className="text-center">
              <h4 className="text-2xl font-bold text-slate-800">50+</h4>
              <p className="text-sm font-medium text-slate-500">Proyek sejak 2022</p>
            </div>
            <div className="text-center">
              <h4 className="text-2xl font-bold text-slate-800">30+</h4>
              <p className="text-sm font-medium text-slate-500">Klien Terpercaya</p>
            </div>
            <div className="text-center">
              <h4 className="text-2xl font-bold text-slate-800">100%</h4>
              <p className="text-sm font-medium text-slate-500">Terima Beres & Support</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Problem & Feature Highlights Section */}
      <Section className="bg-slate-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Tingkatkan Visibilitas, Jangkau Lebih Banyak Pelanggan</h2>
            <p className="text-slate-600 text-lg mb-8">
              Kami paham tantangan terbesar UMKM adalah membangun kepercayaan konsumen dan menjangkau pasar baru. Kami siap memberikan website profesional siap pakai untuk usaha Anda.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Store,
                title: 'Website Toko Resmi',
                desc: 'Tingkatkan kepercayaan pelanggan dengan website berdomain resmi atas nama usaha Anda sendiri.',
                bg: 'bg-blue-50',
                color: 'text-blue-600'
              },
              {
                icon: PackageSearch,
                title: 'Katalog & Portofolio',
                desc: 'Pajang foto produk, daftar layanan, galeri, dan harga dengan rapi sehingga calon pembeli mudah memilih.',
                bg: 'bg-indigo-50',
                color: 'text-indigo-600'
              },
              {
                icon: TrendingUp,
                title: 'Mudah Ditemukan di Google',
                desc: 'Optimasi SEO dasar & lokal Google Maps agar konsumen sekitar langsung menemukan bisnis Anda saat mencari di internet.',
                bg: 'bg-teal-50',
                color: 'text-teal-600'
              },
              {
                icon: Workflow,
                title: 'Order Langsung ke WhatsApp',
                desc: 'Tombol Call-to-Action WhatsApp terintegrasi yang memudahkan pelanggan langsung menghubungi dan bertransaksi.',
                bg: 'bg-purple-50',
                color: 'text-purple-600'
              }
            ].map((fitur, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:border-indigo-100 hover:shadow-md transition-all">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${fitur.bg} ${fitur.color}`}>
                  <fitur.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{fitur.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{fitur.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Pricing Section (Pilih Investasi Digital Anda) */}
      <Section id="harga" className="bg-slate-900 text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pilih Investasi Digital Anda</h2>
            <p className="text-slate-400 text-lg mb-8">
              Paket layanan transparan tanpa biaya tersembunyi. Tinggal sesuaikan dengan fase perkembangan usaha Anda saat ini.
            </p>

            {/* Billing Toggle (Bulanan vs Tahunan) */}
            <div className="inline-flex items-center p-1.5 rounded-2xl bg-slate-800 border border-slate-700 shadow-xl">
              <button
                onClick={() => setBillingCycle('bulanan')}
                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 ${
                  billingCycle === 'bulanan'
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Bayar Bulanan
              </button>
              <button
                onClick={() => setBillingCycle('tahunan')}
                className={`relative px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 flex items-center gap-2 ${
                  billingCycle === 'tahunan'
                    ? 'bg-gradient-to-r from-indigo-500 to-blue-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>Bayar Tahunan</span>
                <span className="px-2 py-0.5 text-[11px] font-extrabold uppercase rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Hemat 33%
                </span>
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
            {packages.map((pkg) => {
              const currentPrice = billingCycle === 'tahunan' ? pkg.yearlyPrice : pkg.monthlyPrice;
              const currentPeriod = billingCycle === 'tahunan' ? pkg.yearlyPeriod : pkg.monthlyPeriod;

              if (pkg.isPopular) {
                return (
                  /* Highlighted Card (Business / Paling Laris) */
                  <div 
                    key={pkg.id} 
                    className="bg-gradient-to-br from-indigo-500 to-blue-600 rounded-3xl p-8 border-2 border-indigo-300 transform md:-translate-y-4 shadow-xl shadow-indigo-900/50 flex flex-col relative"
                  >
                    <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-white text-indigo-600 font-bold px-4 py-1 rounded-full text-sm shadow-md">
                      PALING LARIS
                    </div>

                    <div className="mb-4">
                      <h3 className="text-2xl font-bold mb-2 text-white">{pkg.name}</h3>
                      <p className="text-indigo-100 text-sm">{pkg.tagline}</p>
                    </div>

                    {/* Price with strikethrough & starburst badge */}
                    <div className="mb-6 pb-6 border-b border-white/20">
                      <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                        <span className="line-through text-indigo-200 text-sm font-semibold opacity-90">
                          {billingCycle === 'tahunan' ? pkg.yearlyOriginalPrice : pkg.monthlyOriginalPrice}
                        </span>

                        {/* Bintang Jebret Badge */}
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-yellow-300 text-slate-950 font-black text-xs uppercase tracking-wider shadow-sm transform -rotate-2">
                          <svg className="w-3 h-3 fill-slate-950 shrink-0" viewBox="0 0 24 24">
                            <path d="M12 0l2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5L12 0z" />
                          </svg>
                          <span>{billingCycle === 'tahunan' ? pkg.yearlyDiscount : pkg.monthlyDiscount}</span>
                          <svg className="w-3 h-3 fill-slate-950 shrink-0" viewBox="0 0 24 24">
                            <path d="M12 0l2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5L12 0z" />
                          </svg>
                        </span>
                      </div>

                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-extrabold text-white">{currentPrice}</span>
                        <span className="text-indigo-100 text-sm font-semibold">{currentPeriod}</span>
                      </div>

                      {billingCycle === 'tahunan' && (
                        <div className="text-xs text-indigo-100 mt-2 font-medium">
                          Setara <span className="font-bold text-white">{pkg.yearlyEquivalent}</span>
                        </div>
                      )}
                    </div>

                    <div className="mb-8 flex-1">
                      <ul className="space-y-4 text-white text-sm">
                        {pkg.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-indigo-200 shrink-0 mt-0.5" />
                            <span className="leading-snug">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a 
                      href={getWaUrl(pkg.name, currentPrice)} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-full block text-center py-4 rounded-xl bg-white text-indigo-600 hover:bg-slate-50 font-bold transition-all shadow-lg"
                    >
                      Pesan Sekarang
                    </a>
                  </div>
                );
              }

              /* Normal Dark Cards (Starter / Pro) */
              return (
                <div 
                  key={pkg.id} 
                  className="bg-slate-800 rounded-3xl p-8 border border-slate-700 hover:border-slate-500 transition-all flex flex-col"
                >
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold mb-2 text-white">{pkg.name}</h3>
                    <p className="text-slate-400 text-sm">{pkg.tagline}</p>
                  </div>

                  {/* Price with strikethrough & starburst badge */}
                  <div className="mb-6 pb-6 border-b border-slate-700">
                    <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                      <span className="line-through text-slate-400 text-sm font-semibold opacity-90">
                        {billingCycle === 'tahunan' ? pkg.yearlyOriginalPrice : pkg.monthlyOriginalPrice}
                      </span>

                      {/* Bintang Jebret Badge */}
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-yellow-300 text-slate-950 font-black text-xs uppercase tracking-wider shadow-sm transform -rotate-2">
                        <svg className="w-3 h-3 fill-slate-950 shrink-0" viewBox="0 0 24 24">
                          <path d="M12 0l2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5L12 0z" />
                        </svg>
                        <span>{billingCycle === 'tahunan' ? pkg.yearlyDiscount : pkg.monthlyDiscount}</span>
                        <svg className="w-3 h-3 fill-slate-950 shrink-0" viewBox="0 0 24 24">
                          <path d="M12 0l2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5L12 0z" />
                        </svg>
                      </span>
                    </div>

                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold text-white">{currentPrice}</span>
                      <span className="text-slate-400 text-sm font-semibold">{currentPeriod}</span>
                    </div>

                    {billingCycle === 'tahunan' && (
                      <div className="text-xs text-slate-400 mt-2 font-medium">
                        Setara <span className="font-bold text-emerald-400">{pkg.yearlyEquivalent}</span>
                      </div>
                    )}
                  </div>

                  <div className="mb-8 flex-1">
                    <ul className="space-y-4 text-slate-300 text-sm">
                      {pkg.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                          <span className="leading-snug">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a 
                    href={getWaUrl(pkg.name, currentPrice)} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-full block text-center py-4 rounded-xl bg-slate-700 hover:bg-slate-600 text-white font-semibold transition-all"
                  >
                    Pilih Paket
                  </a>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Cara Pembayaran & Kenapa M-One Solution */}
      <Section className="bg-slate-50 border-t border-slate-200">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Cara Pembayaran */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <CreditCard className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Cara Pembayaran</h3>
              </div>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <span className="font-bold text-slate-900">Bulanan: </span>
                  dibayar setiap bulan untuk menjaga website tetap aktif dan mendapatkan layanan maintenance sesuai paket.
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <span className="font-bold text-slate-900">Tahunan: </span>
                  dibayar di muka 1 tahun dan mendapatkan harga lebih hemat (diskon 33%). Domain, hosting, SSL, serta layanan yang tercantum dalam paket berlaku selama periode berlangganan.
                </div>

                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-100 text-amber-800 text-xs sm:text-sm">
                  <span className="font-bold text-amber-900">Catatan: </span>
                  pengembangan fitur khusus, redesign besar, e-commerce kompleks, sistem booking, dashboard, dan integrasi pihak ketiga dapat dikenakan biaya pengembangan terpisah.
                </div>
              </div>
            </div>

            {/* Kenapa M-One Solution */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Kenapa M-One Solution?</h3>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Software House Lokal</h4>
                    <p className="text-slate-500 text-xs mt-0.5">Tim pengembang lokal berpengalaman di Sukoharjo & Solo.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">50+ Proyek Sukses</h4>
                    <p className="text-slate-500 text-xs mt-0.5">Telah menyelesaikan puluhan website & sistem digital sejak 2022.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">30+ Klien Terpercaya</h4>
                    <p className="text-slate-500 text-xs mt-0.5">Dipercaya berbagai pelaku usaha UMKM dan instansi.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Konsultasi Gratis</h4>
                    <p className="text-slate-500 text-xs mt-0.5">Bebas konsultasi ide dan kendala teknis bersama tim kami.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">FAQ: Pertanyaan yang Sering Diajukan</h2>
          </div>

          <div className="space-y-6">
            {[
              { 
                Q: "Apakah harga sudah termasuk domain dan hosting?", 
                A: "Ya! Setiap paket telah mencakup domain resmi, cloud hosting berkecepatan tinggi, dan sertifikat SSL keamanan (HTTPS) siap pakai tanpa biaya setting tambahan." 
              },
              { 
                Q: "Saya gaptek, apakah akan diajari cara pemakaiannya?", 
                A: "Pasti. Tim kami memberikan buku panduan ringkas, video tutorial, serta pendampingan langsung untuk mengganti teks, mengupdate foto produk, dan mengecek pesan pelanggan." 
              },
              { 
                Q: "Berapa lama website UMKM saya selesai dan siap online?", 
                A: "Layanan kami menjamin website siap pakai dalam 3–7 hari kerja setelah Anda memberikan materi awal (foto produk, nama usaha, & kontak)." 
              },
            ].map((faq, i) => (
              <div key={i} className="bg-slate-50 p-6 rounded-2xl shadow-sm border border-slate-100">
                <h4 className="text-lg font-bold text-slate-900 mb-2">{faq.Q}</h4>
                <p className="text-slate-600 leading-relaxed">{faq.A}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Bottom CTA / Kontak Box */}
      <Section className="bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-indigo-900/20 mix-blend-multiply" />
        <BlobBackground colorClass="bg-indigo-500/20" positionClass="bottom-[-20%] left-[-10%]" sizeClass="w-[50%] h-[50%]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase tracking-tight">
            SIAP MEMBUAT BISNIS ANDA TERLIHAT LEBIH PROFESIONAL?
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-8 text-sm">
            <a 
              href={`https://wa.me/${waNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 flex items-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp: <b>{displayPhone}</b></span>
            </a>
            <a 
              href={`mailto:${email}`}
              className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 flex items-center gap-2 transition-colors"
            >
              <Mail className="w-4 h-4 text-cyan-300" />
              <span>Email: <b>{email}</b></span>
            </a>
            <a 
              href="https://mone.mutudev.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 flex items-center gap-2 transition-colors"
            >
              <Globe className="w-4 h-4 text-blue-300" />
              <span>Website: <b>{website}</b></span>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={defaultWaHero}
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full sm:w-auto px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-500/30"
            >
              <MessageCircle className="w-5 h-5" />
              Konsultasi Sekarang via WhatsApp
            </a>
            <a 
              href="/portfolio" 
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl transition-all border border-white/10 flex items-center justify-center gap-2"
            >
              Lihat Portofolio <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <p className="text-xs text-slate-400 mt-6 italic">
            Harga dapat disesuaikan berdasarkan kebutuhan dan kompleksitas website.
          </p>
        </div>
      </Section>
    </main>
  );
}
