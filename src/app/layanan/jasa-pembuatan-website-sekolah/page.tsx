import { CTA } from '@/components/CTA';
import type { Metadata } from 'next';
import { BookOpen, Users, LayoutDashboard, MonitorSmartphone } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Jasa Pembuatan Website Sekolah & Sistem PPDB | M-One Solution',
    description: 'Jasa pembuatan website sekolah SD, SMP, SMA/SMK dengan sistem PPDB Online (Penerimaan Siswa Baru) dan e-learning. Desain profesional, mudah dikelola, dan aman.',
    keywords: 'jasa pembuatan website sekolah, website ppdb online, aplikasi sekolah, e-learning sekolah, siakad sekolah',
    alternates: {
        canonical: 'https://mone.mutudev.com/layanan/jasa-pembuatan-website-sekolah',
    }
};

export default function WebsiteSekolahPage() {
    return (
        <main className="pt-20 min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/20 blur-[120px]" />
                </div>
                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-semibold mb-6">
                        🎓 Spesialis Sistem Informasi Pendidikan
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                        Jasa Pembuatan Website Sekolah <br className="hidden md:block"/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
                            & Sistem PPDB Online
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10">
                        Digitalisasi sekolah Anda dengan website profil profesional, portal berita siswa, hingga sistem Penerimaan Peserta Didik Baru (PPDB) yang terotomatisasi.
                    </p>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Solusi Lengkap Digitalisasi Sekolah</h2>
                        <p className="text-slate-600 text-lg">
                            Kami merancang sistem informasi pendidikan dari awal, bukan sekadar instalasi tema. Website sekolah Anda akan dibangun khusus mengakomodasi kebutuhan unik pengajar, admin, wali murid, dan siswa.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: BookOpen,
                                title: 'Profil & Berita Sekolah',
                                desc: 'Tampilkan visi misi, galeri kegiatan, prestasi siswa, dan update pengumuman sekolah langsung ke publik.',
                                bg: 'bg-blue-50',
                                color: 'text-blue-600'
                            },
                            {
                                icon: Users,
                                title: 'Sistem PPDB Online',
                                desc: 'Pendaftaran siswa baru, verifikasi berkas digital, jalur zona/prestasi, dan pengumuman hasil seleksi.',
                                bg: 'bg-teal-50',
                                color: 'text-teal-600'
                            },
                            {
                                icon: LayoutDashboard,
                                title: 'Sistem Akademik (SIAKAD)',
                                desc: 'Manajemen guru, data siswa, absensi kelas, penilaian (raport online), dan jadwal pelajaran interaktif.',
                                bg: 'bg-indigo-50',
                                color: 'text-indigo-600'
                            },
                            {
                                icon: MonitorSmartphone,
                                title: 'E-Learning Terintegrasi',
                                desc: 'Upload materi, tugas online, CBT (Computer Based Test), hingga try-out langsung dari portal sekolah.',
                                bg: 'bg-purple-50',
                                color: 'text-purple-600'
                            }
                        ].map((feature, i) => (
                            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${feature.bg} ${feature.color}`}>
                                    <feature.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                                <p className="text-slate-600 leading-relaxed text-sm">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTA />
        </main>
    )
}
