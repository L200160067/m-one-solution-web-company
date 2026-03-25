import type { Metadata } from 'next';
import { PackageSearch, TrendingUp, Cpu, Workflow, CheckCircle2, MessageCircle, ArrowRight, Store } from 'lucide-react';
import { Breadcrumb } from '@/components/Breadcrumb';
import { siteConfig } from '@/config/site';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { BlobBackground } from '@/components/ui/BlobBackground';

export const metadata: Metadata = {
    title: 'Jasa Pembuatan Website & Sistem Kasir (ERP) UMKM | M-One Solution',
    description: 'Tinggalkan cara manual! Jasa pembuatan website toko online dan sistem ERP terjangkau untuk UMKM: manajemen stok, kasir (POS), dan laporan keuangan langsung beres.',
    keywords: 'jasa sistem erp, erp untuk umkm, aplikasi kasir custom, website toko online, web app manajemen bisnis, buat web umkm',
    alternates: {
        canonical: 'https://mone.mutudev.com/layanan/jasa-erp-umkm',
    }
};

export default function JasaERPMPage() {
    const waMessage = encodeURIComponent("Halo M-One, saya tertarik untuk digitalisasi usaha saya (UMKM). Bisa info lebih lanjut?");
    const waLink = `https://wa.me/${siteConfig.whatsapp.number}?text=${waMessage}`;

    return (
        <main className="pt-20 min-h-screen bg-slate-50">
            <div className="bg-white border-b border-slate-100">
                <Container className="py-3">
                    <Breadcrumb items={[{ label: 'Layanan', href: '/services' }, { label: 'Website & IT UMKM' }]} className="!bg-transparent !p-0 !border-none !shadow-none" />
                </Container>
            </div>

            {/* Hero Section - LOW FRICTION, HIGH CONVERSION */}
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
                        Mulai dari Website Katalog, Toko Online, hingga Sistem Kasir (POS) & Inventori Gudang khusus untuk menaikkan omzet dan merapikan pembukuan UMKM Anda.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href={waLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-500/30">
                            <MessageCircle className="w-5 h-5" />
                            Diskusi via WhatsApp
                        </a>
                        <a href="#harga" className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl transition-all border border-white/10 flex items-center justify-center gap-2">
                            Lihat Paket Harga <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </Section>

            {/* Stats/Social Proof */}
            <section className="py-8 bg-white border-b border-slate-100">
                <Container>
                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-70">
                        <div className="text-center">
                            <h4 className="text-2xl font-bold text-slate-800">50+</h4>
                            <p className="text-sm font-medium text-slate-500">UMKM Terbantu</p>
                        </div>
                        <div className="text-center">
                            <h4 className="text-2xl font-bold text-slate-800">100%</h4>
                            <p className="text-sm font-medium text-slate-500">Aman & Terpusat</p>
                        </div>
                        <div className="text-center">
                            <h4 className="text-2xl font-bold text-slate-800">0%</h4>
                            <p className="text-sm font-medium text-slate-500">Ribet Instalasi</p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Problem & Solution Section */}
            <Section className="bg-slate-50">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Tingkatkan Efisiensi, Kurangi Kebocoran Dana</h2>
                        <p className="text-slate-600 text-lg mb-8">
                            Kami paham masalah terbesar UMKM adalah pencatatan manual yang memakan waktu dan sering selisih. Kami siap memberikan alat tempur digital untuk Anda.
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: Store,
                                title: 'Website Toko Resmi',
                                desc: 'Tingkatkan kepercayaan pelanggan dengan website atau toko online resmi menggunakan nama usaha Anda (.com / .id).',
                                bg: 'bg-blue-50',
                                color: 'text-blue-600'
                            },
                            {
                                icon: PackageSearch,
                                title: 'Inventori Gudang',
                                desc: 'Monitor stok masuk dan keluar secara real-time. Tidak ada lagi kejadian "Barang kosong tapi pelanggan sudah bayar".',
                                bg: 'bg-indigo-50',
                                color: 'text-indigo-600'
                            },
                            {
                                icon: TrendingUp,
                                title: 'Kasir (POS) Pintar',
                                desc: 'Sistem kasir yang otomatis memotong stok gudang dan merekap nota penjualan harian tanpa pusing rekapan kertas.',
                                bg: 'bg-teal-50',
                                color: 'text-teal-600'
                            },
                            {
                                icon: Workflow,
                                title: 'Laporan Otomatis',
                                desc: 'Pantau grafik laba/rugi, performa toko, dan piutang pelanggan langsung dari HP Anda kapanpun dan dimanapun.',
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

            {/* Pricing Section - PRODUCTIZED UMKM */}
            <Section id="harga" className="bg-slate-900 text-white">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Pilih Investasi Digital Anda</h2>
                        <p className="text-slate-400 text-lg">
                            Paket layanan transparan tanpa biaya tersembunyi. Tinggal sesuaikan dengan fase perkembanan usaha Anda saat ini.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {/* Paket Starter */}
                        <div className="bg-slate-800 rounded-3xl p-8 border border-slate-700 hover:border-slate-500 transition-all flex flex-col">
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold mb-2">Paket Go-Online</h3>
                                <p className="text-slate-400 text-sm">Untuk usaha yang butuh kartu nama digital & etalase.</p>
                            </div>
                            <div className="mb-6">
                                <span className="text-4xl font-extrabold">Rp 1 JT</span><span className="text-slate-400 text-lg">/thn</span>
                            </div>
                            <div className="mb-8 flex-1">
                                <ul className="space-y-4 text-slate-300 text-sm">
                                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0" /> Free Domain .com / .id</li>
                                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0" /> Server Hosting Siap Pakai</li>
                                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0" /> Desain Web Profil & Kontak</li>
                                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0" /> Katalog Jasa / Produk Standard</li>
                                    <li className="flex items-start gap-3 text-slate-500"><CheckCircle2 className="w-5 h-5 shrink-0" /> (Tanpa Fitur Belanja / Kasir)</li>
                                </ul>
                            </div>
                            <a href={waLink + "&text=Halo+saya+ingin+tanya+Paket+Go-Online+UMKM"} target="_blank" rel="noopener noreferrer" className="w-full block text-center py-4 rounded-xl bg-slate-700 hover:bg-slate-600 text-white font-semibold transition-all">
                                Pilih Paket
                            </a>
                        </div>

                        {/* Paket Toko Pintar (Best Seller) */}
                        <div className="bg-gradient-to-br from-indigo-500 to-blue-600 rounded-3xl p-8 border-2 border-indigo-300 transform md:-translate-y-4 shadow-xl shadow-indigo-900/50 flex flex-col relative">
                            <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-white text-indigo-600 font-bold px-4 py-1 rounded-full text-sm">
                                PALING LARIS
                            </div>
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold mb-2">Toko Online Pintar</h3>
                                <p className="text-indigo-100 text-sm">Sistem toko online siap jualan untuk butik/retail.</p>
                            </div>
                            <div className="mb-6">
                                <span className="text-4xl font-extrabold">Rp 2.5 JT</span>
                            </div>
                            <div className="mb-8 flex-1">
                                <ul className="space-y-4 text-white text-sm">
                                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-200 shrink-0" /> Semua Fitur Paket Profil</li>
                                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-200 shrink-0" /> <b>Sistem Keranjang Belanja</b></li>
                                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-200 shrink-0" /> Integrasi Ongkir Otomatis</li>
                                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-200 shrink-0" /> Payment Gateway (Qris, VA)</li>
                                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-200 shrink-0" /> Dashboard Manajemen Order</li>
                                </ul>
                            </div>
                            <a href={waLink + "&text=Halo+saya+ingin+tanya+Paket+Toko+Online+UMKM"} target="_blank" rel="noopener noreferrer" className="w-full block text-center py-4 rounded-xl bg-white text-indigo-600 hover:bg-slate-50 font-bold transition-all shadow-lg">
                                Pesan Sekarang
                            </a>
                        </div>

                        {/* Paket ERP Mini */}
                        <div className="bg-slate-800 rounded-3xl p-8 border border-slate-700 hover:border-slate-500 transition-all flex flex-col">
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold mb-2">ERP Kasir & Gudang</h3>
                                <p className="text-slate-400 text-sm">Sistem kasir komplit & multi-cabang (Tanpa Langganan).</p>
                            </div>
                            <div className="mb-6">
                                <span className="text-4xl font-extrabold">Rp 5 JT</span>
                            </div>
                            <div className="mb-8 flex-1">
                                <ul className="space-y-4 text-slate-300 text-sm">
                                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0" /> Aplikasi Kasir (POS) Berbasis Web</li>
                                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0" /> Pantau Stok Multi-Cabang Gudang</li>
                                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0" /> Laporan Laba Rugi Realtime</li>
                                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0" /> Pencatatan Hutang/Piutang</li>
                                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0" /> Bebas biaya bulanan aplikasi!</li>
                                </ul>
                            </div>
                            <a href={waLink + "&text=Halo+saya+ingin+tanya+Paket+ERP+Kasir+UMKM"} target="_blank" rel="noopener noreferrer" className="w-full block text-center py-4 rounded-xl bg-slate-700 hover:bg-slate-600 text-white font-semibold transition-all">
                                Pilih Paket
                            </a>
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
                            { Q: "Apakah sistem Kasir (POS) ini harus langganan bulanan?", A: "Tidak! Paket ERP Mini kami dijual putus (beli putus) untuk fungsi utamanya. Anda hanya perlu membayar biaya maintenance/server tahunan yang jauh lebih murah dibanding langganan bulanan aplikasi sejenis." },
                            { Q: "Saya gaptek, apakah akan diajari cara pemakaiannya?", A: "Pasti. Tim kami akan memberikan training online maupun panduan video cara memasukkan produk, melayani kasir, hingga membaca laporan keuangan." },
                            { Q: "Berapa lama website toko atau sistem kasir saya siap?", A: "Layanan Productized kami menjamin sistem siap pakai dalam 7-14 hari kerja setelah Anda memberikan daftar produk/menu awal." },
                        ].map((faq, i) => (
                            <div key={i} className="bg-slate-50 p-6 rounded-2xl shadow-sm border border-slate-100">
                                <h4 className="text-lg font-bold text-slate-900 mb-2">{faq.Q}</h4>
                                <p className="text-slate-600 leading-relaxed">{faq.A}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

        </main>
    )
}
