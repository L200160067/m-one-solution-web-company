import { ArrowRight, Code2, Smartphone, Globe } from 'lucide-react';
import Link from 'next/link';
import { Container } from './ui/Container';
import { WpImage } from '@/components/image/WpImage';

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-900">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-blue-600/20 blur-[120px]" />
                <div className="absolute top-[40%] -left-[10%] w-[50%] h-[50%] rounded-full bg-cyan-500/20 blur-[120px]" />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 to-transparent" />
            </div>

            <Container className="relative py-16 lg:py-24 z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    <div className="max-w-2xl animate-fade-in-up">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                            Software House
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1]">
                            Jasa Pembuatan Website <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                                &amp; Aplikasi Siap Pakai
                            </span>
                        </h1>

                        <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-lg">
                            Software house di Sukoharjo &amp; Solo. Konsultasi gratis, pengerjaan profesional, dan support langsung dari tim lokal untuk website, aplikasi, dan sistem ERP Anda.
                        </p>

                        <div className="flex flex-wrap items-center gap-4">
                            <Link href="/contact">
                                <span className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white text-base font-semibold rounded-full hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/25 group">
                                    Konsultasi Gratis
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </Link>
                            <Link href="/services">
                                <span className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 text-white text-base font-semibold rounded-full hover:bg-white/10 transition-colors border border-white/10 backdrop-blur-sm">
                                    Lihat Layanan
                                </span>
                            </Link>
                        </div>
                    </div>

                    {/* Decorative Right Side */}
                    <div className="relative hidden lg:block animate-scale-in">
                        <h2 className="sr-only">Layanan Unggulan</h2>
                        <div className="relative w-full aspect-square max-w-lg mx-auto">
                            {/* Talent Image */}
                            <div className="absolute inset-8 rounded-3xl overflow-hidden border border-white/10 shadow-2xl z-0 animate-float-slow">
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent z-10 pointer-events-none" />
                                <WpImage
                                    src="/images/branding/hero.webp"
                                    alt="Tim developer M-One Solution — Software House Sukoharjo, Jawa Tengah"
                                    fill
                                    priority
                                    sizes="(max-width: 1024px) 0vw, 50vw"
                                    className="object-cover"
                                />
                            </div>

                            {/* Floating Cards */}
                            <div className="absolute -top-10 -right-10 p-5 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl w-56 z-20 animate-float-medium">
                                <Code2 className="w-8 h-8 text-blue-400 mb-3" />
                                <h3 className="text-white font-semibold mb-2">Web Development</h3>
                                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                                    <div className="w-3/4 h-full bg-blue-500" />
                                </div>
                            </div>

                            <div className="absolute bottom-16 -left-12 p-5 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl w-56 z-20 animate-float-reverse-medium">
                                <Smartphone className="w-8 h-8 text-cyan-400 mb-3" />
                                <h3 className="text-white font-semibold mb-2">Mobile Apps</h3>
                                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                                    <div className="w-5/6 h-full bg-cyan-500" />
                                </div>
                            </div>

                            <div className="absolute -bottom-12 right-0 p-5 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl w-48 z-20 animate-float-fast">
                                <Globe className="w-8 h-8 text-indigo-400 mb-3" />
                                <h3 className="text-white font-semibold mb-2">Solusi Digital</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
