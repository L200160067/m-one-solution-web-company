import type { Metadata } from 'next';
import { BookOpen, Users, LayoutDashboard, MonitorSmartphone, CheckCircle2, MessageCircle, ArrowRight } from 'lucide-react';
import { Breadcrumb } from '@/components/Breadcrumb';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { BlobBackground } from '@/components/ui/BlobBackground';

export const metadata: Metadata = {
    title: 'Jasa Pembuatan Website Sekolah & Sistem PPDB | M-One Solution',
    description: 'Jasa pembuatan website sekolah SD, SMP, SMA/SMK dengan sistem PPDB Online (Penerimaan Siswa Baru) dan e-learning. Tarif jelas, pengerjaan cepat, terima beres.',
    keywords: 'jasa pembuatan website sekolah, website ppdb online, aplikasi sekolah, e-learning sekolah, siakad sekolah',
    alternates: {
        canonical: 'https://mone.mutudev.com/layanan/jasa-pembuatan-website-sekolah',
    }
};

export default function WebsiteSekolahPage() {
    const waMessage = encodeURIComponent("Halo M-One, saya tertarik dengan Jasa Pembuatan Website Sekolah. Bisa info lebih lanjut?");
    const waLink = `https://wa.me/${siteConfig.whatsapp.number}?text=${waMessage}`;

    return (
        <main className="pt-20 min-h-screen bg-slate-50">
            <div className="bg-white border-b border-slate-100">
                <Container className="py-3">
                    <Breadcrumb items={[{ label: 'Layanan', href: '/services' }, { label: 'Jasa Website Sekolah' }]} className="!bg-transparent !p-0 !border-none !shadow-none" />
                </Container>
            </div>

            {/* Hero Section - LOW FRICTION, HIGH CONVERSION */}
            <Section className="bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <BlobBackground colorClass="bg-blue-600/20" positionClass="top-[-20%] right-[-10%]" sizeClass="w-[50%] h-[50%]" />
                </div>
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-semibold mb-6">
                        🚀 Solusi Digital UMKM & Pendidikan
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                        Terima Beres! <br className="hidden md:block"/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
                            Website Sekolah & PPDB Online
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10">
                        Tidak perlu pusing mikir server atau coding. Kami bangunkan website profil sekolah Anda lengkap dengan sistem pendaftaran siswa baru. Harga transparan, support penuh.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href={waLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-500/30">
                            <MessageCircle className="w-5 h-5" />
                            Pesan Sekarang via WhatsApp
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
                            <h4 className="text-2xl font-bold text-slate-800">10+</h4>
                            <p className="text-sm font-medium text-slate-500">Sekolah Percaya Kami</p>
                        </div>
                        <div className="text-center">
                            <h4 className="text-2xl font-bold text-slate-800">100%</h4>
                            <p className="text-sm font-medium text-slate-500">Gratis Maintenance 1 Thn</p>
                        </div>
                        <div className="text-center">
                            <h4 className="text-2xl font-bold text-slate-800">24/7</h4>
                            <p className="text-sm font-medium text-slate-500">Support Tim Teknis</p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Features Section */}
            <Section>
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Kenapa Sekolah Anda Wajib Punya Website Sendiri?</h2>
                        <p className="text-slate-600 text-lg">
                            Meningkatkan kredibilitas sekolah di mata wali murid dan memudahkan proses administrasi secara drastis.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: BookOpen,
                                title: 'Profil & Berita Otomatis',
                                desc: 'Tingkatkan image sekolah dengan galeri kegiatan dan pengumuman yang mudah diupdate sendiri.',
                                bg: 'bg-blue-50',
                                color: 'text-blue-600'
                            },
                            {
                                icon: Users,
                                title: 'Sistem PPDB Online',
                                desc: 'Penerimaan siswa baru tanpa kertas. Wali murid bisa daftar dan upload berkas langsung dari HP.',
                                bg: 'bg-teal-50',
                                color: 'text-teal-600'
                            },
                            {
                                icon: LayoutDashboard,
                                title: 'Domain Resmi .sch.id',
                                desc: 'Kami bantu urus perizinan domain resmi sekolah (.sch.id) agar sekolah terlihat profesional.',
                                bg: 'bg-indigo-50',
                                color: 'text-indigo-600'
                            },
                            {
                                icon: MonitorSmartphone,
                                title: 'Mobile Friendly',
                                desc: 'Tampilan rapi dan menarik baik dibuka dari Laptop, Tablet, maupun Smartphone.',
                                bg: 'bg-purple-50',
                                color: 'text-purple-600'
                            }
                        ].map((feature, i) => (
                            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:border-teal-100 hover:shadow-md transition-all">
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${feature.bg} ${feature.color}`}>
                                    <feature.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                                <p className="text-slate-600 leading-relaxed text-sm">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Pricing Section - PRODUCTIZED SERVICE KEY */}
            <Section id="harga" className="bg-slate-900 text-white">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Paket Harga Transparan</h2>
                        <p className="text-slate-400 text-lg">
                            Pilih paket sesuai kebutuhan dan anggaran sekolah Anda. Sekali bayar untuk tahun pertama, perpanjangan sangat terjangkau.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {/* Paket Basic */}
                        <div className="bg-slate-800 rounded-3xl p-8 border border-slate-700 hover:border-slate-500 transition-all flex flex-col">
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold mb-2">Basic Profil</h3>
                                <p className="text-slate-400 text-sm">Cocok untuk sekolah yang baru ingin tampil online.</p>
                            </div>
                            <div className="mb-6">
                                <span className="text-4xl font-extrabold">Rp 1.5 JT</span>
                            </div>
                            <div className="mb-8 flex-1">
                                <ul className="space-y-4 text-slate-300 text-sm">
                                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0" /> Free Domain .sch.id & Hosting 1 Thn</li>
                                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0" /> Desain Responsif & Modern</li>
                                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0" /> Profil, Visi Misi, Fasilitas</li>
                                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0" /> Berita / Blog / Pengumuman</li>
                                    <li className="flex items-start gap-3 text-slate-500"><CheckCircle2 className="w-5 h-5 shrink-0" /> (Tanpa Sistem PPDB)</li>
                                </ul>
                            </div>
                            <a href={waLink + "&text=Halo+saya+ingin+pesan+Paket+Basic+Profil+Sekolah"} target="_blank" rel="noopener noreferrer" className="w-full block text-center py-4 rounded-xl bg-slate-700 hover:bg-slate-600 text-white font-semibold transition-all">
                                Pesan Paket Basic
                            </a>
                        </div>

                        {/* Paket Standar (Best Seller) */}
                        <div className="bg-gradient-to-br from-teal-500 to-emerald-600 rounded-3xl p-8 border-2 border-teal-300 transform md:-translate-y-4 shadow-xl shadow-teal-900/50 flex flex-col relative">
                            <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-white text-teal-600 font-bold px-4 py-1 rounded-full text-sm">
                                PALING LARIS
                            </div>
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold mb-2">Standar + PPDB</h3>
                                <p className="text-teal-100 text-sm">Solusi lengkap untuk penerimaan siswa baru digital.</p>
                            </div>
                            <div className="mb-6">
                                <span className="text-4xl font-extrabold">Rp 3.5 JT</span>
                            </div>
                            <div className="mb-8 flex-1">
                                <ul className="space-y-4 text-white text-sm">
                                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-teal-200 shrink-0" /> Semua Fitur Paket Basic</li>
                                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-teal-200 shrink-0" /> <b>Sistem PPDB Online Lengkap</b></li>
                                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-teal-200 shrink-0" /> Formulir Pendaftaran & Upload Berkas</li>
                                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-teal-200 shrink-0" /> Dashboard Admin & Verifikasi</li>
                                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-teal-200 shrink-0" /> Ekspor Data Siswa ke Excel</li>
                                </ul>
                            </div>
                            <a href={waLink + "&text=Halo+saya+ingin+pesan+Paket+Standar+PPDB+Sekolah"} target="_blank" rel="noopener noreferrer" className="w-full block text-center py-4 rounded-xl bg-white text-teal-600 hover:bg-slate-50 font-bold transition-all shadow-lg">
                                Pesan Paket Standar
                            </a>
                        </div>

                        {/* Paket Premium */}
                        <div className="bg-slate-800 rounded-3xl p-8 border border-slate-700 hover:border-slate-500 transition-all flex flex-col">
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold mb-2">Premium SIAKAD</h3>
                                <p className="text-slate-400 text-sm">Untuk sekolah yang butuh sistem ujian online & absensi.</p>
                            </div>
                            <div className="mb-6">
                                <span className="text-4xl font-extrabold">Rp 7.5 JT</span>
                            </div>
                            <div className="mb-8 flex-1">
                                <ul className="space-y-4 text-slate-300 text-sm">
                                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0" /> Semua Fitur Paket Standar</li>
                                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0" /> Manajemen Guru & Jadwal</li>
                                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0" /> Ujian Online (CBT) Terintegrasi</li>
                                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0" /> Sistem E-Rapor & Nilai</li>
                                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0" /> Integrasi Absensi Digital</li>
                                </ul>
                            </div>
                            <a href={waLink + "&text=Halo+saya+ingin+pesan+Paket+Premium+SIAKAD+Sekolah"} target="_blank" rel="noopener noreferrer" className="w-full block text-center py-4 rounded-xl bg-slate-700 hover:bg-slate-600 text-white font-semibold transition-all">
                                Pesan Paket Premium
                            </a>
                        </div>
                    </div>
                    
                    <div className="mt-12 text-center text-slate-400 text-sm">
                        *Perpanjangan tahun berikutnya mulai dari Rp 1.000.000,- (termasuk server, domain, dan maintenance)
                    </div>
                </Container>
            </Section>

            {/* FAQ Section */}
            <Section className="bg-slate-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Pertanyaan Sering Diajukan</h2>
                    </div>

                    <div className="space-y-6">
                        {[
                            { Q: "Apakah dibantu kalau tidak bisa pakai aplikasinya?", A: "Tentu! Kami berikan buku panduan dan sesi online training secara gratis untuk admin/guru yang ditunjuk sekolah. Kami sangat responsif membalas WhatsApp jika ada kendala." },
                            { Q: "Berapa lama proses pembuatannya?", A: "Untuk Paket Basic dan Standar (PPDB), website siap digunakan dalam 7-14 hari kerja setelah materi dan dokumen persyaratan domain diserahkan." },
                            { Q: "Apakah harga perpanjangannya akan naik drastis?", A: "Tidak. Harga perpanjangan di M-One Solution jelas dari awal (Transparan). Anda hanya membayar biaya perpanjangan server dan domain untuk tahun-tahun berikutnya." },
                        ].map((faq, i) => (
                            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
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
