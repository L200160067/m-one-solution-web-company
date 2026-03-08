import { motion } from 'motion/react';
import partner1 from '../assets/partner/1_20250822_215806_0000.png';
import partner2 from '../assets/partner/2_20250822_215806_0001.png';
import partner3 from '../assets/partner/3_20250822_215806_0002.png';
import partner4 from '../assets/partner/4_20250822_215807_0003.png';
import partner5 from '../assets/partner/5_20250822_215807_0004.png';
import partner6 from '../assets/partner/6_20250822_215807_0005.png';
import partner7 from '../assets/partner/7_20250822_215807_0006.png';

export function Partners() {
  const partners = [
    { name: "Partner 1", logo: partner1 },
    { name: "Partner 2", logo: partner2 },
    { name: "Partner 3", logo: partner3 },
    { name: "Partner 4", logo: partner4 },
    { name: "Partner 5", logo: partner5 },
    { name: "Partner 6", logo: partner6 },
    { name: "Partner 7", logo: partner7 },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-950 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-semibold mb-6">
            Mitra Kami
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Institusi dan Organisasi yang Telah Bertumbuh Bersama Kami
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex justify-center"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                loading="lazy"
                className="max-h-12 object-contain brightness-0 invert opacity-70 hover:opacity-100 hover:brightness-100 hover:invert-0 transition-all duration-300"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
