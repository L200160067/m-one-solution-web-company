"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { useEffect, useRef } from 'react';

function AnimatedCounter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration: 1.8, ease: 'easeOut' });
      return controls.stop;
    }
  }, [inView, count, to]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>{suffix}
    </span>
  );
}

export function About() {
  const features = [
    "Practical & Intuitive Systems",
    "Real Business Solutions",
    "Deep Problem Understanding",
    "Supporting Your Growth"
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden relative">
              <img
                src={`${siteConfig.cdnUrl}/images/branding/about.webp`}
                alt="M-One Solution Team"
                loading="lazy"
                className="object-cover w-full h-full"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply" />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-xs hidden md:block">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">
                  M
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Software House</h4>
                  <p className="text-sm text-slate-500">Trusted Partner</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-6">
              About Us
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Transforming Ideas into<br />
              <span className="text-blue-600">Digital Products</span>
            </h2>

            <p className="text-base text-slate-600 mb-6 leading-relaxed">
              M-One Solution membantu bisnis dan organisasi mengubah ide menjadi website, aplikasi, dan sistem digital yang praktis, intuitif, dan scalable.
            </p>

            <p className="text-base text-slate-600 mb-8 leading-relaxed">
              Kami percaya bahwa solusi digital terbaik lahir dari pemahaman masalah yang nyata dan pendekatan teknologi yang tepat.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="font-medium text-slate-700">{feature}</span>
                </div>
              ))}
            </div>

            <p className="text-base text-slate-600 mb-6 font-medium italic">
              Helping businesses build reliable digital solutions.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8 py-6 border-t border-b border-slate-100">
              {[
                { value: 50, suffix: '+', label: 'Proyek Selesai' },
                { value: 30, suffix: '+', label: 'Klien Puas' },
                { value: 3, suffix: '+', label: 'Tahun Pengalaman' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">
                    <AnimatedCounter to={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-xs text-slate-500 font-medium leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white text-base font-semibold rounded-full hover:bg-blue-600 transition-colors shadow-lg shadow-slate-900/20"
            >
              Learn more
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
