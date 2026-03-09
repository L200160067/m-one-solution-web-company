"use client";

import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';
import { testimonialsData } from '@/data/testimonials';

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-cyan-500/10 blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-6">
            Testimoni Klien
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Apa Kata Mereka?
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Kepercayaan klien adalah prioritas kami. Berikut adalah pengalaman mereka bekerja sama dengan M-One Solution.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-sm hover:bg-white/10 transition-colors flex flex-col"
            >
              {/* Rating Stars */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-600'}`}
                  />
                ))}
              </div>

              <Quote className="w-8 h-8 text-blue-400 mb-4 opacity-50" />
              <p className="text-base text-slate-300 mb-6 leading-relaxed flex-grow">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={(testimonial.image as any)?.src || testimonial.image}
                  alt={testimonial.name}
                  loading="lazy"
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-white/10"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-blue-400">{testimonial.role}</p>
                  <p className="text-xs text-slate-500">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
