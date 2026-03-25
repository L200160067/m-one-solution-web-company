"use client";

import { motion } from 'motion/react';
import { ArrowRight, GraduationCap, Store } from 'lucide-react';
import Link from 'next/link';
import { Container } from './ui/Container';
import { Section } from './ui/Section';

export function FastPackages() {
  return (
    <Section id="paket-cepat" className="bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 text-sm font-semibold mb-4">
            🚀 M-One Lite
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Pusing Mikir Website? <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">
              Pilih Paket "Terima Beres"
            </span>
          </h2>
          <p className="text-lg text-slate-600">
            Solusi website instan, harga transparan, dan pengerjaan kilat khusus untuk lini pendidikan dan UMKM. Tanpa biaya tersembunyi.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Paket UMKM Card */}
          <motion.div
            whileHover={{ y: -8 }}
            className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl border border-slate-100 hover:border-blue-200 transition-all flex flex-col"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform" />

            <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
              <Store className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-3">Paket Web UMKM</h3>
            <p className="text-slate-600 mb-6 flex-1">
              Mulai dari Website Profil, Ecommerce dengan Payment Gateway, hingga Sistem Kasir (POS) dan Gudang tanpa biaya langganan bulanan.
            </p>

            <div className="flex items-center justify-between mt-auto">
              <span className="text-sm font-semibold text-slate-500">Mulai dari Rp 1 JT</span>
              <Link href="/layanan/jasa-erp-umkm" className="inline-flex items-center gap-2 text-blue-600 font-bold group-hover:gap-3 transition-all">
                Lihat Paket <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Paket Sekolah Card */}
          <motion.div
            whileHover={{ y: -8 }}
            className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl border border-slate-100 hover:border-emerald-200 transition-all flex flex-col"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform" />

            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
              <GraduationCap className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-3">Paket Web Sekolah</h3>
            <p className="text-slate-600 mb-6 flex-1">
              Digitalisasi sarana pendidikan mulai dari Profil Resmi (.sch.id), Portal Berita, hingga Sistem PPDB Online & CBT E-Learning lengkap.
            </p>

            <div className="flex items-center justify-between mt-auto">
              <span className="text-sm font-semibold text-slate-500">Mulai dari Rp 1.5 JT</span>
              <Link href="/layanan/jasa-pembuatan-website-sekolah" className="inline-flex items-center gap-2 text-emerald-600 font-bold group-hover:gap-3 transition-all">
                Lihat Paket <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
