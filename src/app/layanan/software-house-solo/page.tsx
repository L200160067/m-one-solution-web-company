import { CTA } from '@/components/CTA';
import type { Metadata } from 'next';
import { ShieldCheck, Zap, Rocket, CheckCircle } from 'lucide-react';
import { Breadcrumb } from '@/components/Breadcrumb';

export const metadata: Metadata = {
    title: 'Software House Solo & Sukoharjo Terbaik | M-One Solution',
    description: 'Mencari software house di Solo Raya? M-One Solution melayani pembuatan website, aplikasi Android/iOS, & sistem ERP dengan harga terjangkau & profesional.',
    keywords: 'software house solo, jasa pembuatan website solo, jasa IT solo raya, web development sukoharjo, company profile solo',
    alternates: {
        canonical: 'https://mone.mutudev.com/layanan/software-house-solo',
    }
};

export default function SoftwareHouseSoloPage() {
    return (
        <main className="pt-20 min-h-screen bg-slate-50">
            <div className="bg-white border-b border-slate-100">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                    <Breadcrumb items={[{ label: 'Layanan', href: '/services' }, { label: 'Software House Solo' }]} className="!bg-transparent !p-0 !border-none !shadow-none" />
                </div>
            </div>
            {/* Hero Section */}
            <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply" />
                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-6">
                        👋 Mitra Digital Lokal Anda
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                        Software House Solo & Sukoharjo <br className="hidden md:block"/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                            Profesional & Terpercaya
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10">
                        Kami membantu UMKM, instansi, dan perusahaan di wilayah Surakarta (Solo), Sukoharjo, Karanganyar, dan sekitarnya untuk *"go digital"* melalui pembuatan website dan aplikasi kustom yang tepat guna.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Mengapa Memilih Jasa IT dari Kami?</h2>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Sebagai <strong>software house lokal di wilayah Solo Raya</strong>, M-One Solution memahami betul ekspektasi dan kebiasaan bisnis di daerah ini. Kami tidak sekadar "menulis kode", namun memberikan konsultasi yang transparan, harga yang masuk akal, dan *after-sales support* yang bisa diandalkan kapan saja.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    'Komunikasi mudah (bisa meeting offline di area Solo/Sukoharjo)',
                                    'Harga kompetitif dan disesuaikan dengan skala bisnis Anda',
                                    'Desain UI/UX modern, tidak terlihat seperti website template jadul',
                                    'Dukungan maintenance dan server yang transparan'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-slate-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                            <h3 className="text-xl font-bold text-slate-900 mb-6">Layanan Utama Kami</h3>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 text-blue-600">
                                        <Zap className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-900">Pembuatan Website</h4>
                                        <p className="text-sm text-slate-500 mt-1">Company profile, e-commerce, portal berita, hingga website sekolah & kampus.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center flex-shrink-0 text-cyan-600">
                                        <Rocket className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-900">Sistem ERP & Web App</h4>
                                        <p className="text-sm text-slate-500 mt-1">Sistem informasi manajemen, kasir (POS), inventaris, hingga custom dashboard.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center flex-shrink-0 text-indigo-600">
                                        <ShieldCheck className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-900">Aplikasi Mobile iOS/Android</h4>
                                        <p className="text-sm text-slate-500 mt-1">Pembuatan aplikasi yang ringan, responsif, dan siap rilis di Play Store & App Store.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CTA />
        </main>
    )
}
