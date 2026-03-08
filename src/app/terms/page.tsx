export const metadata = {
    title: 'Terms and Conditions | M-One Solution Software House',
};

export default function TermsPage() {
    return (
        <main className="pt-24 pb-16 min-h-screen bg-slate-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms and Conditions</h1>
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 prose prose-slate max-w-none">
                    <p>
                        Syarat dan Ketentuan ini mengatur penggunaan Anda atas layanan yang disediakan oleh M-One Solution. Dengan menggunakan layanan kami, Anda menyetujui syarat dan ketentuan ini.
                    </p>
                    <h2>Layanan</h2>
                    <p>
                        M-One Solution menyediakan layanan pengembangan perangkat lunak, termasuk pembuatan website, sistem informasi, dan aplikasi khusus.
                    </p>
                    <h2>Pembayaran</h2>
                    <p>
                        Ketentuan pembayaran akan disepakati bersama sebelum proyek dimulai. Kami berhak menangguhkan atau menghentikan layanan jika pembayaran tidak diterima sesuai kesepakatan.
                    </p>
                    <h2>Hak Kekayaan Intelektual</h2>
                    <p>
                        Kecuali disepakati lain, hak kekayaan intelektual atas perangkat lunak yang kami kembangkan akan menjadi milik Anda setelah pembayaran penuh diterima.
                    </p>
                </div>
            </div>
        </main>
    );
}
