import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      quote: "M-One Solution memberikan pelayanan yang luar biasa. Website sekolah kami kini jauh lebih modern dan mudah digunakan oleh siswa maupun guru.",
      author: "Kepala Sekolah",
      role: "Institusi Pendidikan",
      image: "https://picsum.photos/seed/user1/100/100"
    },
    {
      quote: "Aplikasi organisasi yang dibuat sangat membantu efisiensi kerja tim kami. Fiturnya lengkap dan sesuai dengan kebutuhan nyata di lapangan.",
      author: "Direktur Operasional",
      role: "Organisasi Nirlaba",
      image: "https://picsum.photos/seed/user2/100/100"
    },
    {
      quote: "Tim yang profesional dan responsif. Mereka benar-benar memahami apa yang kami butuhkan dan memberikan solusi yang tepat sasaran.",
      author: "CEO",
      role: "Startup Tech",
      image: "https://picsum.photos/seed/user3/100/100"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-cyan-500/10 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-6">
            Testimoni Klien
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Apa Kata Mereka?
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Kepercayaan klien adalah prioritas kami. Berikut adalah pengalaman mereka bekerja sama dengan M-One Solution.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              <Quote className="w-10 h-10 text-blue-400 mb-6 opacity-50" />
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-white">{testimonial.author}</h4>
                  <p className="text-sm text-blue-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
