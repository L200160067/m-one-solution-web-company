"use client";

import { motion } from 'motion/react';
import { ArrowRight, Mail } from 'lucide-react';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { Section } from './ui/Section';

export function CTA() {
  return (
    <Section className="bg-blue-600 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[50%] -right-[20%] w-[100%] h-[150%] rounded-full bg-blue-500/50 blur-[100px]" />
        <div className="absolute top-[20%] -left-[20%] w-[50%] h-[100%] rounded-full bg-cyan-400/30 blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[3rem] p-8 md:p-12 lg:p-16 shadow-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-semibold mb-8">
            Siap Memulai?
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Your Trusted <br /> Solution!
          </h2>

          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Solusi digital terpercaya untuk bisnis anda. Mari diskusikan ide Anda dan wujudkan bersama tim ahli kami.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-blue-600 text-base font-bold rounded-full hover:bg-blue-50 transition-all hover:scale-105 shadow-xl"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-700/50 text-white border border-white/20 text-base font-semibold rounded-full hover:bg-blue-700/80 transition-all"
            >
              <Mail className="w-5 h-5" />
              Email Kami
            </a>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
