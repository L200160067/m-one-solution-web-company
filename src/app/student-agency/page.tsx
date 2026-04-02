"use client";

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Star, Zap, MessageCircle } from 'lucide-react';

const BATCH_DATE = new Date('2026-04-20T23:59:59+07:00').getTime();
const getTimeLeft = () => {
  const diff = Math.max(0, BATCH_DATE - Date.now());
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
};


const benefits = [
  { icon: '💰', title: 'Penghasilan Nyata', desc: 'Komisi menarik untuk setiap website yang berhasil kamu jual ke klien — bisa dikerjain sambil kuliah!' },
  { icon: '🌐', title: 'Bikin Website Tanpa Coding', desc: 'Kami ajarkan cara membuat website profesional pakai WordPress — drag & drop, tanpa nulis satu baris kode pun.' },
  { icon: '🖥️', title: 'Hosting Ditanggung M-One', desc: 'Website klienmu di-hosting langsung oleh M-One Solution. Kamu tidak perlu urus server atau teknis sama sekali.' },
  { icon: '🎓', title: 'Portfolio Profesional', desc: 'Dapatkan portfolio website nyata yang bisa kamu tunjukkan saat melamar kerja, magang, atau beasiswa.' },
  { icon: '🤝', title: 'Mentor & Komunitas', desc: 'Bergabung dengan komunitas agent aktif dan dapatkan bimbingan langsung dari tim M-One Solution.' },
  { icon: '🚀', title: 'Kerja Fleksibel', desc: 'Bisa dikerjakan dari mana saja, kapan saja. Fleksibel dan 100% cocok sambil kuliah full-time.' },
];

const steps = [
  { num: '01', title: 'Daftar Gratis', desc: 'Isi form pendaftaran dan langsung masuk grup eksklusif Student Agency Incubator M-One Solution.' },
  { num: '02', title: 'Pelatihan WordPress', desc: 'Kami bimbing kamu belajar bikin website profesional pakai WordPress — tanpa coding, dari nol sampai bisa!' },
  { num: '03', title: 'Terima Materi & Tools', desc: 'Dapat kit penjualan lengkap: script promosi, template proposal, dan panduan cari klien pertamamu.' },
  { num: '04', title: 'Cari Klien & Bikin Website', desc: 'Tawarkan jasa website ke UMKM, sekolah, atau toko di sekitarmu — lalu bangun websitenya sendiri pakai WordPress!' },
  { num: '05', title: 'Submit & Terima Komisi', desc: 'Website klien langsung di-hosting M-One Solution. Kamu serahkan hasilnya, klien puas, komisi masuk!' },
];

const faqs = [
  { q: 'Apakah ini penipuan?', a: 'Tidak! M-One Solution adalah software house terdaftar di Sukoharjo dengan rekam jejak proyek nyata. Kamu bisa verifikasi portofolio kami di halaman Portfolio.' },
  { q: 'Berapa komisinya?', a: 'Komisi kompetitif untuk setiap proyek website yang berhasil kamu jual. Detail lengkapnya disampaikan setelah kamu bergabung di grup eksklusif kami.' },
  { q: 'Perlu keahlian coding?', a: 'Tidak perlu sama sekali! Kamu akan belajar membuat website menggunakan WordPress — platform berbasis visual yang tidak butuh coding. Kami bimbing dari nol sampai kamu siap jualan.' },
  { q: 'Apakah ada target penjualan?', a: 'Ada target, tapi bersifat fleksibel dan bisa kamu sesuaikan dengan jadwal kuliah. Yang penting konsisten dan mau belajar!' },
  { q: 'Siapa yang urus hosting website klien?', a: 'M-One Solution! Setelah kamu selesai bikin website klien, hosting dan maintenance server sepenuhnya ditanggung oleh kami. Kamu fokus jual, kami yang urus teknisnya.' },
];

