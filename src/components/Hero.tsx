"use client";

import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Code2, Smartphone, Globe } from 'lucide-react';
import { useRef } from 'react';
import Link from 'next/link';
import { siteConfig } from '../config/site';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} style={{ position: 'relative' }} className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-900">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div style={{ y: y1 }} className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-blue-600/20 blur-[120px]" />
        <motion.div style={{ y: y2 }} className="absolute top-[40%] -left-[10%] w-[50%] h-[50%] rounded-full bg-cyan-500/20 blur-[120px]" />
        <motion.div style={{ opacity }} className="absolute inset-0 bg-gradient-to-br from-blue-900/5 to-transparent" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              Software House
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 leading-[1.1]">
              Jasa Pembuatan Website <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                &amp; Aplikasi di Sukoharjo
              </span>
            </h1>

            <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-lg">
              Software house terpercaya di Sukoharjo &amp; Solo. Kami membantu bisnis dan organisasi tumbuh lewat website, aplikasi, dan sistem digital yang praktis.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link href="/services">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white text-base font-semibold rounded-full hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/25 group"
                >
                  Lihat Layanan
                  <motion.div
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </motion.div>
              </Link>
              <Link href="/contact">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 text-white text-base font-semibold rounded-full hover:bg-white/10 transition-colors border border-white/10 backdrop-blur-sm"
                >
                  Contact Us
                </motion.div>
              </Link>
            </div>
          </motion.div>

          {/* Decorative Right Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Talent Image */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute inset-8 rounded-3xl overflow-hidden border border-white/10 shadow-2xl z-0"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent z-10 pointer-events-none" />
                <img
                  src={`${siteConfig.cdnUrl}/images/branding/hero.webp`}
                  alt="Tim developer M-One Solution — Software House Sukoharjo, Jawa Tengah"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 p-5 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl w-56 z-20"
              >
                <Code2 className="w-8 h-8 text-blue-400 mb-3" />
                <h3 className="text-white font-semibold mb-2">Web Development</h3>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="w-3/4 h-full bg-blue-500" />
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-16 -left-12 p-5 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl w-56 z-20"
              >
                <Smartphone className="w-8 h-8 text-cyan-400 mb-3" />
                <h3 className="text-white font-semibold mb-2">Mobile Apps</h3>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="w-5/6 h-full bg-cyan-500" />
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute -bottom-12 right-0 p-5 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl w-48 z-20"
              >
                <Globe className="w-8 h-8 text-indigo-400 mb-3" />
                <h3 className="text-white font-semibold mb-2">Digital Solutions</h3>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
