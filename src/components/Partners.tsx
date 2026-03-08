import { motion } from 'motion/react';

export function Partners() {
  const partners = [
    { name: "Partner 1", logo: "https://picsum.photos/seed/partner1/200/100" },
    { name: "Partner 2", logo: "https://picsum.photos/seed/partner2/200/100" },
    { name: "Partner 3", logo: "https://picsum.photos/seed/partner3/200/100" },
    { name: "Partner 4", logo: "https://picsum.photos/seed/partner4/200/100" },
    { name: "Partner 5", logo: "https://picsum.photos/seed/partner5/200/100" },
    { name: "Partner 6", logo: "https://picsum.photos/seed/partner6/200/100" },
  ];

  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-6">
            Mitra Kami
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
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
                className="max-h-12 object-contain"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