export default function StudentAgencyPage() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">

      {/* ======================================================
          HERO — Key Visual (Mirror of Reference Image)
      ====================================================== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: '#fafafa' }}>

        {/* Grid Paper Background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(180,180,180,0.25) 1px, transparent 1px),
              linear-gradient(90deg, rgba(180,180,180,0.25) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />

        {/* Geometric Accents — Top Right (Yellow Star/Arrow) */}
        <div className="absolute top-0 right-0 pointer-events-none z-10">
          <svg viewBox="0 0 200 200" width="200" height="200" className="opacity-90">
            <polygon points="160,0 200,0 200,40 200,160 160,200 100,160 160,100" fill="#F5C400" />
            <polygon points="200,0 200,80 120,0" fill="#F5C400" />
          </svg>
        </div>

        {/* Geometric Accents — Bottom Left (Magenta Star) */}
        <div className="absolute bottom-0 left-0 pointer-events-none z-10">
          <svg viewBox="0 0 200 220" width="200" height="220" className="opacity-90">
            <polygon points="0,220 60,220 60,180 100,140 60,100 100,60 40,0 0,60 40,100 0,140" fill="#E0007A" />
          </svg>
        </div>

        {/* Bottom-left second accent */}
        <div className="absolute bottom-16 left-0 pointer-events-none z-10">
          <svg viewBox="0 0 100 100" width="100" height="100">
            <polygon points="0,100 40,100 100,40 100,0 60,0 0,60" fill="#E0007A" opacity="0.7" />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-20 flex flex-col items-center text-center px-6 max-w-3xl mx-auto pt-28 pb-20">

          {/* Brand Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex items-center gap-2 bg-white border-2 border-slate-200 rounded-full px-4 py-2 shadow-md"
          >
            <span className="text-sm font-bold text-slate-700 tracking-wide">M-ONE</span>
            <span className="text-sm font-extrabold text-blue-700 tracking-wide">SOLUTION</span>
            <span className="text-xs text-slate-500 font-medium">SOFTWARE HOUSE</span>
          </motion.div>

          {/* Big Headline */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-2"
          >
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-black leading-none tracking-tight uppercase"
              style={{
                color: '#F5C400',
                WebkitTextStroke: '3px #E0007A',
                textShadow: '4px 4px 0 #E0007A',
                fontFamily: 'var(--font-lilita), "Lilita One", "Impact", sans-serif',
                letterSpacing: '0.02em',
              }}
            >
              BERANI BUKTIIN
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-1 mb-6"
          >
            <div
              className="inline-block px-3 py-1 rounded-md text-3xl sm:text-4xl lg:text-5xl font-black italic"
              style={{
                background: '#FFF3A3',
                color: '#E0007A',
                WebkitTextStroke: '1.5px #E0007A',
                fontFamily: '"Inter", sans-serif',
              }}
            >
              Kalau Mahasiswa
            </div>
            <br />
            <div
              className="inline-block px-3 py-1 mt-2 rounded-md text-3xl sm:text-4xl lg:text-5xl font-black italic"
              style={{
                background: '#FFE4F5',
                color: '#E0007A',
                WebkitTextStroke: '1.5px #E0007A',
                fontFamily: '"Inter", sans-serif',
              }}
            >
              Bisa Freelance
            </div>
            <br />
            <div
              className="inline-block px-3 py-1 mt-2 rounded-md text-3xl sm:text-4xl lg:text-5xl font-black italic"
              style={{
                background: '#FFF3A3',
                color: '#E0007A',
                WebkitTextStroke: '1.5px #E0007A',
                fontFamily: '"Inter", sans-serif',
              }}
            >
              Sebelum Lulus??
            </div>
          </motion.div>

          {/* Sub-text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-base sm:text-lg text-slate-600 font-medium mb-8 max-w-md"
          >
            Belajar bikin website pakai <strong>WordPress</strong>, cari klien, dan hasilkan uang — semua dibimbing <strong>M-One Solution</strong> tanpa perlu bisa coding!
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            {/* Primary CTA */}
            <button
              onClick={() => scrollToSection('daftar')}
              className="group flex items-center gap-2 px-7 py-4 font-black text-white rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{ background: '#E0007A', boxShadow: '4px 4px 0 #F5C400' }}
            >
              Gimana Caranya??
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Secondary CTA */}
            <button
              onClick={() => scrollToSection('keuntungan')}
              className="flex items-center gap-2 px-7 py-4 font-bold text-slate-800 bg-white border-2 border-slate-300 rounded-full text-lg hover:border-pink-400 hover:text-pink-600 transition-all duration-300 hover:scale-105"
              style={{ boxShadow: '3px 3px 0 #E0E0E0' }}
            >
              Lihat Benefitnya &rarr;
            </button>
          </motion.div>

          {/* Scroll hint */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-10 text-xs font-semibold tracking-widest uppercase text-slate-400"
          >
            SWIPE &darr; / SCROLL KE BAWAH
          </motion.p>
        </div>
      </section>

      {/* ======================================================
          SECTION: What is Student Agency Incubator?
      ====================================================== */}
      <section className="py-20 px-6 bg-white" id="keuntungan">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold mb-4" style={{ background: '#FFE4F5', color: '#E0007A' }}>
              <Star className="w-4 h-4" />
              Program Eksklusif Mahasiswa
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 leading-tight mb-4">
              Apa itu <span style={{ color: '#E0007A' }}>Student Agency Incubator?</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Program di mana M-One Solution <strong>melatih kamu</strong> cara membuat website profesional menggunakan <strong>WordPress</strong> — tanpa coding. Kamu cari klien, kamu bangun websitenya, M-One Solution yang urus <strong>hosting-nya</strong>. Kamu cukup fokus jualan dan dapat <strong>komisi menarik</strong> dari setiap proyek!
            </p>
          </motion.div>
        </div>
      </section>

      {/* ======================================================
          SECTION: Benefits
      ====================================================== */}
      <section className="py-20 px-6" style={{ background: '#FAFAFA' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-3">
              Kenapa Join <span style={{ color: '#E0007A' }}>Student Agency Incubator?</span>
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">Ini semua yang kamu dapatkan saat bergabung bersama kami.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="bg-white rounded-2xl p-6 border-2 border-slate-100 hover:border-pink-300 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-4xl mb-4">{b.icon}</div>
                <h3 className="text-lg font-black text-slate-900 mb-2 group-hover:text-pink-600 transition-colors">{b.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          SECTION: How it Works
      ====================================================== */}
      <section className="py-20 px-6 bg-white" id="cara-kerja">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold mb-4" style={{ background: '#FFF3A3', color: '#8B6800' }}>
              <Zap className="w-4 h-4" />
              Simpel banget!
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-3">
              Cara Kerjanya <span style={{ color: '#E0007A' }}>5 Langkah</span>
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">Gampang banget. Udah banyak mahasiswa yang udah buktiin!</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex gap-5 items-start"
              >
                <div
                  className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center font-black text-xl text-white"
                  style={{ background: '#E0007A', boxShadow: '3px 3px 0 #F5C400' }}
                >
                  {s.num}
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900 mb-1">{s.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          SECTION: Pricing
      ====================================================== */}
      <section className="py-20 px-6" id="harga" style={{ background: '#FAFAFA' }}>
        <div className="max-w-5xl mx-auto">

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold mb-4" style={{ background: '#FFE4F5', color: '#E0007A' }}>
              🎯 Batch 1 — Pendaftaran Dibuka!
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-3">
              Investasi <span style={{ color: '#E0007A' }}>Paling Worth It</span><br />untuk Mahasiswa
            </h2>
            <p className="text-slate-500 max-w-lg mx-auto">
              Harga early bird hanya untuk <strong className="text-slate-700">5 pendaftar pertama</strong>. Kelas batch pertama dimulai:
            </p>
          </motion.div>

          {/* Countdown Timer */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="flex justify-center items-end gap-2 sm:gap-4 mb-12">
            {[
              { val: timeLeft.days, label: 'Hari' },
              { val: timeLeft.hours, label: 'Jam' },
              { val: timeLeft.minutes, label: 'Menit' },
              { val: timeLeft.seconds, label: 'Detik' },
            ].map((t, i) => (
              <div key={t.label} className="flex items-end gap-2 sm:gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center font-black text-2xl sm:text-3xl text-white" style={{ background: '#E0007A', boxShadow: '4px 4px 0 #F5C400' }}>
                    {String(t.val).padStart(2, '0')}
                  </div>
                  <span className="text-xs font-bold text-slate-400 mt-2 uppercase tracking-wider">{t.label}</span>
                </div>
                {i < 3 && <span className="text-3xl font-black text-slate-300 mb-7">:</span>}
              </div>
            ))}
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10">
            {/* Normal */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white rounded-3xl p-8 border-2 border-slate-200">
              <div className="mb-5">
                <h3 className="text-xl font-black text-slate-500 mb-1">Harga Normal</h3>
                <p className="text-sm text-slate-400">Berlaku setelah slot early bird habis</p>
              </div>
              <div className="mb-8">
                <span className="text-4xl font-black text-slate-300 line-through">Rp 249.000</span>
              </div>
              <ul className="space-y-3 mb-8">
                {['Pelatihan WordPress intensif', 'Materi & Tools Kit penjualan', 'Akses komunitas agent eksklusif', 'Sertifikat keikutsertaan', 'Support teknis dari M-One'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm text-slate-400">
                    <CheckCircle className="w-4 h-4 text-slate-200 flex-shrink-0" />{item}
                  </li>
                ))}
              </ul>
              <p className="text-center text-xs text-slate-400">Ambil early bird sebelum harga naik →</p>
            </motion.div>

            {/* Early Bird */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-3xl p-8 border-2 relative" style={{ background: 'linear-gradient(135deg,#fff0f8 0%,#fffbea 100%)', borderColor: '#E0007A', boxShadow: '6px 6px 0 #F5C400' }}>
              <div className="absolute -top-3 right-6 px-4 py-1 rounded-full text-xs font-black text-white" style={{ background: '#E0007A' }}>
                ⚡ 5 SLOT TERSEDIA
              </div>
              <div className="mb-5">
                <h3 className="text-xl font-black text-slate-900 mb-1">Early Bird 🎉</h3>
                <p className="text-sm font-semibold" style={{ color: '#E0007A' }}>Hanya untuk 5 pendaftar pertama!</p>
              </div>
              <div className="mb-1">
                <span className="text-5xl font-black text-slate-900">Rp 149.000</span>
              </div>
              <p className="text-sm font-bold mb-8" style={{ color: '#E0007A' }}>Hemat Rp 100.000! 🎊</p>
              <ul className="space-y-3 mb-8">
                {['Pelatihan WordPress intensif', 'Materi & Tools Kit penjualan', 'Akses komunitas agent eksklusif', 'Sertifikat keikutsertaan', 'Support teknis dari M-One'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />{item}
                  </li>
                ))}
              </ul>
              <a
                href={`https://wa.me/6285168850712?text=${encodeURIComponent('Halo kak! Saya mau ambil slot Early Bird Student Agency Incubator M-One Solution (Rp 149.000 — Batch 1, 20 April 2026). Bagaimana cara daftarnya?')}`}
                target="_blank" rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-black text-white text-base transition-all hover:scale-105"
                style={{ background: '#E0007A', boxShadow: '3px 3px 0 #F5C400' }}
              >
                <MessageCircle className="w-5 h-5" /> Ambil Slot Early Bird!
              </a>
            </motion.div>
          </div>

          {/* Quota Progress Bar */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto bg-white rounded-2xl p-6 border-2 border-slate-100 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <span className="text-sm font-black text-slate-700">📊 Kuota Kelas Batch 1 — 20 April 2026</span>
              <span className="text-sm font-bold" style={{ color: '#E0007A' }}>0 / 20 Peserta</span>
            </div>
            <div className="w-full h-4 bg-slate-100 rounded-full overflow-hidden relative">
              <div className="absolute left-0 top-0 h-full w-[25%] rounded-l-full opacity-40" style={{ background: '#F5C400' }} />
            </div>
            <div className="flex flex-wrap items-center justify-between mt-2 gap-2">
              <span className="text-xs font-semibold" style={{ color: '#E0007A' }}>⚡ Zona Early Bird (Rp 149rb) — 5 Slot</span>
              <span className="text-xs text-slate-400 font-medium">Maks 20 peserta per kelas</span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ======================================================
          SECTION: Social Proof (Stats) — angka sudah dikoreksi
      ====================================================== */}
      <section className="py-16 px-6" style={{ background: '#E0007A' }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {[
            { val: '20+', label: 'Proyek M-One Selesai' },
            { val: '5 Slot', label: 'Early Bird Tersedia' },
            { val: '2 Kota', label: 'Area Terlayani' },
            { val: '20 Org', label: 'Kuota Per Kelas' },
          ].map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <div className="text-4xl sm:text-5xl font-black mb-1" style={{ color: '#F5C400' }}>{s.val}</div>
              <div className="text-sm font-semibold opacity-90">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ======================================================
          SECTION: FAQ
      ====================================================== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-3">
              FAQ — <span style={{ color: '#E0007A' }}>Pertanyaan Umum</span>
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.details
                key={faq.q}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group border-2 border-slate-200 rounded-2xl p-5 cursor-pointer hover:border-pink-400 transition-all duration-300"
              >
                <summary className="list-none flex items-center justify-between font-black text-slate-900 text-base">
                  {faq.q}
                  <span className="text-pink-500 text-xl group-open:rotate-45 transition-transform duration-300">+</span>
                </summary>
                <p className="mt-3 text-sm text-slate-500 leading-relaxed">{faq.a}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          SECTION: CTA / Daftar
      ====================================================== */}
      <section className="py-24 px-6 relative overflow-hidden" id="daftar" style={{ background: '#FAFAFA' }}>
        {/* BG grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-50"
          style={{
            backgroundImage: `
              linear-gradient(rgba(180,180,180,0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(180,180,180,0.2) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
        {/* Accent shapes */}
        <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-full opacity-20" style={{ background: '#E0007A' }} />
        <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full opacity-10" style={{ background: '#F5C400' }} />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 leading-tight mb-4">
              Siap <span style={{ color: '#E0007A' }}>Buktiin</span> Kamu Bisa Freelance<br />Sebelum Lulus? 🚀
            </h2>
            <p className="text-lg text-slate-500 mb-10 max-w-xl mx-auto">
              Daftar sekarang, gratis! Langsung masuk grup eksklusif dan mulai perjalanan freelance-mu bersama M-One Solution.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={`https://wa.me/6285168850712?text=${encodeURIComponent("Halo kak, saya mahasiswa dan tertarik untuk bergabung dengan Student Agency Incubator M-One Solution. Bisa ceritain lebih lanjut?")}`}
                target="_blank"
                rel="noopener noreferrer"
                id="btn-daftar-wa"
                className="group flex items-center gap-3 px-8 py-4 font-black text-white text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{ background: '#E0007A', boxShadow: '5px 5px 0 #F5C400' }}
              >
                <MessageCircle className="w-6 h-6" />
                Daftar via WhatsApp
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                href="/contact"
                id="btn-tanya-dulu"
                className="flex items-center gap-2 px-8 py-4 font-bold text-slate-700 bg-white border-2 border-slate-300 rounded-full text-lg hover:border-pink-400 hover:text-pink-600 transition-all duration-300 hover:scale-105"
                style={{ boxShadow: '3px 3px 0 #E0E0E0' }}
              >
                Tanya Dulu
              </Link>
            </div>

            {/* Trust signals */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
              {['Biaya mulai Rp 149rb', 'Kelas mulai 20 April 2026', 'Bisa sambil kuliah', 'Hosting klien dikelola M-One'].map((t) => (
                <span key={t} className="flex items-center gap-1.5 font-semibold">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
