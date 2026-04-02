import { ContactForm } from '@/components/ContactForm';
import { CTA } from '@/components/CTA';
import { MapPin, Mail, Clock, Phone } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const metadata = {
    title: 'Contact Us | M-One Solution Software House',
    description: 'Hubungi M-One Solution untuk mendiskusikan ide Anda dan wujudkan bersama tim ahli kami. Solusi digital terpercaya untuk bisnis anda.',
    openGraph: {
        title: 'Contact Us | M-One Solution',
        description: 'Hubungi M-One Solution untuk mendiskusikan ide Anda dan wujudkan bersama tim ahli kami.',
        url: 'https://mone.mutudev.com/contact',
        type: 'website',
    },
    twitter: {
        card: 'summary',
        title: 'Contact Us | M-One Solution',
        description: 'Hubungi kami untuk mendiskusikan kebutuhan digital bisnis Anda.',
    },
};


const contactInfo = [
    {
        icon: MapPin,
        label: 'Lokasi',
        value: siteConfig.contact.address,
    },
    {
        icon: Mail,
        label: 'Email',
        value: siteConfig.contact.email,
        href: `mailto:${siteConfig.contact.email}`,
    },
    {
        icon: Phone,
        label: 'WhatsApp',
        value: `+${siteConfig.whatsapp.number.slice(0, 2)} ${siteConfig.whatsapp.number.slice(2, 5)}-${siteConfig.whatsapp.number.slice(5, 9)}-${siteConfig.whatsapp.number.slice(9)}`,
        href: `https://wa.me/${siteConfig.whatsapp.number}`,
    },
    {
        icon: Clock,
        label: 'Jam Kerja',
        value: 'Senin – Jumat, 08.00 – 17.00 WIB',
    },
];

export default function ContactPage() {
    return (
        <main className="pt-20 min-h-screen bg-slate-50">

            {/* Hero */}
            <section className="py-16 md:py-20 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-blue-600/20 blur-[120px]" />
                    <div className="absolute bottom-0 -left-[10%] w-[40%] h-[60%] rounded-full bg-cyan-500/15 blur-[120px]" />
                </div>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-6">
                        Kontak Kami
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                        Konsultasi Gratis dengan <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                            Software House Sukoharjo
                        </span>
                    </h1>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                        Ceritakan kebutuhan Anda dan tim kami siap membantu menemukan solusi digital terbaik untuk bisnis Anda.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-5 gap-12 items-start">

                        {/* Left — Contact Info */}
                        <div className="lg:col-span-2 space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-3">Informasi Kontak</h2>
                                <p className="text-slate-600 leading-relaxed">
                                    Jangan ragu untuk menghubungi kami. Kami akan merespons dalam waktu 1×24 jam di hari kerja.
                                </p>
                            </div>

                            <div className="space-y-5">
                                {contactInfo.map((item, i) => (
                                    <div key={i} className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                                            <item.icon className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-0.5">{item.label}</p>
                                            {item.href ? (
                                                <a
                                                    href={item.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-slate-800 font-medium hover:text-blue-600 transition-colors"
                                                >
                                                    {item.value}
                                                </a>
                                            ) : (
                                                <p className="text-slate-800 font-medium">{item.value}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Quick Response Badge */}
                            <div className="bg-green-50 border border-green-200 rounded-2xl p-5 flex items-start gap-4">
                                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <span className="text-lg">⚡</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-1">Respons Cepat</h4>
                                    <p className="text-sm text-slate-600">
                                        Rata-rata kami membalas dalam <strong className="text-green-700">2–3 jam</strong> di jam kerja via WhatsApp.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right — Form */}
                        <div className="lg:col-span-3 bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-100">
                            <h2 className="text-2xl font-bold text-slate-900 mb-2">Kirim Pesan</h2>
                            <p className="text-slate-500 mb-8">Isi form di bawah dan kami akan menghubungi Anda segera.</p>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>

            <CTA />
        </main>
    );
}
