import { Helmet } from 'react-helmet-async';

export function PrivacyPage() {
  return (
    <main className="pt-24 pb-16 min-h-screen bg-slate-50">
      <Helmet>
        <title>Privacy Policy | M-One Solution Software House</title>
      </Helmet>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 prose prose-slate max-w-none">
          <p>
            Kebijakan Privasi ini menjelaskan bagaimana M-One Solution mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda saat Anda menggunakan layanan kami.
          </p>
          <h2>Pengumpulan Informasi</h2>
          <p>
            Kami mengumpulkan informasi yang Anda berikan secara langsung kepada kami, seperti saat Anda mengisi formulir kontak, meminta penawaran, atau berkomunikasi dengan kami.
          </p>
          <h2>Penggunaan Informasi</h2>
          <p>
            Informasi yang kami kumpulkan digunakan untuk menyediakan, memelihara, dan meningkatkan layanan kami, serta untuk berkomunikasi dengan Anda.
          </p>
          <h2>Keamanan Data</h2>
          <p>
            Kami mengambil langkah-langkah yang wajar untuk melindungi informasi pribadi Anda dari akses, penggunaan, atau pengungkapan yang tidak sah.
          </p>
        </div>
      </div>
    </main>
  );
}
