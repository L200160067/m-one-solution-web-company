import { CTA } from '@/components/CTA';
import type { Metadata } from 'next';
import { PackageSearch, TrendingUp, Cpu, Workflow } from 'lucide-react';
import { Breadcrumb } from '@/components/Breadcrumb';

export const metadata: Metadata = {
    title: 'Jasa Pembuatan Sistem ERP untuk UMKM Indonesia | M-One Solution',
    description: 'Tinggalkan cara manual! Jasa pembuatan sistem ERP terjangkau untuk UMKM: manajemen stok, kasir (POS), HRD, dan keuangan dalam satu web aplikasi terintegrasi.',
    keywords: 'jasa sistem erp, erp untuk umkm, aplikasi kasir custom, software inventory otomatis, web app manajemen bisnis',
    alternates: {
        canonical: 'https://mone.mutudev.com/layanan/jasa-erp-umkm',
    }
};

export default function JasaERPMPage() {
    return (
        <main className="pt-20 min-h-screen bg-slate-50">
            <div className="bg-white border-b border-slate-100">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                    <Breadcrumb items={[{ label: 'Layanan', href: '/services' }, { label: 'Jasa ERP UMKM' }]} className="!bg-transparent !p-0 !border-none !shadow-none" />
                </div>
            </div>
            {/* Hero Section */}
            <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-indigo-900/20 mix-blend-multiply" />
                <div className="absolute top-[10%] right-[5%] w-72 h-72 bg-blue-500/10 rounded-full blur-[100px]" />
                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-left">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-semibold mb-6">
                        🚀 Tingkatkan Skalabilitas Bisnis Anda
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight max-w-4xl mx-auto text-center">
                        Jasa Pembuatan Sistem ERP <br className="hidden md:block"/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">
                            Terbaik di Kelas UMKM
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10 text-center">
                        Dari pencatatan kertas hingga spreadsheet Excel, saatnya beralih ke Sistem Enterprise Resource Planning (ERP) yang dirancang khusus menyesuaikan SOP unik usaha kecil & menengah (UMKM) Anda.
                    </p>
                </div>
            </section>

            {/* Core Modules */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Software yang Berkembang Bersama Bisnis Anda</h2>
                            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                Kelemahan software instan langganan bulanan adalah <strong>mereka kaku mengikuti fitur bawaan</strong>. Dengan Jasa Custom Sistem ERP kami, aplikasi yang menyesuaikan cara kerja internal karyawan Anda, bukan sebaliknya!
                            </p>
                            
                            <div className="space-y-6">
                                {[
                                    {
                                        icon: PackageSearch,
                                        title: 'Manajemen Inventaris (Gudang)',
                                        desc: 'Lacak stok real-time, dapatkan notifikasi barang hampir habis, pencatatan stock opname, dan multi-gudang (warehousing).'
                                    },
                                    {
                                        icon: TrendingUp,
                                        title: 'Sistem Point of Sales (POS)',
                                        desc: 'Integrasi mesin kasir langsung memotong stok utama, perhitungan diskon otomatis, hingga shift karyawan kasir.'
                                    },
                                    {
                                        icon: Workflow,
                                        title: 'Laporan Keuangan & Akuntansi Pribadi',
                                        desc: 'Otomasi pembukuan jurnal, laba-rugi, dan pencatatan hutang/piutang pelanggan & supplier tanpa pusing Excel.'
                                    }
                                ].map((mod, i) => (
                                    <div key={i} className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center flex-shrink-0 text-indigo-600 mt-1">
                                            <mod.icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-slate-900 mb-2">{mod.title}</h4>
                                            <p className="text-slate-600 leading-relaxed">{mod.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-100 to-blue-50 rounded-[3rem] transform rotate-3 scale-105" />
                            <div className="relative bg-slate-900 p-8 rounded-[2.5rem] shadow-2xl overflow-hidden aspect-square flex flex-col items-center justify-center text-center">
                                <Cpu className="w-20 h-20 text-indigo-400 mb-6" />
                                <h3 className="text-2xl font-bold text-white mb-4">Aman & Terpusat di Cloud</h3>
                                <p className="text-slate-400 px-6">
                                    Sistem ERP yang kami buat berjalan penuh di web. Tidak perlu instalasi rumit di tiap komputer karyawan. Pimpinan bisa akses dashboard "Laba-Rugi Hari Ini" dari HP secara mandiri dimanapun berada.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CTA />
        </main>
    )
}
