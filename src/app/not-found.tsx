import Link from 'next/link';
import { FileQuestion, ArrowLeft, Home } from 'lucide-react';

export const metadata = {
    title: '404 Halaman Tidak Ditemukan | M-One Solution Software House',
    description: 'Halaman yang Anda cari tidak ditemukan.',
};

export default function NotFoundPage() {
    return (
        <main className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
            <div className="text-center max-w-2xl mx-auto">
                <div className="w-24 h-24 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-8 relative shadow-sm border border-blue-100">
                    <FileQuestion className="w-12 h-12" />
                    <div className="absolute -top-1 -right-1 bg-red-500 text-white text-[11px] px-2 py-0.5 font-bold rounded-full shadow-lg border-2 border-slate-50">
                        404
                    </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Halaman Tidak Ditemukan</h1>
                <p className="text-lg text-slate-500 mb-10 max-w-lg mx-auto leading-relaxed">
                    Maaf, halaman yang Anda tuju mungkin telah dipindahkan, dihapus, atau Anda kebetulan salah mengetik alamat URL.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white border border-slate-200 text-slate-700 font-semibold rounded-full hover:bg-slate-50 transition-colors shadow-sm"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Kembali
                    </Link>
                    <Link
                        href="/"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
                    >
                        <Home className="w-5 h-5" />
                        Ke Beranda Utama
                    </Link>
                </div>
            </div>
        </main>
    );
}
