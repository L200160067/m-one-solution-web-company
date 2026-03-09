"use client";

import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, User, Mail, Phone, MessageSquare, Briefcase, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/config/site';

const serviceOptions = [
    'Web Development',
    'Sistem Informasi Sekolah',
    'Company Profile Website',
    'Custom Web Application',
    'Lainnya',
];

interface FormData {
    name: string;
    email: string;
    phone: string;
    service: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
}

export function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validate = (): boolean => {
        const newErrors: FormErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Nama wajib diisi.';
        if (!formData.email.trim()) {
            newErrors.email = 'Email wajib diisi.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Format email tidak valid.';
        }
        if (!formData.phone.trim()) newErrors.phone = 'Nomor HP wajib diisi.';
        if (!formData.message.trim()) newErrors.message = 'Pesan wajib diisi.';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        const text = `Halo M-One Solution! 👋

Saya ingin berkonsultasi mengenai layanan Anda.

*Nama:* ${formData.name}
*Email:* ${formData.email}
*No. HP:* ${formData.phone}
*Layanan yang diminati:* ${formData.service || 'Belum ditentukan'}

*Pesan:*
${formData.message}

Terima kasih!`;

        const waUrl = `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(text)}`;
        window.open(waUrl, '_blank', 'noopener,noreferrer');
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center p-8 bg-green-50 border border-green-200 rounded-3xl h-full min-h-[400px]"
            >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">WhatsApp Terbuka!</h3>
                <p className="text-slate-600 mb-6 max-w-sm">
                    Pesan Anda sudah siap dikirim via WhatsApp. Silakan klik tombol kirim di aplikasi WhatsApp Anda.
                </p>
                <button
                    onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
                    }}
                    className="px-6 py-3 bg-slate-900 text-white font-semibold rounded-full hover:bg-blue-600 transition-colors"
                >
                    Kirim Pesan Baru
                </button>
            </motion.div>
        );
    }

    return (
        <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="space-y-5"
            noValidate
        >
            {/* Name */}
            <div>
                <label htmlFor="contact-name" className="block text-sm font-semibold text-slate-700 mb-2">
                    Nama Lengkap <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                    <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Masukkan nama lengkap Anda"
                        className={`w-full pl-12 pr-4 py-3.5 rounded-xl border bg-white text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${errors.name ? 'border-red-400 ring-1 ring-red-400' : 'border-slate-200'}`}
                    />
                </div>
                {errors.name && <p className="mt-1.5 text-sm text-red-500">{errors.name}</p>}
            </div>

            {/* Email & Phone */}
            <div className="grid sm:grid-cols-2 gap-5">
                <div>
                    <label htmlFor="contact-email" className="block text-sm font-semibold text-slate-700 mb-2">
                        Email <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                        <input
                            id="contact-email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="nama@email.com"
                            className={`w-full pl-12 pr-4 py-3.5 rounded-xl border bg-white text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${errors.email ? 'border-red-400 ring-1 ring-red-400' : 'border-slate-200'}`}
                        />
                    </div>
                    {errors.email && <p className="mt-1.5 text-sm text-red-500">{errors.email}</p>}
                </div>
                <div>
                    <label htmlFor="contact-phone" className="block text-sm font-semibold text-slate-700 mb-2">
                        Nomor HP / WA <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                        <input
                            id="contact-phone"
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="08xx-xxxx-xxxx"
                            className={`w-full pl-12 pr-4 py-3.5 rounded-xl border bg-white text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${errors.phone ? 'border-red-400 ring-1 ring-red-400' : 'border-slate-200'}`}
                        />
                    </div>
                    {errors.phone && <p className="mt-1.5 text-sm text-red-500">{errors.phone}</p>}
                </div>
            </div>

            {/* Service */}
            <div>
                <label htmlFor="contact-service" className="block text-sm font-semibold text-slate-700 mb-2">
                    Layanan yang Diminati
                </label>
                <div className="relative">
                    <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                    <select
                        id="contact-service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all appearance-none cursor-pointer"
                    >
                        <option value="">-- Pilih layanan --</option>
                        {serviceOptions.map(opt => (
                            <option key={opt} value={opt}>{opt}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Message */}
            <div>
                <label htmlFor="contact-message" className="block text-sm font-semibold text-slate-700 mb-2">
                    Pesan / Kebutuhan <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-slate-400 pointer-events-none" />
                    <textarea
                        id="contact-message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Ceritakan kebutuhan atau ide proyek Anda..."
                        className={`w-full pl-12 pr-4 py-3.5 rounded-xl border bg-white text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none ${errors.message ? 'border-red-400 ring-1 ring-red-400' : 'border-slate-200'}`}
                    />
                </div>
                {errors.message && <p className="mt-1.5 text-sm text-red-500">{errors.message}</p>}
            </div>

            <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/25 text-base"
            >
                <Send className="w-5 h-5" />
                Kirim via WhatsApp
            </motion.button>
            <p className="text-center text-xs text-slate-400">
                Dengan mengklik kirim, Anda akan diarahkan ke WhatsApp untuk mengirim pesan.
            </p>
        </motion.form>
    );
}
