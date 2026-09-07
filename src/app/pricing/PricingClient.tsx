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
    ShieldCheck
} from 'lucide-react';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { BlobBackground } from '@/components/ui/BlobBackground';
import { siteConfig } from '@/config/site';
import Link from 'next/link';

export default function PricingClient() {
    const [billingCycle, setBillingCycle] = useState<'bulanan' | 'tahunan'>('bulanan');

    const waNumber = siteConfig.whatsapp.number;
    const displayPhone = "+62 812-2666-2812";

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
            tagline: 'Kartu nama digital & media promosi online untuk usaha baru.',
            benefit: 'Cocok untuk usaha baru yang ingin punya identitas digital profesional.',
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
            tagline: 'Website komplit siap tingkatkan kredibilitas & penjualan.',
            benefit: 'Sistem lengkap untuk meningkatkan kredibilitas & penjualan.',
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
            benefit: 'Performa maksimal untuk bisnis yang serius di dunia digital.',
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
                        className="bg-transparent! p-0! border-none! shadow-none!"
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
                        Bawa Usaha Anda Naik Kelas dengan Website Profesional <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-blue-400">
                            Mulai Rp 99.000/bulan — Terima Beres Tanpa Ribet
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
                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-75">
                        <div className="text-center">
                            <p className="text-2xl font-bold text-slate-800">50+</p>
                            <p className="text-sm font-medium text-slate-500">Proyek sejak 2022</p>
                        </div>
                        <div className="text-center">
                            <p className="text-2xl font-bold text-slate-800">30+</p>
                            <p className="text-sm font-medium text-slate-500">Klien Terpercaya</p>
                        </div>
                        <div className="text-center">
                            <p className="text-2xl font-bold text-slate-800">100%</p>
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
                            <div key={i} className="group bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:border-indigo-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
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

            {/* Why Choose Us Section */}
            <Section className="bg-white border-y border-slate-100">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Kenapa Memilih M-One Solution?</h2>
                        <p className="text-slate-600 text-lg">
                            Kami bukan sekadar vendor IT. Kami mitra digitalisasi bisnis Anda yang fokus pada hasil nyata dan kemudahan penggunaan.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: '📍',
                                title: 'Tim Lokal Sukoharjo & Solo',
                                desc: 'Paham kebutuhan UMKM lokal dan bisa meeting langsung jika diperlukan.'
                            },
                            {
                                icon: '⚡',
                                title: 'Siap Pakai 3-7 Hari',
                                desc: 'Proses pengerjaan cepat tanpa mengorbankan kualitas website.'
                            },
                            {
                                icon: '💰',
                                title: 'Harga Transparan',
                                desc: 'Tidak ada biaya tersembunyi. Domain, hosting, dan SSL sudah termasuk.'
                            },
                            {
                                icon: '🛠️',
                                title: 'Training & Support',
                                desc: 'Diajari cara update konten dan kami siap membantu kendala teknis.'
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-center hover:border-indigo-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                                <div className="text-4xl mb-4">{item.icon}</div>
                                <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Pricing Section */}
            <Section id="harga" className="bg-slate-50">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Pilih Investasi Digital Anda</h2>
                        <p className="text-slate-600 text-lg mb-8">
                            Paket layanan transparan tanpa biaya tersembunyi. Tinggal sesuaikan dengan fase perkembangan usaha Anda saat ini.
                        </p>

                        {/* Billing Toggle */}
                        <div className="inline-flex items-center p-1.5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                            <button
                                onClick={() => setBillingCycle('bulanan')}
                                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 ${
                                    billingCycle === 'bulanan'
                                        ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                                        : 'text-slate-500 hover:text-slate-900'
                                }`}
                            >
                                Bayar Bulanan
                            </button>
                            <button
                                onClick={() => setBillingCycle('tahunan')}
                                className={`relative px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 flex items-center gap-2 ${
                                    billingCycle === 'tahunan'
                                        ? 'bg-linear-to-r from-indigo-500 to-blue-600 text-white shadow-md'
                                        : 'text-slate-500 hover:text-slate-900'
                                }`}
                            >
                                <span>Bayar Tahunan</span>
                                <span className="px-2 py-0.5 text-[11px] font-extrabold uppercase rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">
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
                                    <div
                                        key={pkg.id}
                                        className="group relative bg-linear-to-br from-indigo-500 to-blue-600 rounded-3xl p-8 border-2 border-indigo-300 md:-translate-y-4 shadow-xl shadow-indigo-900/30 flex flex-col overflow-hidden"
                                    >
                                        <div className="absolute top-0 right-8 -translate-y-1/2 bg-white text-indigo-600 font-bold px-4 py-1 rounded-full text-sm shadow-lg">
                                            {pkg.badge}
                                        </div>
                                        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-bl-full z-0" />

                                        <div className="relative mb-4">
                                            <h3 className="text-2xl font-bold mb-2 text-white">{pkg.name}</h3>
                                            <p className="text-indigo-100 text-sm">{pkg.tagline}</p>
                                            {pkg.benefit && (
                                                <p className="text-indigo-200 text-sm font-medium mt-1 bg-indigo-500/30 px-3 py-1 rounded-full inline-block">
                                                    ✨ {pkg.benefit}
                                                </p>
                                            )}
                                        </div>

                                        <div className="relative mb-6 pb-6 border-b border-white/20">
                                            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                                                <span className="line-through text-indigo-200 text-sm font-semibold opacity-90">
                                                    {billingCycle === 'tahunan' ? pkg.yearlyOriginalPrice : pkg.monthlyOriginalPrice}
                                                </span>
                                                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-yellow-300 text-slate-950 font-black text-xs uppercase tracking-wider shadow-sm -rotate-2">
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

                                        <div className="relative mb-8 flex-1">
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
                                            className="relative w-full block text-center py-4 rounded-xl bg-white text-indigo-600 hover:bg-slate-50 font-bold transition-all shadow-lg"
                                        >
                                            Pesan Sekarang
                                        </a>
                                    </div>
                                );
                            }

                            return (
                                <div
                                    key={pkg.id}
                                    className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl border border-slate-100 hover:border-indigo-200 transition-all duration-300 flex flex-col hover:-translate-y-2 overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform" />
                                    <div className="mb-4">
                                        <h3 className="text-2xl font-bold mb-2 text-slate-900">{pkg.name}</h3>
                                        <p className="text-slate-500 text-sm">{pkg.tagline}</p>
                                    </div>

                                    <div className="mb-6 pb-6 border-b border-slate-100">
                                        <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                                            <span className="line-through text-slate-400 text-sm font-semibold opacity-90">
                                                {billingCycle === 'tahunan' ? pkg.yearlyOriginalPrice : pkg.monthlyOriginalPrice}
                                            </span>
                                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-yellow-300 text-slate-950 font-black text-xs uppercase tracking-wider shadow-sm -rotate-2">
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
                                            <span className="text-4xl font-extrabold text-slate-900">{currentPrice}</span>
                                            <span className="text-slate-500 text-sm font-semibold">{currentPeriod}</span>
                                        </div>

                                        {billingCycle === 'tahunan' && (
                                            <div className="text-xs text-slate-500 mt-2 font-medium">
                                                Setara <span className="font-bold text-emerald-600">{pkg.yearlyEquivalent}</span>
                                            </div>
                                        )}
                                    </div>

                                    <div className="mb-8 flex-1">
                                        <ul className="space-y-4 text-slate-600 text-sm">
                                            {pkg.features.map((feat, idx) => (
                                                <li key={idx} className="flex items-start gap-3">
                                                    <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                                                    <span className="leading-snug">{feat}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <a
                                        href={getWaUrl(pkg.name, currentPrice)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full block text-center py-4 rounded-xl bg-slate-900 hover:bg-indigo-600 text-white font-semibold transition-all"
                                    >
                                        Pilih Paket
                                    </a>
                                </div>
                            );
                        })}
                    </div>

                    <div className="mt-12 text-center text-slate-500 text-sm max-w-2xl mx-auto">
                        *Harga dapat disesuaikan berdasarkan kebutuhan dan kompleksitas website. Fitur khusus, redesign besar, e-commerce kompleks, sistem booking, dashboard, dan integrasi pihak ketiga dapat dikenakan biaya pengembangan terpisah.
                    </div>
                </Container>
            </Section>

            {/* Testimonials Section */}
            <Section className="bg-indigo-50">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Apa Kata UMKM yang Sudah Bertransformasi?</h2>
                        <p className="text-slate-600 text-lg">
                            Bergabung bersama puluhan UMKM yang kini mengelola bisnisnya dengan lebih rapi, cepat, dan profesional.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                name: 'Bu Ratna',
                                role: 'Pemilik Butik Sazmoon',
                                quote: 'Website katalog dan WhatsApp order otomatis sangat membantu. Pelanggan jadi lebih percaya karena tampilannya profesional.'
                            },
                            {
                                name: 'Pak Budi',
                                role: 'Owner Gudang Sembako',
                                quote: 'Dulu pembukuan manual sering selisih. Sekarang dengan sistem dari M-One, laporan penjualan langsung terlihat setiap hari.'
                            },
                            {
                                name: 'Mba Sari',
                                role: 'Founder Kuliner Homemade',
                                quote: 'Website saya kini muncul di halaman pertama Google untuk kata kunci lokal. Orderan dari internet meningkat signifikan.'
                            }
                        ].map((testi, i) => (
                            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                                <p className="text-slate-600 leading-relaxed mb-6 italic">&ldquo;{testi.quote}&rdquo;</p>
                                <div>
                                    <h4 className="font-bold text-slate-900">{testi.name}</h4>
                                    <p className="text-sm text-indigo-600">{testi.role}</p>
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
                            {
                                Q: "Apakah bisa upgrade paket di kemudian hari?",
                                A: "Tentu. Anda bisa upgrade paket kapan saja sesuai perkembangan bisnis. Biaya upgrade disesuaikan dengan selisih paket yang dipilih."
                            },
                        ].map((faq, i) => (
                            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                                <h4 className="text-lg font-bold text-slate-900 mb-2">{faq.Q}</h4>
                                <p className="text-slate-600 leading-relaxed">{faq.A}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Bottom CTA Section */}
            <Section className="bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-indigo-900/20 mix-blend-multiply" />
                <BlobBackground colorClass="bg-indigo-500/20" positionClass="bottom-[-20%] left-[-10%]" sizeClass="w-[50%] h-[50%]" />

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Siap Membuat Bisnis Anda Terlihat Lebih Profesional?</h2>
                    <p className="text-slate-400 text-lg mb-10">
                        Konsultasikan kebutuhan website UMKM Anda secara GRATIS. Tim kami siap membantu memilih paket yang paling sesuai.
                    </p>

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

                    <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-sm text-slate-400">
                        <Link href="/services" className="hover:text-white transition-colors flex items-center gap-2">
                            <ArrowRight className="w-4 h-4" /> Layanan Lengkap
                        </Link>
                        <Link href="/layanan/jasa-erp-umkm" className="hover:text-white transition-colors flex items-center gap-2">
                            <ArrowRight className="w-4 h-4" /> Jasa ERP UMKM
                        </Link>
                        <Link href="/contact" className="hover:text-white transition-colors flex items-center gap-2">
                            <ArrowRight className="w-4 h-4" /> Hubungi Kami
                        </Link>
                    </div>

                    <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-400">
                        <span className="flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4 text-emerald-400" />
                            WhatsApp: <b className="text-white">{displayPhone}</b>
                        </span>
                    </div>
                </div>
            </Section>
        </main>
    );
}
